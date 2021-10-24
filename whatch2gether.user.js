// ==UserScript==
// @name         Whatch2Gether inline volume
// @description  Brings the volume bar into the player settings.
// @version      1.1.5
// @author       xPumaa
// @license      GPL-3.0; http://www.gnu.org/licenses/gpl-3.0.txt
// @namespace    https://github.com/xPumaa/whatch2gether-inline-volume
// @updateURL    https://github.com/xPumaa/whatch2gether-inline-volume/raw/master/whatch2gether.user.js
// @icon         https://www.w2g.tv/static/w2g.ico
// @match        http*://w2g.tv/static/apps/player/npaplayer/*
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    var volMute = null;
    $('#volume_button').click(function() {
        if (volMute === null) { volMute = W2gNPA.player.volume; W2gNPA.player.volume = 0; $("#volume_slider")[0].value = W2gNPA.player.volume; }
        else { $("#volume_slider")[0].value = volMute * 100; W2gNPA.player.volume = volMute; volMute = null; }
    });

    $("#player_controls").append($("#volume_slider")[0].parentElement.parentElement);
    $("#volume_slider")[0].style.transform = "none";
    $("#volume_slider")[0].parentElement.parentElement.className = "";
    $("#volume_slider")[0].parentElement.style.width = "150px";
    $("#volume_slider")[0].parentElement.style.height = "20px";

    $("#player_controls").append($("div[title='Toggle Fullscreen']"));
    $("div[title='Toggle Fullscreen']")[0].className= "item";
    $("div[title='Toggle Fullscreen']")[0].style.color = "rgba(255,255,255,0.9)";
    $("div[title='Toggle Fullscreen']")[0].style.marginTop = "1px";
    $("div[title='Toggle Fullscreen']")[0].style.backgroundColor = "transparent";
})();
