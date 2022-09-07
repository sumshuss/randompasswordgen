const generate = document.getElementById("pass-btn")


function generatePass() {
    let passCharacter = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "u",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "?",
        "+",
        "@",
        "!",
        "&",
        "$",
        "£",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
    ];
    let passwordLength = 11
    let password = [];
    for (i = 0; i < 4; i++) {
        for (let r = 0; r < passwordLength; r++){
            let randomNumber = Math.floor(Math.random()*passCharacter.length);
            password += passCharacter[randomNumber];
            document.getElementById(`password-${i+1}`).textContent = password;
        }
    password = []
    }
}

generate.addEventListener("click", generatePass)