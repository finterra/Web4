let Client = require('./clientGen');

module.exports = class KeysgRPC {
  constructor(url) {
    this.client = Client.getClient(url, "Keys",'keys');
    console.log(this.client);
   }

//** GenerateKey method
/* GenRequest parameters
/* {@passphrase}  string
/* {@curvetype}  string
/* {@keyname}   string
**/
  GenerateKey(GenRequest,callback) {
    this.client.generateKey(GenRequest, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null,response)
      }
    })
  }

//** PublicKey method
/* PubRequest parameters
/* {@address}  string
/* {@name}  string
**/
  PublicKey(PubRequest,callback) {
    this.client.publicKey(PubRequest, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null,response)
      }
    })
  }
  

  //** Sign method
/* SignRequest parameters
/* {@passphrase}  string
/* {@address}  string
/* {@name}  string
/* {@message}  bytes
**/
  Sign(SignRequest,callback) {
    this.client.sign(SignRequest, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null,response)
      }
    })
  }



//** Verify method
/* VerifyRequest parameters
/* {@curvetype}  string
/* {@pub}  bytes
/* {@message}  bytes
/* {@signature}  bytes
**/
  Verify(VerifyRequest,callback) {
    this.client.verify(VerifyRequest, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null,response)
      }
    })
  }

//** Import method
/* ImportRequest parameters
/* {@passphrase}  string
/* {@name}  string
/* {@curvetype}  string
/* {@keybytes}  bytes
**/
  Import(ImportRequest,callback) {
    this.client.import(ImportRequest, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null,response)
      }
    })
  }


//** ImportJSON method
/* ImportJSONRequest parameters
/* {@passphrase}  string
/* {@JSON}  string
**/
  ImportJSON(ImportJSONRequest,callback) {
    this.client.importJson(ImportJSONRequest, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null,response)
      }
    })
  }

//** Export method
/* ExportRequest parameters
/* {@passphrase}  string
/* {@name}  string
/* {@address}  string
**/
  Export(ExportRequest,callback) {
    this.client.export(ExportRequest, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null,response)
      }
    })
  }

//** Hash method
/* HashRequest parameters
/* {@hashtype}  string
/* {@message}  bytes
**/
  Hash(HashRequest) {
    this.client.hash(HashRequest, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null,response)
      }
    })
  }

//** RemoveName method
/* RemoveNameRequest parameters
/* {@keyname}  string
**/
  RemoveName(RemoveNameRequest,callback) {
    this.client.removeName(RemoveNameRequest, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null,response)
      }
    })
  }

//** List method
/* ListRequest parameters
**/
  List(list,callback) {

   this.client.list({}, function (err, response) {
   
      if (err) {
        callback(err)
      } else {
        callback(null,response)
      }
    })
  }

 //** AddName method
/* AddNameRequest parameters
/* {@keyname}  string
/* {@address}  string
**/
  AddName(AddNameRequest,callback) {
    this.client.addName(AddNameRequest, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null,response)
      }
    })
  }



}