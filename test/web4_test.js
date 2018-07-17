let web4 = require('../web4');

const fs = require('fs');
const grpc = require('grpc');
//let url = "localhost:10997"

//let url = "localhost:50051"

let value = 10;
let fromAccount = {
    privateKey:"E675C64E287076FE467A3227672CB4024080ED33E4485F14ABC07A35499D8CA4E2E83F6B9F0AC3C750C52A5C83E3A0F5263D7208DC23887FF5AA0FB0AEC17DE7",
    address:"7E95E272A32C7D1A236DC0F044DD62F08504C42C"
}
// let inputAccount = "E675C64E287076FE467A3227672CB4024080ED33E4485F14ABC07A35499D8CA4E2E83F6B9F0AC3C750C52A5C83E3A0F5263D7208DC23887FF5AA0FB0AEC17DE7";
// let pubKey1 = "E2E83F6B9F0AC3C750C52A5C83E3A0F5263D7208DC23887FF5AA0FB0AEC17DE7";
// let address1 = "7E95E272A32C7D1A236DC0F044DD62F08504C42C";



let toAddr = "E07F0F7A3B77F0CCEE4A5A1923F8126CF74A6694";
let pubKey2 = "56D2CE5823E4BF1D9621812DE9AFD65DE5786C6096D8C08B4B30C219D8AFC3EF";
let privKey2 = "85BB7D2E1856C281190FA174E7478F596BAFF265733C7AE6BE87E0DE10E57F3356D2CE5823E4BF1D9621812DE9AFD65DE5786C6096D8C08B4B30C219D8AFC3EF";



// const PROTO_PATH = 'src/pb/transactor.proto';
// const serviceDef = grpc.load(PROTO_PATH);
// var client = new serviceDef.Transactor(url,grpc.credentials.createInsecure());


/** Send Transcation 
 * {@input account} includes private key,address 
 * {@toAddress}
 * {@amount}  
*/
// client.send({inputAccount : fromAccount,toAddress : toAddr, amount : value}, function(err, response) {
//   if(err)
//   {console.log(err)}
//   else{
//     console.log('Greeting:', response);
//   }
  
// });



 let url = "http://192.168.0.10:1310/rpc";
let url = "http://54.95.41.253:1337/rpc";





/** Web 4 testing */
let WEB4 = new web4(url);

// let transactionHash = ""
// let prove = "";
// let height = 111087

WEB4.getInfo(function(error,data){
   if (error){
     console.log(error);
   }
   else{
     console.log(data);
   }

})

// WEB4.getBlock(height,function(error,data){
//     if (error){
//       console.log(error);
//     }
//     else{
//       console.log(data);
//     }
//   })