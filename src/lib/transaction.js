
      
      var requestserver = require('./server');
      let server = new requestserver();
      var errormsg;
    
      /**
     * @file Transaction.js
     * @fileOverview Factory module for the Transaction class.
     * @author Nagaraj Manjunath
     * @module Transaction
     */

      module.exports = class Transaction {

      constructor(url)
      {
            
      this.server = url;

      };

      getUnconfirmedTxs(cb){

      if(!this.server)
      {
      errorMsg ="Method:getUnconfirmedTxs Invalid arguments"
      return errorMsg
      }
      else
      {
     let parameters = {}
      server.serverPost("burrow.getUnconfirmedTxs",this.server,parameters,function(error,data){
      if(error)  cb(error,null);
      cb(null, data);
      });

      }


      }



      //** Send ammount fromaddress to toAddress */

      send(private_key,to_address,amount,cb) { 
      if(!this.server ||!private_key ||!to_address ||!amount)
      {
      errorMsg ="Method:getUnconfirmedTxs Invalid arguments"
      return errorMsg
      }
      else
      {
     let parameters =    {"priv_key"   : private_key,
      "to_address" : to_address,
      "amount"     : amount}
      server.serverPost("burrow.send",this.server,parameters,function(error,data){
      if(error)  cb(error,null);
      cb(null, data);
      });
      }

      };


      //**  send and hold the value */
      sendAndHold(privKey, toAddress, amount,cb) {
      if(!this.server||!privKey || !toAddress||!amount)
      {
      errorMsg ="Method:sendAndHold, error: Invalid arguments"
      return errorMsg
      }
      else
      {
      let parameters = {"priv_key"   : privKey,
      "to_address" : toAddress,
      "amount"     : amount }
      server.serverPost("burrow.sendAndHold",this.server,parameters,function(error,data){
      if(error)  cb(error);
      cb(null, data);
      });
      }

      }



      //**  get the transcation value */
      transact(privKey, address, data, gasLimit, fee, cb) {
      if(this.server||!privKey || !address ||!data ||!gasLimit ||!fee)
      {
      errorMsg ="Method:transact, error: Invalid arguments"
      return errorMsg
      }
      else
      {
     let parameters= {    "priv_key" : privKey,
      "address"  : address,
      "data"     : data,
      "gas_limit": gasLimit,
      "fee"      : fee,}
      server.serverPost("burrow.transact",this.server,parameters,function(error,data){
      if(error)  cb(error);
      cb(null, data);

      });
      }

      }

      //**  get the transcation and hold value */
      transactAndHold (privKey, address, data, gasLimit, fee, cb) {

      if(!this.server ||!privKey || !address ||!data ||!gasLimit ||!fee)
      {
      errorMsg ="Method:transactAndHold, error: Invalid arguments"
      return errorMsg
      }
      else
      {

      let parameters={"priv_key" : privKey,
      "address"  : address,
      "data"     : data,
      "gas_limit": gasLimit,
      "fee"      : fee,  }

      server.prototype.serverPost("burrow.transactAndHold",this.server,this.parameters,function(error,data){
      if(error)  cb(error);
      cb(null, data);

      });

      }

      }

      //**  get the transcation name and hold value */
      transactNameReg(privKey, name, data, amount, fee, context, cb) {

      if(!this.server || !privKey ||!name  ||!data||!fee || !amount)
      {
      errorMsg ="Method:transactNameReg, error: Invalid arguments"
      return errorMsg
      }
      else
      {
     let parameters={"priv_key" : privKey,
      "name"     : name,
      "data"     : data,
      "amount"   : amount,
      "fee"      : fee}
      server.prototype.serverPost("burrow.transactNameReg",this.server,parameters,function(error,data){
      if(error)  cb(error);
      cb(null, data);

      }); 
      }

      };


      /**
      * Broadcasting a Transaction will send it to the blockchain client. The transaction needs
      * to be signed in order for this to work.
      *
      * @param {Object} tx - The transaction.
      * @param {module:rpc/rpc~methodCallback} callback - The callback function.
      */
      broadcastTx (tx, cb) {
      if(!this.server ||!tx)
      {
      errorMsg ="Method:broadcastTx, error: Invalid arguments"
      return errorMsg
      }
      else
      {
     let parameters = tx;
      server.serverPost("burrow.broadcastTx",this.server,parameters,function(error,data){
      if(error)  cb(error);
      cb(null, data);

      });
      }

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

      call(fromAddress, toAddress, data, cb) {
      if(!this.server ||!fromAddress ||toAddress ||data)
      {
      errorMsg ="Method:call, error: Invalid arguments"
      return errorMsg
      }
      else{
     let parameters={    "from":fromAddress,
      "address":toAddress,
      "data":data
      }
      server.serverPost("burrow.call",this.server,parameters,function(error,data){
      if(error)  cb(error);
      cb(null, data);

      });

      }


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
      callCode (fromAddress, code, data, cb) {
      if(!this.server ||!fromAddress ||code ||data)
      {
      errorMsg ="Method:callCode, error: Invalid arguments"
      return errorMsg
      }
     let parameters=    { "from" : fromAddress,
      "code" : code,
      "data" : data
      }
      server.serverPost("burrow.callCode",this.server,parameters,function(error,data){
      if(error)  cb(error);
      cb(null, data);

      });
      };
      }
