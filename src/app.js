
var request = require('request')
var jQuery  = require('jquery')
var http    = require('http'); 
var account =  require('../src/account');
//var transaction=require('../src/transaction');
//var transact =new transaction();

//** url for connecting burrow client */
var url = "http://localhost:1337/rpc";

//** private key toaddress amount used to send the transcation */
var private_key = "77D70913DC33EB46A4AB8949A8CDCB0177404E3CA7385FE64CB67F0F3DFBD14CC2FA33D13F3017986D39C1E660467AE3647E9F2C7F3CDD9FD956190963F27CBC";
var to_address  = "0128AB28AADFB73433C4C3495A618C019097E158";
var address     =  "0128AB28AADFB73433C4C3495A618C019097E158";
var amount      = 105;


// //** get details of all accounts and their balance */

window.getAllAccounts = function(){
  var acnt = new account();
  acnt.getAccounts(url,function(err,data){
  console.log("accountdetails",data);

});

}

//** get details of account and their balance */

window.getBalance = function() {
 transact.getAccount(url,address);
};

//** Send ammount from_address to to_Address */

window.send = function(){
   transact.send(private_key,to_address,amount,url)
}


