

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

var valores = [[6],[3,5],[9,7,1],[4,6,8,4]];
        var teste =valores.slice(0);
        function makeTableHTML(myArray ) {
        var n = valores.length-1;
        var result = "<table border=0>";
        for(var i=0; i<=n; i++) {
        result += "<tr>";
        for(var j=0; j<=i; j++){
            result += "<td id="+valores[i][j]+" width='90px' align='center' border-color='white'>"+valores[i][j]+"</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
    };
function MaxSum(myArray){

	var n = valores.length;
    var position = [];
    var node = [];
     for (var i= n-2; i>=0; i--) 
     { 	
        for (var j=0; j<=i; j++) 
        { 
                
            if (valores[i+1][j] > valores[i+1][j+1]) {
                valores[i][j] += valores[i+1][j] ;
                position.push([i+1,j]);
                node.push(valores[i+1][j]);
            }else{          
                valores[i][j] += valores[i+1][j+1];
                position.push([i+1,j+1]);
                node.push(valores[i+1][j+1]);
                
            }
        }
     
     }

     return valores[0][0];
    } ;   
    



