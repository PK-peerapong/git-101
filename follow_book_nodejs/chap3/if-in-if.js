const prompt = require('prompt-sync')()
var username = prompt('username : ')
var password = prompt('password : ')

if(username == 'admin'){
    if(password == '1234'){
        console.log('ยินดีต้อนรับ คุณเข้าสู่ระบบแล้ว')
    if(username == ''|| password == ''){
        console.log('กรุณากรอกข้อมูลให้ครบทั้ง username และ password')
    }
    }
}else{
    console.log('คุณใส่ username หรือ password ไม่ถูกต้อง')
}

//รับค่า ปี ค.ศ. มาเช็คว่าเป็น อาทิกะสุระทิน(Leap Year) หรือ ปีที่มี29วันไหม
var year = parseInt(prompt('กรอก ปี ค.ศ. :'))
if((year%400==0 ||year%4==0 && year%100 !=0 )){
    console.log(year +'is LeapYear')
}else{
    console.log(year+'is not Leap year')
}