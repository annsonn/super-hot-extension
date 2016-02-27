var isOverlayVisible = false;

var showOverlay = function(){
    isOverlayVisible = true;
    var overlay = document.createElement('div');
    overlay.id = "SUPERHOT-OVERLAY";
    overlay.className = 'super-hot-overlay';
    overlay.innerHTML= "<div class=\'super-hot-text\'><strong>SUPER</strong>HOT</div>";
    document.body.appendChild(overlay);

    setTimeout(hideOverlay, 20000);
};

var hideOverlay = function() {
  var overlay = document.getElementById("SUPERHOT-OVERLAY");
  if (overlay != null) {
    document.body.removeChild(overlay);
  }
};