const { greet, add } = require("./my_module");
greet();
add(5, 8);


const myCustomModule = require("./my_module");
myCustomModule.greet();
myCustomModule.add(5, 7);