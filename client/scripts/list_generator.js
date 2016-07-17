

console.log('==> here');

var fs = require('fs');

var json = '';

fs.readdir('./../www/img', function(err, items) {

  for (var i=0; i<items.length; i++) {

    var icon_name = items[i].toString().split('.')[0];

     var kvp = '{ "id": "' + icon_name + '", "src": "img/' + icon_name + '.png" }';
    //var kvp = '{ "' + icon_name + '" : "img/' + icon_name + '.png" }';

    if(i==items.length-1){
      json = json + kvp;
    }
    else{
      json = json + kvp + ',';
    }

  }

  json = ' [ ' + json + ' ] ';

  fs.writeFile("./../www/app/icon.json", json, function(err) {
    if(err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });

});


