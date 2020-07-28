
$('#s1').hide();
  $('#s2').hide();
  $('#s3').hide();
  $('#s4').hide();
  $('#s6').hide();
  $('#s5').hide();
  $('#r2').hide();
  $('#r1').hide();
  $('#message1').hide();
   $('#message2').hide();
  //$('#i1').hide();
  //$('#i2').hide();
  //$('#i3').hide();
  //$('#start').hide();
   $('#checkboxes1').hide();
  $('#checkboxes2').hide();
   $('#r3').hide();
  $('#checkboxes3').hide();
   $('#r4').hide();
  $('#checkboxes4').hide();
  $('#r5').hide();
  $('#checkboxes5').hide();
  $('#r6').hide();
  $('#checkboxes6').hide();
  high=0;
  mid=0;
  low=0;
  /*var myinterval1=setInterval(function()
  {
	$('#i1').show();
	},1000);
	clearInterval(myinterval1);
	
	 var myinterval2=setInterval(function()
  {
	$('#i3').show();
	},1000);
	clearInterval(myinterval2);
	
	 var myinterval3=setInterval(function()
  {
	$('#start').show();
	},1000);
	clearInterval(myinterval3);
	*/
	function Run(){ 
                $('html, body').animate({ 
                scrollTop: $('html,body').get(0).scrollHeight
            }, 2000); 
        }
  $('#start').click(function()
  {
    $('#start').hide();
   $('#r1').show();
   $('#checkboxes1').show();
  $('#checkboxes1 input[type=checkbox]').change(function() { 
  var selected1=[];
  high=0;
$('#checkboxes1 input:checked').each(function() {
  selected1.push($(this).attr('name'));
//console.log(high);
  $('#s1').html(selected1+" ");
$('#s1').show();
if($(this).attr('name')!=='none of above')
{
high=high+1;
}
else
high=0;
});
 $('#r2').show();
  $('#checkboxes2').show();
  console.log(high);
});

$('#checkboxes2 input[type=checkbox]').change(function() { 
 var selected2=[];
$('#checkboxes2 input:checked').each(function() {
high--;
  selected2.push($(this).attr('name'));
$('#s2').html(selected2+" ");
$('#s2').show();
if($(this).attr('name')!=='none of above')
{
high++;
}

});
console.log(high);
$('#r3').show();
  $('#checkboxes3').show();
});


$('#checkboxes3 input[type=checkbox]').change(function() { 
 
$('#checkboxes3 input:checked').each(function() {
  var option3=$(this).attr('name');
//alert(selected);
$('#s3').html($(this).attr('name'));
$('#s3').show();
$('#r4').show();
  $('#checkboxes4').show();
   if(option3==='Yes')
   high++;


});
console.log(high);
});

$('#checkboxes4 input[type=checkbox]').change(function() { 
$('#checkboxes4 input:checked').each(function() {
  var option4=$(this).attr('name');
//alert(selected);
$('#s4').html($(this).attr('name'));
$('#s4').show();
$('#r5').show();
  $('#checkboxes5').show();
   if(option4==='Yes')
   high++;
  
});
console.log(high);
});

$('#checkboxes5 input[type=checkbox]').change(function() { 
$('#checkboxes5 input:checked').each(function() {
  var option5=$(this).attr('name');
//alert(selected);
$('#s5').html($(this).attr('name'));
$('#s5').show();
$('#r6').show();
  $('#checkboxes6').show();
   if(option5==='Yes')
   high=high+3;
});
console.log(high);
});
$('#checkboxes6 input[type=checkbox]').change(function() { 
$('#checkboxes6 input:checked').each(function() {
  var option6=$(this).attr('name');
//alert(selected);
$('#s6').html($(this).attr('name'));
$('#s6').show();
//$('#r6').show();
  //$('#checkboxes6').show();
   if(option6==='Yes')
   high++;
 $('#message1').show();
 if(high<0)
 {
 $('#message2').html("<strong>You are safe! stay safe maintain social distancing!</strong>");
 $('#message2').show();
 }
  if(high==1)
  {
 $('#message2').html("<strong>You have symptoms!</strong><b> Consult a nearby doctor or call helpline no:<a href='https://www.mohfw.gov.in/'>1075</a></b>");
 $('#message2').show();
 }
  if(high>=4)
  {
 $('#message2').html("<strong>You are at risk!</strong><b> Call the helpline no:<a href='https://www.mohfw.gov.in/'>1075</a> and get your test done</b>");
 $('#message2').show();
 }
  if((high>=2)&&(high<=4))
  {
 $('#message2').html("<strong>You are a bit vurnerable to the infection</strong>! <b>isolate yourself at home or call helpline no:<a href='https://www.mohfw.gov.in/'>1075</a></b>");
$('#message2').show();
}
});
});

 

//console.log(low);
//console.log(mid);
//console.log(high);
});
