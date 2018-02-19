var Util = {
    reloadPage: function () {
        window.location.reload(true);
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
    inputText: document.querySelector("#js-app-form textarea#input-text").value,
    setKey() {
        var keyInput = document.querySelector("#js-key-input > input[type='text']").value;
        this.key = Number(keyInput);
        console.log(this.key);
        console.log(this);
        return this.key;
    },
    encrypt() {
        // console.log(this.key);
    },
    decrypt() {
        // var ciphertext = this.inputText;
        // var chars = ciphertext.split('');
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

document.querySelector(".app__header").addEventListener("click", Util.reloadPage);

document.querySelector("#js-key-input > button#key-submit").addEventListener("click", App.setKey);
document.querySelector("button#js-encrypt-start").addEventListener("click", App.encrypt);
document.querySelector("button#js-decrypt-start").addEventListener("click", App.decrypt);