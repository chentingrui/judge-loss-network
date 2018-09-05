# judge-loss-network
this JS is used for judge if loss network

1.this JS is base on Cordova plugin so we need install it 
<br/>
<code>
  cordova plugin add cordova-plugin-network-information
</code>
<br/>

2. the most important code is 
<br>
  navigator.connection.type === Connection.NONE
</br>
It will help you get the network status , if it is no network.
But you also need wait for "deviceready"
<br>
    document.addEventListener("deviceready", function () {
      if (navigator.connection) {
          var networkState = navigator.connection.type;
          if (networkState === Connection.NONE) {
              network.online = false;
          }
      }
  });
</br>

3. you also need some listener to check networkstatus
<br>
document.addEventListener("offline", function(){
})
document.addEventListener("online", function(){
})
window.addEventListener("offline", function(){
})
window.addEventListener("online", function(){
})
</br>
