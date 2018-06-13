var server = require('../src/server');
var errormsg;
var parameters = [];


module.exports = class BlockChain
{  
   constructor(server,parameters)
     {
         this.server=server;
         this.parameters=parameters;
     }

/**
 * Get blockchain info.
 *
 * @param {module:rpc/rpc~methodCallback} callback - The callback function.
 */
getInfo = function (server,cb) {
  this.server = server;
  server.prototype.serverPost("burrow.getBlockchainInfo",this.server,function(error,data){
    if(error) return cb(error);
    return cb(null, data);
  });
}

/**
 * Get the chain id.
 *
 * @param {module:rpc/rpc~methodCallback} callback - The callback function.
 */
getChainId = function (server,cb) {
  this.server = server;
  server.prototype.serverPost("burrow.getChainId",this.server,function(error,data){
    if(error) return cb(error);
    return cb(null, data);
  });
}

/**
 * Get the genesis hash.
 *
 * @param {module:rpc/rpc~methodCallback} callback - The callback function.
 */
getGenesisHash = function (server,cb) {
  this.server = server;
  server.prototype.serverPost("burrow.getGenesisHash",this.server,function(error,data){
    if(error) return cb(error);
    return cb(null, data);
  });
}

/**
 * Get the latest block height.
 *
 * @param {module:rpc/rpc~methodCallback} callback - The callback function.
 */
getLatestBlockHeight = function (server,cb) {
  this.server = server;
  server.prototype.serverPost("burrow.getLatestBlockHeight",this.server,function(error,data){
    if(error) return cb(error);
    return cb(null, data);
  });
}

/**
 * Get the latest block.
 *
 * @param {module:rpc/rpc~methodCallback} callback - The callback function.
 */
getLatestBlock = function (server,cb) {
  this.server = server
  server.prototype.serverPost("burrow.getLatestBlock",this.server,function(error,data){
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
getBlocks = function (filter, cb) {
  this.server=server
  this.parameters = {"params":{"filters":[]}}
  server.prototype.serverPost("burrow.getBlocks",this.server,function(error,data){
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
getBlock = function (height, cb) { 
  this.server=server
  this.parameters = {"height":height}
  server.prototype.serverPost("burrow.getBlock",this.server,function(error,data){
    if(error) return cb(error);
    return cb(null, data);
  });
}
}





