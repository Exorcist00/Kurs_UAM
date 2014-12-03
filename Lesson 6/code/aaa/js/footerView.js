UAM.FooterView = function (doc) {
	UAM.EventEmitter.call(this);
	this.doc=doc;
	this.act=0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.add = function (le) {
	this.doc.querySelector('.all').innerHTML=" | ALL:"+le;
};
UAM.FooterView.prototype.update = function (a) {
	this.act=this.act+a;
	this.doc.querySelector('.act').innerHTML="ACT:"+this.act;
};