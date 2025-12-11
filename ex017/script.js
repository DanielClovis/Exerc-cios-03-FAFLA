let t = Number(prompt("Temperatura:"));
let u = prompt("C ou F?").toUpperCase();

let r = u === "C" ? (t * 9/5) + 32 : (t - 32) * 5/9;

alert("Convertido: " + r);
