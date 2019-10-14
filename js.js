window.onload=function(){
	$e=document.getElementById("nt").contentWindow.document.getElementsByTagName("pre")[0].textContent
	$text=document.getElementById("text")
	$text.value=$e

	$cp=document.getElementById("nothing")
	$cp.onclick=function(){
		$text=document.getElementById("text")
		$text.select();
		document.execCommand("Copy");
	}
}

