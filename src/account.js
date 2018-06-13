 var server= require('../src/server');
 var errormsg='';
 var parameter = [];
 let BURROW = "burrow"
 var ser =new server();
module.exports = class Account {
  
  constructor(server,parameter){
       this.server = server;
       this.parameter = parameter;
    }
   
    //** get all accounts details with balance */
 getAccounts = function (server, cb) {  
    try{
      if(server !='' && server != "undefined"){
        this.server = server;
        this.parameter = {"filters": []};
        ser.serverPost("burrow.getAccounts",this.server,this.parameter,function(error,data){
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

   //** get storage realted address */
  getStorage = function (server,address,cb) { 
    try{
      this.server = server;
      this.parameter = {"address":address};
      server.prototype.serverPost("burrow.getStorage",this.server,this.parameter,function(error,data){
          if(error) return cb(error);
          return cb(null, data);
         });
    }
    catch (ex){
      throw ex;

    }      
   
  }

  //** get storageAt realted address */
  getStorageAt = function (server,address,key,cb) {
   
     try {
      this.server = serverURl;
      this.parameter = {"address":address, "key":key};
      server.prototype.serverPost("burrow.getStorageAt",this.server,this.parameter,function(error,data){
      if(error) return cb(error);
      return cb(null, data);
     });
     }
     catch (ex){
      throw ex;
     }

    
  }
}
  


