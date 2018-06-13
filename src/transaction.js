
var server = require('../src/server');
var errormsg;
var parameters = [];

module.exports = class Transcation {
   
   constructor(server,parameters)
     {
         this.server = server;
         this.parameters = parameters;
     }
   

//** get details of account and their balance */
getAccount = function (server,address,cb) {
  
    if(server!='' && server!="undefined" && address!=''&& address!="undefined" && typeof address == 'string' )
     {
         
         this.server = server;
           
         this.parameters = {"address" : to_address};
         
         server.prototype.serverPost("burrow.getAccount",this.server,this.parameters,function(error,data){
          if(error) return cb(error);
          return cb(null, data);

         });
     }
    else
     {
       return  errormsg="getAccount address undefined";
     } 
};


//** Send ammount fromaddress to toAddress */
 send = function (server,private_key,to_address,amount,cb) { 
     this.server = server;
     this.parameters = {"priv_key"   : private_key,
                      "to_address" : to_address,
                      "amount"     : amount}
   server.prototype.serverPost("burrow.send",this.server,this.parameters,function(error,data){
    if(error) return cb(error);
    return cb(null, data);

   });
   };
}


//**  send and hold the value */
sendAndHold = function (server,privKey, toAddress, amount,context,cb) {
    this.server = server;
    this.parameters = {"priv_key"   : privKey,
                       "to_address" : toAddress,
                       "amount"     : amount }
   server.prototype.serverPost("burrow.sendAndHold",this.server,this.parameters,function(error,data){
    if(error) return cb(error);
    return cb(null, data);

   });
}



//**  get the transcation value */
transact = function (server,privKey, address, data, gasLimit, fee, context, cb) {
  this.server = server;
  this.parameters={"priv_key" : privKey,
                   "address"  : address,
                   "data"     : data,
                   "gas_limit": gasLimit,
                   "fee"      : fee,}
  server.prototype.serverPost("burrow.transact",this.server,this.parameters,function(error,data){
    if(error) return cb(error);
    return cb(null, data);

   });
}

//**  get the transcation and hold value */
transactAndHold = function (url,privKey, address, data, gasLimit, fee, context, cb) {
  this.server = server;
  this.parameters={"priv_key" : privKey,
                   "address"  : address,
                   "data"     : data,
                   "gas_limit": gasLimit,
                   "fee"      : fee,  }
                 
  server.prototype.serverPost("burrow.transactAndHold",this.server,this.parameters,function(error,data){
    if(error) return cb(error);
    return cb(null, data);

   });

}

//**  get the transcation name and hold value */
transactNameReg = function (url,privKey, name, data, amount, fee, context, cb) {
  this.server = server;
  this.parameters={"priv_key" : privKey,
                   "name"     : name,
                   "data"     : data,
                   "amount"   : amount,
                   "fee"      : fee}
server.prototype.serverPost("burrow.transactNameReg",this.server,this.parameters,function(error,data){
  if(error) return cb(error);
  return cb(null, data);

 });
};


/**
 * Broadcasting a Transaction will send it to the blockchain client. The transaction needs
 * to be signed in order for this to work.
 *
 * @param {Object} tx - The transaction.
 * @param {module:rpc/rpc~methodCallback} callback - The callback function.
 */
broadcastTx = function (url,tx, cb) {
this.server = server;
this.parameters ={ "tx":tx}
server.prototype.serverPost("burrow.broadcastTx",this.server,this.parameters,function(error,data){
  if(error) return cb(error);
  return cb(null, data);

 });
}

/**
 * Call the account at the given address. If there is no code in the account, this will do nothing.
 * Call does not cost anything, and can not affect the state of the database. It is only used to
 * <tt>get</tt> data.
 *
 * @param {string} [fromAddress] - The address from which the call was made. The address is settable because this is a read-only operation.
 * @param {string} toAddress - The address to the target (contract) account.
 * @param {string} data - The input data.
 * @param {module:rpc/rpc~methodCallback} callback - The callback function.
 */

call = function (fromAddress, toAddress, data, cb) {
  this.server = server;
  this.parameters={"from":fromAddress,
                   "address":toAddress,
                   "data":data
                  }
  server.prototype.serverPost("burrow.call",this.server,this.parameters,function(error,data){
    if(error) return cb(error);
    return cb(null, data);

   });
  
}

/**
 * Call the code with the given data as input. This function runs the code in a VM
 * with the given input.
 *
 * @param {string} [fromAddress] - The address from which the call was made. The address is settable because this is a read-only operation.
 * @param {string} code - The code to be executed.
 * @param {string} data - The input data.
 * @param {module:rpc/rpc~methodCallback} callback - The callback function.
 */
callCode = function (fromAddress, code, data, cb) {
  this.server = server;
  this.parameters={"from" : fromAddress,
                   "code" : code,
                   "data" : data
                  }
  server.prototype.serverPost("burrow.callCode",this.server,this.parameters,function(error,data){
    if(error) return cb(error);
    return cb(null, data);

   });
};





