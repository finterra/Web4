    'use strict'

    /**
     * @file namereg.js
     * @fileOverview Factory module for the NameReg class.
     * @author Nagaraj Manjunath
     * @module namereg
     */

    let errorMsg="";

    module.exports = class namereg {

    /**
     * Get a list of entries.
     *
     * @param {module:util~FieldFilter|module:util~FieldFilter[]} [filter] - Filter the search.
     * @param {module:rpc/rpc~methodCallback} callback - The callback function.
     */

    getEntries(filter,cb) {

        let parameters= {"filters":filter}
        server.serverPost("burrow.getNameRegEntries",this.server,parameters,function(error,data){
          if(error)  cb(error);
          cb(null, data);
        });
    
    }

    /**
     * Get a list of all entries added from the given account.
     *
     * @param {string} accountAddress - the public address of the account.
     * @param {module:rpc/rpc~methodCallback} callback - The callback function.
     */
    /* TODO put this in when tests has been made.
    NameReg.prototype.getEntriesByAccount = function (accountAddress, callback) {
        var f = rpc.filterParam("owner", "==", accountAddress);
        this._client.send(rpc.methodName("getNameRegEntries"), rpc.filtersParam(f), callback);
    };
    */

    /**
     * Get an entry from its key.
     *
     * @param {string} name - The name, or key of the entry.
     * @param {module:rpc/rpc~methodCallback} callback - The callback function.
     */

    getEntry(name, cb) {
      if (!name || typeof (name) !== 'string') {
        cb(new Error("'name' is not a non-empty string."))
        return
      }
      let parameters= {"name":name}
      server.serverPost("burrow.getNameRegEntry",this.server,parameters,function(error,data){
        if(error) cb(error);
        cb(null, data);
      });

    }

    /**
     * Transact to the name registry. The name registry is essentially a distributed key-value store that comes
     * with the client.
     *
     * Note: This requires a private key to be sent to the blockchain client.
     *
     * @param {string} privKey - The private key that will be used to sign the transaction.
     * @param {string} name - The key, or name.
     * @param {string} data - The data that should be stored.
     * @param {number} numBlocks - The amount of blocks until the data expires.
     * @param {module:rpc/rpc~methodCallback} callback - The callback function.
     */
    setEntry (privKey, name, data, numBlocks,amount,fee,callback) {
    if(!privKey ||!name ||!data ||!numBlocks||!amount||!fee)
    {
        errorMsg ="Method:setEntry Invalid arguments"
        return errorMsg
    }
    else{
      let cost    
      cost = this.calculateCost(numBlocks, data)
      let parameters= { "priv_key" : privKey,
                        "name" : name,
                        "data" :data,
                        "amount": cost,
                        "fee":fee
                      }
      server.serverPost("burrow.transactNameReg",this.server,parameters,function(error,data){
      if(error) cb(error);
        cb(null, data);
    });
    }
      
    }

    calculateCost = function (numBlocks, data) {
      return COST_PER_BLOCK * COST_PER_BYTE * (data.length + 32) * numBlocks
    }

    }