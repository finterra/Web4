WEB 4 - version 0.0.1


Web4 is a JavaScript API for communicating with a Hyperledger Burrow Blockchain (HBB). 

It acts as an interface between HBB (blockchain server) and client. Clients can send RPC requests for data via Web4, which in turn will post it to HBS. HBS then responds with JSON data object.

Web4 consists of bindings for all the RPC methods. All functions are of the form function(param1, param2, ... , callback), where the callback is a function on the form function(error,data). The data object is the same as what is returned when the RPC method is called directly.


 
Github INFORMATION - LINK, CLONING, AND INSTALLATION

    Link :  https://github.com/finterra/Web4

    Cloning : Create a project folder, for example, Web4. Switch to the project folder and clone the Web4 repository by running the following command: 

    git clone https://github.com/finterra/Web4.git

    Installation:  
    Installation Prerequisites
    
      Git
      Node.js version 6 or higher
     (You can check the installed version of Node.js with the command:
      $ node –-version)
     Install all dependencies, by running the following command:
     npm install
 
    FOLDER STRUCTURE AND MODULE DESCRIPTION
    
    The folder structure is as follows:
    •	Web4 
    ➢	src 
    •	lib
    •	account.js
    •	blockchain.js
    •	consensus.js
    •	namereg.js
    •	network.js
    •	server.js
    •	transaction.js
    ➢	index.js
    ➢	web4.js


The module description is as follows:
           
    Web4: this is the project folder name
    src: This is the source folder, which lists all the modules that are a part of the Web4 library.
    lib: This is the sub-folder within the src folder.

    account.js: This module consists of all information related to accounts that are registered on blockchain. Each account has a unique address. 

It includes methods that are responsible for returning the account object and its related properties, including the following:

➢	getAccounts(): Returns an object, listing all accounts registered on the Finterra blockchain.
➢	getAccount(<address string>,<function callback>): Returns the object of a particular account. The address of the account will need to be passed a parameter to retrieve this information. 
➢	getBalance(<address string>,<function callback>): Returns the object of a particular account. The address of the account will need to be passed a parameter to retrieve this information. The balance can be retrieved using:
<object>.result.Account.Balance
➢	getSequence(<address string>, <function callback>): Returns the object of a particular account. Sequence is the number of transactions associated with a particular account. It returns an integer value.
The address of the account will need to be passed a parameter to retrieve this information. The sequence can be retrieved using:
<object>.result.Account.Sequence
➢	getStorage(<address string>, <function callback>): Returns the object of a particular contract. Storage consists of all deployed contracts, along with their state variables and methods. The address of the account will need to be passed a parameter to retrieve this information.

➢ getStorageAt(<address string>, < key>,<function callback>): Returns the object of a particular contract storage. The address of a contract and key of the given account will need to be passed as a parameter to retrieve this information.

•blockchain.js: This module consists of all information related to blockchain.
It includes methods that are responsible for returning the blockchain object and its related properties, including the following:

➢getInfo(<callback>): Returns the blockchain object, listing all information associated with the  
➢getChainId(<callback>): Returns the blockchain object. Chain ID is the unique identifier for each chain that exists on the Finterra blockchain network. It can be retrieved by running the following command:
<object>.result.ChainID

➢	getGenesisHash(<callback>): Returns the blockchain object. Genesis Hash is the hash of the first block deployes on the Finterra network. It can be retrieved by running the following command:
<object>.result.GenesisHash

➢getLatestBlockHeight(<callback>): Returns the blockchain object. The latest block height can be retrieved by running the following command:
<object>.result. LatestBlockHeight

➢getLatestBlock(<callback>): Returns the blockchain object. The latest block can be retrieved by running the following command:
<object>.result. LatestBlock

➢getBlocks(<filter string>,<callback>): Returns the blockchain object. The filter will need to be passed as a parameter to retrieve this information. Blocks from minimum to maximum height can be retrieved by running the following command:
<object>.result.Blocks

➢	getBlock(<height integer>,<callback>): Returns the blockchain object. The height of a required block will need to be passed as a parameter to retrieve this information. Block of a particular height can be retrieved by running the following command:
<object>.result.Block

•	consensus.js: This module consists of all information related to consensus mechanism, such as fetching the list of validators, and querying the consensus state. 
The following methods incorporate this module:
➢	getValidators(<callback>): Returns the consensus object. Validators are the nodes who will be responsible for validating transactions on the Finterra Blockchain network. The list of validators can be retrieved by running the following command:
		<object>.result.Validators

➢	getState(<callback>): Returns the consensus object. Consensus state is the relationship between consecutive consensus. Information pertaining to the consensus state can be fetched by running the following command:
		<object>.result.State

•	namereg.js: This module consists of all information related registering and permissioning new users on blockchain.
It includes methods for accessing the name registry, including the following:

➢	getEntries(<filter string>, <callback>): Returns the Name Register object. To fetch a list of names matching a certain keyword, its filter will have to be passed as a parameter. List of all names registered on the Finterra blockchain can be accessed using the following command:
<object>.result.Entries

➢	getEntry(<name string>, <callback>): Returns the Name Register object. To fetch a particular name, pass it as a parameter. Access a particular name by  running the following command:
<object>.result.Entry

