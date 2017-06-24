/**
 * Created by Kitty on 6/5/2017.
 */
$(document).ready(function(){

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
});


//MODAL starts here
// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function displayModal(event) {
    //open with a delay, so that the user has time to hover over countries
    var delay = setTimeout(function () {
        var grandparent = event.target.parentElement.parentElement;
        modal.firstElementChild.lastElementChild.innerText = grandparent.className;
        modal.style.display = "block";
    },
        700);
    //if the user has hovered out
    this.onmouseout = function () {
        clearTimeout(delay);
    }
}
//MODAL ends here

//drag and drop starts here
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("flag", event.target.id);
}

function drop(event) {
    var grandparent = event.target.parentElement.parentElement;

    var flagIdToRemove = event.dataTransfer.getData("flag");

    //check if valid
    if (isValidCombination(grandparent.className, flagIdToRemove)) {
        $("#" + flagIdToRemove).animate({ opacity: 0 }); //.fadeOut(); //.hide()
    } else {
        alert("invalid drop");
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


//TODO if the clickable map remains, use countryClassName.indexOf("...") !== -1,
// because there may be cases, where the class looks like "eu7 active-region",
// and then the drop is invalid
function isValidCombination(countryClassName, flag) {
    if (countryClassName == "eu13" && flag == "FranceFlag") {
        return true;
    }
    if (countryClassName == "eu14" && flag == "FinlandFlag") {
        return true;
    }
    if (countryClassName == "eu16" && flag == "GermanyFlag") {
        return true;
    }
    if (countryClassName == "eu22" && flag == "ItalyFlag") {
        return true;
    }
    if (countryClassName == "eu34" && flag == "NorwayFlag") {
        return true;
    }
    if (countryClassName == "eu35" && flag == "PolandFlag") {
        return true;
    }
    if (countryClassName == "eu37" && flag == "RomaniaFlag") {
        return true;
    }
    if (countryClassName == "eu38" && flag == "RussianFederationFlag") {
        return true;
    }
    if (countryClassName == "eu42" && flag == "SpainFlag") {
        return true;
    }
    if (countryClassName == "eu43" && flag == "SwedenFlag") {
        return true;
    }
    if (countryClassName == "eu45" && flag == "TurkeyFlag") {
        return true;
    }
    if (countryClassName == "eu46" && flag == "UkraineFlag") {
        return true;
    }
    if (countryClassName == "eu47" && flag == "UnitedKingdomFlag") {
        return true;
    }
}
