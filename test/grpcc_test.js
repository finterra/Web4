var grpc = require('grpc');
let url = "tcp:localhost:10997";




// let call = client.getNodeInfo({})
//   .on('peers', streamReply);

// let i = 0;
// let id = setInterval(() => {
//   if (i > 5) {
//     clearInterval(id);
//     return call.end();
//   }
//   i++;
//   call.write({ sendRequest: `Sending.. ${i}` });
// }, 100);