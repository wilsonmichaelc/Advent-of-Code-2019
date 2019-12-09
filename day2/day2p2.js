let orig = [
  1,
  12,
  2,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  1,
  13,
  19,
  1,
  9,
  19,
  23,
  2,
  13,
  23,
  27,
  2,
  27,
  13,
  31,
  2,
  31,
  10,
  35,
  1,
  6,
  35,
  39,
  1,
  5,
  39,
  43,
  1,
  10,
  43,
  47,
  1,
  5,
  47,
  51,
  1,
  13,
  51,
  55,
  2,
  55,
  9,
  59,
  1,
  6,
  59,
  63,
  1,
  13,
  63,
  67,
  1,
  6,
  67,
  71,
  1,
  71,
  10,
  75,
  2,
  13,
  75,
  79,
  1,
  5,
  79,
  83,
  2,
  83,
  6,
  87,
  1,
  6,
  87,
  91,
  1,
  91,
  13,
  95,
  1,
  95,
  13,
  99,
  2,
  99,
  13,
  103,
  1,
  103,
  5,
  107,
  2,
  107,
  10,
  111,
  1,
  5,
  111,
  115,
  1,
  2,
  115,
  119,
  1,
  119,
  6,
  0,
  99,
  2,
  0,
  14,
  0
];

prog = [];
findNounVerb()

function findNounVerb() {
    let found = false;
    for (let i=0; i<100; i++) {
        for (let j=0; j<100; j++) {
            prog = [...orig];
            prog[1] = i;
            prog[2] = j;
            runProg();
            if (prog[0] === 19690720) {
                found = true;
                break;
            }
        }
        if (found) {
            break;
        }
    }
    console.log(`Noun: ${prog[1]}, Verb: ${prog[2]}`);
    console.log(`100 * ${prog[1]} + ${prog[2]}`);
    console.log(`Computed value: ${100 * prog[1] + prog[2]}`);
}

function runProg() {
  for (let i = 0; i < prog.length; i += 4) {
    if (prog[i] === 99) {
      break;
    }
    if (prog[i] === 1) {
      add(prog[i + 1], prog[i + 2], prog[i + 3]);
    }
    if (prog[i] === 2) {
      mult(prog[i + 1], prog[i + 2], prog[i + 3]);
    }
  }
}

function add(p1, p2, out) {
  prog[out] = prog[p1] + prog[p2];
}

function mult(p1, p2, out) {
  prog[out] = prog[p1] * prog[p2];
}
