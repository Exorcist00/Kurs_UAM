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
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);
