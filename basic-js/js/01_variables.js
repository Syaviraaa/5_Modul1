console.log("------ Variables ------");

// Var
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

// Var j terdefinisi sebagai fungsi
function looping() {
    for (var j = 0; j < 5; j++) {
        console.log(j);
    }
}
looping();
// console.log(j); pasti error karena j tidak terdefinisi di luar fungsi loop

// Let k terdefinisi sebagai kondisi 'for'
for (let k = 0; k < 5; k++) {
    console.log(k);
}
// console.log(k); pasti error karena k tidak terdefinisi di luar kondisi 'for'

// Let l terdefinisi sebagai kondisi 'for', menghasilkan output l = 100
for (let l = 0; l < 5; l++) {
    console.log(l);
}
if (true) {
    let l = 100;
    console.log("l =",l);
}

// Const phi tetap
const phi = 3.14;
// phi = 3.147; pasti error karena phi merupakan konstanta
console.log(phi);
