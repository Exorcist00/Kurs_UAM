var cl=document.querySelector('.aaa'),
	but=cl.querySelector('.button'),
	input=cl.querySelector(".input"),
	lista=cl.querySelector("#list");
	
	but.addEventListener('click', function () {
			if(input.value!=''){	
				var el=document.createElement('li');
				el.innerHTML=input.value+"<button>Del</button>";
				lista.appendChild(el);
				input.value='';
				but2=el.querySelector('button');
					but2.addEventListener('click', function () {
						lista.removeChild(el);
					});	
			}		
	});

