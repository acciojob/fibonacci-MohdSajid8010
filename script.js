function fibonacci(num) {
// your code here
	if( num==1)
	{
		return 0;
	}
	if( num==2)
	{
		return 1;
	}
	let a=0;
	let b=1;

	var c;
	for(let i=0; i<num-2 ; i++){
		c=a+b;
		a=b;
		b=c;
	}
	return b;
}

module.exports = fibonacci;
