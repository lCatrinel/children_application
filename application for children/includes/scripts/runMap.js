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

    /* disable click on map */
    // var elements = $('li > span > span');
    // elements.removeEventListener("click", function () {
    //     //this is the handler
    // }, true);

    $('span.m').click(function () {
        alert("clicked");
        return false;
    });
});

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("flag", ev.target.id);
}

function drop(ev) {
    //alert("dropped" + ev.dataTransfer.getData("flag"));
    var grandparent = ev.target.parentElement.parentElement;
    console.log("dropped to " +  grandparent.innerText)
}

function disableDrop(event) {
    event.preventDefault();
    return false;
}

function disabledDrop(event) {
    event.preventDefault();
    return false;
}
