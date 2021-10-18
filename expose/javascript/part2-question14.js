let A = '2' > 1;
let B = '2' < '12';
let C = 2 == '2';
let D = 2 === '2';
let E = true == 2;
let F = true === Boolean(2);

print = function(letter, var_name) {
  console.log(letter, ' : ', var_name);
}

print('A', A)
print('B', B)
print('C', C)
print('D', D)
print('E', E)
print('F', F)

