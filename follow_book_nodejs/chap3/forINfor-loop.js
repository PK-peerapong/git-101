// var str = ''
// for(i=1;i<=5;i++){
//     str = ''     
//     for(j=1;j<=10;j++){
//         str += j + '  '
//     }
//     console.log(str)
// }


/////////////////////////////////////////////////

// var str = ''
// for(i=1;i<=5;i++){
//     str = ''     
//     for(j=1;j<=i;j++){
//         str += j + '  '  //ความหมายของบรรทัดนี้คือ str = str + j + ' '  //strจะเป็นตัวแปรที่เก็บค่าเป็นชนิดString
//     }
//     console.log(str)
// }

////////////////////////////////////////////////////
//สูตรคูณ
// var str =''
// var v=0
// var o 
// for(i=1;i<=12;i++){
   
//     for(j =1;j<=12;j++){
//         v = i*j

//         o = console.log(i+'X'+j+'='+v)  
//     }
   
    
// } console.log(o)



////////////////////////////////////////////
//สูตรคูณ อีกแบบ
var str = ''
var v 
for(i=1;i<=5;i++){
    str=''
    for(j=1;j<=5;j++){
        v = i*j
        str += v
        str += (v < 10)?'  ':' '
    }
    console.log(str)
}

