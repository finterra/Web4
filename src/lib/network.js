/**
 * @file namereg.js
 * @fileOverview Factory module for the NameReg class.
 * @author Nagaraj Manjunath
 * @module Network
 */

module.exports = class Network{
constructor (server) {
this.server=server;
}
/**
 * Get the network info.
 *
 * @param {module:rpc/rpc~methodCallback} callback - The callback function.
 */
getInfo = function (cb) {
    let parameters= {}
    server.serverPost("burrow.getNetworkInfo",this.server,parameters,function(error,data){
      if(error)  cb(error);
       cb(null, data);
    });
    
  }
  
  /**
   * Get the client version
   *
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */
getClientVersion = function (cb) {
    let parameters= {}
    server.serverPost("burrow.getClientVersion",this.server,parameters,function(error,data){
      if(error)  cb(error);
       cb(null, data);
    });
  }
  
  /**
   * Get the moniker
   *
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */
getMoniker = function (cb) {
    let parameters= {}
    server.serverPost("burrow.getMoniker",this.server,parameters,function(error,data){
      if(error)  cb(error);
       cb(null, data);
    });

  }
  
  /**
   * Check if the node is listening for new peers.
   *
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */
isListening = function (cb) {
    let parameters= {}
    server.serverPost("burrow.isListening",this.server,parameters,function(error,data){
      if(error)  cb(error);
       cb(null, data);
    });
   
  }
  
  /**
   * Get the list of network listeners.
   *
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */
getListeners = function (cb) {
    let parameters= {}
    server.serverPost("burrow.getListeners",this.server,parameters,function(error,data){
      if(error)  cb(error);
       cb(null, data);
    });

  }
  
  /**
   * Get a list of all connected peers.
   *
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */
getPeers = function (cb) {
    let parameters= {}
    server.serverPost("burrow.getPeers",this.server,parameters,function(error,data){
      if(error)  cb(error);
       cb(null, data);
    });
    this.server.getPeers(callback)
  }
  
  /**
   * Get a single peer based on their address.
   * @param {string} address - The IP address of the peer. // TODO
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */
getPeer = function (address, cb) {

    let parameters= {"address":address}
    server.serverPost("burrow.getPeer",this.server,parameters,function(error,data){
      if(error) cb(error);
        cb(null, data);
    });
  }
  
}


