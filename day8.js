import _ from 'lodash'
import './helper.js'

const rawDataTest = `
30373
25512
65332
33549
35390
`

const rawData = `
110120112111001131321041300301301303441234124551121322251330313143000402010402222102132100122022010
102022211221313002214040003422200133214443443344513144525425414312301403121303234303302002320112112
210010213122220022044234043143210343153522554535142243154212251531131301322100210101210220021120002
102121023302220201244401343001244152321314335555225552452235435142424222400201243131033233132300012
000111230312012203122030310412244414125415343124153241254535545413214132223113434142202210123003200
200000202333110340220332420035514312151535342225553245343445434132251555330340100104010231010021300
000002323103342131024320314552214234313253142322213135224452154545325222413001110021303002023031310
020211223330002104422314333323242544314345425524624623312225345451215151441224141424031432102112031
103101102120222144402422344225313233124123456625344345362256253215321432522113143331421132120100111
323123312033323011234312234321331412162655266455234525226643636415153422232353340222233324022023103
302102010103231104044441132544233256465665444435532644546542532466625521313425433000033213032131221
020231124210041333545544341311315526432636224253566324632563435552544111344542232330144044224301321
032311340013040441113353131525356533563224525654653323322635463264233535325132533233343233210321103
110211433302212424335511135336624424425234223326565324542445225233624335452112312135211022041303102
111124343140443224431414436336232562665366645354757336364335622463645336643233511434422112010440232
332111113133304452344152264433434644363334554466666633745462642244256564423355241435445123011101202
212041001314124413323342565246562463265754365376533546656375633352465432352631452521422213210110201
231121044331352412232536333252462352747767367443744343645453437733563646524245534445131312434002221
000011114001522121113465525536522235554447657367534677676467534747352424562636651345445123430444422
033334304024332115123455346233566735767767634767465675363455356554575253256464566344352522033141213
232104033314555435242323344642736544645744654476634353477453745657435672625363234545224112403412131
120214322444251411323625366624675353737563557667374544654646775557435446266363566543313111134124033
420431213235113553443522444573577475576437535755887445777573336654356356342453352533355152125341111
441402443522412252223466345675637773673668856678844544444688663376433636472525446235425532411124020
343034354334135156226245336334436363666545868546856758485678688376545667437424262443423353255414420
123124244144511622465262677356633563444567465567644675487646746665647374747452464344641311512532034
433322532145344235242232563656736576488757586878768645575684668477666766537765632543623523513244332
213110151511356235662327355654455654756568875784778455748488676577566333643645635645655451233332214
003345121531552525654355643375777484887864577548475768857464454867457645347356344645633613543412342
144341423313143463233367776463357775888488554696569776898585585445688455633757454245462455145341222
041335352522646255534575456737456888468655876986569988796754685557655846665544557443552421212535234
132451144543362254545554747665754867474669676786977789998678648488644686337433454364255562144312543
234341414316555353366364656378566558879857989657865665569588659488668574575355746442645622422335334
202414253245424644657654564645857765769556657559776969785867965977744445643663463346623662153445430
404435555145642224557443744775746474875958778557798996887569855678458478784765444355645566231512243
111323452142323233364553556545676465685579577696796877857897758575764558888567476375665222644232123
132241411324435253767444655844476465969587669659669969579568655758855786654844777554345252424451111
011355225336326323565666788448765965956896899698789688689679976655557656685676775343636563551341141
324532513343435576434747566467848797788697778778679768986795989857697547586843744574626356422234523
025253552226644277767467644787578659866696976778997677776777796886865885556664664654342632254142144
412111515464343633554467448477487586685699699866966899667979997559785668464554673674342564523335422
325453123456622467456458577565698868997697898896976789986977766766996546564657335556433346253331551
443144222363225477334738848544585556878688866676867798987777769768679996847488767645453222534434414
045152336266426545434376486866786657589979796887779978786669988699776996875845343547672366323234321
314555456265532573343588556657569867679887986979977779997699787866866687675564676436355636434121152
445345442323243573565467688575898889898676668797778799999986796956956577654878674646555453445143133
323522352553645444343475776677555956978889989987978898997669686789676876578865765536762334443434322
124132344466356576453455544479799986797766679878789999979888697989898879786644655476365333553523421
253352232256243753547464768475589785877777969777777989888779798967769766757444463354743242544232545
212355263526236746355777456546888577776796787999987799887997698979955697764877437435645664234345352
541515242423446765665746486857587658886767979797789888897899876897876987477466435537677656454345122
415253463245534755777485854455889698866876777788988888797979866798885567865478777435454263554612531
145324246665623675634667558875896896788779867877778879798889768678999958466466654474656545643434433
152113365324654757767348847478589979769988679779987878879978688679687997774474635453462534455552311
133543342236535533536758767656656575686666788989978797898786688698675689574477765353746666265432341
123524555235435675543457757787767576777898878898999889879688698858787999486574545347562524646441142
325215122324433564655647458587867579998888767999987978886978696788976857558776854354443543254422254
324125454624625565366477667688778698869669789699687866676667977668956697764775653443436655524155221
055552342656325443675677764655968968796988969679886869878798776955899875486644545473653365563533524
351345212454234244763476658647679675666877666798967989999666978659956577857544765336663454366144533
245415116445222245533766565654659768899566797697787887768888988768655688664487374444636232254524244
055243211362633454734457558647686767969756699869899698878789679785856788575566654653336362442231324
011541534264245234636753846747658898666968977778797689779785599598868657845644376633545422443212514
103423241666546224656756547774858788695878796879779997979789699596968547475663637365632646324422131
001521422324233626363533454454667655765595559887977976957659779656655867558753573467236256411415113
215445145523245263777567547774778575769785869669768668598568667589668684865634676776446426432414212
120245213142363544463455456665875887796578765775985685578858898876647744886346554333565554534241223
120223334554222453364443577666674455587696666588885777877558688884586877554755357424253522251422331
412434441222632645377337643754575548447786897669798676676978996875886778874634674726243426342554152
243122434324223244456643446666865477645688796859779866889895846786855676676767773523535241525445100
013013153155543644364657767776687475447654775865868675797788646747654873647674474226625352211145523
020004113313143535323773555653477485866777665956859976974657685868877443673755736243234223233444224
334235225413326355433333455474455586886886688744586564845648554845657533345674533623336243511341122
302411321345244645653257565574357754764475844457844647868854854887656347466544452623355544154243401
134224435445112366524424744773464778578764788774688668458474578674773453473752322455552322424551344
320242444213235642665366275737554356574674754854777466568846454845336536637536232463221415332542211
120333331225354424254244424447355473556464586554755848457865745337574465736352264345213325453404314
131244311135124114464525454757357547746648566476844577887647736335774757753264424234324525522040010
222112401334143525542626632333656567434474637774546584457673644637336377754446633244133521224033240
100130131545341312443226323436755647755373353676347773775744675747753365456434233261235252230231324
041200231254423444455423346225647736374377363763355463646355467446635542462653323615533211201413244
013032132122244324456446552352644533476445745643375653563653666535335644335656236311514244043030122
234224243205554424441336366242253534663367475334557477345773356755522552325462662144535513203231013
121143310442341353211522643525352333564747357554647535667757563555665553524665525533114314444030122
203111120043424354241535424443446543463556465457566437435536475432363266224642255434411120314142421
020011200422212351432221442525254425435523457354776365646346523466434642665415521434321424123110101
003012312214231531314442515232564545642254332433456466634625432532453544524542514532240301400232230
321310000441000025442315211543656254525343246633442633433532525336435245214115222515214020422110212
311002134032004114423233124421234345454652636563532422664532453655625563535545333423414104014432210
310123002002424212534555541242412426446253665664442532364624236533254132221313121131332303110012333
312233030434203004331145432323135425225626243526224624235624556345311121324211111421204401311113023
131032322241033021023241131255512225164542552663455664246554525324144344121311420304320401312303130
112011211021303414331123332211234144312233346245635653336544644421155521315325403444302041213300201
100201110301442032114010443223425434522351241535643562411534342454231441453323011013031130032123023
112131232312112140144242234513131142534253234114125313125313255515313333252022043002314212222122330
011113131212122444114002223055334423355534243143431114514423114231245444321300320012331211022033212
002212000000110302100021230014455443312425144435152143143442414153352133343121411041331012202310102
210201101233022220342334431121141315524541455453142142455421413551235442221014014113231131231321000
220111011200000221024334041434043215212524255254251231145211234333012044102233302403303110130010001
`

