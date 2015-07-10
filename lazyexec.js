var lazyExec = function(selector, callback, delay, try_limit) {
    delay = delay || 1000;
    try_limit = try_limit || 10;

    var target = document.querySelector(selector);
    var try_count = 0;

    var lazyExec = setInterval(function() {
        if(try_limit > try_count && !target) {
            return try_count++;
        }

        if(target) {
            clearInterval(lazyExec);
            return callback(null, target);
        }

        callback(new Error("time out!"));
        clearInterval(lazyExec);
    }, delay);
};

module.exports = lazyExec;
