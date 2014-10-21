(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		//store the listeners somewhere
		this.listeners=[];
	};

	EE.prototype.on = function (eventName, listener, context) {
		var ret=this.listeners.push({
			nazwa: eventName,
			metoda: listener,
			kontekst: context||window});
		return function(){delete this.listeners[ret-1]};
	};

	EE.prototype.emit = function (/*eventName /*, other args...*/) {
			for (i = 0; i < this.listeners.length; i++) {
				if(this.listeners[i].nazwa==arguments[0]) {
					var tab=Array.prototype.slice.call(arguments);
					tab.splice(0,1);
					this.listeners[i].metoda.call(this.listeners[i].kontekst,tab);
				}
			}
			
	};

//	var ee = new EE();
//
//	var removeListener = ee.on('test', function (arg1, arg2) {
//		console.log(arg1, arg2, this.key);
//	}, { key: 'value' });
//
//	ee.emit('test', 1, 2); // 1, 2 value
//
//	removeListener(); //removes my listener from the event emitter;
//
//	ee.emit('test'); //nothing will execute

	global.UAM.EventEmitter = EE;

}(window));
