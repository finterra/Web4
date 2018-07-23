 var webGRPC = require('../src/grpc/index');
 var TextEnc = new require('text-encoding');
 var StringDecoder = require('string_decoder').StringDecoder;
 var decoder = new StringDecoder('utf8');
 let WEB4 = require('../web4');
 let url = "localhost:10997";

 /* Instance of WEB4GRPC */
 var gRPC = new webGRPC(url);
 var web4 = new WEB4(url);

 var transactions = gRPC.transactions;
 var events = gRPC.events;
 var keys = gRPC.keys;
 var accounts = gRPC.accounts;
 var network = gRPC.network;
 var nameReg = gRPC.NameReg;
 var blockchain = gRPC.blockchain;

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
     address: fromaddress
 }


 // /********************* Keys function start here ******************* */

 


 /* Parameter for GenerateKey method  */
 var GenRequest = {
    Passphrase: 'test123',
    CurveType: 'ed25519',
    KeyName: 'NAGA'
}


keys.GenerateKey(GenRequest, function (error, data) {

    if (error) {
        console.log(error)
    } else {
        console.log(JSON.stringify(data))
    }
});


/* Parameter for PublicKey method  */
var PubRequest = {
    Address: 'B158C7716DFA217D3A3671D490B6825FD169D12E',
    Name: 'NAGA'

}

keys.PublicKey(PubRequest, function (error, data) {

    if (error) {
        console.log(error)
    } else {
        //    JSON output =  {"PublicKey":{"type":"Buffer","data":[65,255,139,54,62,120,56,74,72,18,239,21,150,91,4,182,73,194,198,122,126,137,148,236,194,126,2,70,26,184,226,8]},"CurveType":"ed25519"}
        console.log(JSON.stringify(data))
        var publicKeyBuffer = data.PublicKey;
        var arraybuf = toHexString(publicKeyBuffer);
        console.log(arraybuf);
        
    }
});


 keys.List('',function(error,data){

         if (error) {
             console.log(error)
         } else {
             console.log(JSON.stringify(data))
         }
 });


 // convert bytes to hex string
function toHexString(byteArray) {
    var s = '0x';
    byteArray.forEach(function(byte) {
      s += ('0' + (byte & 0xFF).toString(16)).slice(-2);
    });
    return s;
  }