var ctx = document.getElementById("canvas").getContext("2d"), faces = ['J', 'Q', 'K'], index, z, y, x;
ctx.font = '2px serif';
ctx.lineWidth = 0.5;

function normalizeData(data, x1, y1, x2, y2) {
  for (index = 0; index < data.length;) {
    data[index] = (data[index++] - x1) / (x2 - x1);
    data[index] = (data[index++] - y1) / (y2 - y1);
  }
  return data;
}

function drawWrapper(color, data) {
  return function(x, y, s) {
    ctx.save();
    ctx.transform(s, 0, 0, s, x, y);
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
  drawWrapper(null, normalizeData([522,1635,584,1512,629,1385,635,1251,643,1200,612,1200,609,1237,522,1568,56,1478,73,1164,87,911,340,855,472,939,522,970,519,950,491,919,295,700,416,419,680,414,966,430,1039,734,865,911,842,930,795,1001,865,950,1045,826,1289,961,1283,1155,1275,1512,840,1540,744,1239,736,1208,710,1192,719,1248,730,1349,758,1503,834,1635], 73, 414, 1283, 1635)),
  drawWrapper('red', normalizeData([64,1029,269,829,404,611,532,402,645,632,807,834,982,1029,795,1223,650,1430,533,1647,404,1424,267,1222,64,1029], 0, 402, 1045, 1647)),
  drawWrapper(null, normalizeData([493,1252,493,1213,459,1213,462,1241,459,1387,334,1460,242,1444,102,1416,58,1278,60,1197,63,944,318,759,547,437,714,728,990,957,1006,1181,1030,1481,649,1592,594,1244,592,1221,563,1207,566,1244,573,1338,560,1380,670,1613,670,1613,388,1613,388,1613,451,1504,488,1369,493,1252], 60, 437, 1006, 1613)),
  drawWrapper('red', normalizeData([330,404,490,394,573,530,589,638,599,655,605,650,608,637,616,499,740,386,854,401,1040,404,1153,611,1122,756,1076,971,967,1100,880,1233,781,1370,648,1569,605,1664,605,1664,470,1459,294,1217,176,1055,84,879,73,728,63,586,134,431,330,404], 73, 401, 1122, 1664))
];
for (y = 0; y < 13;) {
  x = y++ * 100;
  for (x = 0; x < 4;)
    drawCard(x, x * 140, 10, y, suits[x++]);
}
