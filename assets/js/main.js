var Util = {
    reloadPage: function () {
        window.location.reload(true);
    },
    isLetter(char) {
        let e = /[A-Za-z]/;
        return e.test(char);
    }
}

var Help = {
    keyHelp: function () {
        alert("key");
    },
    encoderHelp: function () {
        alert("encoder");
    },
    decoderHelp: function () {
        alert("decoder");
    }
}

var App = {
    key: 3,
    outputArea: document.querySelector("#js-output-text"),
    getInputText() {
        var inputText = document.querySelector("#js-input-text").value;
        return inputText;
    },
    setKey() {
        var keyInput = document.querySelector("#js-key-input > input[type='text']").value;
        this.key = Number(keyInput);
    },
    encrypt() {
        var plaintext = this.getInputText();
        var chars = plaintext.split('');
        for (var i = 0; i < chars.length; i++) {
            if (Util.isLetter(chars[i])) {
                var code = chars[i].charCodeAt(0);
                var shiftedCode = code - this.key;
                if (shiftedCode < 65 || shiftedCode > 90 && shiftedCode < 97 || shiftedCode > 127) {
                    shiftedCode += 26;
                }
                chars[i] = String.fromCharCode(shiftedCode);
            }
            else continue;
        }
        var ciphertext = chars.join('');
        this.outputArea.innerHTML = ciphertext;
    },
    decrypt() {
        var ciphertext = this.getInputText();
        var chars = ciphertext.split('');
        for (var i = 0; i < chars.length; i++) {
            if (Util.isLetter(chars[i])) {
                var code = chars[i].charCodeAt(0);
                var shiftedCode = code + this.key;
                if (shiftedCode < 65 || shiftedCode > 90 && shiftedCode < 97 || shiftedCode > 127) {
                    shiftedCode -= 26;
                }
                chars[i] = String.fromCharCode(shiftedCode);
            }
            else continue;
        }
        var plaintext = chars.join('');
        this.outputArea.innerHTML = plaintext;
    },
    copyToClipboard() {
        var copyText = this.outputArea;
        copyText.select();
        document.execCommand("Copy");
        alert("Copied the text: " + copyText.value);
    }
}

// Styling script

// Key submit button
var clientH1 = document.querySelector("div.key-input").clientHeight;
document.querySelector("button#key-submit").style.height = String(clientH1) + "px";
// Encode, Decode and Copy buttons
var clientH2 = document.querySelector("div#input-and-function").clientHeight / 2;
var functionButtons = document.querySelectorAll("#input-and-function > button");
for (var i = 0; i < functionButtons.length; i++) {
    functionButtons[i].style.height = String(clientH2) + "px";
}
var clientH3 = document.querySelector("div#output-and-copy").clientHeight / 2;
var copyButton = document.querySelector("#output-and-copy > button");
copyButton.style.height = String(clientH3) + "px";

document.querySelector("#js-key-input > i").addEventListener("click", Help.keyHelp);
// document.querySelector("i#js-encoder-help").addEventListener("click", Help.encoderHelp);
// document.querySelector("i#js-decoder-help").addEventListener("click", Help.decoderHelp);

// Initializing script

// Add event listener for buttons
// Header - reload page
document.querySelector(".app__header").addEventListener("click", Util.reloadPage);
// Set key
document.querySelector("#js-key-input > button#key-submit").addEventListener("click", function () {
    App.setKey();
});
// Encrypt start
document.querySelector("button#js-encrypt-start").addEventListener("click", function () {
    App.encrypt();
});
// Decrypt start
document.querySelector("button#js-decrypt-start").addEventListener("click", function() {
    App.decrypt();
});
// Copy
document.querySelector("button#js-copy").addEventListener("click", function() {
    App.copyToClipboard();
});