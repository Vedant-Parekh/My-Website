var i=1;
var entries=0;
var game = 1;
var link = [ 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fp0.pikist.com%2Fphotos%2F833%2F895%2Fkitty-cat-kitten-pet-animal-cute-feline-domestic-young.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F223017%2Fpexels-photo-223017.jpeg%3Fcs%3Dsrgb%26dl%3Dcat-cat-face-kitten-223017.jpg%26fm%3Djpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F07%2F14%2F20%2F21%2Fkitten-1517535_640.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F424147%2Fpexels-photo-424147.jpeg%3Fcs%3Dsrgb%26dl%3Dbaby-cats-cute-424147.jpg%26fm%3Djpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F09%2F01%2F01%2F16%2Ftuxedo-cat-916335_960_720.jpg&f=1&nofb=1'
];

$(document).ready(function(){
    $('.catpics').click(function() {
        $(this).attr('src', link[i]);
        i=(i+1)%5;
    });
    $(".nvb").addClass("navbar-fixed-top");
    $(".hl").on({
        mouseenter: function(){
            $(this).css({"color": "#50c6c6"});
        },
        mouseleave: function(){
            $(this).css({"color": "white"});
        }
    });
});

var data = {};
function updateTable() {
    // alert("Boom");
    var name = document.getElementById('form_name').value;
    if(name != "") {
        var lang = document.getElementById('form_lang').value;
        var prof = document.getElementById('form_prof').value;
        // alert(data[0][0]);
        for(let i=0; i<entries; i++)
        {
            if(data[i][0]==name && data[i][1]==lang)
            {
                alert('Entry for same name and language has been submitted before');
                return;
            }
        }
        data[entries]=[name, lang, prof];
        document.getElementsByTagName('table')[0].innerHTML += "<tr'><td class='text-center'>" + data[entries][0] + "</td><td class='text-center'>" + data[entries][1] + "</td><td class='text-center'>" + data[entries][2] + "</td></tr>";
        entries+=1; 
    } else {
        alert("Please fill the form completely")
    }
}

function back() {
    if(game!=1){
        game = (game-1)%36;
    }
    else{
        game = 36;
    }
    updateGame();
}

function front() {
    game = (game%36)+1;
    updateGame();
}

function updateGame() {
    var name = "../img/chess/m";
    name=name.concat(String(game));
    name=name.concat(".jpg");
    document.getElementById("chessboard").src=name;
}

function GeneralKenobi()
{
    alert("general kenobi");
}