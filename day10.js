import _ from 'lodash'
import './helper.js'

const rawDataTest = `
addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
`
const rawDataTest2 = `
addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop
`

const rawData = `
noop
noop
noop
addx 5
noop
addx 1
noop
addx 4
addx 25
addx -20
noop
noop
addx 5
addx 3
noop
addx 2
noop
noop
addx -1
addx 6
addx 1
noop
addx 4
noop
addx -37
noop
noop
noop
addx 3
addx 32
addx -25
addx 2
addx 3
noop
addx 2
addx 3
noop
addx 2
addx 2
addx -24
addx 25
addx 5
addx 2
addx 8
addx -23
addx 18
addx 5
addx -39
addx 11
addx -9
addx 6
addx -2
addx 5
addx 4
addx -4
addx 3
addx 5
addx 2
noop
addx -1
addx 6
addx -21
addx 22
addx 3
addx 1
addx 5
noop
noop
addx -35
noop
noop
noop
noop
addx 37
addx -33
noop
addx 6
addx 2
addx -1
addx 3
addx 1
addx 5
addx 2
addx -19
addx 21
addx 1
addx 5
addx -31
addx 36
noop
addx 3
addx -2
addx -38
noop
noop
addx 7
addx 14
addx -4
addx -7
addx 5
addx 2
addx 12
addx -15
addx 6
addx 2
addx 5
addx -27
addx 25
addx 5
noop
addx 7
addx -2
addx 5
addx -40
noop
addx 7
noop
addx -1
addx 2
addx 5
addx -1
addx 1
addx 2
addx 7
noop
addx -2
noop
addx 3
addx 2
addx 7
noop
noop
addx 1
noop
noop
addx 3
addx 1
noop
noop
noop
`

let loops = []
let loops2 = []
let signalStrength = 0

const parsedData = rawData.split('\n').filter(data => !!data)

parsedData.forEach(line => {
    const cmd = line.split(' ')

    loops.push(0)

    if(cmd.length === 2) {
        loops.push(parseInt(cmd[1]))
        loops2.push(parseInt(cmd[1]))
    }
})

let loopsDivided = []

for (let i = 0; i <= 5; i++) loopsDivided.push(_.slice(loops, 0, (40 * i) + 20))

loopsDivided.forEach((loop) => {
    let total = 1

    loop.forEach((step, index) => total += index === loop.length - 1 ? 0 : step)

    signalStrength += loop.length * total
})


let sprite = "###.....................................".split("");
let current = "";
let cycle = 0;
let X = 0;
parsedData.forEach((line) => {
    const cmd = line.split(" ");
    cycle++;

    if (cmd.length === 1) {
        current += sprite[(cycle - 1) % 40] === "#" ? "#" : ".";
    } else if (cmd.length === 2) {
        current += sprite[(cycle - 1) % 40] === "#" ? "#" : ".";

        cycle++;

        current += sprite[(cycle - 1) % 40] === "#" ? "#" : "."

        sprite[X] = ".";
        sprite[X + 1] = ".";
        sprite[X + 2] = ".";
        X += parseInt(cmd[1]);
        sprite[X] = "#";
        sprite[X + 1] = "#";
        sprite[X + 2] = "#";
    }
});

console.log(_.chunk(current, 40).map(array => array.join('')))