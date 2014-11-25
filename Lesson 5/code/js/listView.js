UAM.ListView = function (doc) {
	UAM.EventEmitter.call(this);
	this.doc=doc;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.add = function (d) {
	var el=document.createElement('li');
	el.innerHTML=d;
	el.classList.add('active');
	this.doc.appendChild(el);
};
UAM.ListView.prototype.update = function (id, data) {};
