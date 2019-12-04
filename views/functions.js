

//função cria triangulo
function makeTableHTML(myArray ) {
    var valores = [[6],[3,5],[9,7,1],[4,6,8,4]];
    var n = valores.length-1;
    var result = "<table border=1>";
for(var i=0; i<=n; i++) {
    result += "<tr>";
    for(var j=0; j<=i; j++){
        result += "<td width='90' align='center'>"+valores[i][j]+"</td>";
    }
    result += "</tr>";
}
result += "</table>";


return result;
}
