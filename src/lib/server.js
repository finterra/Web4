        let request = require('request');

        module.exports= class server{

        //** Request Get Account Methods */
        serverPost(method_Name,url,params,cb)
        {
        try {
            
            var jsonRandomID=generateJSONID();
            var commands = {
                jsonrpc: "2.0",
                id: jsonRandomID,
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
                if (error) return callback(error);
                return callback(null, data);
                    
            });
        }catch (error){
            throw error;
        }
                }
        }

        /** generate unique  Json RPC 2.0 ID */
        var generateJSONID=function(){

                return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
            
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
            }
        }