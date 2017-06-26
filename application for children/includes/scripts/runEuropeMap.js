/**
 * Created by Kitty on 6/5/2017.
 */
$(document).ready(function () {

// CSSMap;
    $("#map-europe").CSSMap({
        "size": 750,
        "tooltips": "false",
        "responsive": "auto",
        "agentsList": {
            "enable": true,
            "agentsListId": "#demo-agents",
            "agentsListSpeed": 0,
            "agentsListOnHover": false
        }
    });
// END OF THE CSSMap;

    //TODO remove this hack
    //it is used to remove the event listeners from the spans, so that no country can be selected
    //i hope the map loads in 0.9 sec...
    setTimeout(function () {
        $('span.m').each(function (i, obj) {
            $(obj).unbind("click");
        });
        $('.active-region').removeClass("active-region");
    }, 900);
});

//this map contains the countries classes (euxy) and the flags for them, with the img path
var countriesMap = {
    "eu13": ["FranceFlag", "../includes/flags/Flag_of_France.svg.png"],
    "eu14": ["FinlandFlag", "../includes/flags/Flag_of_Finland.svg.png"],
    "eu16": ["GermanyFlag", "../includes/flags/Flag_of_Germany.svg.png"],
    "eu22": ["ItalyFlag", "../includes/flags/Flag_of_Italy.jpg"],
    "eu34": ["NorwayFlag", "../includes/flags/Flag_of_Norway.jpg"],
    "eu35": ["PolandFlag", "../includes/flags/Flag_of_Poland.jpg"],
    "eu37": ["RomaniaFlag", "../includes/flags/Flag_of_Romania.svg.png"],
    "eu38": ["RussianFederationFlag", "../includes/flags/Flag_of_Russia.jpg"],
    "eu42": ["SpainFlag", "../includes/flags/Flag_of_Spain.png"],
    "eu43": ["SwedenFlag", "../includes/flags/Flag_of_Sweden.svg.png"],
    "eu45": ["TurkeyFlag", "../includes/flags/Flag_of_Turkey.jpg"],
    "eu46": ["UkraineFlag", "../includes/flags/Flag_of_Ukraine.jpg"],
    "eu47": ["UnitedKingdomFlag", src = "../includes/flags/Flag_of_the_United_Kingdom.svg.png"]
};

//MODAL starts here
// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// for storing events so that they can be disabled
var events = {};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function displayModal(event, country) {

    if (modal.style.display == "block") {
        return;
    }

    //open with a delay, so that the user has time to hover over countries
    var delay = setTimeout(function () {
            //new items should be inserted here
            var grandparent = event.target.parentElement.parentElement;

            //check if there is a flag, and if so, remove it
            var df = document.getElementById("dialogFlag");
            if (df != null) {
                df.parentElement.removeChild(df);
            }

            //get the matching flag and insert it dynamically
            var toInsert = getImageTag(grandparent.className.split(' ')[0]);

            //insert it
            modal.firstElementChild.appendChild(toInsert);

            //display it
            modal.style.display = "block";

            //also, disable click, hover, etc on background
            $('#map-europe').addClass("not-active");

            var audio = new Audio("../includes/sounds/" + country + ".wav");
            audio.play();

        },
        800);
    //cancel the timeout if the user has hovered out
    this.onmouseout = function () {
        clearTimeout(delay);

        //also, enable click, hover, etc on background
        $('#map-europe').removeClass("not-active");
    }
}

function closeModal() {
    modal.style.display = "none";
}


function getImageTag(className) {
    var img = document.createElement('img');
    img.id = "dialogFlag";
    img.className = 'img-in-modal-dialog';
    img.src = countriesMap[className][1];
    return img;
}

//MODAL ends here

//drag and drop starts here

var flagToDragAndDrop;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    //since this doesn't work in FF...
    //event.dataTransfer.setData("text/plain", event.target.id);
    flagToDragAndDrop = event.target.id;
}

function drop(event) {
    event.preventDefault();

    var grandparent = event.target.parentElement.parentElement;

    //since this doesn't work in FF...
    //var flagIdToRemove = event.dataTransfer.getData("text");
    var flagIdToRemove = flagToDragAndDrop;

    //check if valid
    if (isValidCombination(grandparent.className, flagIdToRemove)) {
        //hide dragged flag
        $("#" + flagIdToRemove).animate({opacity: 0}); //.fadeOut(); //.hide()
        //color map that it was filled
        $(grandparent).addClass("correctly-dropped");
        var audio = new Audio("../includes/sounds/success.wav");
        audio.play();
    } else {
        var audio = new Audio("../includes/sounds/error.wav");
        audio.play();
    }
}

function disableDrop(event) {
    event.preventDefault();
    return false;
}

function disabledDrop(event) {
    event.preventDefault();
    return false;
}

function isValidCombination(countryClassName, flag) {
    return countriesMap[countryClassName.split(' ')[0]][0] == flag;
}