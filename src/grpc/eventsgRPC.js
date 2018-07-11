let Client = require('./clientGen');

module.exports = class Events { 
  constructor (url){
   this.client = Client.getClient(url, "Events")
  }

  //** EventPoll method
/* SubIdParam parameters
/* {@subId}  string
**/
 EventPoll(SubIdParam,callback){
    this.client.eventPoll(SubIdParam,function(err,data){
      if (err) {
        callback(err)
      } else {
        callback(null,response)
      }
    })
 }

 //** EventSubscribe method
/* EventIdParam parameters
/* {@eventId}  string
**/
 EventSubscribe(EventIdParam,callback) {
  this.client.eventSubscribe(EventIdParam,function(err,data)
 {
  if (err) {
    callback(err)
  } else {
    callback(null,response)
  }
  })
 } 


 //** EventUnsubscribe method
 /* SubIdParam parameters
/* {@subId}  string
**/
  EventUnsubscribe (SubIdParam,callback) 
   {
    client.eventUnsubscribe(SubIdParam,function(err,data){
      if (err) {
        callback(err)
      } else {
        callback(null,response)
      }
    })
   }
  

}


