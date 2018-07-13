let Client = require('./clientGen');

module.exports = class BlockchaingRPC {
    constructor(url) {
        this.client = Client.getClient(url, "Blockchain");
        
    }

   /* GetBlock method
   *   HeightParam parameter 
   *   @height , uint64 
   */
    GetBlock(HeightParam, callback) {
        this.client.getBlock(HeightParam, function (err, response) {
            if (err) {
                callback(err)
            } else {
                callback(null, response)
            }
        })
    }


  /* GetBlockchainInfo method
   *   BlocksParam parameter 
   *   @minHeight , uint64 
   *   @maxHeight , uint64 
   */
    GetBlockchainInfo(BlocksParam, callback) {
        this.client.getBlockchainInfo(BlocksParam, function (err, response) {
            if (err) {
                callback(err)
            } else {
                callback(null, response)
            }
        })
    }

  /* getBlocks method
   *   empty parameter 
   *   @empty  
   */
    getBlocks(empty, callback) {
        this.client.getBlocks(empty, function (err, response) {
            if (err) {
                callback(err)
            } else {
                callback(null, response)
            }
        })
    }


  /* GetChainId method
   *   empty parameter 
   *   @empty 
   */
     GetChainId(empty, callback) {
        this.client.getChainId(empty, function (err, response) {
            if (err) {
                callback(err)
            } else {
                callback(null, response)
            }
        })
    }

  /* getConsensusState method 
   *   empty parameter 
   *   @empty 
   */
    GetConsensusState(empty, callback) {
        this.client.getConsensusState(empty, function (err, response) {
            if (err) {
                callback(err)
            } else {
                callback(null, response)
            }
        })
    }

   /* getGenesis method 
   *   empty parameter 
   *   @empty 
   */

    GetGenesis(empty, callback) {
        this.client.getGenesis(empty, function (err, response) {
            if (err) {
                callback(err)
            } else {
                callback(null, response)
            }
        })
    }

/* getLatestBlock method 
   *   empty parameter 
   *   @empty 
   */
    GetLatestBlock(empty, callback) {
        this.client.getLatestBlock(sendParams, function (err, response) {
            if (err) {
                callback(err)
            } else {
                callback(null, response)
            }
        })
    }

  /* GetUnconfirmedTxs method 
   *   empty parameter 
   *   @empty
   */
    getUnconfirmedTxs(empty, callback) {
        this.client.getUnconfirmedTxs(sendParams, function (err, response) {
            if (err) {
                callback(err)
            } else {
                callback(null, response)
            }
        })
    }
}