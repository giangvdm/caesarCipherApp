var key = 3;

var util = {
    reloadPage: function () {
        window.location.reload(true);
    }
}

var help = {
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

var app = {
    setKey: function () {
        var keyInput = document.querySelector("#js-key-form > input[type='text']");
        key = Number(keyInput.value);
    },
    encode: function () {
        var plainText = document.querySelector("#js-encoder-form > input[type='text']");
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

// document.querySelector("i#js-key-help").addEventListener("click", help.keyHelp);
// document.querySelector("i#js-encoder-help").addEventListener("click", help.encoderHelp);
// document.querySelector("i#js-decoder-help").addEventListener("click", help.decoderHelp);

document.querySelector(".app__header").addEventListener("click", util.reloadPage);

// document.querySelector("#js-key-form > input[type='button']").addEventListener("click", app.setKey);