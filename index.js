var ctx = document.getElementById("canvas").getContext("2d"), faces = ['J', 'Q', 'K'], index, z, w, y;
ctx.font = '2px serif';
ctx.lineWidth = 0.5;

function drawWrapper(color, data) {
  return function(x, y, s) {
    ctx.save();
    ctx.transform(s / 100, 0, 0, s / 100, x, y);
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(data[0], data[1]);
    for (index = 2; index < data.length;)
      ctx.bezierCurveTo(data[index++], data[index++], data[index++], data[index++], data[index++], data[index++])
    ctx.fill();
    ctx.restore();
  }
}

function drawCard(x, y, s, number, suitDrawer) {
  ctx.save();
  ctx.transform(s, 0, 0, s, x, y);
  ctx.strokeRect(0, 0, 10, 14);

  if (number <= 10) {
    for (z = 0; z < number;) {
      suitDrawer(z++ % 2 * 3 + 2.5, 10 / number * z, 2);
    }
  } else {
    number = faces[number - 11];
    ctx.fillText(number, 4, 7);
  }

  ctx.fillText(number, 0.5, 2);
  suitDrawer(0.5, 2, 1);
  ctx.transform(-1, 0, 0, -1, 10, 14);
  ctx.fillText(number, 0.5, 2);
  suitDrawer(0.5, 2, 1);

  ctx.restore();
}

/* SUITS
 * 0 = CLUBS
 * 1 = DIAMONDS
 * 2 = SPADES
 * 3 = HEARTS
 */
var suits = [
  drawWrapper(null, [37,100,42,90,46,79,47,68,47,64,45,64,45,67,37,94,0,87,0,61,2,41,22,36,33,43,37,45,37,45,35,41,19,23,29,0,50,0,74,1,80,26,66,41,64,42,60,48,66,44,80,34,100,45,100,60,99,90,65,92,56,67,55,65,53,64,54,68,54,76,57,88,63,100,63,100,37,100,37,100]),
  drawWrapper('red', [15,50,30,35,40,15,50,0,60,20,70,35,85,50,70,65,60,80,50,100,40,80,30,65,15,50,15,50,15,50,15,50]),
  drawWrapper(null, [46,69,46,66,42,66,42,68,42,81,29,87,19,85,4,83,0,72,0,65,0,43,27,27,51,0,69,25,98,44,100,63,100,89,62,98,56,69,56,67,53,66,53,69,54,77,53,80,64,100,64,100,35,100,35,100,41,91,45,79,46,69]),
  drawWrapper('red', [25,0,40,0,47,10,48,19,49,20,50,20,50,18,51,8,63,0,73,0,91,0,102,16,99,28,94,45,84,55,76,66,67,77,54,93,50,100,50,100,37,84,20,65,9,52,1,38,0,26,0,14,5,2,25,0,25,0,25,0,25,0])
];
for (w = 0; w < 13;) {
  var x = w++ * 100;
  for (y = 0; y < 4;)
    drawCard(x, y * 140, 9, w, suits[y++]);
}
