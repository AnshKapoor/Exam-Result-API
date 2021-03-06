
var company;
var ADODB = require('node-adodb');
ADODB.debug = true;
var connection = ADODB.open("Provider=Microsoft.ACE.OLEDB.12.0;Data Source='./Connection/contacts.accdb';Persist Security Info=False;");
var accessdb = {};
accessdb.getData = (parameter1,callback)=>{
    connection
    .query('SELECT * FROM Contacts WHERE Company = "Vcloudxyz";')
    .then(data=>{
      company = {"company":data};
     callback(company,parameter1);
     
    }).catch(error => {
    console.log("Error is"+error);
  });
}
module.exports = accessdb;

