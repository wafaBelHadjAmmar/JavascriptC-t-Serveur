
//////********DOM*******//////

$(function(){
$("#para").click(
	function(){
		$("#para").append("<strong> la classe 3A</strong>");
	});
	$("h1").click(
	function(){
		$("<strong> la classe 3A</strong>").appendTo("#para");
	});
 $("#sinscrire").click(function(){
	 // var input1=document.getElementById('a').value;
	 var input1=$("#a").val();
     var input2=$("#b").val();

        $("#mail").val(input1+"."+input2+"@epi.tn");
    });
 $('#vider').click(
	function(){
		$('#para').empty();
	});
$('#supprimer').click(
	function(){
		$('#para').remove();
	});
});




