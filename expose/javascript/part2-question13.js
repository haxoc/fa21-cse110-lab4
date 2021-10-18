let A = '3' + 2;
let B = '3' - 2;
let C = 3 + null;
let D = '3' + null;
let E = true + 3;
let F = false + null;
let G = '3' + undefined;
let H = '3' - undefined;

print = function(letter, var_name) {
  console.log(letter, ' : ', var_name);
}

print('A', A)
print('B', B)
print('C', C)
print('D', D)
print('E', E)
print('F', F)
print('G', G)
print('H', H)