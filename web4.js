'use strict'
      
        let Tenderkeys = require("./tenderKeys");
        let tenderkeys=new Tenderkeys();
        const SEND_TX_TYPE  = 0x1;

        //** just create intance of WEB4 and pass url */
        module.exports = class Web4 {
            constructor (web4URL){
                let Web4Facotry =require('../utils/web4/web4');   
                this.web4 = new Web4Facotry(web4URL);
                this.account = this.web4.account;          
                this.transaction = this.web4.transaction;
                this.blockchain = this.web4.blockchain;
             

            }
             
            //** get the balance of the address*/
            getBalance(address) {   
                return new Promise((resolve, reject) => {
                    let returnBalance;
                    try {
                        this.account.getBalance(address, function (error, data) {                
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
                    return new Promise((resolve, reject) => {
                        let returnSeq;
                        try {
                            console.log(this.account);
                            this.account.getSequence(address, function (error, data) {                
                                if (!error) {
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

            //** get the current  ChainId */
            getChainId() {      
            try{
                
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
            }  }

            //** send transcation and  broadcast the transaction, return txhash */
            send(privKey,address,amount){
                try{
                    if (!privKey || !address || !amount) throw ("Invalid arguments");

                    let blockchain = this.blockchain;
                    let account = this.account;
                    let transaction = this.transaction;
    
                    var pubKey = tenderkeys.getPubKeyFromPrivKey(privKey);
                    var accountAddress = tenderkeys.getAddressFromPrivKey(privKey);
                    return this.account.getSequence(accountAddress, function(err,sequence) { 
                      var sequence=sequence.result.Account.Sequence;
                      if (!sequence) throw ("Invalid sequence");
                        return blockchain.getChainId(function(err,chainId) {
                            if(err) console.log(err)
                            let sendSign = {
                                chain_id:chainId,
                                tx: [
                                    SEND_TX_TYPE,
                                    {
                                        inputs:
                                        [
                                            { 
                                                address:accountAddress,
                                                amount:amount,
                                                sequence:sequence + 1,
                                            }
                                        ],
                                        outputs:
                                        [
                                            {
                                                address:address,
                                                amount:amount
                                            }
                                        ]
                                    }
                                ]
                            };
    
                            let signature = tenderkeys.sign(privKey,JSON.stringify(sendSign)).toString("hex");                    
                            
                            let sendTx = [
                                SEND_TX_TYPE,
                                {
                                    inputs:
                                    [
                                        { 
                                            address:accountAddress,
                                            amount:amount,
                                            sequence:sequence + 1,
                                            signature:[1,signature],
                                            public_key:[1,pubKey]
                                        }
                                    ],
                                    outputs:
                                    [
                                        {
                                            address:address,
                                            amount:amount
                                        }
                                    ]
                                }
                            ];
                          
                            return transaction.broadcastTx(sendTx, function(err,data) {                    
                                return data;
                        });
                        });
                    });
                }
                catch(ex){
                   console.log(ex)
                }
              
                
            }


        }