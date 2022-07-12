Function.prototype.myBind = function(context){
    var func = this;
    var outArgs = Array.prototype.slice.call(arguments);
    return function inner(){
        var args = Array.prototype.slice.call(arguments);
        if (this instanceof inner) {
            return new func(...outArgs, ...args);
        } else {
            return func.apply(context, outArgs.concat(args));
        }
    }
}

function curry(fn){
    var finalArgs = [];
    return function inner(){
        var args = Array.prototype.slice.call(arguments);
        if (args.length < fn.length) {
            var start = finalArgs.length > 0 ? finalArgs.length - 1: 0;
            finalArgs.splice(start, 0, ...args);
            return inner; 
        } else {
            return fn.apply(null, finalArgs);
        }
    }
}
