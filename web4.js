    'use strict'

    //** just create intance of WEB4 and pass url */
    module.exports = class Web4 {
    constructor (web4URL){
    let Web4Facotry =require('../Web4/src/index');   
    this.web4 = new Web4Facotry(web4URL);
    this.account = this.web4.account;          
    this.transaction = this.web4.transaction;
    this.blockchain = this.web4.blockchain;
    this.network=this.web4.network;
    }

    //** Send Transcation */
    //** send transcation and  broadcast the transaction, return txhash */

    send(privKey, address, amount, cb) {
    try {
    if (!privKey || !address || !amount) throw ("Invalid Arguments");

    let blockchain = this.blockchain;
    let account = this.account;
    let transaction = this.transaction;

    var pubKey = tenderkeys.getPubKeyFromPrivKey(privKey);
    var accountAddress = tenderkeys.getAddressFromPrivKey(privKey);

    account.getSequence(accountAddress, function (error, data) {
    var sequence;
    if (!error) {
    if (typeof (data) === 'undefined') {
    sequence = 0;

    }
    else if (data.result) {
    sequence = data.result.Account.Sequence;
    }
    else if (data.error) {
    return cb(null, data.error.message);
    }
    else {
    return cb(null, ERRORMSG);
    }
    }
    else {
    return cb(error, null);
    }
    blockchain.getChainId(function (error, data) {
    var chainId;
    if (!error) {
    if (typeof (data) === 'undefined') {
    return cb(null, ERRORMSG);
    }
    else if (data.result) {
    chainId = data.result.ChainId;
    }
    else if (data.error) {
    return cb(null, data.error.message);
    }
    else {
    return cb(null, ERRORMSG);
    }
    }
    else {
    return cb(error, null);
    }
    let sendSign = {
    chain_id: chainId,
    tx: [
    SEND_TX_TYPE,
    {
    inputs:
        [
            {
                address: accountAddress,
                amount: amount,
                sequence: sequence + 1,
            }
        ],
    outputs:
        [
            {
                address: address,
                amount: amount
            }
        ]
    }
    ]
    };
    // console.log("Send Sign: ", JSON.stringify(sendSign));
    let signature = tenderkeys.sign(privKey, JSON.stringify(sendSign)).toString("hex");
    let sendTx = [
    SEND_TX_TYPE,
    {
    inputs:
    [
        {
            address: accountAddress,
            amount: amount,
            sequence: sequence + 1,
            signature: [1, signature],
            public_key: [1, pubKey]
        }
    ],
    outputs:
    [
        {
            address: address,
            amount: amount
        }
    ]
    }
    ];

    transaction.broadcastTx(sendTx, function (error, data) {
    if (!error) {
    if (typeof (data) === 'undefined') {
    return cb(null, ERRORMSG);
    }
    else if (data.result) {
    return cb(null, data.result.TxHash);
    }
    else if (data.error) {
    return cb(null, data.error.message);
    }
    else {
    return cb(null, ERRORMSG);
    }
    }
    else {
    return cb(error, null);
    }
    });
    });
    });
    }
    catch (ex) {
    console.log(ex);
    }
    }

    //** get Accounts */

    getAccounts(filter){
    return new Promise((resolve, reject) => {
    let returnBalance;
    try {
    this.account.getAccounts(filter,function (error, data) {                
    if (!error) {
    returnBalance = data;
    return resolve(returnBalance);
    }
    else {
    resolve(error);
    }                
    });
    }
    catch (ex) {
    console.log(ex);
    }
    })

    }


    //** get the address detials */

    getAccount(address){
    return new Promise((resolve, reject) => {
    let returnAccountDetails;
    try {
    this.account.getAccount(address,function (error, data) {                
    if (!error) {
    returnAccountDetails = data;
    console.log(JSON.stringify(returnAccountDetails));
    return resolve(returnAccountDetails);
    }
    else {
    resolve(error);
    }                
    });
    }
    catch (ex) {
    console.log(ex);
    }
    })

    }

    //** get the balance of the address*/
    getBalance(address) {   
    return new Promise((resolve, reject) => {
    let returnBalance;
    try {
    this.account.getAccount(address, function (error, data) {                
    if (!error) {
        returnBalance = data;
        return resolve(returnBalance);
    }
    else {
        resolve(error);
    }                
    });
    }
    catch (ex) {
    console.log(ex);
    }
    })
    }
    //** get the Sequence of the address*/
    getSequence(address) {
    try{

    if ( !address) throw ("Invalid address");
    return new Promise((resolve, reject) => {
    let returnSeq;
    try {
    this.account.getSequence(address, function (error, data) {                
        if (!error) {
            console.log(JSON.stringify(data));
            returnSeq = data;
            return resolve(returnSeq);
        }
        else {
        return resolve(error);
        }                
    });
    }
    catch (ex) {
    console.log(ex);
    }
    });
    }
    catch(ex){
    console.log(ex);
    }

    }


    //** Transcation Function */

    getUnconfirmedTxs(){
    try{

    return new Promise((resolve, reject) => {
    let returnLatestBlock;
    try {

    this.transaction.getUnconfirmedTxs(function (error, data) {                
        if (!error) {
            returnLatestBlock = data;
            return resolve(returnLatestBlock);
        }
        else {
            return resolve(error);
        }                
    });
    }
    catch (ex) {
    console.log(ex);
    }
    })

    }
    catch(error){
    console.log(ex);
    } 

    }

    //** BlockChain function */

    //** get the  information of blocks */
    getInfo() {      
    try{

    return new Promise((resolve, reject) => {
    let returnInfo;
    try {

    this.blockchain.getInfo(function (error, data) {                
        if (!error) {
            returnInfo = data;
            return resolve(returnInfo);
        }
        else {
            return resolve(error);
        }                
    });
    }
    catch (ex) {
    console.log(ex);
    }
    })

    }
    catch(error){
    console.log(ex);
    }  
    }

    //** get the  Block */
    getBlock(height) {  
    try{

    return new Promise((resolve, reject) => {
    let getBlockDetails;
    try {

    this.blockchain.getBlock(height,function(error, data) {                
        if (!error) {
            getBlockDetails = data;
            console.log(JSON.stringify(getBlockDetails));
            return resolve(getBlockDetails);
        }
        else {
            return resolve(error);
        }                
    });
    }
    catch (ex) {
    console.log(ex);
    }
    })

    }
    catch(error){
    console.log(ex);
    }  
    }

    //** get the current  ChainId */
    getChainId() { 

    try 
    {

    return new Promise((resolve, reject) => {
    let returnChainId;
    try {

    this.blockchain.getChainId(function (error, data) {                
    if (!error) {
    returnChainId = data;
    return resolve(returnChainId.result.ChainId);
    }
    else {
    return resolve(error);
    }                
    });
    }
    catch (ex) {
    console.log(ex);
    }
    })

    }
    catch(error){
    console.log(ex);
    } 
    }





    getLatestBlock() {      
    try{

    return new Promise((resolve, reject) => {
    let returnLatestBlock;
    try {

        this.blockchain.getLatestBlock(function (error, data) {                
            if (!error) {
                returnLatestBlock = data;
                return resolve(returnLatestBlock);
            }
            else {
                return resolve(error);
            }                
        });
    }
    catch (ex) {
        console.log(ex);
    }
    })

    }
    catch(error){
    console.log(ex);
    }  }

    //** {@number} height  */

    getBlock(height) {      
    try
    {

    return new Promise((resolve, reject) => {
        let returnBlockInfo;
        try {
        
            this.blockchain.getBlock(height,function (error, data) {                
                if (!error) {
                    returnBlockInfo = data;
                    console.log(returnBlockInfo);
                    return resolve(returnBlockInfo);
                }
                else {
                    return resolve(error);
                }                
            });
        }
        catch (ex) {
            console.log(ex);
        }
    })

    }
    catch(error){
    console.log(ex);
    } 
    }


    getInfo(height) {      

    try
    {              
    return new Promise((resolve, reject) => {
        let returnClientVersion;
        try {
        
            this.network.getInfo(function (error, data) {                
                if (!error) {
                    returnClientVersion = data;
                    console.log(JSON.stringify(returnClientVersion) );
                    return resolve(returnClientVersion);
                }
                else {
                    return resolve(error);
                }                
            });
        }
        catch (ex) {
            console.log(ex);
        }
    })

    }
    catch(error){
    console.log(ex);
    } 
    }

    }


