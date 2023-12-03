var fs = require("fs");
fs.readFile("input.txt", "utf8", processFile);
var teste = "Testando 3";
console.log(teste);
function processFile(err, data) {
    if (err) throw "Deu erro";
    console.log(data);
    var start_n = -1;
    var end_n = -1;
    var full_n = -1;
    var total_sum = 0;
    for(var i in data){
        var char = data.charAt(i);
        if (char === "\n") {
            full_n = +"".concat(start_n).concat(end_n);
            total_sum += full_n;
            console.log(full_n);
            start_n = -1;
            end_n = -1;
            full_n = -1;
        } else if (!isNaN(char)) {
            if (start_n === -1) start_n = +char;
            end_n = +char;
        }
        console.log(char);
    }
    console.log("TOTAL SUM", total_sum);
}
