// ==UserScript==
// @name         Whatch2Gether inline volume
// @description  Brings the volume bar into the player settings.
// @version      1.0
// @author       xPumaa
// @license      GPL-3.0; http://www.gnu.org/licenses/gpl-3.0.txt
// @namespace    https://github.com/xPumaa/whatch2gether-inline-volume
// @updateURL	   https://github.com/xPumaa/whatch2gether-inline-volume/raw/master/whatch2gether.user.js
// @icon         https://www.watch2gether.com/static/w2g.ico
// @match        http*://www.watch2gether.com/rooms/*
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    $(".player-volume")[0].parentElement.className = ""
    $(".player-volume")[0].children[0].children[0].style.transform = "none"
    $(".player-volume")[0].children[0].children[0].style.height = "10px"
    $(".player-volume")[0].children[0].style.width = "150px"
    $(".player-volume")[0].children[0].style.height = "10px"
    $(".player-volume")[0].style.backgroundColor = "transparent"
})();
