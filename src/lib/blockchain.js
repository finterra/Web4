var requestserver = require('./server');
let server = new requestserver();

var errormsg;
/**
 * @file web4.js
 * @fileOverview Factory module for the Blockchain class.
 * @author Nagaraj
 * @module BlockChain
 */
module.exports = class BlockChain {
  constructor(serverUrl) {
    this.server = serverUrl;

  }

  /**
   * Get blockchain info.
   *
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */

  getInfo(cb) {
    if (!this.server) {

      errormsg = "method:getInfo error:address is not a proper string."
      return cb(null, errormsg);
    } else {
      let parameters = {}
      server.serverPost("burrow.getBlockchainInfo", this.server, parameters, function (error, data) {
        if (error) return cb(error);
        return cb(null, data);
      });
    }

  }

  /**
   * Get the chain id.
   *
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */

  getChainId(cb) {
    if (!this.server) {

      errormsg = "method:getChainId, error:address is not a proper string."
      return cb(null, errormsg);
    } else {
      let parameters = {};
      server.serverPost("burrow.getChainId", this.server, parameters, function (error, data) {
        if (error)
          cb(error);
        cb(null, data);
      });
    }

  }

  /**
   * Get the genesis hash.
   *
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */

  getGenesisHash(cb) {

    if (!this.server) {

      errormsg = "method:getGenesisHash, error:Invalid argument."
      return errormsg;
    } else {
      let parameters = {};
      server.serverPost("burrow.getGenesisHash", this.server, parameters, function (error, data) {
        if (error) cb(error);
        cb(null, data);
      });
    }

  }

  /**
   * Get the latest block height.
   *
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */

  getLatestBlockHeight(cb) {
    if (!this.server) {
      errormsg = "method:getLatestBlockHeight,  error:Invalid argument."
      return errormsg;
    } else {
      let parameters = {};
      server.serverPost("burrow.getLatestBlockHeight", this.server, parameters, function (error, data) {
        if (error) cb(error);
        cb(null, data);
      });
    }

  }

  /**
   * Get the latest block.
   *
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */

  getLatestBlock(cb) {
    if (!this.server) {
      errormsg = "method:getLatestBlock  error:Invalid argument."
      return errormsg;
    } else {
      let parameters = {};
      server.serverPost("burrow.getLatestBlock", this.server, parameters, function (error, data) {
        if (error) cb(error);
        cb(null, data);
      });
    }
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
    if (!this.server) {
      errormsg = "method:getBlocks,  error:Invalid argument."
      return errormsg;
    } else {
      let parameters = {
        "filters": []
      }
      server.serverPost("burrow.getBlocks", this.server, parameters, function (error, data) {
        if (error) cb(error);
        cb(null, data);
      });
    }

  }

  /**
   * Get the block with the given block-number, or 'height'.
   *
   * @param {number} height - The block height.
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */

  getBlock(height, cb) {
    if (!this.server && !height) {
      errormsg = "method:getBlock,  error:Invalid height argument."
      return cb(errormsg);
    } else {
      let parameters = {
        "height": height
      }
      server.serverPost("burrow.getBlock", this.server, parameters, function (error, data) {
        if (error) return cb(error);
        return cb(null, data);
      });

    }

  }
}