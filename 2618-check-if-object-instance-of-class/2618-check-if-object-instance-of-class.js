var checkIfInstanceOf = function(obj, classFunction) {
    
    if (typeof classFunction !== 'function' || obj == null) return false;
    
    
    if (typeof obj !== 'object') {
        obj = Object(obj);
    }
    
    let proto = Object.getPrototypeOf(obj);
    while (proto != null) {
        if (proto.constructor === classFunction) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    
    return false;
};
