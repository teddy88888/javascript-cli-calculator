"use strict";

const prompt = require("prompt-sync")({ sigint: true });


function getNumberInput(message) {
  while (true) {
    const input = prompt(message).trim();

    // Mencegah input kosong dianggap sebagai angka 0
    if (input === "") {
      console.log("Input tidak boleh kosong.");
      continue;
    }

    const number = Number(input);

    if (!isNaN(number)) {
      return number;
    }

    console.log("Input tidak valid. Silakan masukkan angka.");
  }
}


function getOperatorInput() {
  const validOperators = ["+", "-", "*", "/", "%", "**"];

  while (true) {
    const operator = prompt("Masukkan operator (+, -, *, /, %, **): ").trim();

    if (validOperators.includes(operator)) {
      return operator;
    }

    console.log("Operator tidak valid. Gunakan +, -, *, /, %, atau **.");
  }
}


function add(a, b) {
  return a + b;
}


function subtract(a, b) {
  return a - b;
}


function multiply(a, b) {
  return a * b;
}


function divide(a, b) {
  if (b === 0) {
    return "Error: pembagian dengan nol tidak diperbolehkan.";
  }

  return a / b;
}


function modulo(a, b) {
  if (b === 0) {
    return "Error: modulo dengan nol tidak diperbolehkan.";
  }

  return a % b;
}


function power(a, b) {
  return a ** b;
}


function calculate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);

    case "-":
      return subtract(firstNumber, secondNumber);

    case "*":
      return multiply(firstNumber, secondNumber);

    case "/":
      return divide(firstNumber, secondNumber);

    case "%":
      return modulo(firstNumber, secondNumber);

    case "**":
      return power(firstNumber, secondNumber);

    default:
      return "Error: operator tidak dikenali.";
  }
}


function analyzeResult(result) {
  console.log("\n--- ANALISIS HASIL ---");

  // Fallback jika result null atau undefined
  const safeResult = result ?? "Tidak ada hasil.";

  console.log(`Tipe data: ${typeof safeResult}`);

  
  if (typeof safeResult === "string") {
    console.log(`Status: ${safeResult}`);
    return;
  }

  
  if (typeof safeResult === "number") {
    const sign =
      safeResult > 0 ? "Positif" : safeResult < 0 ? "Negatif" : "Nol";

    const numberType = Number.isInteger(safeResult) ? "Integer" : "Desimal";

    let parity = "Tidak dapat ditentukan";

    
    if (Number.isInteger(safeResult)) {
      parity = safeResult % 2 === 0 ? "Genap" : "Ganjil";
    }

    console.log(`Nilai: ${safeResult}`);
    console.log(`Sifat nilai: ${sign}`);
    console.log(`Jenis angka: ${numberType}`);
    console.log(`Bilangan: ${parity}`);
  }
}


function displayResult(firstNumber, operator, secondNumber, result) {
  console.log("\n==============================");
  console.log("         HASIL PERHITUNGAN");
  console.log("==============================");

  console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);

  analyzeResult(result);

  console.log("==============================\n");
}


function shouldContinue() {
  while (true) {
    const answer = prompt("Apakah ingin melakukan perhitungan lagi? (yes/no): ")
      .trim()
      .toLowerCase();

    if (answer === "yes" || answer === "y") {
      return true;
    }

    if (answer === "no" || answer === "n") {
      return false;
    }

    console.log("Jawaban tidak valid. Masukkan yes atau no.");
  }
}

function main() {
  console.log("====================================");
  console.log("      KALKULATOR INTERAKTIF CLI");
  console.log("====================================");
  console.log("Operator yang tersedia:");
  console.log("+  Penjumlahan");
  console.log("-  Pengurangan");
  console.log("*  Perkalian");
  console.log("/  Pembagian");
  console.log("%  Modulo");
  console.log("** Perpangkatan");
  console.log("====================================\n");

  while (true) {
    console.log("--- PERHITUNGAN BARU ---");

    const firstNumber = getNumberInput("Masukkan angka pertama: ");
    const operator = getOperatorInput();
    const secondNumber = getNumberInput("Masukkan angka kedua: ");

    const result = calculate(firstNumber, operator, secondNumber);

    displayResult(firstNumber, operator, secondNumber, result);

    if (!shouldContinue()) {
      break;
    }

    console.log("\nMemulai perhitungan baru...\n");
  }

  console.log("\n====================================");
  console.log("Terima kasih telah menggunakan");
  console.log("Kalkulator Interaktif CLI.");
  console.log("Program selesai.");
  console.log("====================================");
}

main();
