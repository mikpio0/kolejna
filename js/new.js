function scroll(e) {

  var href = $(this).attr('href');

    e.preventDefault();
    
$('html, body').animate({
scrollTop: $(href).offset().top
}, 800);

location.hash = href;

};

$('a[href*="#"]').click(scroll); 

function odliczanie()
	{
		var dzisiaj = new Date();
		
		var dzien = dzisiaj.getDate();
		var miesiac = dzisiaj.getMonth()+1;
		var rok = dzisiaj.getFullYear();
		
		var godzina = dzisiaj.getHours();
		if (godzina<10) godzina = "0"+godzina;
		
		var minuta = dzisiaj.getMinutes();
		if (minuta<10) minuta = "0"+minuta;
		
		var sekunda = dzisiaj.getSeconds();
		if (sekunda<10) sekunda = "0"+sekunda;
		
		var milisekunda = dzisiaj.getMilliseconds()
		if (milisekunda<10) milisekunda = "0"+milisekunda;
		
		document.getElementById("zegar").innerHTML = 
		 dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuta+":"+sekunda;
		 
		 setTimeout("odliczanie()",1);
	}