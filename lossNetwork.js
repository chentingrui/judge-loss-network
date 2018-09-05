var network = {
    init: function (func) {
        document.addEventListener("deviceready", function () {
            if (navigator.connection) {
                var networkState = navigator.connection.type;
                if (networkState === Connection.NONE) {
                    network.online = false;
                }
            }
            func();
        }, false);
    },
    online: true,
    onlineList: [],
    offlineList: [],
    onOffline: function (callback) {
        this.offlineList.push(callback);
    },
    onOnline: function (callback) {
        this.onlineList.push(callback);
    }
};


document.addEventListener("offline", function onOffline() {
    network.offlineList.forEach(function (func) {
        func();
    });
});

document.addEventListener("online", function onOffline() {
    network.onlineList.forEach(function (func) {
        func();
    });
});　
window.addEventListener('offline', function () {
    network.offlineList.forEach(function (func) {
        func();
    });
});

window.addEventListener('online', function () {
    network.onlineList.forEach(function (func) {
        func();
    });
});
