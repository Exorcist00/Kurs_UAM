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
	this.emit("upd",1);
	
	this.upd=function(){
		if(el.classList.contains('active')){	
				el.classList.remove('active');
				el.classList.add('inactive');
				this.emit("upd",-1);
		}else{
				el.classList.remove('inactive');
				el.classList.add('active');
				this.emit("upd",1);
		}
	}
	el.addEventListener('click', this.upd.bind(this));
};
UAM.ListView.prototype.update = function (id, data) {};
