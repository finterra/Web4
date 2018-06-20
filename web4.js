'use strict'
      
        //** just create intance of WEB4 and pass url */
        module.exports = class Web4 {
            constructor (web4URL){
                let Web4Facotry =require('../Web4/src/index');   
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

                    if ( !address) throw ("Invalid address");
                    return new Promise((resolve, reject) => {
                        let returnSeq;
                        try {
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

          

        }