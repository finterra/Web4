  var server= require('./server');
  var errormsg = '';
  var parameter = [];
  var server = new server();

  //** Account class */
  module.exports = class Account {
    
    constructor(server){
        this.server = server;
        
      }
    
      //** get all accounts details with balance */
   getAccounts(fil, cb) {  
      try {
        if(!this.server){
          errormsg= "Method:getAccounts; error:server url  is undefined";
          return errormsg;
        } 
        else {   
          parameter = {"filters": []};
          server.serverPost("burrow.getAccounts",this.server,parameter,function(error,data){
            if(error) {
              cb(error);
            }
              else
              {
                cb(null, data.result);
              } 
            
          });     
            
        }
      }

      catch(ex) {
        throw ex;
      }
      
    }

 
//** get details of account and their balance */
 getAccount(address,cb) {
    
    if(!this.server || ! address || typeof address !== 'string' )
    {   
      return  errormsg="Method:getAccount; Invalid arguments";
    }
    else
    {
      parameters = {"address" : address};
      server.serverPost("burrow.getAccount",this.server,parameters,function(error,data){
        if(error)  cb(error);
         cb(null, data.result.Account);

      });
      
    } 
};


//** get getBalance realted address */
      getBalance(address,cb){  
      try{

        if (!address) {
        
        errormsg = "method:getBalance error:address is not a proper string."
        return cb(null,errormsg);
      }
      else{
        parameter = {"address":address}
        server.serverPost("burrow.getAccount",this.server,parameter,function(error,data){
          if(error)  cb(error);
           cb(null,data.result.Account.Balance);
        });
      }
      
      }catch (ex){
      return ex;
      }
    }

    //** get sequence realted address */
  getSequence(address,cb){ 
    try{
      if (!address) {
        
      errormsg = "method:getSequence error:address is not a proper string."
      return cb(null,errormsg);
    }
    else{
      parameter={"address":address}
      server.serverPost("burrow.getAccount",this.server,parameter,function(error,data){
      if(error)  cb(error);
       cb(null, data);
      });
    }
      
    } catch (ex){
      return ex;
    }
    
    }



    //** get storage realted address */
    getStorage(address,cb) { 
      try{
        if (!address) {
        
          errormsg = "method:getStorage error:address is not a proper string."
           cb(null,errormsg);
      }
      else{
        parameter = {"address":address};
        server.serverPost("burrow.getStorage",this.server,parameter,function(error,data){
            if(error)  cb(error);
             cb(null, data);
          });
      }
      
      }
      catch (ex){
        return ex;

      }      
    
    }

    //** get storageAt realted address */

    getStorageAt(address,key,cb) {
      try {
        if (!address) {
        
          errormsg = "method:getStorageAt error:address is not a proper string."
           cb(null,errormsg);
      }
      else
      {
        parameter = {"address":address, "key":key};
        server.serverPost("burrow.getStorageAt",this.server,parameter,function(error,data){
        if(error)  cb(error);
         cb(null, data);
      });
      }
      }
      catch (ex){
        return ex;
      }

      
    }
  }
    

          
