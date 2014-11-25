UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (d) {
	this.data.push(d);
	this.emit("added",d);
	this.emit("ft",this.data.length)
};
UAM.Store.prototype.update = function (id, data) {
	
};
