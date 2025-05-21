//challenge 1 sum of 2 numbers
/*function addition(num1, num2) {
      
    return num1+num2
}

console.log(addition(8 , 5)) ;//13
*/
//challenge 2 converting minutes to seconds

/*function convert(minutes){
     return 60*minutes
}
console.log(convert(5));//300
*/

// challenge 3 perimeter of a rectangle
/*function findPerimeter(length,width){
    return 2*(length+width);
}
console.log(findPerimeter(3,2)); //10
*/
// challenge 4 check negative
/*function isNegative(number){
    if(number<0){
        return true
    }
    else
        return false
}
 console.log(isNegative(-4));//true
 console.log(isNegative(2));//false
 */
//challenge 5 can i drive
/*function canDrive(name , age){
    if (age>=18){
        return name  +  "is old enough to drive"
    }
    else
        return name  +  "is  not old enough to drive yet"
};
console.log(canDrive("Caren", 16))//Carenis not old enough to drive yet
*/
// challenge 6 largest number
/*function findLargest(a,b,c){
    if(a>b && a>c){
        return a
    }
    else if(b>a && c>a){
        return b
    }
    else 
        return c
}
console.log(findLargest(5,2,9));//9
console.log(findLargest(-2,-3,-8));//-2
*/
//challenge 7 BMI calculator
/*function calculateBMI(weight,height){
     let BMI = weight / (height*height);
    if (BMI < 18.5){
        return  `your BMI is ${BMI} -underweight`
    }
    else if(BMI >=18.5 && BMI <=24.5){
        return `your BMI is ${BMI} - normalweight`
    }
    else if(BMI >=25 && BMI<=29.9){
        return `your BMI is ${BMI} - Overweight`
    }
    else (BMI<=30)
        return `your BMI is ${BMI} - obese`
}
console.log(calculateBMI(62,1.25));//your BMI is 39.68 - obese
console.log(calculateBMI(40,1.7));//your BMI is 13.840883044982699 - underweight
*/
//challenge 8 greeting based on time
/*function greetUser(name,hour){
    if(hour>=5 && hour <=11){
        return `good morning ${name}`
    }
    else if(hour>=12 && hour<=17){
        return `good afternoon ${name}`
    }
    else if(hour>=18 && hour<=21){
        return `good evening ${name}`
    }
    else (hour>=22 && hour<=4)
        return `good night ${name}`
}
console.log(greetUser("caren",15));//good afternoon caren
*/
//challenge 9 fizz buzz

//challenge 10
function perimeter(i,num){
    switch(i){
        case "s":
            return 4*num;
            break;
        case "c":
            return 2*6.28*num;
            break;
         default:
         return;     
    }
}
console.log(perimeter("s",7));//28
console.log(perimeter("c",4));//25.12