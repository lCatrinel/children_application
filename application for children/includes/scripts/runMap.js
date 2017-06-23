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
    $("#" + flagIdToRemove).animate({ opacity: 0 }); //.fadeOut(); //.hide()
}

function disableDrop(event) {
    event.preventDefault();
    return false;
}

function disabledDrop(event) {
    event.preventDefault();
    return false;
}
