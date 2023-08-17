
//โปรแกรมให้เกรด
let input = require('prompt-sync')()
let point = input('enter your point :')
point = parseFloat(point)
if (point>=80) {
     console.log('A')    
}else if(point>=70){
    console.log('B')
}else if( point>=60){
    console.log('C')
}else if(point>=50){
    console.log('D')
}else if(point<50){
    console.log('F')
}
else {
    console.log('error')
}
    
//รับค่าเลข 3 ตัว แล้วหาค่ามากที่สุด
const prompt = require('prompt-sync')()
var num1 = parseFloat  (prompt('enter num1 : '))
var max = num1

var num2 = parseFloat (prompt('enter num2 : '))
if(num2>max){
    max = num2
}
var num3 = parseFloat (prompt('enter num3 : '))
if (num3>max){
    max = num3
}
console.log('จำนวนที่มากที่สุดคือ: '+ max )

//ใช้ if กับ operator not (!)
var a = 50
var b=60
if (a != b) {
console.log('true')
}

//รับค่ามา3ตัวแล้วบอกว่าอันไหนเลขคู่
var prompt2 = require('prompt-sync')()
var m =2


var num_1 =parseFloat(prompt2('enter num_1 : '))
var num_2 =parseFloat(prompt2('enter num_2 : '))
var num_3 =parseFloat(prompt2('enter num_3 : '))
var gg = ''
if (num_1 % m == 0 ) {
    console.log('num_1 เป็นเลข คู่')
}else {
    console.log('num_1 เป็นเลข คี่')

}

if (num_2 % m == 0 ) {
    console.log('num_2 เป็นเลข คู่')
}else {
    console.log('num_2 เป็นเลข คี่')

}

if (num_3 % m == 0 ) {
    console.log('num_3 เป็นเลข คู่')
}else {
    console.log('num_3 เป็นเลข คี่')

}

//รับค่าไป2ตัว แล้วแสดงผลเฉพาะเลขคี่
 var inp = require('prompt-sync')()
 var num__1 = parseFloat(inp('ค่า1 : '))
 var num__2 = parseFloat(inp('ค่า2 : '))

 if (num__1%2 != 0) {
    console.log(num__1+' เป็นเลขคี่')
 }
 else if (num__2%2 != 0) {
    console.log(num__2+' เป็นเลขคี่')
 }
else{
    console.log('ทั้ง'+ num__1 +'และ'+ num__2 +'เป็นเลขคู่')
}

//รับค่า อายุ เข้าไปแล้วหาว่าอยู่ในช่วงวัยไหน 0-13 เด็ก, 14-25 วัยรุ่น, 26-50 วัยผู้ใหญ่ , 51++ วัยสูงอายุ
var inpp = require('prompt-sync')()
var age = parseFloat (inpp('กรอกอายุ : '))
var value_age
if (age<=13) {
    value_age = 'วัยเด็ก'
    
}
else if (age<=25) {
    value_age = 'วัยรุ่น'
}
else if (age<=50) {
    value_age = 'วัยผู้ใหญ่'
}
else if (age>=51) {
    value_age = 'วัยสูงอายุ'
}
else{
    value_age = 'กรุณาตรวจสอบข้อมูลใหม่'
}
console.log(value_age)


