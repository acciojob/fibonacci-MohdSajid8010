function fibonacci(num) {
// your code here
	if(num==0 || num==1)
	{
		return num;
	}
	let a=0;
	let b=1;

	for(let i=2; i<=n ; i++){
		c=a+b;
		a=b;
		b=c;
	}
	return b;
}

module.exports = fibonacci;
