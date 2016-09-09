var normalize = System.normalize;
System.normalize = function (name, parentName, parentAddress) {
    console.log("normalize : " + JSON.stringify({
        name: name,
        parentName: parentName,
        parentAddress: parentAddress
    }));
    return normalize.call(this, name, parentName, parentAddress);
};

var locate = System.locate;
System.locate = function (load) {
    console.log("locating : " + JSON.stringify({
        load
    }));
    return locate.call(this, load);
};

var fetch = System.fetch;
System.fetch = function (load) {
    console.log("fetching : " + JSON.stringify({
        load
    }));
    return fetch.call(this, load);
};

var translate = System.translate;
System.translate = function (load) {
    console.log("translating : " + JSON.stringify({
        load
    }));
    return translate.call(this, load);
};

var instantiate = System.instantiate;
System.instantiate = function (load) {
    if (load.name == "http://localhost:8080/src/app.js") {
        console.log("instantiating : " + JSON.stringify({
            load
        }));
    }

    return instantiate.call(this, load);
};