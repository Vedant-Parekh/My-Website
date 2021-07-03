var script = [
    "Hello! My name is Vedant!",
    "This is the first website I've created",
    "Click the 'About me' button",
    "Or you could view cat pictures instead",
    "Don't worry I won't feel too bad",
    "Go on, make a decision...",
    "You really are indecisive aren't you",
    "It's just two choices!",
    "Go on, learn more about me."
];

var delay = [1000, 1000, 1000, 1000, 1000, 3500, 1000, 1000, 1000];

function write() {
    var charno = 0, i = 0;
    var end = setInterval(function(){
        var output = script[i].substring(0, charno+1);
        document.getElementById("text").innerHTML = output;
        charno++;
        if(charno == script[i].length)
        {
            setTimeout(function(){
                var dlt = setInterval(function() {
                    charno--;
                    var output = script[i].substring(0, charno+1);
                    document.getElementById("text").innerHTML = output;
                    if(charno==-1)
                    {
                        i++;
                        clearInterval(dlt);
                    }
                }, 25);
            }, delay[i]);
        }
    }, 100);
}

var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        write();
    }
}, 100);