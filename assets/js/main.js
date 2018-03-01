var Util = {
    reloadPage: function () {
        window.location.reload(true);
    },
    showAndFade(elem, time) {
        elem.classList.add("show");
        window.setTimeout(function () {
            elem.classList.remove("show");
        }, time);
    }
}

// Redundant feature's resource
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
        if (this.validateKey(keyInput)) {
            this.key = Number(keyInput);
        }
        else alert("Legit shift key must be between 0 and 25. Please try to enter your key again.");
    },
    validateKey(input) {
        if (input < 0 || input > 25) return false;
        return true;
    },
    charCheck(char) {
        var result = {
            // default values
            isLetter: false,
            case: "lowercase"
        }

        // Proceed to check
        let eUpper = /[A-Z]/;
        let eLower = /[a-z]/;
        let upperCheck = eUpper.test(char);
        let lowerCheck = eLower.test(char);

        // Gather results
        if (upperCheck || lowerCheck) result.isLetter = true;
        if (upperCheck) result.case = "uppercase";

        return result;
    },
    encrypt() {
        var plaintext = this.getInputText();
        var chars = plaintext.split('');
        for (var i = 0; i < chars.length; i++) {
            var curr = chars[i];
            console.log(this.charCheck(curr));
            if (this.charCheck(curr).isLetter) {
                var currentCode = curr.toLowerCase().charCodeAt(0);
                var shiftedCode = currentCode - this.key;
                if (shiftedCode < 97 || shiftedCode > 122) {
                    shiftedCode += 26;
                }
                chars[i] = String.fromCharCode(shiftedCode);
                // if the letter is originally uppercase, then switch the encrypted one to uppercase
                if (this.charCheck(curr).case === "uppercase") {
                    chars[i] = chars[i].toUpperCase();
                }
            }
        }
        var ciphertext = chars.join('');
        this.outputArea.innerHTML = ciphertext;
    },
    decrypt() {
        var ciphertext = this.getInputText();
        var chars = ciphertext.split('');
        var casePattern = [];
        for (var i = 0; i < chars.length; i++) {
            var curr = chars[i];
            if (this.charCheck(curr).isLetter) {
                var currentCode = curr.toLowerCase().charCodeAt(0);
                var shiftedCode = currentCode + this.key;
                if (shiftedCode < 97 || shiftedCode > 122) {
                    shiftedCode -= 26;
                }
                chars[i] = String.fromCharCode(shiftedCode);
                // if the letter is originally uppercase, then switch the decrypted one to uppercase
                if (this.charCheck(curr).case === "uppercase") {
                    chars[i] = chars[i].toUpperCase();
                }
            }
        }
        var plaintext = chars.join('');
        this.outputArea.innerHTML = plaintext;
    },
    copyToClipboard() {
        var copyText = this.outputArea;
        var popUp = document.querySelector("#js-copy-message");
        if (this.outputArea.value !== "") {
            copyText.select();
            document.execCommand("Copy");
            popUp.textContent = "Output text copied to clipboard"
            Util.showAndFade(popUp, 2000);
        }
        else {
            popUp.textContent = "Nothing to copy";
            Util.showAndFade(popUp, 1500);
        }
    }
}

//** Styling script **//

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
// var copyMessage = document.querySelector("#js-copy-message");
// copyMessage.style.height = String(clientH3) + "px";

//****//

//** Initializing script **//

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
document.querySelector("button#js-decrypt-start").addEventListener("click", function () {
    App.decrypt();
});
// Copy
document.querySelector("button#js-copy").addEventListener("click", function () {
    App.copyToClipboard();
});
// Help buttons
document.querySelector("#js-key-input > i").addEventListener("click", Help.keyHelp);

// Redundant feature
// document.querySelector("i#js-encoder-help").addEventListener("click", Help.encoderHelp);
// document.querySelector("i#js-decoder-help").addEventListener("click", Help.decoderHelp);

//****//