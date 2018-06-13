 var server= require('../src/server');
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
    try{
      if(this.server !='' && this.server != "undefined"){
        
        parameter = {"filters": []};
        console.log(this.server);
        server.serverPost("burrow.getAccounts",this.server,parameter,function(error,data){
          if(error) return cb(error);
          return cb(null, data);
        });
      } 
      else{        
          throw "getAccount error url or method is undefined";
      }
    }
    catch(ex){
      throw ex;
    }
    
  }


    //** get getBalance realted address */
  getBalance(address,cb){  
    try{

      if (!address) {
       
       errormsg = "address is not a proper address string."
       return cb(null,errormsg);
    }
    else{
      parameter = {"address":address}
      server.serverPost("burrow.getAccount",this.server,parameter,function(error,data){
        if(error) return cb(error);
        return cb(null,data);
       });
    }
     
    }catch (ex){
     throw ex;
    }
   }

   //** get sequence realted address */

 getSequence(address,cb){ 
  try{
    if (!address) {
      
     errormsg = "address is not a proper address string."
     return cb(null,errormsg);
  }
  else{
    parameter={"address":address}
    server.serverPost("burrow.getAccount",this.server,parameter,function(error,data){
     if(error) return cb(error);
     return cb(null, data);
    });
  }
    
  } catch (ex){
   throw ex;
  }
   
   }



   //** get storage realted address */

  getStorage(address,cb) { 
    try{
      if (!address) {
      
        errormsg = "address is not a proper address string."
        return cb(null,errormsg);
     }
     else{
      parameter = {"address":address};
      server.serverPost("burrow.getStorage",this.server,parameter,function(error,data){
          if(error) return cb(error);
          return cb(null, data);
         });
     }
     
    }
    catch (ex){
      throw ex;

    }      
   
  }

  //** get storageAt realted address */

  getStorageAt(address,key,cb) {
   
    try {
      if (!address) {
      
        errormsg = "address is not a proper address string."
        return cb(null,errormsg);
     }
     else
     {
      parameter = {"address":address, "key":key};
      server.serverPost("burrow.getStorageAt",this.server,parameter,function(error,data){
      if(error) return cb(error);
      return cb(null, data);
     });
     }
     }
     catch (ex){
      throw ex;
     }

    
  }
}
  


