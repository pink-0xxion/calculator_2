function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){//to format in 10,000
	if(num=="-"){
		return "";
	}
	var n = Number(num);//as num is string so to convert it as toLocaleString takes a number type object
	var value = n.toLocaleString("en");//takes and converts a number object to a string, using locale settings and returns it
	return value;//returning as string as so to concatinate it with other string
}
function reverseNumberFormat(num){//to reverse getFormattedNunber so we can perform evolution
	return Number(num.replace(/,/g,''));//in built javascript function which is used to convert data type to number.
}
//for operators.............................................................
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{//dont forget output and history are string
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){//35262*...history[5]=*...isNan()returns true
					history= history.substr(0,history.length-1);//history=35262
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);//eval(string)
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
//only for numbers.................................................
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());//isNaN('') or null=false undefined=true at entering first value...'' is not NAN
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}