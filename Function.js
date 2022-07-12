Function.prototype.myBind = function(context){
    var func = this;
    var outArgs = Array.prototype.slice.call(arguments);
    return function inner(){
        var args = Array.prototype.slice.call(arguments);
        if (this instanceof inner) {
            return new func(...outArgs, ...args);
        } else {
            return func.call(context, outArgs.concat(args));
        }
    }
}
