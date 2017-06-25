/**
 * Created by Kitty on 6/24/2017.
 */
$(document).ready(function(){

// CSSMap;
    $("#map-continents").CSSMap({
        "size": 850,
        "responsive": "auto"
    });
// END OF THE CSSMap;

});

function playSound(continent) {
    var audio = new Audio("../includes/sounds/" + continent + ".wav");
    audio.play();
    console.log("yay: " + continent );
}