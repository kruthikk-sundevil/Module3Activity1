const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);
async function getSalesProducts(){
console.log(' Connecting to SQL....... Cloud Server');
let dbContext = await sql.connect(dbConnection);
console.log('The Databse connection was Successful');
console.log('Getting data');
let results = await dbContext.request()
.query(`
SELECT TOP(20)
productId,
name,
productNumber,
color
listPrice
FROM
salesLT.Product
`);
console.log(`Returned SQL results`);
return results;
}
async function getUsers(){
console.log(' Connecting to SQL....... Cloud Server');
let dbContext = await sql.connect(dbConnection);
console.log('The Databse connection was Successful');
console.log('Getting data');
let results = await dbContext.request()
.query(`
SELECT TOP(20)
FirstName,
CompanyName,
Title,
CompanyName,
SalesPerson,
Phone
FROM
salesLT.Customer
`);
console.log(`Returned SQL results`);
return results;
}
async function getaddress(){
console.log(' Connecting to SQL....... Cloud Server');
let dbContext = await sql.connect(dbConnection);
console.log('The Databse connection was Successful');
console.log('Getting data');
let results = await dbContext.request()
.query(`
SELECT TOP(20)
AddressID,
City,
StateProvince,
CountryRegion,
ModifiedDate
FROM
salesLT.Address
`);
console.log(`Returned SQL results`);
return results;
}
async function getSalesOrder(){
console.log(' Connecting to SQL....... Cloud Server');
let dbContext = await sql.connect(dbConnection);
console.log('The Databse connection was Successful');
console.log('Getting data');
let results = await dbContext.request()
.query(`
SELECT TOP(20)
SalesOrderID,
SalesOrderDetailID,
OrderQty,
ProductID,
UnitPriceDiscount
FROM
salesLT.SalesOrderDetail
`);
console.log(`Returned SQL results`);
return results;
}
async function getjoin(){
console.log(' Connecting to SQL....... Cloud Server');
let dbContext = await sql.connect(dbConnection);
console.log('The Databse connection was Successful');
console.log('Getting data');
let results = await dbContext.request()
.query(`
SELECT TOP(20)
SalesLT.Product.ProductID,
SalesLT.Product.Name,
SalesLT.Product.ProductModelID,
SalesLT.ProductModel.Name,
SalesLT.Product.ProductCategoryID,
SalesLT.ProductModelProductDescription.Culture
FROM SalesLT.Product
JOIN SalesLT.ProductModel
ON SalesLT.Product.ProductModelID = SalesLT.ProductModel.ProductModelID
JOIN SalesLT.ProductModelProductDescription
ON SalesLT.Product.ProductCategoryID = SalesLT.ProductModelProductDescription.ProductModelID;
`);
console.log(`Returned SQL results`);
return results;
}


//Export
module.exports = {getSalesProducts :getSalesProducts, getUsers :getUsers, getaddress :getaddress, getSalesOrder :getSalesOrder, getjoin :getjoin};