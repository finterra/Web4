/**
 * @file consensus.js
 * @fileOverview Factory module for the Events class.
 * @author Nagaraj Manjunath
 * @module events
 */
var requestserver = require('./server');
let server = new requestserver();
var errormsg;

'use strict'
module.exports = class events 
{
  constructor(serverUrl) {
     this.server = serverUrl;
     }

// The interval for polling.
//let defaultPollingInterval = 1000

/**
 * Subscribe to a given event.
 *
 * @param {string} event_id - The event id.
 * @param {module:rpc/rpc~methodCallback} callback - The callback function.
 */
eventSubscribe(eventId, cb) {
let parameters = {"event_id":eventId}
server.serverPost("burrow.eventSubscribe",this.server,parameters,function(error,data){
if(error) return cb(error);
return cb(null, data);
});

}

/**
 * Unsubscribe to a given event.
 *
 * @param {string} subId - The subscription id (provided as a response to subscribe).
 * @param {module:rpc/rpc~methodCallback} callback - The callback function.
 */
eventUnsubscribe(subId, cb) {
    let parameters = {"event_id":eventId}
    server.serverPost("burrow.eventUnsubscribe",this.server,parameters,function(error,data){
    if(error) return cb(error);
    return cb(null, data);
    });
}

/**
 * Poll for new event data.
 *
 * @param {string} subId - The subscription id (provided as a response to subscribe).
 * @param {module:rpc/rpc~methodCallback} callback - The callback function. The callback
 * will receive a (potentially empty) array of events of the given type.
 */
eventPoll(subId, cb) {
    let parameters =  {"sub_id":subId}

    server.serverPost("burrow.eventPoll",this.server,parameters,function(error,data){
    if(error) return cb(error);
    return cb(null, data);
    });
}

/**
 * Subscribe for solidity events. This is the same as subscribing for logs.
 *
 * @param {string} address - The account to be tracked.
 * @param {module:rpc/rpc~methodCallback} createCallback - Callback for when the subscription has
 * been created. The data returned is a new EventSub object.
 * @param {module:rpc/rpc~methodCallback} eventCallback - The callback function.
 */
subSolidityEvent(address,cb) {
    // No need to do another call here..
    var logaddress=logEventId(address);
    let parameters =  {"event_id":logaddress};
    server.serverPost("burrow.eventSubscribe",this.server,parameters,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
        });
}



/**
 * Subscribe for account intput events.
 *
 * @param {string} address - The account to be tracked.
 * @param {module:rpc/rpc~methodCallback} createCallback - Callback for when the subscription has
 * been created. The data returned is a new EventSub object.
 * @param {module:rpc/rpc~methodCallback} eventCallback - The callback function.
 */
subAccountInput(address,cb) {
  // No need to do another call here..
  var Accaddress = accInputId(address);
  let parameters =  {"event_id":Accaddress};
    server.serverPost("burrow.eventSubscribe",this.server,parameters,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
        });
}

/**
 * Subscribe for account output events.
 *
 * @param {string} address - The account to be tracked.
 * @param {module:rpc/rpc~methodCallback} createCallback - Callback for when the subscription has
 * been created. The data returned is a new EventSub object.
 * @param {module:rpc/rpc~methodCallback} eventCallback - The callback function.
 */
subAccountOutput = function (address, createCallback, eventCallback) {
    var Accaddress = accOutputId(address);
    let parameters =  {"event_id":Accaddress};
    server.serverPost("burrow.eventSubscribe",this.server,parameters,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
        });
}

/**
 * Subscribe for account receive events.
 *
 * @deprecated Use 'subAccountCall'
 * @param {string} address - The account to be tracked.
 * @param {module:rpc/rpc~methodCallback} createCallback - Callback for when the subscription has
 * been created. The data returned is a new EventSub object.
 * @param {module:rpc/rpc~methodCallback} eventCallback - The callback function.
 */
subAccountReceive (address,cb) {
  let CallIDaddress = accCallId(address);
  let parameters =  {"event_id":CallIDaddress};
  server.serverPost("burrow.eventSubscribe",this.server,parameters,function(error,data){
      if(error) return cb(error);
      return cb(null, data);
      });
 
}

/**
 * Subscribe for account call events.
 *
 * @param {string} address - The account to be tracked.
 * @param {module:rpc/rpc~methodCallback} createCallback - Callback for when the subscription has
 * been created. The data returned is a new EventSub object.
 * @param {module:rpc/rpc~methodCallback} eventCallback - The callback function.
 */
subAccountCall(address,cb) {
    let CallIDaddress = accCallId(address);
    let parameters =  {"event_id":CallIDaddress};
    server.serverPost("burrow.eventSubscribe",this.server,parameters,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
        });
}

/**
 * Subscribe for bond events.
 *
 * @param {module:rpc/rpc~methodCallback} createCallback - Callback for when the subscription has
 * been created. The data returned is a new EventSub object.
 * @param {module:rpc/rpc~methodCallback} eventCallback - The callback function.
 */
subBonds(cb) {
    let parameters =  {"event_id":"Bond"};
    server.serverPost("burrow.eventSubscribe",this.server,parameters,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
        });
}

