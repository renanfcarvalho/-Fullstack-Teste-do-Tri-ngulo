import {
    MongoClient as mongoClient
} from "mongodb";
mongoClient.connect("mongodb://localhost/TesteTriangulo")
    .then(conn => global.conn = conn.db("TesteTriangulo"))
    .catch(err => console.log(err))
import {
    Router
} from 'express';
var router = Router();

var array = [];
var arr = [];
var altura = 0;
var aux = 0;
var getBtn = document.getElementById('myBtn');

getBtn.onclick = function() {

    var retorna = getTheData();
    exports.get

}

// função que pega os dados digitados do triângulo armazena em um vetor 
//e retorna o formato do array especificado para futura manipulação e a altura dele.

function getTheData() {
    var getTheDataname = getTheData.name;
    var getDataperformanceIni = performance.now();
    var valor = $("#valor").val();
    if (valor != "" && valor != undefined) {
        array.push(valor);
    } else {
        var getDataperformanceFim = performance.now() - getDataperformanceIni;
        return alert("Digite valores.")
    }
    if (aux == altura) {
        var tamanho = array.length;
        altura++;
        var arr = array;
        if (tamanho <= 1) {
            aux = 0;
            return (array, altura);


        }
        if (tamanho == 3) {

            var sliced = array.slice(1, 3);
            var spliced = arr.splice(1, 1, sliced);
            aux = 0;
        } else {
            var sliced = arr.slice(tamanho - altura, tamanho);
            var spliced = arr.splice(aux, 1, sliced);
        }
        aux = 0;
        var getDataperformanceFim = performance.now() - getDataperformanceIni;
        console.log(getDataperformanceFim);
        return (array, altura);
    } else {
        aux++
        var getDataperformanceFim = performance.now() - getDataperformanceIni;
        console.log(getDataperformanceFim);
        return (array, altura);
    }

}
var getView = document.getElementById('viewBtn');

//funçao que permite o usuário visualizar os valores digitados

getView.onclick = function(getTheData) {
    viewData(array, altura);
    document.getElementById("view").innerHTML = "";
    document.getElementById("view").innerHTML = viewData(array, altura);
    _viewData(array, altura);

};

//função que manipula o array para ficar no formato multidimensional

function viewData(array, altura) {
    var getviewDataname = viewData.name;
    var viewDataperformanceIni = performance.now();
    var valores = array.slice(0, altura);
    if (valores != "" && valores != undefined) {
        var viewDataperformanceFim = performance.now() - viewDataperformanceIni;
        return valores;
    } else {
        alert("Você precisa digitar valores.");
    }
    var viewDataperformanceFim = performance.now() - viewDataperformanceIni;
}

//função cria triangulo
function makeTableHTML(myArray) {
    var valores = [
        [6],
        [3, 5],
        [9, 7, 1],
        [4, 6, 8, 4]
    ];
    var n = valores.length - 1;
    var result = "<table border=1>";
    for (var i = 0; i <= n; i++) {
        result += "<tr>";
        for (var j = 0; j <= i; j++) {
            result += "<td width='90' align='center'>" + valores[i][j] + "</td>";
        }
        result += "</tr>";
    }
    result += "</table>";


    return result;
}

var valores = [
    [6],
    [3, 5],
    [9, 7, 1],
    [4, 6, 8, 4]
];
var teste = valores.slice(0);

function makeTableHTML(myArray) {
    var n = valores.length - 1;
    var result = "<table border=0>";
    for (var i = 0; i <= n; i++) {
        result += "<tr>";
        for (var j = 0; j <= i; j++) {
            result += "<td id=" + valores[i][j] + " width='90px' align='center' border-color='white'>" + valores[i][j] + "</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
};

function MaxSum(myArray) {

    var n = valores.length;
    var position = [];
    var node = [];
    for (var i = n - 2; i >= 0; i--) {
        for (var j = 0; j <= i; j++) {

            if (valores[i + 1][j] > valores[i + 1][j + 1]) {
                valores[i][j] += valores[i + 1][j];
                position.push([i + 1, j]);
                node.push(valores[i + 1][j]);
            } else {
                valores[i][j] += valores[i + 1][j + 1];
                position.push([i + 1, j + 1]);
                node.push(valores[i + 1][j + 1]);

            }
        }

    }

    return valores[0][0];
};




export default functions;