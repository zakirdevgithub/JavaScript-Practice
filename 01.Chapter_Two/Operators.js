// 1.Arithmetic Operators
// 2.Assignment Operators
// 3.Comparison Operators
// 4.Logical Operators
// 5.Membership Operators
// 6.Bitwise Operators

console.log("Arithmetic Operators")
//-----------------1.Arithmetic Operators---------------
console.log("11 + 2=", 11+2)
console.log("11 - 2=", 11-2)
console.log("11 * 2=", 11*2)
console.log("11 / 2=", 11/2)
console.log("11 % 2=", 11%2)
console.log("11**2=", 11**2)

let incrementNumber1=10
let incrementNumber2=10
console.log(incrementNumber1++) // 10
console.log(++incrementNumber2) //11

console.log("Assignment Operators")
//------------------2.Assignment Operators-----------------
let number=10
number +=5
console.log(number)

console.log("Comparison Operators")
//------------------3.Comparison Operators-----------------
console.log( 5<10) //True
console.log( 5>10) //False
console.log(5>=5)  //True
console.log(5<=5)  //True

let myNumber='500'
let myNumber2=500
console.log(myNumber==myNumber2) //True
console.log(myNumber===myNumber2) //False
console.log(myNumber !==myNumber2) //True

console.log("Logical Operators")
//------------------4.Logical Operators-----------------
let num1=5
let num2=6
console.log(num1 >10 && num2<10) //False
console.log(num1 >10 || num2<10) //True

console.log("Membership Operators")
//------------------5.Membership Operators---------------
let myArray=[1,2,3,4,5]
console.log(2 in myArray) //True
console.log(8 in myArray) //False

console.log("Bitwise operator")
//----------------------6.Bitwise Operators-----------------

//--------------Complement(~)-------------

/*
            12 = 00001100
1's complement = 11110011 (-12)
                       +1
---------------------------
2's complement = 11110100

            13 = 00001101
1's complement = 11110010 (-13)
                       +1
---------------------------
2's complement = 11110011 which is 1's complement of 12
hence complement of 12 (~12)= -13
*/

console.log(~12) // -13

//---------------Bitwise and (&)-------------

/*
0 & 0 = 0
0 & 1 = 0
1 & 0 = 0
1 & 1 = 1

12 & 13= 12
12 = 00001100
13 = 00001101
---------------
   = 00001100 =12
*/
console.log(12 & 13) //12

//--------------Bitwise or (|)----------------

/*
0 | 0 = 0
0 | 1 = 1
1 | 0 = 1
1 | 1 = 1

12 | 13= 13
12 = 00001100
13 = 00001101
---------------
   = 00001101 =13
*/
console.log(12 | 13) //13

//--------------------XOR(^)------------------

/*
XOR(^) as like family home rent where bachelor not allowed
if we think 0=female and 1=male

0 ^ 0 = 0 (female+female= not allowed)
0 ^ 1 = 1 (female+male= allowed)
1 ^ 0 = 1 (male+female= allowed)
1 ^ 1 = 0 (male+male= not allowed)

12 ^ 13 = 1
12 = 00001100
13 = 00001101
---------------
   = 00000001 =1
*/
console.log(12^13) // 1

//----------------Left Shift ( << )---------------

/*
 12  = 00001100.0000
12<<2= 0000110000.00=48
*/
console.log(12<<2) //48

//----------------Right Shift ( >> )--------------

/*
 12  = 00001100.0000
12>>2= 000011.000000=3
*/
console.log(12>>2) //3

