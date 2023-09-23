var strings = [
    "I'M A STUDENT",
    "&amp; A WEB DEVELOPER",
];

var currentStringIndex = 0;

function typeNextString() {
    var typed = new Typed('#element', {
        strings: [strings[currentStringIndex]],
        typeSpeed: 50,
        backSpeed: 0,
        onComplete: function () {
            currentStringIndex = (currentStringIndex + 1) % strings.length;

            setTimeout(function () {
                typed.destroy();
                
                setTimeout(typeNextString,1);
            }, 1000);
        },
    });
}


typeNextString();