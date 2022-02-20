(function(c, u, r, p, o, s) {
  u = c[u] = {};
  u[r] = 0;
  u[p] = 0;
  u[o] = 0;
  u[s] = 0;
  document.addEventListener('mousemove', function(e) {
    u[r] = e[r];
    u[p] = e[p];
    u[o] = e[r] + c.scrollX;
    u[s] = e[p] + c.scrollY;
  });
  c.addEventListener('scroll', function() {
    u[o] = u[r] + c.scrollX;
    u[s] = u[p] + c.scrollY;
  });
  })(window, 'curPos', 'clientX', 'clientY', 'viewportX', 'viewportY');
document.addEventListener('click', function(e) {
  console.log({
    "x": curPos.clientX,
    "y": curPos.clientY,
  });
var canvas = document.getElementById("zone_de_dessin");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var x = curPos.clientX;
var y = curPos.clientY;
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.beginPath();
ctx.arc(x, y, 5, 0, Math.PI * 2, true);
ctx.fill();

});
