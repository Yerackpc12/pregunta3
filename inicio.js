function miFuncion(){
	readTextFile("data.json", function(text){
    var data = JSON.parse(text);
    var cadena = '';
    console.log(data);
    for (var i = 0; i<data.length; i++){
    	cadena += '<tr><th scope = "row">' + data[i].id + '</th><th scope = "row">' + data[i].name + '</th><th scope = "row">' + data[i].nit + '</th><th scope = "row">' + data[i].date + '</th><th scope = "row">' + data[i].dir + '</th><th><button type="button" class="btn btn-warning">Editar</button></th><th><button type="button" class="btn btn-danger">Eliminar</button></th></tr>';
    }
    console.log(cadena);
    document.getElementById("tabla").innerHTML = cadena; 
});
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