➢	setEntry (<private key string>, <name string>, <data string>, <numBlocks integer>, <amount integer> , <fee integer>, <callback>): This is a setter function, wherein new entries can be registered on the Finterra blockchain. In order to achieve this, pass parameters – private key, name, data, number of blocks, amount, and fee.

•	network.js: This module consists of all information related to the peer-to-peer network, established on the Finterra Blockchain.
It includes methods for accessing the preceding network details, including the following:

➢	getInfo(<callback>): Returns the network object.  All details related to the network, can be accessed by running the following command:
<object.result.Info>

➢	getClientVersion(<callback>): Returns the network object.  The client version can be accessed by running the following command:
<object.result.Version>

➢	getMoniker(<callback>):

➢	isListening(<callback>): Returns the network object.  To find the Boolean ‘True’ or ‘False’ whether the node is listening to the peers, run the following command:
<object.result.Listening>

➢	getListeners(<callback>): Returns the network object.  To retrieve the list of listeners, run the following command:
    			<object.result.Listeners>

➢	getPeers(<callback>): Returns the network object.  To retrieve the list of connected peers, run the following command:
<object.result.Peers>

➢	getPeer(<address string>, <callback>): Returns the network object.  Pass the IP address of the peer to access the peer details. To retrieve a peer based on the address, run the following command:
<object.result.Peer>

•	server.js: This module consists of all information related to connection with the Finterra Blockchain. It used the ‘request’ functionality to make HTTP calls.
It includes methods for accessing the preceding server details, including the following:

➢	serverPost(<method_name string>, <url string>, <params string>, <callback>): Returns the server response object.  Pass the method name, URL, and parameters to access the details related to HTTP response received from the Blockchain server for a POST request made. To retrieve these details, run the following command:
<object.result.Post>

•	transaction.js: This module consists of all information related to the transactions that exist on the Finterra Blockchain network.
Various methods to access the transaction details are listed as follows:

➢	send(<private_key string>, <to_address string>, <amount integer>, <callback>): Returns the transaction object. Send depends upon the network token. To access details related to any send transaction from one account to another, run the following command by passing the private key of the sender, address of receiver,  and amount transferred as parameters:
<object.result.Send>

➢	sendAndHold(<private_key string>, <to_address string>, <amount integer>, <callback>): Returns the transaction object. Send and Hold waits to submit any transaction to the Finterra Blockchain network, until it is complete and commited. To access these details, run the following command by passing the private key of the sender, address of receiver,  and amount transferred as parameters:
<object.result.SendAndHold>
	
➢	transact(<private_key string>, <address string>, <data string>, <gasLimit integer>, <fee integer>,<callback>): Returns the transaction object. Transact is different from Send, as it depends upon the contract address data . To access these details related to any transaction, run the following command by passing the private key of the sender, address of receiver,  and amount transferred as parameters:
<object.result.Transact>

➢	transactAndHold(<private_key string>, <name string>, <data string>, <amount integer>, <fee integer>, <context string>, <callback>): Returns the transaction object. Transact and Hold waits to submit any transaction to the Finterra Blockchain network, until it is complete and commited. Similar to Transact, Transact and Hold also depends upon the contract address to perform any transaction. For accessing these details, run the following command by passing the private key of the sender, address of receiver,  and amount transferred as parameters:
<object.result.TransactAndHold>

➢	broadcastTx(<transaction string>,<callback>): Returns the transaction object. This method broadcasts transactions to the Finterra Blockchain. For accessing these details, run the following command by passing the transaction key as a parameter:
<object.result.TransactAndHold>

➢  call(<from_address string>, <to_address string>, <data>,<callback>): 
	   Returns the transaction object. This method provides read-only access to the smart contract. It is used to retrieve the data of the contract account storage. In order to access these details, run the following command by passing the sender address, receiver address, and data as parameters:
<object.result.Call>

➢  callCode(<from_address string>, <code string>,<data string>,<callback>):Returns the transaction object. This method is a tool for accessing the VM directly. callCode works in the same way as call(), except that the compiled code is passed as parameter in place of the to_address. It is used to retrieve the data of the contract account storage. In order to access these details, run the following command :
  <object.result.callCode>

web4.js: This file serves as the entry point for all modules and execution on the Finterra blockchain. It creates the web4 object, for accessing all information related to the codebase.
 
    USAGE	
  Steps to use the web4 library are as follows:

1.	Create a file at the root level. For example, web4_usage.js.

2.	Require the web4.js module in this file by providing its path, as follows:

        var web4=require(‘<path>/web4.js’);

3.	Create an object of the above class by providing the URL of the Finterra Blockchain server as the parameter, as follows:

        var web4Object=new web4(‘<URL>’);

   This will provide access to all the methods and modules in the Web4 library.

4.	Access the methods, by using the web4 object and dot operator, as follows:

       web4Object.<method name>;

For example,

     web4Object.getBalance(<account address>);

    Note: Currently, only methods related to account information are accessible by using the above steps. In order to access other   methods, refer to the functions added in the web4.js file, and create similar methods in this file itself.  

For example, function to access the balance of an account is as follows:

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
