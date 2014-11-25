UAM.FooterView = function (doc) {
	UAM.EventEmitter.call(this);
	this.doc=doc;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.add = function (le) {
	this.doc.innerHTML="ALL:"+le;
};
