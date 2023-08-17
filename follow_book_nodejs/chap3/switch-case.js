const prompt = require('prompt-sync')()
var rating = parseInt(prompt('rating 1-5 :'))
switch (rating) {
    case 5: console.log('Excellent');break
    case 4: console.log('Very Good');break
    case 3: console.log('good');break
    case 2: console.log('fair');break
    case 1: console.log('poor');break
    default:console.log('UnKnown')
        break;
}

//กรอกชื่อวัน แล้วหาว่าเป็นวันหยุดหรือวันทำงาน
var day = (prompt('กรอกวัน : '))
switch (day) {
    case 'monday':
        case 'tuesday':
            case 'wednesday':
                case 'thursday':
                    case 'friday':
                        console.log('Work day')        
        
                        break;
    case 'saturday': 
        case 'sunday': 
            console.log('Weekend') 
            break;
    default: console.log('not the day of week')
        break;
}