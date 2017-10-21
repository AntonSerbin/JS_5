function lenghtTask1() {
	var string1=document.getElementById("task1String").value;
	document.getElementById("resultTask1").innerHTML+=string1.length + "; ";
};
// <!-- end of the task1 -->

var arrayPic=["1.png","2.png","3.png","4.png"];

var displayPic=0;
document.getElementById("hintArrayTask2").innerHTML += arrayPic;
function addPicturesTask2() {
			for (var count=0; count<arrayPic.length;count++)
			{	
			document.getElementById("pictsTask2").innerHTML +="<img src='./img/" + arrayPic[count] + "' style='width: 120px; margin-right: 10px'>";
			};
		if (displayPic%2!=0){document.getElementById("pictsTask2").innerHTML=""}
		displayPic++;
							};
// <!-- end of the task2 -->

function deletePartOfStringTask3(){
		var string3=document.getElementById("task3String").value;
		if (string3.indexOf("https://", 0) != -1) {string3=string3.substring(8)};
		if (string3.indexOf("http://", 0) != -1) {string3=string3.substring(7)};
		document.getElementById("resultTask3").innerHTML+=string3 + "; ";
													};
// <!-- end of the task3 -->

function deletePartOfStringTask4(){
		var string4=document.getElementById("task4String").value;
		if (string4.indexOf("https://", 0) != -1) {string4=string4.substring(8)};
		if (string4.indexOf("http://", 0) != -1) {string4=string4.substring(7)};
		if (string4.indexOf("https", 0) != -1) {string4=string4.substring(5)};
		if (string4.indexOf("http", 0) != -1) {string4=string4.substring(5)};
		if (string4.indexOf("www.", 0) != -1) {string4=string4.substring(4)};
		document.getElementById("resultTask4").innerHTML+=string4 + "; ";													
													};

// <!-- end of the task4 -->
function task5(){
	    var resultTask5final=true;
		var task5FirstName=document.getElementById("task5FirstName").value;
		document.getElementById("resultTask5").innerHTML = "Name = " + task5FirstName.replace(/ /g,'')+";<br>";
		var task5SeconName=document.getElementById("task5SeconName").value;
		document.getElementById("resultTask5").innerHTML += "Second Name = " + task5SeconName.replace(/ /g,'')+";<br>";
		var task5Password=document.getElementById("task5Password").value;
		if (task5Password.length<=4) {
						document.getElementById("resultTask5").innerHTML += "<b>Password is less then 5 chars!!!</b> <br>"
						resultTask5final=false;}
			else document.getElementById("resultTask5").innerHTML += "Password: " + task5Password + " ; <br>";
		var task5EMail=document.getElementById("task5EMail").value;
		if (task5EMail.indexOf("@")==-1) {document.getElementById("resultTask5").innerHTML += "<b>Wrong EMail address!!!</b> <br>"
											resultTask5final = false}
			else document.getElementById("resultTask5").innerHTML += "EMail: " + task5EMail + "<br>";

		if (resultTask5final==0) {document.getElementById("resultTask5final").style.color = "red";} //выводим ответ итого
			else document.getElementById("resultTask5final").style.color = "black";;
		document.getElementById("resultTask5final").style.fontWeight = "900";
		document.getElementById("resultTask5final").innerHTML = "Result = " +resultTask5final;
				};

// <!-- end of the task5 -->

function task6(){
	var symbol = document.getElementById("task6Char").value;
	document.getElementById("resultTask6").innerHTML+='"'+symbol[0]+'"'+" = ";
	document.getElementById("resultTask6").innerHTML+=symbol.charCodeAt(0)+"; ";
}
