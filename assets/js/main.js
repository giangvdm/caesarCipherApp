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

// Initial script
document.querySelector("#js-key-form > input[type='text']").value = key;

document.querySelector("i#js-key-help").addEventListener("click", help.keyHelp);
document.querySelector("i#js-encoder-help").addEventListener("click", help.encoderHelp);
document.querySelector("i#js-decoder-help").addEventListener("click", help.decoderHelp);

document.querySelector(".app__header").addEventListener("click", util.reloadPage);

document.querySelector("#js-key-form > input[type='button']").addEventListener("click", app.setKey);