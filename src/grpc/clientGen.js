const path = require('path');
const grpc = require('grpc');



module.exports = {
    
    getClient : function getClient(url, pbType,packageName){
        var PROTO_PATH = path.join(__dirname, '../pb/'+pbType.toString().toLowerCase()+'.proto');
        console.log(packageName);
        const Client = grpc.load(PROTO_PATH)[packageName];

        var credentials = grpc.credentials.createInsecure();
        var client = new Client[pbType](url, credentials);
        return client;
    }
}