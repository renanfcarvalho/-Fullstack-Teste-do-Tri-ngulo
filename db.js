var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost/TesteTriangulo")
            .then(conn => global.conn = conn.db("TesteTriangulo"))
            .catch(err => console.log(err))

function findAll(callback){  
    global.conn.collection("triangulo").find({}).toArray(callback);
}


function insert(triangulo, callback){
    global.conn.collection("triangulo").insertOne(triangulo, callback);
}
function insertRegistroHome(registro, callback) {
    global.conn.collection("registro").insertOne(registro, callback);
}

function insertRegistroDraw(registro, callback) {
    global.conn.collection("registro").insertOne(registro, callback);
}
function findOne(callback){  
    global.conn.collection("triangulo").findOne({},callback);
    
}



module.exports = {findAll,insert,findOne,insertRegistroDraw,insertRegistroHome}