    'use strict'

    //** just create intance of WEB4 and pass url */
    let Web4Facotry = require('../Web4/src/index');
    let TenderKeys = require('tenderkeys');
    let tenderkeys = new TenderKeys();
    // export let utils = require('./src/lib/utils/src/index');

    module.exports = class Web4 {

        constructor(web4URL) {
            this.web4 = new Web4Facotry(web4URL);
            this.account = this.web4.account;
            this.transaction = this.web4.transaction;
            this.blockchain = this.web4.blockchain;
            this.network = this.web4.network;
            this.utils = this.web4.utils;
        }

        //** Transcation Function */
        getUnconfirmedTxs() {
            try {

                return new Promise((resolve, reject) => {
                    let returnLatestBlock;
                    try {

                        this.transaction.getUnconfirmedTxs(function (error, data) {
                            if (!error) {
                                returnLatestBlock = data;
                                return resolve(returnLatestBlock);
                            } else {
                                return resolve(error);
                            }
                        });
                    } catch (ex) {
                        console.log(ex);
                    }
                })

            } catch (error) {
                console.log(ex);
            }

        }

        /**     
         * @file 
         * Block Chain Function
         */

        //** get the  information of blocks */
        getInfo() {
            try {
                return new Promise((resolve, reject) => {
                    let returnInfo;
                    try {
                        this.blockchain.getInfo(function (error, data) {
                            if (!error) {
                                returnInfo = data;
                                console.log('returnInfo', JSON.stringify(data));
                                return resolve(returnInfo);
                            } else {
                                return resolve(error);
                            }
                        });
                    } catch (ex) {
                        console.log(ex);
                    }
                })

            } catch (error) {
                console.log(ex);
            }
        }

        //** get the  Block 
        //{@number} height  */
        getBlock(height) {
            try {
                if (!height) {
                    return
                }
                return new Promise((resolve, reject) => {
                    let getBlockDetails;
                    try {

                        this.blockchain.getBlock(height, function (error, data) {
                            if (!error) {
                                getBlockDetails = data;
                                console.log(JSON.stringify (data));
                                return resolve(getBlockDetails);
                            } else {
                                return resolve(error);
                            }
                        });
                    } catch (ex) {
                        console.log(ex);
                    }
                })

            } catch (error) {
                console.log(ex);
            }
        }

        //** get the current  ChainId   //** 
        getChainId() {
            try {
                return new Promise((resolve, reject) => {
                    let returnChainId;
                    try {

                        this.blockchain.getChainId(function (error, data) {
                            if (!error) {
                                returnChainId = data;
                                return resolve(returnChainId.result.ChainId);
                            } else {
                                return resolve(error);
                            }
                        });
                    } catch (ex) {
                        console.log(ex);
                    }
                })

            } catch (error) {
                console.log(ex);
            }
        }

        //** get the Latest Block   //** 
        getLatestBlock() {
            try {
                return new Promise((resolve, reject) => {
                    let returnLatestBlock;
                    try {

                        this.blockchain.getLatestBlock(function (error, data) {
                            if (!error) {
                                returnLatestBlock = data;
                                return resolve(returnLatestBlock);
                            } else {
                                return resolve(error);
                            }
                        });
                    } catch (ex) {
                        console.log(ex);
                    }
                })

            } catch (error) {
                console.log(ex);
            }
        }

        //** get the  blocks details //** 
        getBlocks() {
            try {
                return new Promise((resolve, reject) => {
                    let returnBlocksInfo;
                    try {

                        this.blockchain.getBlocks(function (error, data) {
                            if (!error) {
                                returnBlocksInfo = data;
                                console.log(JSON.stringify(returnBlocksInfo));
                                return resolve(returnBlocksInfo);
                            } else {
                                return resolve(error);
                            }
                        });
                    } catch (ex) {
                        reject(ex);
                    }
                })

            } catch (error) {
                console.log(ex);
            }


        }

        //** get the  Tx hash details //** 
        getTx(tx,prove) {
            try {
                return new Promise((resolve, reject) => {
                    let returnBlocksInfo;
                    try {

                        this.blockchain.getTx(tx,prove,function (error, data) {
                            if (!error) {
                                returnBlocksInfo = data;
                                console.log(JSON.stringify(returnBlocksInfo));
                                return resolve(returnBlocksInfo);
                            } else {
                                return resolve(error);
                            }
                        });
                    } catch (ex) {
                        reject(ex);
                    }
                })

            } catch (error) {
                console.log(ex);
            }


        }
    }