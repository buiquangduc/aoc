import _ from 'lodash'
import './helper.js'

const rawDataTest = `
Monkey 0:
  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3

Monkey 1:
  Starting items: 54, 65, 75, 74
  Operation: new = old + 6
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 0

Monkey 2:
  Starting items: 79, 60, 97
  Operation: new = old * old
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 3

Monkey 3:
  Starting items: 74
  Operation: new = old + 3
  Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 1
`

const monkeys = [
    { items: [66, 79], operation: 'old multiply 11', test: 7, correct: 6, wrong: 7, inspect: 0 },
    { items: [84, 94, 94, 81, 98, 75], operation: 'old multiply 17', test: 13, correct: 5, wrong: 2, inspect: 0 },
    { items: [85, 79, 59, 64, 79, 95, 67], operation: 'old plus 8', test: 5, correct: 4, wrong: 5, inspect: 0 },
    { items: [70], operation: 'old plus 3', test: 19, correct: 6, wrong: 0, inspect: 0 },
    { items: [57, 69, 78, 78], operation: 'old plus 4', test: 2, correct: 0, wrong: 3, inspect: 0 },
    { items: [65, 92, 60, 74, 72], operation: 'old plus 7', test: 11, correct: 3, wrong: 4, inspect: 0 },
    { items: [77, 91, 91], operation: 'old multiply old', test: 17, correct: 1, wrong: 7, inspect: 0 },
    { items: [76, 58, 57, 55, 67, 77, 54, 99], operation: 'old plus 6', test: 3, correct: 2, wrong: 1, inspect: 0 }
]
// const monkeys = [
//     { items: [79, 98], operation: 'old multiply 19', test: 23, correct: 2, wrong: 3, inspect: 0 },
//     { items: [54, 65, 75, 74], operation: 'old plus 6', test: 19, correct: 2, wrong: 0, inspect: 0 },
//     { items: [79, 60, 97], operation: 'old multiply old', test: 13, correct: 1, wrong: 3, inspect: 0 },
//     { items: [74], operation: 'old plus 3', test: 17, correct: 0, wrong: 1, inspect: 0 },
// ]
// const parsedData = rawDataTest.split('\n')
//     .filter(data => !!data)
//     .forEach(line => {
//         console.log(line)
//     })

for(let i = 1; i <= 20; i++) {
    monkeys.forEach((monkey, index) => {
        let cloneItems = _.cloneDeep(monkey.items)

        cloneItems.forEach((worryLevel, currentIndex) => {
            monkeys[index].inspect++
            let newWorryLevel = worryLevel
            const operationDivided = monkey.operation.split(' ')
            let num1 = operationDivided[0] === 'old' ? worryLevel : parseInt(operationDivided[0])
            let num2 = operationDivided[2] === 'old' ? worryLevel : parseInt(operationDivided[2])

            if(operationDivided[1] === 'multiply') {
                newWorryLevel = num1 * num2
            }
            if(operationDivided[1] === 'divide') {
                newWorryLevel = num1 / num2
            }
            if(operationDivided[1] === 'plus') {
                newWorryLevel = num1 + num2
            }
            if(operationDivided[1] === 'minus') {
                newWorryLevel = num1 - num2
            }
            // console.log(newWorryLevel)
            // console.log(num1, num2)
            // console.log(Math.floor(newWorryLevel / 3), newWorryLevel)
            newWorryLevel = Math.floor(newWorryLevel / 3)
            // console.log(newWorryLevel)

            if(newWorryLevel % monkey.test === 0) {
                monkeys[monkey.correct].items.push(newWorryLevel)
            } else {
                // console.log(monkeys[monkey.wrong].items)
                monkeys[monkey.wrong].items.push(newWorryLevel)
            }

            monkey.items.shift()
            // console.log(monkeys)
            // console.log(monkeys.map(({ items }) => items.length))
        })
    })
}

const monkeysInspect = _.sortBy(monkeys.map(({ inspect }) => inspect))
console.log(monkeysInspect)
console.log(monkeysInspect[monkeysInspect.length - 1] * monkeysInspect[monkeysInspect.length - 2])
// parsedData.forEach(data => {
//     console.log(data)
// })