var showOverlay = function(){
  var overlay = document.createElement('div');
  overlay.id = "SUPERHOT-OVERLAY";
  overlay.className = 'overlay';
  overlay.innerHTML= "<div class=\'text\'><strong>SUPER</strong>HOT</div>";

  document.body.appendChild(overlay);
  setTimeout(removeOverlay, 20000);
};

var removeOverlay = function() {
  var overlay = document.getElementById("SUPERHOT-OVERLAY");
  document.body.removeChild(overlay);
};