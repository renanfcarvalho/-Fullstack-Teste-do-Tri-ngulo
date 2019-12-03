var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost/TesteTriangulo")
            .then(conn => global.conn = conn.db("TesteTriangulo"))
            .catch(err => console.log(err))

function findAll(callback){  
    global.conn.collection("triangulo").find({}).toArray(callback);
}


function insert(triangulo, callback){
    global.conn.collection("triangulo").insert(triangulo, callback);
}

var ObjectId = require("mongodb").ObjectId;
function findOne(id, callback){  
    global.conn.collection("triangulo").find(new ObjectId(id)).toArray(callback);
}

module.exports = {findAll,insert,findOne}