var cowsay = require("cowsay");

module.exports = {
	sayHello: function(){
		return cowsay.say({text: "hello from common"});
       }
}
