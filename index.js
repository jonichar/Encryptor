let tabSelected = '';
let tabEncrypt = document.querySelector('#tabEncrypt');
let tabDecrypt = document.querySelector('#tabDecrypt');
let actionButton = document.querySelector('#actionButton');
let textArea = document.querySelector("#textArea");
let resultText = document.querySelector("#resultText")
let wordsArray = []

let letters = {
    " ": " ",
    ".": ".",
    ",": ",",
    "¿": "¿",
    "?": "?",
    "¡": "¡",
    "!": "!",
    "(": "(",
    ")": ")",
    "$": "$",
    "%": "%",
    '"': '"',
    ";": ";",
    a: "q",
    b: "w",
    c: "e",
    d: "r",
    e: "t",
    f: "y",
    g: "u",
    h: "i",
    i: "o",
    j: "p",
    k: "a",
    l: "s",
    m: "d",
    n: "f",
    o: "g",
    p: "h",
    q: "j",
    r: "k",
    s: "l",
    t: "z",
    u: "x",
    v: "c",
    w: "v",
    x: "b",
    y: "n",
    z: "m",
    A: "M",
    B: "N",
    C: "B",
    D: "V",
    E: "C",
    F: "X",
    G: "Z",
    H: "L",
    I: "K",
    J: "J",
    K: "H",
    L: "G",
    M: "F",
    N: "D",
    O: "S",
    P: "A",
    Q: "P",
    R: "O",
    S: "I",
    T: "U",
    U: "Y",
    V: "T",
    W: "R",
    X: "E",
    Y: "W",
    Z: "Q",
    á: "Ú",
    é: "Ó",
    í: "Í",
    ó: "É",
    ú: "Á",
    Á: "ú",
    É: "ó",
    Í: "í",
    Ó: "é",
    Ú: "á",
    ñ: "9",
    Ñ: "5",
};

function selectTab(tab) {
  tabSelected = tab;

  textArea.value = ""
  resultText.innerHTML = ""
  tabEncrypt.classList.remove('active');
  tabDecrypt.classList.remove('active');

  if (tabSelected === 'encrypt') {
    tabEncrypt.classList.add('active');
  } else {
    tabDecrypt.classList.add('active');
  }
}

function execute() {
    actionButton.classList.add("indigo")

    setTimeout( () => {
        actionButton.classList.remove("indigo")
    }, 200)

    let texto = textArea.value

    if (tabSelected == 'encrypt') {
        resultText.innerHTML = toEncrypt(texto)
    } else {
        resultText.innerHTML = toDecrypt(texto)

    }
}

function toEncrypt(text) {
    wordsArray = []
    for (let i = 0; i < text.length; i++) {
        wordsArray.push(text[i])
    }

    for ( i = 0; i < wordsArray.length; i++) {
        wordsArray[i] = wordsArray[i].replace(wordsArray[i], letters[wordsArray[i]]);
      }
      
      return wordsArray.join("")
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] == value);
}

function toDecrypt(text) {
    wordsArray = []
    for (let i = 0; i < text.length; i++) {
        wordsArray.push(text[i].toString())
    }

    for ( i = 0; i < wordsArray.length; i++) {
        wordsArray[i] = wordsArray[i].replace(wordsArray[i], getKeyByValue(letters, wordsArray[i]));
      }

      return wordsArray.join("") 
}


selectTab('encrypt');

tabEncrypt.addEventListener('click', () => {
  selectTab('encrypt');
});

tabDecrypt.addEventListener('click', () => {
  selectTab('decrypt');
});

actionButton.addEventListener('click', execute);
