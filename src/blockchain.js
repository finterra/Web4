  var server = require('../src/server');
  var errormsg;
  var parameters = [];

  var server = new server();
  module.exports = class BlockChain {  
    constructor(server)
      {
          this.server=server;
          
      }

    /**
     * Get blockchain info.
     *
     * @param {module:rpc/rpc~methodCallback} callback - The callback function.
     */

    getInfo(cb) {
      parameter = {}
      server.serverPost("burrow.getBlockchainInfo",this.server,parameter,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
      });
    }

    /**
     * Get the chain id.
     *
     * @param {module:rpc/rpc~methodCallback} callback - The callback function.
     */

    getChainId(cb) {
      parameters = {};
      server.serverPost("burrow.getChainId",this.server,parameters,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
      });
    }

    /**
     * Get the genesis hash.
     *
     * @param {module:rpc/rpc~methodCallback} callback - The callback function.
     */

    getGenesisHash(cb) {
      parameters = {};
      server.serverPost("burrow.getGenesisHash",this.server,parameters,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
      });
    }

    /**
     * Get the latest block height.
     *
     * @param {module:rpc/rpc~methodCallback} callback - The callback function.
     */

    getLatestBlockHeight(cb) {
      parameters = {};
      server.serverPost("burrow.getLatestBlockHeight",this.server,parameters,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
      });
    }

    /**
     * Get the latest block.
     *
     * @param {module:rpc/rpc~methodCallback} callback - The callback function.
     */

    getLatestBlock(cb) {
      parameters = {};
      server.serverPost("burrow.getLatestBlock",this.server,parameters,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
      });

    }

    /**
     * Get the blocks from 'minHeight' to 'maxHeight'.
     *
     * TODO out of bounds checks?
     *
     * @param {module:util~FieldFilter|module:util~FieldFilter[]} [filter] - Filter the search.
     * @param {module:rpc/rpc~methodCallback} callback - The callback function.
     */

    getBlocks(cb) {
      parameters = {"filters":[]}
      server.serverPost("burrow.getBlocks",this.server,parameters,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
      });
    }

    /**
     * Get the block with the given block-number, or 'height'.
     *
     * @param {number} height - The block height.
     * @param {module:rpc/rpc~methodCallback} callback - The callback function.
     */

    getBlock(height, cb) { 
      
      parameters = {"height":height}
      server.serverPost("burrow.getBlock",this.server,parameters,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
      });
    }
  }
