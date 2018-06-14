# Web4

Finterra Blockchain's advanced web4.

This is a JavaScript API for communicating with a Hyperledger Burrow server.

    Installation Prerequisites
    
    Git
    Monax version 0.16
    Node.js version 6 or higher
    You can check the installed version of Node.js with the command:

    $ node --version
    
If your distribution of Linux has a version older than 6 then you can update it using NodeSource's distribution.

    To install clone this repository
    
    $ git clone https://github.com/finterra/Web4

**Usage**

  It has main file account.js, blockchain.js, server.js & transcation.js
  
    var account = require('account');
    var account = new account("http://<IP address>:1337/rpc"); pass the url

The parameters for createInstance is the server URL as a string. The client-type is chosen based on the URL scheme. 

**API Reference**

There are bindings for all the RPC methods. All functions are on the form function(param1, param2, ... , callback), where the callback is a function on the form function(error,data). The data object is the same as you would get by calling the corresponding RPC method directly.

This is the over-all structure of the library. 

NOTE: There will be links to the proper jsdoc and integration with Monax.io. For now, the components point to the actual code files and methods points to the web-API method in question.


**WEB4 RPC Methods**

Account RPC

The accounts object has methods for getting blockchain-related data, such as a list of blocks, or individual blocks, or the hash of the genesis block.

Create instance of Account 

    var account =require('account')
    var Account = new account("http://<IP address>:1337/rpc");

    Accounts.getAccounts		
    Accounts.getAccount	
    Accounts.getStorage
    Accounts.getStorageAt	
    Accounts.genPrivAccount

Blockchain RPC

Create instance of Blockchain 

    var blockchain =require('blockchain')
    var Blockchain = new account("http://<IP address>:1337/rpc");

    BlockChain.getInfo		
    BlockChain.getChainId		
    BlockChain.getGenesisHash	
    BlockChain.getLatestBlockHeight		
    BlockChain.getLatestBlock		
    BlockChain.getBlocks		
    BlockChain.getBlock	

Transaction RPC

Transacting via broadcastTx will be the standard way of doing things if you want the key to remain on the users machine. This requires a browser plugin for doing the actual signing, which we will add later. For now, you should stick to the transact method.

Create instance of Transaction 

    var transcation =require('transaction')
    var Transcation = new transcation("http://<IP address>:1337/rpc");

    Transactions.broadcastTx	
    Transactions.getUnconfirmedTxs		
    Transactions.call	
    Transactions.callCode	
    Transactions.transact	
    Transactions.transactAndHold	
    Transactions.transactNameReg	

To get a private key for testing/developing, you can run tendermint gen_account if you have it installed. You can also run tools/pa_generator.js if you have a local node running. It will take the url as command line argument at some point...

**Calls**

Calls provide read-only access to the smart contracts. It is used mostly to get data out of a contract-accounts storage by using the contracts accessor methods, but can be used to call any method that does not change any data in any account. A trivial example would be a contract function that takes two numbers as input, adds them, and then simply returns the sum.

There are two types of calls. Call takes a data string and an account address and calls the code in that account (if any) using the provided data as input. This is the standard method for read-only operations.

CallCode works the same except you don't provide an account address but the actual compiled code instead. It's a dev tool for accessing the VM directly. "Code-execution as a service".

    Note: This library is still in development
