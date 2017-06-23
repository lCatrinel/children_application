/**
 * Created by Kitty on 6/5/2017.
 */
$(document).ready(function(){

// CSSMap;
    $("#map-europe").CSSMap({
        "size": 750,
        "tooltips": "floating-top-center",
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


function isValidCombination(countryClassName, flag) {
    if (countryClassName == "eu7" && flag == "BulgariaFlag") {
        return true;
    }
    if (countryClassName == "eu13" && flag == "FranceFlag") {
        return true;
    }
    if (countryClassName == "eu14" && flag == "FinlandFlag") {
        return true;
    }
    if (countryClassName == "eu16" && flag == "GermanyFlag") {
        return true;
    }
    if (countryClassName == "eu19" && flag == "IcelandFlag") {
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
