//  program that returns your age 
 function calculateAgeInDays (age) {
     let days = age * 365;
     return days;
 }
 let age = 18;
 let ageInDays = 
 calculateAgeInDays(age);
 document.write("Q(1) your age in days is : " + ageInDays );


//  program that increments the numb by +1

function IncrementNumber(number) {
    return number +1;
}
let numb = 5;
let result = 
IncrementNumber(numb);
document.write( "   Q(2) ans after increment is : " + result);

//  program that decrements the numb by -1

function DecrementNumber(number2) {
    return number2 -1;
}
let numb2 = 10;
let result2 = 
DecrementNumber(numb2);
document.write( "   Q(3)  ans after decrement is: " + result2);

// program for square of numb

function NumbInsquare (squarenumb) {
    return squarenumb * squarenumb;
}
let inputnumb = 9;
let result3 = 
NumbInsquare (inputnumb); 
document.write("  Q(4) square of number is : " + result3 );

// current time in y-m-d format

function getCurrentTime() {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = String(currentDate.getMonth() + 1).padStart(2, '0');
  let day = String(currentDate.getDate()).padStart(2, '0');

  let currentTime = year + '-' + month + '-' + day;
  return currentTime;
}

let currentTime = getCurrentTime();
document.write("  Q(5)  Current time in y-m-d: " + currentTime);

// current time in H:i:s format

function getCurrentTime2(date) {
  let hour = String(date.getHours()).padStart(2, '0');
  let minute = String(date.getMinutes()).padStart(2, '0');
  let second = String(date.getSeconds()).padStart(2, '0');

  let currentTime2 = hour + ':' + minute + ':' + second;
  return currentTime2;
}

let currentDate = new Date();
let currentTime2 = getCurrentTime2(currentDate);
document.write("  Q(6)  Current time in h:i:s " + currentTime2);


