import { throws } from 'assert';

var request = require('request');


module.exports= class server{

//** Request Get Account Methods */
serverPost(method_Name,url,params, cb)
   {
   try {
    var commands = {
        jsonrpc: "2.0",
        id: "0",
        method:method_Name,
        params:params,
    };
    var options = {
        method: "POST",
        url: url,
        headers: {
            "content-type": "application/json"
        },
        body: commands,
        json: true
    };
    // Request burrow client
    this.requestclient(options, function(err, data) {
        if(err) return cb(err);
        return cb(null, data);
    });

    } catch (error) {
    console.log(error);
  }
 };


 /** call request method to burrow to get data */
 
requestclient(options, callback){
   
   try {
    request(options, function (error, response, data) {
        if (error) return callback(err);
            //throw new Error(error);
            console.log('data',data);
          return callback(null, data);
            
    });
   }catch (error){
       throw error;
   }

    
 }
}

