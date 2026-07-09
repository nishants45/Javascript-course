//===============================================OPERATION============================================//

let value = 3
let negValue = -value
// console.log(negValue);

//==========some basic operations============//
console.log(2+2)
console.log(2-4);
console.log(3*9);
console.log(2**3);            //double multiplicaton ka maytlb wo power me aa gya eg (2 to the power 3)
console.log(10/2);
console.log(3%2);             // for remainder  (%  known as modulus)


let str1 = "Hello"
let str2 = " Nishant"     /*yha maine Nishant ke pehle thodi space di in bracket because of gap btw hello and Nishant so the ouutput should be 
like thiis Hello Nishant otherwise it will be like HelloNishant*/
let str3 = str1+str2
// console.log(str3);

// some confusing things
// console.log("1" + 2);    // yha string + number = 12
// console.log(1 + "2");     //yha number + string = 12  
// console.log("1" + 2 + 2);   //yha string + number + number = 122
// console.log(1+2 +"2");      // yha number + number + string = 32

/*reason for above 
agr pehle string hii hii to sbko string treat krega but agar last me string to pehle operation hoga phir string liike in last one*/
   
// ye saare wrong method hii code likhne mtlb not a right Web

// rather like this if you are playing on number   use paranthesis() for definning operation
console.log( (3+4) *5 % 3);

// some tricky or cool conversion but not preferable

console.log(+true);    //output == 1
// console.log(true+);     error aayega yha pe 
console.log(+"");     //output == 0

// coder define variable sometiems like this
let num1,num2,num3

num1 = num2 = num3 = 2+2
console.log(num2);   // output 4 hi aayega

let gamecounter = 100 
gamecounter++;                                           //(increment)/prefix and postfix==  ++gamecounter -prefix     gamecounter++ -postfix
console. log(gamecounter);

//==========================================================================================================//






