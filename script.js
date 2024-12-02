function makeid(l) {
  // write your code here
	let result = "";
	let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for(let i = 0; i < l; i++)
		{
			result += charList.charAt(Math.floor(Math.random()*charList.length));
		}
	return result;
	
}
 
// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

