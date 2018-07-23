let Client = require('./clientGen');

module.exports = class AccountgRPC {
    constructor(url) {
      this.client = Client.getClient(url, "Accounts");
    }

/* GenPrivAccount method 
   *   empty parameter 
   *   @empty  
   */

    GenPrivAccount(empty,callback){
        this.client.genPrivAccount(" ", function (err, response) {
            if (err) {
              callback(err)
            } else {
              callback(null,response)
            }
          })

    }

  /* GenPrivAccountFromKey method 
   *   privateKeyParam parameter 
   *   @privateKey  
   */
    GenPrivAccountFromKey(privateKeyParam,callback){
        this.client.genPrivAccountFromKey(privateKeyParam, function (err, response) {
            if (err) {
              callback(err)
            } else {
              callback(null,response)
            }
          })

    }

  /* GenPrivAccountFromKey method 
   *   addressParam parameter 
   *   @address bytes  
   */
 
    GetAccount(addressParam,callback){
        this.client.getAccount(addressParam, function (err, response) {
            if (err) {
              callback(err)
            } else {
              callback(null,response)
            }
          })

    }

/** GetAccounts method
 *   FilterListParam parameter 
 *    @filters  requires {field, op, value}
 * 
**/

    GetAccounts(filterListParam,callback){
        this.client.getAccounts(filterListParam, function (err, response) {
            if (err) {
              callback(err)
            } else {
              callback(null,response)
            }
          })

    }

 /* GenPrivAccountFromKey method 
   *   addressParam parameter 
   *   @address bytes  
   */
    GetStorage(addressParam,callback){
        this.client.getStorage(addressParam, function (err, response) {
            if (err) {
              callback(err)
            } else {
              callback(null,response)
            }
          })

    }


 /* GenPrivAccountFromKey method 
   *   addressParam parameter 
   *   @address bytes  
   *  @key bytes  
   */
    GetStorageAt(storageAtParam,callback){
        this.client.getStorageAt(storageAtParam, function (err, response) {
            if (err) {
              callback(err)
            } else {
              callback(null,response)
            }
          })

    }

   /* GetValidators method 
   * @empty 
   */
    GetValidators(empty,callback){
        this.client.getValidators(empty, function (err, response) {
            if (err) {
              callback(err)
            } else {
              callback(null,response)
            }
          })

    }

    
}