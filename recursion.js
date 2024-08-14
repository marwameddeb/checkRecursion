1////////////////////////
function isLeapYear(year) {
   
    if ((year % 4 === 0)&&(year % 100 === 0)&&(year % 400 === 0)) {
        
                return true;
            } else {
                return false;
            }
        } 
undefined
isLeapYear(2000)
true
isLeapYear(2001)
false

2//////////////////////
function determineTicketPrice(age){
    if (age <= 12){
        return "$10"; 
    }else if ((age >= 13) && (age <= 17)){
        return "$15";
    }else if (age >= 18){
        return "$20"; 
    } 
}
undefined
determineTicketPrice(36)
'$20'

3/////////////////////////
function fibonacci(n) {
    
    if (n === 0) {
        return 0;
    }
   else if (n === 1) {
        return 1;

    fibonacci(n);
    }else {
    
    return fibonacci(n - 1) + fibonacci(n - 2);
    }  
}
undefined
fibonacci(10)
55
fibonacci(5)
5

4///////////////////////////
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    else if (exponent === 1) {
        return base;
    power(base, exponent);    
    }else {
    return base * power(base, exponent - 1);
    }
}
undefined
power(2, 3)
8
power(2, 0)
1
power(2, 1)
2