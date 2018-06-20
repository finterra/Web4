
  /**
   * @file consensus.js
   * @fileOverview Factory module for the Events class.
   * @author Nagaraj Manjunath
   * @module Consensus
   */
  module.exports = class Consensus
  {
  /**
   * Get a list of all validators.
   *
   * @param {module:rpc/rpc~methodCallback} callback - The callback function.
   */
  getValidators(cb) {
    if(!this.server){        
      errormsg = "method:getValidators error: server url  is not defined."
       cb(null,errormsg);
  }
  else{
    let parameters = {}
    server.serverPost("burrow.getValidators",this.server,parameters,function(error,data){
      if(error)  cb(error);
       cb(null, data);
    });

  }
    
    }
  
    /**
     * Get the consensus state.
     *
     * @param {module:rpc/rpc~methodCallback} callback - The callback function.
     */
  getState(cb) {
    if(!this.server){        
      errormsg = "method:getState error: server url  is not defined."
       cb(null,errormsg);
  }else{
    let parameters = {}
    server.serverPost("burrow.getConsensusState",this.server,parameters,function(error,data){
      if(error)  cb(error);
       cb(null, data);
    });
  }
  }
    

  }
