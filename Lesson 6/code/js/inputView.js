UAM.InputView = function (doc) {
	UAM.EventEmitter.call(this);
	
	var but=doc.querySelector('.butt');
	var input=doc.querySelector('.inp');
	this.addd=function(){
		if(input.value!=''){	
				this.emit("butt",input.value);
				input.value='';
			}
	}
	but.addEventListener('click', this.addd.bind(this));

	var s=doc.querySelector('.save');
	this.save=function(){
		this.emit("save");
	}
	s.addEventListener('click', this.save.bind(this));
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);
