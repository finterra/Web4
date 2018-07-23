let Client = require('./clientGen');

module.exports = class NameReggRPC {
  constructor(url) {
    this.client = Client.getClient(url, "NameReg",'namereg')
  }


/** getEntries method
 *   FilterListParam parameter 
 *    @filters  requires {field, op, value}
 * 
**/
  getEntries(FilterListParam, callback) {
    this.client.getEntries(FilterListParam, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null, response)
      }
    })
  }

/** getEntry method
 *   NameRegEntryParam parameter 
 *    '@name'  string
 * 
**/
  
  getEntry(NameRegEntryParam, callback) {
    this.client.getEntry(NameRegEntryParam, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null, response)
      }
    })
  }



/** TransactNameReg method
 *   TransactNameRegParam parameter 
 *   @inputAccount {privateKey, address} requires 'Private Key' and 'Address'
 *   name  string
 *   data  string
 *   fee  uint64
 *   amount uint64
**/
  
  TransactNameReg(TransactNameRegParam, callback) {
    this.client.transactNameReg(TransactNameRegParam, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null, response)
      }
    })
  }

 
/** transactNameRegAndHold method
 *   TransactNameRegParam parameter 
 *   @inputAccount {privateKey, address} requires 'Private Key' and 'Address'
 *   name  string
 *   data  string
 *   fee  uint64
 *   amount uint64
**/
  transactNameRegAndHold(TransactNameRegParam, callback) {
    this.client.transactNameRegAndHold(TransactNameRegParam, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null, response)
      }
    })
  }

}