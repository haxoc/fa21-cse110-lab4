# Part 2
1. The program was not converting the input from string to number so the adder function was just concatenating two strings instead of adding two numbers.
2. The function needs to be more robust to user input. So when a user inputs a string that is a number we return the result. But if the user enters strings that cannot be converted then we should print an error message.
```
function getSumOutput(arg1, arg2) {
	let result = Number(arg1) + Number(arg2)
	if (result != NaN) {
		return result
	} else {
		return 'Invalid inputs'
	}

}
```