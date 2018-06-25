/**
 * @file namereg.js
 * @fileOverview Factory module for the NameReg class.
 * @author Nagaraj Manjunath
 * @module Network
 */
var server= require('./server');
var server = new server();
let errormsg;
module.exports = class Network{
constructor (serverUrl) {
this.server=serverUrl;
}
/**
 * Get the network info.
 *
 * @param {module:rpc/rpc~methodCallback} callback - The callback function.
 */
getInfo (cb) {
  if(!this.server){
    errormsg= "Method:getNetworkInfo ; error:server url  is undefined";
    return errormsg;
  } 
  else
  {
    let parameters= {}
    server.serverPost("burrow.getNetworkInfo",this.server,parameters,function(error,data){
      if(error)  cb(error);
       cb(null, data);
    });
  }
  
    
  }
  
  /**
   * Get the client version
   *
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */
getClientVersion (cb) {
  if(!this.server){
    errormsg= "Method:getClientVersion; error:server url  is undefined";
    return errormsg;
  } 
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
getMoniker (cb) {
  if(!this.server){
    errormsg= "Method:getMoniker; error:server url  is undefined";
    return errormsg;
  } 
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
isListening  (cb) {
  if(!this.server){
    errormsg= "Method:isListening; error:server url  is undefined";
    return errormsg;
  } 
  else{
    let parameters= {}
    server.serverPost("burrow.isListening",this.server,parameters,function(error,data){
      if(error)  cb(error);
       cb(null, data);
    });
  }
   
   
  }
  
  /**
   * Get the list of network listeners.
   *
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */
getListeners (cb) {
  if(!this.server){
    errormsg= "Method:getListeners; error:server url  is undefined";
    return errormsg;
  } 
  else{
    let parameters= {}
    server.serverPost("burrow.getListeners",this.server,parameters,function(error,data){
      if(error)  cb(error);
       cb(null, data);
    });
  }
    

  }
  
  /**
   * Get a list of all connected peers.
   *
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */
getPeers(cb) {
  if(!this.server){
    errormsg= "Method:getPeers; error:server url  is undefined";
    return errormsg;
  } 
  else
  {
    let parameters= {}
    server.serverPost("burrow.getPeers",this.server,parameters,function(error,data){
      if(error)  cb(error);
       cb(null, data);
    });
    this.server.getPeers(callback)
  }
   
  }
  
  /**
   * Get a single peer based on their address.
   * @param {string} address - The IP address of the peer. // TODO
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */
getPeer(address, cb) {
  if(!this.server || !address){
    errormsg= "Method:getPeer; error: invalid argument";
    return errormsg;
  } 
  else
  {
    let parameters= {"address":address}
    server.serverPost("burrow.getPeer",this.server,parameters,function(error,data){
      if(error) cb(error);
        cb(null, data);
    });
  }
 
  }
  
}


