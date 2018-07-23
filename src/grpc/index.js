
var accounts = require('./accountgRPC');
var blockchain = require('./blockchaingRPC')
var nameReg = require('./nameReggRPC');
var network = require('./networkgRPC');
var transaction = require('./transactgRPC');
var events = require('./eventsgRPC');
var keys=require('./keysgRPC');


module.exports = class WEB4GRPC {
    constructor(url) {
        this.serverUrl = url;
        // this.accounts = new accounts(this.serverUrl);
        // this.blockchain = new blockchain(this.serverUrl);
        // this.network = new network(this.serverUrl);
        // this.nameReg = new nameReg(this.serverUrl);
        // this.transactions = new transaction(this.serverUrl);
        // this.events = new events(this.serverUrl);
        this.keys = new keys(this.serverUrl);
    }

}