//1 fellaldatr
let dobasok = []
let osszeg = 0

for (let i = 0; i < 100; i++) {
    let d = Math.floor(Math.random() * 6) + 1
    dobasok.push(d)
    osszeg += d
}

let atlag = osszeg / dobasok.length

let stat = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }

for (let i = 0; i < dobasok.length; i++) {
    stat[dobasok[i]]++
}

let atlagfelett = 0

for (let i = 0; i < dobasok.length; i++) {
    if (dobasok[i] > atlag) atlagfelett++
}

console.log("dobasok:", dobasok)
console.log("osszeg:", osszeg)
console.log("atlag:", atlag)
console.log("statisztika:", stat)
console.log("atlag felettiek:", atlagfelett)




//2 feladat
//??




//3 feladat
let szam = parseInt(prompt("adj meg egy egesz szamot:"))
let alap = parseInt(prompt("add meg a szamrendszer alapjat (1-32):"))

if (alap < 1 || alap > 32) {
    console.log("hibas alap, 1 es 32 kozott add meg")
} else if (alap === 1) {
    console.log("1-es szamrendszerben:", "|".repeat(szam))
} else {
    console.log("atalakitva:", szam.toString(alap))
}

