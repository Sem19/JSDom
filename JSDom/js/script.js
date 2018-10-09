/*var text = document.querySelector('#text');

text.onclick = function(){
	//text.style.color = 'red';
    text.innerHTML  ='+++';
}
*/
var div = document.querySelector('#text');

div.onclick = function(){
	div.innerHTML = '***';
	div.className = 'test';
	div.style.color = '#f00';
	div.style.fontSize = '30px';
}

