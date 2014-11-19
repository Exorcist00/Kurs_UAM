var cl=document.querySelector('.aaa'),
	cl2=document.querySelector('.bbb'),
	but=cl2.querySelector('.button'),
	input=cl2.querySelector(".input"),
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