/**
 * Subscribe for unbond events.
 *
 * @param {module:rpc/rpc~methodCallback} createCallback - Callback for when the subscription has
 * been created. The data returned is a new EventSub object.
 * @param {module:rpc/rpc~methodCallback} eventCallback - The callback function.
 */
subUnbonds (cb) {
    let parameters =  {"event_id":"Unbond"};
    server.serverPost("burrow.eventSubscribe",this.server,parameters,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
        });
  
}

/**
 * Subscribe for rebond events.
 *
 * @param {module:rpc/rpc~methodCallback} createCallback - Callback for when the subscription has
 * been created. The data returned is a new EventSub object.
 * @param {module:rpc/rpc~methodCallback} eventCallback - The callback function.
 */
subRebonds(cb) {
    let parameters =  {"event_id":"Rebond"};
    server.serverPost("burrow.eventSubscribe",this.server,parameters,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
        });
}

/**
 * Subscribe for dupeout events.
 *
 * @param {module:rpc/rpc~methodCallback} createCallback - Callback for when the subscription has
 * been created. The data returned is a new EventSub object.
 * @param {module:rpc/rpc~methodCallback} eventCallback - The callback function.
 */
subDupeouts(cb) {
    let parameters =  {"event_id":"Dupeout"};
    server.serverPost("burrow.eventSubscribe",this.server,parameters,function(error,data){
        if(error) return cb(error);
        return cb(null, data);
        });
}

/**
 * Subscribe for new block events.
 *
 * @param {module:rpc/rpc~methodCallback} createCallback - Callback for when the subscription has
 * been created. The data returned is a new EventSub object.
 * @param {module:rpc/rpc~methodCallback} eventCallback - The callback function.
 */
subNewBlocks(cb) {
  let parameters =  {"event_id":"NewBlock"};
  server.serverPost("burrow.eventSubscribe",this.server,parameters,function(error,data){
      if(error) return cb(error);
      return cb(null, data);
      });
  
}

/**
 * Subscribe for fork events.
 *
 * @param {module:rpc/rpc~methodCallback} createCallback - Callback for when the subscription has
 * been created. The data returned is a new EventSub object.
 * @param {module:rpc/rpc~methodCallback} eventCallback - The callback function.
 */
subForks (cb) {
  let parameters =  {"event_id":"Fork"};
  server.serverPost("burrow.eventSubscribe",this.server,parameters,function(error,data){
      if(error) return cb(error);
      return cb(null, data);
      });
}

/**
 * Set the time-interval between poll requests. This does not apply when using websockets.
 *
 * @param {number} intervalMs - The time interval in milliseconds.
 */
setPollingInterval (intervalMs) {
  this._pollingInterval = intervalMs
}

/**
 * Get the interval between poll requests.
 *
 * @returns {number}
 */
// Events.prototype.getPollingInterval = function () {
//   return this._pollingInterval
// }

// /**
//  *
//  * @returns {module:rpc/client~Client} The client.
//  */
// Events.prototype.getClient = function () {
//   return this._client
// }

/**
 * Create a new event subscription with the basic polling interval.
 * @param {string} eventId - The event id.
 * @param {module:rpc/rpc~methodCallback} [createCallback] - Callback for when the subscription has
 * been created. The data returned is a new EventSub object. If this is omitted, then it is assumed
 * that the sub is a 'once' sub, meaning it will automatically stop after receiving the first event.
 * Moreover, any potential startup errors will be passed into the 'eventCallback' function.
 * @param {module:rpc/rpc~methodCallback} eventCallback - The callback function.
 * @private
 */
_startEventSub (eventId,cb) {  
  let parameters =  {"event_id":eventId};
  server.serverPost("burrow.eventSubscribe",this.server,parameters,function(error,data){
      if(error) return cb(error);
      return cb(null, data);
      });
 }
}



/**
 * Get log event id. This is used for solidity events as well.
 *
 * @param {string} address - The account address.
 * @returns {string}
 */
function logEventId (address) {
  return 'Log/' + address
}

/**
 * Get account input event id.
 *
 * @param {string} address - The account address.
 * @returns {string}
 */
function accInputId (address) {
  return 'Acc/' + address + '/Input'
}

/**
 * Get account output event id.
 * @param {string} address - The account address.
 * @returns {string}
 */
function accOutputId (address) {
  return 'Acc/' + address + '/Output'
}

/**
 * Get account call event id.
 *
 * @param {string} address - The account address.
 * @returns {string}
 */
function accCallId (address) {
  return 'Acc/' + address + '/Call'
}

/**
 * Get bond event id.
 *
 * @returns {string}
 */
function bondId () {
  return 'Bond'
}

/**
 * Get unbond event id.
 * @returns {string}
 */
function unbondId () {
  return 'Unbond'
}

/**
 * Get rebond event id.
 * @returns {string}
 */
function rebondId () {
  return 'Rebond'
}

/**
 * Get dupeout event id.
 * @returns {string}
 */
function dupeoutId () {
  return 'Dupeout'
}

/**
 * Get new block event id.
 * @returns {string}
 */
function newBlockId () {
  return 'NewBlock'
}

/**
 * Get fork event id.
 * @returns {string}
 */
function forkId () {
  return 'Fork'
}

//}
