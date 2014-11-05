var cl=document.querySelector('.aaa'),
	but=cl.querySelector('button'),
	input=cl.querySelector(".input"),
	lista=cl.querySelector("#list");

	but.addEventListener('click', function () {
			document.getElementById("test").innerHTML="???";
			var el=document.createElement('li');
			el.textContent=input.value;
			lista.appendChild(el);
			
			});
