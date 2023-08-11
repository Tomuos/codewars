// DESCRIPTION:
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


//Step 1: create a function that takes in a string call it DNAtoRNA
//Step 2: create a variable that will hold the string of letters
//Step 3: create a conditional that will check the string for the letters
//Step 4: return the string with the letters replaced

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence 
      return dna.replaceAll("T", 'U');
  }

    console.log(DNAtoRNA("GCAT"));
    // output: "GCAU"
    console.log(DNAtoRNA("TTTT"));
    // output: "UUUU"
    console.log(DNAtoRNA("GCAT"));
    // output: "GCAU"