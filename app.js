document.getElementById('lbsInput').addEventListener('input',function(e){
	let lbs = e.target.value;
	document.getElementById('gramsoutput').innerHTML = lbs/0.0022046;
	document.getElementById('kgoutput').innerHTML = lbs/2.2046;
document.getElementById('woutput').innerHTML = lbs*16;


});