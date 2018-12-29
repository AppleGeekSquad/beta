var websitesArray = ["https://www.inherentlyfunny.com/","https://www.anothersadtrombone.com/","https://www.plspetdoge.com/","https://www.randomgoat.com/","https://noot.space/","https://www.dontpopit.com/","https://www.iamaturtle.org/","https://remoji.com/","https://www.partridgegetslucky.com/","https://www.flyingoperapigs.com/","https://www.wtfshouldidowithmylife.com/","https://www.clicktoremove.com/","https://www.koalastothemax.com/","https://www.tacospin.com/","https://www.beesbeesbees.com/","https://www.leaf.com/","https://www.salmonofcapistrano.com/","https://www.d-e-f-i-n-i-t-e-l-y.com/","https://www.lacquerlacquer.com/","https://www.corgiorgy.com/","https://www.emergencycompliment.com/","https://www.openthiswindow.com/","https://instantostrich.com/","https://www.hectorsalamanca.com/","https://www.corndogoncorndog.com/","https://www.freeonlineflashlight.com/","https://drumsound.net/","https://www.doughnutkitten.com/","https://justflipacoin.com/","https://nooooooooooooooo.com/","https://littlealchemy.com/","https://www.googlefeud.com/","https://mrdoob.com/lab/javascript/checkbox_painter/","https://www.fliptext.org/","https://www.mazegenerator.net/","https://www.youtube.com/embed/6MYAGyZlBY0","https://sradiooooo.com/"];

function random(){
    document.getElementById('randomWebsiteiFrame').src = String(websitesArray[(Math.floor(Math.random() * websitesArray.length) + 1) - 1]);
    document.getElementById('openSourceSite').style.visibility = "visible";
};

function refreshNumberOfSites(){
    var numberOfSites = websitesArray.length;

    document.getElementById('numberOfSites').innerHTML = numberOfSites;
}

function openSourceSite(){
    window.open(document.getElementById('randomWebsiteiFrame').src);
}