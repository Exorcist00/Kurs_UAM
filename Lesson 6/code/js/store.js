UAM.Store = function () {
	tt=this;
	UAM.EventEmitter.call(tt);
	tt.data  = [];

	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState !== 4 ) {
			console.log("Czeka...");
			return;
		}
		if ((httpRequest.status > 206) || (httpRequest.status < 200)) {
			throw new Error('GET failed');
		}
		var a=JSON.parse(httpRequest.responseText);
		a.forEach(function(el){
			tt.data.push(el.value);
			tt.emit("added",el.value);
			tt.emit("ft",tt.data.length);
		});
		console.log("Wczytano");
		console.log(tt.data);
	};
	httpRequest.open('GET', '/api/todos');
	httpRequest.send();
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (d) {
	this.data.push(d);
	this.emit("added",d);
	this.emit("ft",this.data.length);
};
UAM.Store.prototype.update = function (a) {
	this.emit("update",a);
};

UAM.Store.prototype.save = function () {
	var jdata=[];
	for (var i = 0; i < this.data.length; i++) {
		jdata.push({
			id: i,
			value: this.data[i]
		});
	};
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState !== 4 ) {
			console.log("Czeka...");
			return;
		}
		if ((httpRequest.status > 206) || (httpRequest.status < 200)) {
			throw new Error('POST failed');
		}
		console.log(httpRequest.responseText);
	};
	httpRequest.open('POST', '/api/todos');
	httpRequest.send(JSON.stringify(jdata));
};