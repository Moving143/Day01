var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
var data=JSON.parse(request.response);
console.log(data);

var result=data.filter((element)=>element.population<100000);
console.log(result);
}