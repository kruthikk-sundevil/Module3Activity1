const db = require('../config/db.manager');
exports.getAlladdress = function (req, res) {
const addressProduct = db.getaddress().then(results=>{
console.log(results);
res.status(200).json({
status: 'successfull',
data: results.recordsets[0]
}); // send all the data
});
}
exports.getaddressByID = function( req, res){
const {id} = req.params; // get id
res.status(200).json({
status: 'no implemented'
});
}
exports.createNewaddress = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get (attribute)
res.status(200).json({
status: 'no implemented'
});
}
exports.patchaddressById = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)

const {id} = req.params;// get id (attribute)
res.status(200).json({
status: 'no implemented'
});
}
exports.deleteaddressByID = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get id
res.status(200).json({
status: 'no implemented'
});
}