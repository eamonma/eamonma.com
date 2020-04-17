function shadows() {

  if(!localStorage.getItem("shadows")) {
    localStorage.setItem("shadows", "enabled");
  }

  if (window.matchMedia("(min-width: 600px)").matches && localStorage.getItem("shadows") == "enabled") {
    var mainContainer = document.getElementsByTagName("article")[0];
    var bodySize;
    var elementSize;
    var y;
    var x;

    window.onload = window.onresize = function() {
      bodySize = document.body.getBoundingClientRect();
      elementSize = mainContainer.getBoundingClientRect();
      x = (elementSize.width / 2) + elementSize.left;
      y = (elementSize.height / 2) + elementSize.top;
    }

    window.onmousemove = function(e) {
      var coords = [e.clientX, e.clientY];

      var xO = Math.max(-30, ((-120 * (coords[0] - x) / bodySize.width)));
      var yO = Math.max(-30, ((-120 * (coords[1] - y) / bodySize.width)));
      var c = Math.sqrt((xO * xO) + (yO * yO));

      var boxS = ("rgba(150, 150, 150, 0.8) " + xO + "px " + yO + "px " + Math.max(30, 2 * c) + "px " + Math.max(5, Math.sqrt(c)) + "px;");

      boxS = "box-shadow: " + boxS;

      mainContainer.setAttribute("style", boxS);
    }
  }
}

shadows();
