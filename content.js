var isOverlayVisible = false;

var showOverlay = function(){
  if (!isOverlayVisible) {
    isOverlayVisible = true;
    var overlay = document.createElement('div');
    overlay.id = "SUPERHOT-OVERLAY";
    overlay.className = 'super-hot-overlay';
    overlay.innerHTML= "<div class=\'super-hot-text\'><strong>SUPER</strong>HOT</div>";

    document.body.appendChild(overlay);
    setTimeout(removeOverlay, 20000);
  }
};

var removeOverlay = function() {
  var overlay = document.getElementById("SUPERHOT-OVERLAY");
  document.body.removeChild(overlay);
  isOverlayVisible = false;
};