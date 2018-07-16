$(document).ready(function(){  var value=[];var ans="";
$(".numbers div,.operators div").click(function(){

var a=$(this).attr('id');
if(a=='=')
{ var done=eval(ans).toString();
  value=[];
  value[0]=done
  ans=done
$('#show p')[0].textContent=done;}

else if(a=="del")
{ value.pop();
 ans=value.join('');

$('#show p')[0].textContent=ans
}
else{
value.push(a);
 ans=value.join('');
$('#show p')[0].textContent=ans;
}
});




});
