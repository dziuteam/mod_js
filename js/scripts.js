var a = prompt('Podaj wartość a:');
var b = prompt('Podaj wartość b:');
var value = (a*a)+(2*a*b)-(b*b);
alert('Wynik równania "(a*a)+(2*a*b)-(b*b)" gdzie a= ' + a + ' ,natomiast b= ' + b + ' wynosi: ' + value);
console.log('Wynik równania "(a*a)+(2*a*b)-(b*b)" gdzie a= ' + a + ' ,natomiast b= ' + b + ' wynosi: ' + value);
if (value>0) {
	alert('Wynik równiania jest większy od 0');
	console.log('Wynik równiania jest większy od 0');
} else if (value<0) {
	alert('Wynik równiania jest mniejszy od 0');
	console.log('Wynik równiania jest mniejszy od 0');
} else {
	alert('Wynik równiania to 0');
	console.log('Wynik równiania to 0');
}