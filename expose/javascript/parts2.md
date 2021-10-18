# Part 2
1. Prints 3 since variable i is declared as a `var` so it will be accessible outside the for loop. The for loop ends when i >= prices.length, and since there are 3 elements in the prices array, i will be 3 at the end of the loop.
2. Will print the last value discountedPrice had in the for loop. so 300 * (1-0.5) = 150. Since discountedPrice was declared as a var it will be accessible outside the loop and will hold the last value it was declared with.
3. Should also print 150 since it is always assigned the value of discountedPrice and since 150 rounded is still 150, then it will print 150. finalPrice is declared as a var within the function so it will still be accessible in the function.
4. The code will return `[50, 100, 150]`. The for loop just multiplies by `1-discount` which is `0.5` for this call. Then rounds the answer and pushes to the array. The rounding doesn't do anything because all the original prices are even. So we just get back an array where all the values are half from the original values.
5. An error. In this case `i` is declared with a `let` which means it is not defined outside the for loop. So trying to access `i` after the for loop will cause an error.
6. An error. In this case `discountedPrice` is declared with a `let` inside the for loop. This means its scope is only the body of the loop. Since the console.log call is referring the `discountedPrice` outside the loop it will result in an error.
7. It will print 150. Since finalPrice is declared with the body of the function as its scope, being modified inside the for loop does not change the scope and we are printing the last value `finalPrice` held the same as when it was declared with a var.
8. The code will return `[50, 100, 150]`. Like the answer for q4. the way the variables are declared does not change that the function just multiplies each value of the array by `(1-discount)`.
9. The code will fail at line 11 since i was declared with a `let` and so it isn't accesible outside the for loop body.
10. the code will print 3 since it is the length of the array passed as an argument into `prices`. The fact `length` was declared as a `const` doesn't matter since we are just accessing the value and not modifying it.
11. Again this function will return the array with all the values multiplies by `(1 - discount)` (halved). `discount` the array being const doesn't matter since we are not reassigning the array just adding values. and discountPrice being const doesn't matter since it is being redefined every loop iteration. So `[50, 100, 150]`

## Data Types
12. 
    - a. `student.name`
    - b. `student['grad year']`
	- c. `student.greeting()`
	- d. `student['Favorite Teacher'].name`
	- e. `student.courseLoad[0]`

## Basic Operators & Type Conversion 
13. Arithmetic
    - `A  :  32`. + is an operator on strings so, converted 2 to a string and concatenated
    - `B  :  1`. - is not an operator on strings to it tried to convert 3 to a number and subtract.
    - `C  :  3` converted null to 0 and added two numbers.
    - `D  :  3null` '3' is a string so converted `null` to a string and concatenated.
    - `E  :  4` converted `true` the boolean to the number `1` and added `1 + 3`.
    - `F  :  0` + is an operator for numbers so converted `false` to 0 and null as well.
    - `G  :  3undefined` converted undefined to its string representation (like A which converted 2 to a string). the concatenated.
    - `H  :  NaN ` Since `-` is only defined for numbers, converted `'3'` to a number but `undefined` as a number is `NaN` (not a number), so the subtraction becomes `NaN` as well.
14. Comparison
    - `A  :  true`. converts `'2'` to a number and is bigger than 1.
    - `B  :  false`. No conversions so 2 the string comes before 12 the string because 12 starts with 1. (dictionary order)
    - `C  :  true` converted `'2'` to a number and compares
    - `D  :  false` compares the type and type doesn't match (one is a string another is an int)
    - `E  :  false`. compares the type and type doesn't match.
    - `F  :  true` 2 is converted explicitly to boolean which converts to true. This matches `true` the boolean by type and value.
15. `==` just compares values and performs necessary conversions in order to do the comparison. `===` also compares types and if the type doesn't match it will always output false.

## Loops
16. in file.
17. The modifyArray function takes a function as a parameter and then applies the callback to every element in the array argument then stores the result in a new array which it then returns. This means that if we call the function with `[1, 2, 3]` and a function that returns its single argument doubled, the function will return a new array `[2, 4, 6]`.
18. In file.
19. `1\n3\n3\n2` just setting a timeout pushes 3 after 4 was printed, and 2 is already going to be printed after a while. so 1 is printed first then 4 since it is not in a setTimeout function, then 3 since it has the lowest timeout then 2.
