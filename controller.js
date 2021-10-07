function myFunction() {
	var id = document.getElementById("id").value;
	var name = document.getElementById("name").value;
	var nit = document.getElementById("nit").value;
	var date = document.getElementById("date").value;
	var direccion = document.getElementById("direccion").value;
	readTextFile("data.json", function(text){
    var data = JSON.parse(text);
    data[data.length] = {
      "id": id,
      "name": name,
      "nit": nit,
      "date": date,
      "dir": direccion
    };
    console.log(data);
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}