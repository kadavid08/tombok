//3*3 matrix 0-9 veletlen szamokkal
//a szamok osszege soronkent
//b szamok osszege oszloponkent
//c atlok elemeinek osszege

let matrix = []
let cols = 3
let rows = 3
let min = 0
let max = 9

for (let i = 0; i < rows; i++) {
    let matrixrow = []
    for (let j = 0; j < cols; j++) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min
        matrixrow.push(num)
    }
    matrix.push(matrixrow)
}

console.log("matrix:", matrix)

let matrixout = ""
for (const row of matrix) {
    for (const element of row) {
        matrixout += element + " "
    }
    matrixout += "\n"
}

console.log(matrixout) 



//a
let matrixout = ""
for (const row of matrix) {
    let sum = 0
    for (const element of row) {
        matrixout += element + " "
        sum += element
    }
    matrixout += " | összeg: " + sum + "\n"
}

console.log(matrixout)


//b
let colsummer = [0, 0, 0]

for (let row of matrix) {
    for (let j = 0; j < cols; j++) {
        colsummer[j] += row[j]
    }
}

console.log(colSums)

//c
let primaryd = 0
let secondaryd = 0

for (let i = 0; i < 3; i++) {
    maind += matrix[i][i]
    secondaryd  += matrix[i][2 - i]
}

