let Client = require('./clientGen');

module.exports = class TransactgRPC {
  constructor(url) {
    this.client = Client.getClient(url, "Transactor",)
  }
  
/** Send method
 *   sendParam parameter 
 *   @inputAccount {privateKey, address} requires 'Private Key' and 'Address'
 *   @toAddress requires 'To Address'
 *   @value requires Amount number 
**/
  Send(sendParams,callback){
    this.client.send(sendParams, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null,response)
      }
    })
  }


/** SendAndHold method
 *   sendParam parameter 
 *   @inputAccount {privateKey, address} requires 'Private Key' and 'Address'
 *   @toAddress requires 'To Address'
 *   @value requires Amount number 
**/
  SendAndHold(SendParam,callback) {
    this.client.sendAndHold(SendParam, function (err, response) {
      if (err) {
       callback(err)
      } else {
        callback(null,response)
      }
    })
  }

//** SignTx method
/* SignTxParam Parameter
/* {@tx}
/* {@privateAccounts} takes to Private key 
**/
  SignTx(SignTxParam,callback) {
    this.client.signTx(SignTxParam, function (err, response) {
      if (err) {
        console.log('error:', err);
        callback(err)
      } else {
        console.log('Response Message:', response);
        callback(null,response)
      }
    })
  }

/** Transact method
 *   TransactParam parameter 
 *   @inputAccount {privateKey, address} requires 'Private Key' and 'Address'
 *   @address requires 'The address of the contract to call, or omitted if creating a new contract'
 *   @value requires Amount
 *   @data EVM bytecode payload to deliver
 *   @gasLimit The maximum gas to provide to the EVM when running any code - provided in order to bound the computation time
 *   @fee   Fee to offer validators for processing transaction
**/
  Transact(TransactParam,callback) {
    this.client.transact(TransactParam, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null,response);
      }
    })
  }

  /** Transact method
 *   TransactParam parameter 
 *   @inputAccount {privateKey, address} requires 'Private Key' and 'Address'
 *   @address requires 'The address of the contract to call, or omitted if creating a new contract'
 *   @value requires Amount
 *   @data EVM bytecode payload to deliver
 *   @gasLimit The maximum gas to provide to the EVM when running any code - provided in order to bound the computation time
 *   @fee   Fee to offer validators for processing transaction
**/
  TransactAndHold(TransactParam,callback) {
    this.client.transactAndHold(TransactParam, function (err,response) {
      if (err) {
        callback(err)
      } else {
        callback(null,response);
      }
    })
  }


  BroadcastTx(TxParam,callback) {
    this.client.broadcastTx(TxParam, function (err, response) {
      if (err) {
        console.log('error:', err);
      } else {
        console.log('Response Message:', response);
      }
    })
  }


//** Call method
/* {@fromAccount} takes from address
/* {@toAddress} takes toaddress 
/* {@data}  EVM bytecode payload to deliver
**/
  Call(CallParam,callback) {
    this.client.call(CallParam,function (err, response) {
      if (err) {
        callback(err)
      } else {
       callback(null,response)
      }
    })
  }


//** Call method
/* {@fromAccount} takes from address
/* {@toAddress} takes toaddress 
/* {@data}  EVM bytecode payload to deliver
**/
  CallCode(CallCodeParam,callback) {
    this.client.callCode(CallCodeParam, function (err, response) {
      if (err) {
        callback(err);
      } else {
        callback(null,response);
      }
    })

  }


}