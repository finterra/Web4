var webGRPC = require('../src/grpc/index');
let WEB4 = require('../web4');
//let url = "localhost:10997";
let url = "0.0.0.0:50051";

/* Instance of WEBGRPC8*/
var gRPC = new webGRPC(url);

/**  */
var transactions = gRPC.transactions;
var events = gRPC.events;
var keys = gRPC.keys;

console.log(keys);

/**
 * Account for test case
 */

/** Account 1 */
let privateKey = "120740F15242C108F16A2A444696CF09B5C8149A6F4E9C11AE4228A9836A46B3161994A023568C9C1D0F70040948095C9C1B250E8A30E80E7170A4EA7DDE9546";
let fromaddress = "564F13D54992F472D608F810EB0AD669485CF8B0";

/** Account 2 */
let toAddr = "5C9FE18E5AB007110AAAC6E8BD32E6830B200E5E";
let pubKey2 = "C99D1A93D1E04D9677F3D1641F9B7219DCABF1B8175DC4840F9F415C92C0DB20";
let privKey2 = "8341F790F37C89313457D63360A124CAA9B922878D6BDA37AFB016626D3473ABC99D1A93D1E04D9677F3D1641F9B7219DCABF1B8175DC4840F9F415C92C0DB20";
let amount = 10;

var inputAccount = {
    privateKey: privateKey,
    address: address
}

/********************* Transcation function start here ******************* */

/**
 * Input for send and sendAndHold GRPC function
 */
var sendParam = {
    inputAccount: inputAccount,
    toAddress: toAddr,
    amount: 100
}

/** Send method
 *   sendParam parameter 
 *   @inputAccount {privateKey, address} requires 'Private Key' and 'Address'
 *   @toAddress requires 'To Address'
 *   @value requires Amount number 
**/
transaction.Send(sendParam, function (error, data) {
    console.log("Response: ", data);
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
});

/** SendAndHold method
 *   sendParam parameter 
 *   @inputAccount {privateKey, address} requires 'Private Key' and 'Address'
 *   @toAddress requires 'To Address'
 *   @value requires Amount number 
**/
transaction.SendAndHold(sendParam,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }
})

/** Transact method
 *   TransactParam parameter 
 *   @inputAccount {privateKey, address} requires 'Private Key' and 'Address'
 *   @address requires 'The address of the contract to call, or omitted if creating a new contract'
 *   @value requires Amount
 *   @data EVM bytecode payload to deliver
 *   @gasLimit The maximum gas to provide to the EVM when running any code - provided in order to bound the computation time
 *   @fee   Fee to offer validators for processing transaction
**/
 transaction.Transact(TransactParam,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }

 })

/** Transact method
 *   TransactParam parameter 
 *   @inputAccount {privateKey, address} requires 'Private Key' and 'Address'
 *   @address requires 'The address of the contract to call, or omitted if creating a new contract'
 *   @value requires Amount
 *   @data EVM bytecode payload to deliver
 *   @gasLimit The maximum gas to provide to the EVM when running any code - provided in order to bound the computation time
 *   @fee   Fee to offer validators for processing transaction
**/
 transaction.TransactAndHold(TransactParam,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }

 })

//** Call method
/* {@fromAccount} takes from address
/* {@toAddress} takes toaddress 
/* {@data}  EVM bytecode payload to deliver
**/
 transaction.Call(CallParam,function(error, data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }

 })

/** CallCode method
/* CallCodeParam Parameter
/* {@fromAccount} takes from address
/* {@toAddress} takes toaddress 
/* {@data}  EVM bytecode payload to deliver
**/
 transaction.CallCode(CallCodeParam,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }

 })

//** SignTx method
/* SignTxParam Parameter
/* {@tx}
/* {@privateAccounts} takes to Private key 
**/
 transaction.SignTx(SignTxParam,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }

 })


//** BroadcastTx method
/* TxParam parameters
/* {@tx} 
**/
 transaction.BroadcastTx(TxParam,function(error, data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }

 })

 var hexToBytes = function (hex) {
    hex = hex.toString(16);

    hex = hex.replace(/^0x/i, '');

    for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
};

 /********************* Transcation function end here ******************* */


 /********************* Event function Start here ******************* */

//** EventPoll method
/* SubIdParam parameters
/* {@subId}  string
**/

/* let SubIdParam={
/*  subId:"1"  
/* }
*/
 events.EventPoll(SubIdParam,function(error, data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }

 });

//** EventSubscribe method
/* EventIdParam parameters
/* {@eventId}  string
**/
 events.EventSubscribe(EventIdParam,function(error, data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }
 });

 //** EventUnsubscribe method
 /* SubIdParam parameters
/* {@subId}  string
**/
 events.EventUnsubscribe(SubIdParam,function(error, data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }
 });

 /********************* Event function end here ******************* */



 /********************* Keys function Start here ******************* */

//** GenerateKey method
/* GenRequest parameters
/* {@passphrase}  string
/* {@curvetype}  string
/* {@keyname}   string
**/
 keys.GenerateKey(GenRequest,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }

 });

 //** AddName method
/* AddNameRequest parameters
/* {@keyname}  string
/* {@address}  string
**/
 keys.AddName(AddNameRequest,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }
})

 //** Import method
/* ImportRequest parameters
/* {@passphrase}  string
/* {@name}  string
/* {@curvetype}  string
/* {@keybytes}  bytes
**/
 keys.Import(ImportRequest,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }
});

//** Export method
/* ExportRequest parameters
/* {@passphrase}  string
/* {@name}  string
/* {@address}  string
**/
 keys.Export(ExportRequest,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }
});

//** ImportJSON method
/* ImportJSONRequest parameters
/* {@passphrase}  string
/* {@JSON}  string
**/
 keys.ImportJSON(ImportJSONRequest,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }
});

//** List method
/* ListRequest parameters

**/
 keys.List(ListRequest,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }
});

//** PublicKey method
/* PubRequest parameters
/* {@address}  string
/* {@name}  string
**/
 keys.PublicKey(PubRequest,function(error,data){

    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }
});

//** RemoveName method
/* RemoveNameRequest parameters
/* {@keyname}  string
**/
 keys.RemoveName(RemoveNameRequest,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }
});


//** Sign method
/* SignRequest parameters
/* {@passphrase}  string
/* {@address}  string
/* {@name}  string
/* {@message}  bytes
**/
 keys.Sign(SignRequest,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }
})


//** Verify method
/* VerifyRequest parameters
/* {@curvetype}  string
/* {@pub}  bytes
/* {@message}  bytes
/* {@signature}  bytes
**/
 keys.Verify(VerifyRequest,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }
})

//** Hash method
/* HashRequest parameters
/* {@hashtype}  string
/* {@message}  bytes
**/
keys.Hash(HashRequest,function(error,data){
    if (error) {
        console.log("error",error)
    } else {
        console.log("Response: ",data);
    }

})

/********************* Keys function end here ******************* */