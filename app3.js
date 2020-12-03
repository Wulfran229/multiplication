// for (let i = 0; i <= 10; i++) {
//     // console.log('hello', i)
//     // console.log("\n")
//     console.log('2*', i, '=', i * 2)
// }

// const number = a,
//     for (a = 0 && a <= 20, a = a++)

// for (let i = 0; i <= 10; i++) {
//     console.log(a, '*', i, ' = ', i * a)
// }

var result = 'x';
for (let i = 0; i < 21; i++) {

    for (let j = 0; j <= 10; j++) {

        if (i == 0 && j > 0) {

            result += '[' + j + ']';

        } else if (j == 0 && i > 0) {

            result += '[' + i + ']';

        } else if (i > 0 && j > 0) {

            result += (i * j) + ' ';
        }
    }
    result += '\n'
}
console.log(result);