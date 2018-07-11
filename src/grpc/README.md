# Web4GRPC

Finterra Blockchain's web4 GRPC.

This is a JavaScript API for communicating with Finterra Blockchain.

    Installation Prerequisites
    
    Git
    Node.js version 6 or higher
    You can check the installed version of Node.js with the command:
    $ node --version
    
 

    To install clone this repository
    $ git clone https://github.com/finterra/Web4
    $ npm install 

**Usage**

  WEB4GRPC contians  file transactgRPC.js, keysgRPC.js &  eventsgRPC.js 
   
   * require the index file from the grpc folder.
   * create the instace of the WEB4grpc.
   * Pass the server url.
   * After cration of instance it will contains object of transaction, keys and event         instance.
   *  It contain the protobuffer files for communication with server method.Its in pb inside the ..src/pb
   * Refer the grpc_test.js file it contains all the function realted to WEB4GRPC
  

    Note: This library is still in development
