var transaction = require('./transactgRPC');
var events = require('./eventsgRPC');
var keys=require('./keysgRPC');
module.exports = class WEB4GRPC {
    constructor(url) {
        this.serverUrl = url;
        this.transactions = new transaction(this.serverUrl);
        this.events = new events(this.serverUrl);
        this.keys = new keys(this.serverUrl);
    }

}