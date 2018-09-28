var r1 = [1540, 1130, 1580, 1105];
var r2 = [2010, 1168, 2305, 4102];
var r3 = [2450, 1847, 2710, 2391];
var r4 = [1845, 1491, 1284, 1575];
var r5 = [2120, 1767, 1599, 3888];
var textDisplay;

var $ = function (id) {
	return document.getElementById(id);
}
window.onload = function () {

  // Quarter sales
  $('show_quarter').addEventListener('click', function(e) {
    textDisplay = "Sales by Quarter\n";
    var total = 0;
    for (var i=0; i < 4; i++) {
      total = r1[i] + r2[i] + r3[i] + r4[i] + r5[i];
      textDisplay  += "Q" + (i+1) + ": " + total + "\n";
    }
    $('results').value = textDisplay;
  });

  // Region sales
  $('show_region').addEventListener('click', function(e) {
    textDisplay = "Sales by Region\n";
    var region1 = r1[0] + r1[1] + r1[2] + r1[3];
    textDisplay += "Region 1: " + region1 + "\n";

    var region2 = r2[0] + r2[1] + r2[2] + r2[3];
    textDisplay += "Region 2: " + region2 + "\n";

    var region3 = r3[0] + r3[1] + r3[2] + r3[3];
    textDisplay += "Region 3: " + region3 + "\n";

    var region4 = r4[0] + r4[1] + r4[2] + r4[3];
    textDisplay += "Region 4: " + region4 + "\n";

    var region5 = r5[0] + r5[1] + r5[2] + r5[3];
    textDisplay += "Region 5: " + region5 + "\n";

    $('results').value = textDisplay;
  });

  // Quarter sales
  $('show_total').addEventListener('click', function(e) {
    var total = 0;

    for (var i=0; i < 4; i++) {
      total += r1[i] + r2[i] + r3[i] + r4[i] + r5[i];
    }
    $('results').value = "Total sales: " + total;
  });
}


