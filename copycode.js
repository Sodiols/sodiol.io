document.addEventListener("DOMContentLoaded", function () {
    const htmlCodeBlock = document.querySelector(".html-code code");
    const cssCodeBlock = document.querySelector(".css-code code");
    const copyHTMLButton = document.getElementById("copyHTMLButton");
    const copyCSSButton = document.getElementById("copyCSSButton");

    copyHTMLButton.addEventListener("click", function () {
        const htmlCodeText = htmlCodeBlock.innerText;
        copyTextToClipboard(htmlCodeText);
    });

    copyCSSButton.addEventListener("click", function () {
        const cssCodeText = cssCodeBlock.innerText;
        copyTextToClipboard(cssCodeText);
    });

    function copyTextToClipboard(text) {
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = text;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);
        alert("Code copied to clipboard!");
    }
});
