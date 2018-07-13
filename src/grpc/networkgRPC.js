let Client = require('./clientGen');

module.exports = class NetworkgRPC {
  constructor(url) {
    this.client = Client.getClient(url, "Network")
  }

  /* GetClientVersion method
   *   empty parameter 
   *   @empty , nil 
   */
  GetClientVersion(empty, callback) {
    this.client.getClientVersion(empty, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null, response)
      }
    })
  }

  /* GetNetworkInfo method
   *   empty parameter 
   *   @empty , nil 
   */
  GetNetworkInfo(empty, callback) {
    this.client.getNetworkInfo(empty, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null, response)
      }
    })
  }

  /* GetNodeInfo method
   *   empty parameter 
   *   @empty , nil 
   */
  GetNodeInfo(empty, callback) {
    this.client.getNodeInfo(empty, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null, response)
      }
    })
  }

  /* GetPeer method
   *   PeerParam parameter 
   *   @address bytes' 
   */
  GetPeer(PeerParam, callback) {
    this.client.getPeer(PeerParam, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null, response)
      }
    })
  }

  /* GetPeers method
   *   empty parameter 
   *   @empty , nil 
   */
  GetPeers(empty, callback) {
    this.client.GetPeers(empty, function (err, response) {
      if (err) {
        callback(err)
      } else {
        callback(null, response)
      }
    })
  }
}