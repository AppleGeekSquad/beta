let errorCode = null;

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = false;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }

  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);

  if (/Android/i.test(navigator.userAgent)) {
      //code that executes if you're using an android Device
      document.getElementById('header').style.top = "0px";
      document.getElementById('subheader').style.top = "100px";
      document.getElementById("particles-js").id = "no-particle";
  } else if (/Mobi/.test(navigator.userAgent)) {
      //code that executes if you're using an iOS Device
      document.getElementById('header').style.top = "0px";
      document.getElementById('subheader').style.top = "100px";
      document.getElementById("particles-js").id = "no-particle";
  } else if(/Mobi/.test(navigator.userAgent) || /Android/i.test(navigator.userAgent) != true){
      //code that executes if you're using a computer
      document.getElementById('header').style.top = "0px";
      document.getElementById('subheader').style.top = "90px";
  }else{
    errorCode = 100;
    errorAlert();
  }
};
function errorAlert(){
  alert('Error code ' + errorCode + '. Please clear your browser cache and reload the webpage');
}