var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var beginPath = ctx.beginPath.bind(ctx);
var moveTo = ctx.moveTo.bind(ctx);
var lineTo = ctx.lineTo.bind(ctx);
var bezierCurveTo = ctx.bezierCurveTo.bind(ctx);
var fill = ctx.fill.bind(ctx);
var translate = ctx.translate.bind(ctx);
var scale = ctx.scale.bind(ctx);
var save = ctx.save.bind(ctx);
var restore = ctx.restore.bind(ctx);

var normalizeData = function(data, x1, y1, x2, y2) {
  for (var i = 0; i < data.length;) {
    data[i] = (data[i++] - x1) / (x2 - x1);
    data[i] = (data[i++] - y1) / (y2 - y1);
  }
  return data;
};

var drawWrapper = function(drawer) {
  return function(x, y, w, h) {
    save();
    ctx.transform(w, 0, 0, h, x, y);
    beginPath();
    drawer();
    fill();
    restore();
  }
}

var i;
var diamondData = normalizeData([64,1029,269,829,404,611,532,402,645,632,807,834,982,1029,795,1223,650,1430,533,1647,404,1424,267,1222,64,1029],
  0, 402, 1045, 1647);
var drawDiamond = drawWrapper(function(){
  ctx.fillStyle = 'red';
  moveTo(diamondData[0], diamondData[1]);
  for (i = 2; i < diamondData.length;) {
    bezierCurveTo(diamondData[i++], diamondData[i++], diamondData[i++], diamondData[i++], diamondData[i++], diamondData[i++]);
  }
})

var clubData = normalizeData([522,1635,584,1512,629,1385,635,1251,643,1200,612,1200,609,1237,522,1568,56,1478,73,1164,87,911,340,855,472,939,522,970,519,950,491,919,295,700,416,419,680,414,966,430,1039,734,865,911,842,930,795,1001,865,950,1045,826,1289,961,1283,1155,1275,1512,840,1540,744,1239,736,1208,710,1192,719,1248,730,1349,758,1503,834,1635],
  73, 414, 1283, 1635);
var drawClub = drawWrapper(function(){
  ctx.fillStyle = 'black';
  moveTo(clubData[0],clubData[1]);
  for (i = 2; i < clubData.length;) {
    bezierCurveTo(clubData[i++], clubData[i++], clubData[i++], clubData[i++], clubData[i++], clubData[i++]);
  }
})

var heartData = normalizeData([330,404,490,394,573,530,589,638,599,655,605,650,608,637,616,499,740,386,854,401,1040,404,1153,611,1122,756,1076,971,967,1100,880,1233,781,1370,648,1569,605,1664,605,1664,470,1459,294,1217,176,1055,84,879,73,728,63,586,134,431,330,404],
  73, 401, 1122, 1664);
var drawHeart = drawWrapper(function(){
  ctx.fillStyle = 'red';
  moveTo(heartData[0], heartData[1]);
  for (i = 2; i < heartData.length;) {
    bezierCurveTo(heartData[i++], heartData[i++], heartData[i++], heartData[i++], heartData[i++], heartData[i++]);
  }
})

var spadeData = normalizeData([493,1252,493,1213,459,1213,462,1241,459,1387,334,1460,242,1444,102,1416,58,1278,60,1197,63,944,318,759,547,437,714,728,990,957,1006,1181,1030,1481,649,1592,594,1244,592,1221,563,1207,566,1244,573,1338,560,1380,670,1613,670,1613,388,1613,388,1613,451,1504,488,1369,493,1252],
  60, 437, 1006, 1613);
var drawSpade = drawWrapper(function(){
  ctx.fillStyle = 'black';
  moveTo(spadeData[0], spadeData[1]);
  for (i = 2; i < spadeData.length;) {
    bezierCurveTo(spadeData[i++], spadeData[i++], spadeData[i++], spadeData[i++], spadeData[i++], spadeData[i++]);
  }
})

drawDiamond(100, 100, 100, 100)
drawSpade(0, 100, 100, 100);
drawClub(0, 200, 100, 100)
drawHeart(100, 200, 100, 100)
