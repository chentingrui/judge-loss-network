# judge-loss-network
this JS is used for judge if loss network

1.this JS is base on Cordova plugin so we need install it 
<br/>
<code>
  cordova plugin add cordova-plugin-network-information
</code>
<br/>

2. the most important code is 
<code>
  navigator.connection.type === Connection.NONE
</code>
It will help you get the network status , if it is no network.
But you also need wait for "deviceready"
<code>
    document.addEventListener("deviceready", function () {
      if (navigator.connection) {
          var networkState = navigator.connection.type;
          if (networkState === Connection.NONE) {
              network.online = false;
          }
      }
  });
</code>

3. you also need some listener to check networkstatus
<code>
document.addEventListener("offline", function(){
})
document.addEventListener("online", function(){
})
window.addEventListener("offline", function(){
})
window.addEventListener("online", function(){
})
</code>
