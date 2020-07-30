var onURL = "https://maker.ifttt.com/trigger/on/with/key/l76Ckn7K0j7JVQP5lEIzCxIqrtP9lVbiz6LpzaFk1eq";
var offURL = "https://maker.ifttt.com/trigger/off/with/key/l76Ckn7K0j7JVQP5lEIzCxIqrtP9lVbiz6LpzaFk1eq";

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.DONE);
}
function on(){
    httpGet('https://maker.ifttt.com/trigger/on/with/key/l76Ckn7K0j7JVQP5lEIzCxIqrtP9lVbiz6LpzaFk1eq');
}
function off(){
    httpGet('https://maker.ifttt.com/trigger/off/with/key/l76Ckn7K0j7JVQP5lEIzCxIqrtP9lVbiz6LpzaFk1eq');
}