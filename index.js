var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var beginPath = ctx.beginPath.bind(ctx);
var moveTo = ctx.moveTo.bind(ctx);
var lineTo = ctx.lineTo.bind(ctx);
var bezierCurveTo = ctx.bezierCurveTo.bind(ctx);
var fill = ctx.fill.bind(ctx);
var translate = ctx.translate.bind(ctx);

var x1 = 100000, y1 = 100000, x2 = 0, y2 = 0;
var boundingBox = function(x,y) {
  if (x < x1) {x1 = x}
  if (y < y1) {y1 = y}
  if (x > x2) {x2 = x}
  if (y > y2) {y2 = y}
}

var normalizeData = function(data, x1, y1, x2, y2) {
  for (var i = 0; i < data.length;) {
    data[i] = (data[i++] - x1) / (x2 - x1);
    data[i] = (data[i++] - y1) / (y2 - y1);
  }
  return data;
};

var i;
var diamondData = [64,1029,269,829,404,611,532,402,645,632,807,834,982,1029,795,1223,650,1430,533,1647,404,1424,267,1222,64,1029];
var drawDiamond = function(){
  ctx.fillStyle = 'red';
  beginPath();
  moveTo(diamondData[0], diamondData[1]);
  for (i = 2; i < diamondData.length;) {
    bezierCurveTo(diamondData[i++], diamondData[i++], diamondData[i++], diamondData[i++], diamondData[i++], diamondData[i++]);
  }
  fill();
}

var clubData = [522,1635,584,1512,629,1385,635,1251,643,1200,612,1200,609,1237,522,1568,56,1478,73,1164,87,911,340,855,472,939,522,970,519,950,491,919,295,700,416,419,680,414,966,430,1039,734,865,911,842,930,795,1001,865,950,1045,826,1289,961,1283,1155,1275,1512,840,1540,744,1239,736,1208,710,1192,719,1248,730,1349,758,1503,834,1635];
var drawClub = function(){
  ctx.fillStyle = 'black';
  beginPath();
  moveTo(clubData[0],clubData[1]);
  for (i = 2; i < clubData.length;) {
    bezierCurveTo(clubData[i++], clubData[i++], clubData[i++], clubData[i++], clubData[i++], clubData[i++]);
  }
  fill();
}

var heartData = [330,404,490,394,573,530,589,638,599,655,605,650,608,637,616,499,740,386,854,401,1040,404,1153,611,1122,756,1076,971,967,1100,880,1233,781,1370,648,1569,605,1664,605,1664,470,1459,294,1217,176,1055,84,879,73,728,63,586,134,431,330,404];
var drawHeart = function(){
  ctx.fillStyle = 'red';
  beginPath();
  moveTo(heartData[0], heartData[1]);
  for (i = 2; i < heartData.length;) {
    bezierCurveTo(heartData[i++], heartData[i++], heartData[i++], heartData[i++], heartData[i++], heartData[i++]);
  }
  fill();
}

var spadeData = normalizeData([493,1252,493,1213,459,1213,462,1241,459,1387,334,1460,242,1444,102,1416,58,1278,60,1197,63,944,318,759,547,437,714,728,990,957,1006,1181,1030,1481,649,1592,594,1244,592,1221,563,1207,566,1244,573,1338,560,1380,670,1613,670,1613,388,1613,388,1613,451,1504,488,1369,493,1252],
  60, 437, 1006, 1613);
var drawSpade = function() {
  ctx.fillStyle = 'black';
  beginPath();
  moveTo(spadeData[0], spadeData[1]);
  for (i = 2; i < spadeData.length;) {
    bezierCurveTo(spadeData[i++], spadeData[i++], spadeData[i++], spadeData[i++], spadeData[i++], spadeData[i++]);
  }
  fill();
}
// ctx.scale(1000, 1000)
drawSpade();
drawHeart()
// 60 437 1006 1613
console.log(x1, y1, x2, y2);
