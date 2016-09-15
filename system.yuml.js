/*Depends on Object.values check compatibility table*/
System.trace = true;

window.showModuleRelationships = function () {
    var modules = Object.keys(System.loads)
        .map(function (moduleName) {
            return System.loads[moduleName];
        })
        .filter(function (module) {
            return module.name.substring(22, 25) === "src";
        })

    function displayName(module) {
        return module
            .replace("http://localhost:8080/", "");
    }

    var moduleDefinitions = modules.map(function (module) {
        var name = displayName(module.name);
        return "[" + name + "]";
    });

    var dependencyDefinitions = [];

    modules
        .filter(function (module) {
            return Object.values(module.depMap).length > 0;
        })
        .forEach(function (module) {
            var name = displayName(module.name);

            var dependencies = Object.values(module.depMap)
                .map(displayName)
                .map(function (dependencyName) {
                    return "[" + name + "]->[" + dependencyName + "]"
                });

            dependencyDefinitions = dependencyDefinitions.concat(dependencies);
        });

    var definitions = moduleDefinitions.concat(dependencyDefinitions);

    window.open("http://yuml.me/diagram/plain/class/" + definitions);

};