const parsedData = rawData.split('\n')
    .filter(data => !!data)
    .map(data => data.split('').map(data => parseInt(data)))

const checkLeft = (rowIndex, colIndex) => {
    let visibleTrees = 0
    let valid = true
    let continueCount = true

    for(let i = 0; i < colIndex; i++) {
        if(parsedData[rowIndex][i] >= parsedData[rowIndex][colIndex]) {
            valid = false
        }
    }

    for(let i = colIndex - 1; i >= 0; i--) {
        if(continueCount) visibleTrees++

        if(parsedData[rowIndex][i] >= parsedData[rowIndex][colIndex]) {
            continueCount = false
        }
    }

    return { valid, visibleTrees }
}
const checkRight = (rowIndex, colIndex) => {
    let valid = true
    let visibleTrees = 0
    let continueCount = true

    for(let i = colIndex + 1; i < parsedData[rowIndex].length; i++) {
        if(continueCount) visibleTrees++

        if(parsedData[rowIndex][i] >= parsedData[rowIndex][colIndex]) {
            continueCount = false
            valid = false
        }
    }

    return { valid, visibleTrees }
}
const checkTop = (rowIndex, colIndex) => {
    let valid = true
    let visibleTrees = 0
    let continueCount = true

    for(let i = 0; i < rowIndex; i++) {
        if(parsedData[i][colIndex] >= parsedData[rowIndex][colIndex]) {
            valid = false
        }
    }

    for(let i = rowIndex -1; i > 0; i--) {
        if(continueCount) visibleTrees++

        if(parsedData[i][colIndex] >= parsedData[rowIndex][colIndex]) {
            continueCount = false
        }
    }

    return {valid, visibleTrees}
}
const checkBottom = (rowIndex, colIndex) => {
    let valid = true
    let visibleTrees = 0
    let continueCount = true

    for(let i = rowIndex + 1; i < parsedData.length; i++) {
        if(continueCount) visibleTrees++

        if(parsedData[i][colIndex] >= parsedData[rowIndex][colIndex]) {
            continueCount = false
            valid = false
        }
    }

    return { valid, visibleTrees }
}

let visible = []
let treeScore = []
parsedData.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
        const { valid: checkLeftValid, visibleTrees: visibleTreesFromLeft } = checkLeft(rowIndex, colIndex)
        const { valid: checkRightValid, visibleTrees: visibleTreesFromRight } = checkRight(rowIndex, colIndex)
        const { valid: checkTopValid, visibleTrees: visibleTreesFromTop } = checkTop(rowIndex, colIndex)
        const { valid: checkBottomValid, visibleTrees: visibleTreesFromBottom } = checkBottom(rowIndex, colIndex)
        if(checkLeftValid || checkRightValid || checkTopValid || checkBottomValid) {
            visible.push(parsedData[rowIndex][colIndex])
        }

        treeScore.push(visibleTreesFromLeft * visibleTreesFromRight * visibleTreesFromTop * visibleTreesFromBottom)
    })
})
console.log(_.max(treeScore), visible.length)