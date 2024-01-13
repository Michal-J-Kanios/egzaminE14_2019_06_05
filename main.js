            
            function formularz(){
                let regulamin = document.getElementById('regulamin').checked;
               
                if(regulamin){
                    let wynik = document.getElementById("wynik");
		let imie = (document.getElementById("imie").value).toUpperCase();
		let nazwisko = (document.getElementById("nazwisko").value).toUpperCase();
		let usluga = document.getElementById("usluga").value;
		wynik.innerHTML = imie + " " + nazwisko + "<br/>" + "Treść Twojej sprawy: " + usluga + "<br/>" + "Na podany e-mail zostanie wysłana oferta."; 
	}

                else{
                    wynik.innerHTML = "<span style='color: red;'>Musisz zapoznac sie z regulaminem</span>";
                }
            }