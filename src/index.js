    /**
     * @file web4.js
     * @fileOverview Factory module for the Burrow class.
     * @author Nagaraj
     * @module Web4
     */

    'use strict'

    var accounts = require('./lib/account')
    var blockChain = require('./lib/blockchain')
    var transactions = require('./lib/transaction')
    var network =require('./lib/network');
    var consensus= require('./lib/consensus');
    var nameReg=require('./lib/namereg');
    /**
     * @file web4.js
     * create instance of account
     * create instance of transcation
     * create instance of blockchian 
     */
      module.exports =class web4 {
      constructor(url)
      {
        this.serverUrl=url
        this.account = new accounts(this.serverUrl);
        this.transaction = new transactions(this.serverUrl);
        this.blockchain = new blockChain(this.serverUrl);
        this.network= new network(this.serverUrl);
        this.consensus= new consensus(this.consensus);
        this.namereg = new this.namereg(this.namereg);
      }
      
    }



