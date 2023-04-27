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

	var sum;
	for(let i=0; i<num-2 ; i++){
		sum=a+b;
		a=b;
		b=sum;
	}
	return b;
}

module.exports = fibonacci;
