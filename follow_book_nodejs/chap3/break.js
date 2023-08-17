// var sum =0
// for(n=1;n<=10;n++){

//     sum = sum +n

//     if(n>=5) {
//         break
//     }
// }
// console.log(sum)

////////////////////////////////////////
var remain = 0
for(n=1;n<=6;n++){
    remain = n%2
    switch (remain){
        case 0 : console.log(n+'=> even'); break
        default: console.log(n+'=> odd')
    }
}
