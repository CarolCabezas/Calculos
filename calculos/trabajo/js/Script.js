const lit = 3.7854118;
const ConstK = 273.15;
const ConstC = 32;

function GalonLitro(gal){
	var gal_lit = gal * lit;
	var Gall = document.getElementById("galons-span");
	Gall.innerHTML = "Segun los datos ingresados  los" +gal + "galones equivalen a : " + gal_lit + " Litros"
}

function CalcuGrados(grado){

	var Temp =0;
	var grado2;
	var MyGrado = document.getElementById("select-grades");
	var Gr = document.getElementById("grades-span");

	if(MyGrado[MyGrado.selectedIndex].value == "o1"){

		Temp = ((9*grado)/5)+ConstC;
		 grado2= "ºC";

	}else if(MyGrado[MyGrado.selectedIndex].value == "o2"){

		Temp = grado + ConstK;
		grado2 = "ºK";

	}else if(MyGrado[MyGrado.selectedIndex].value == "o3"){

		Temp = grado - ConstK;
		grado2 = "ºC";

	}else if(MyGrado[MyGrado.selectedIndex].value == "o4"){

		Temp = ((5*(grado - ConstC))/9)+ConstK;
		grado2 = "ºF";

	}else if(MyGrado[MyGrado.selectedIndex].value == "o5"){

		Temp = (5*(grado-ConstC))/9;
		grado2 = "ºC";

	}else if(MyGrado[MyGrado.selectedIndex].value == "o6"){

		Temp = ((9*(grado - ConstK))/5)+ConstC;
		grado2 = "ºK";

	}

	Gr.innerHTML = Temp + grado2;
}

function Gravedad(Peso){

	var Grav = document.getElementById("gravity-span");
	var G_Luna= 0.17 * 9.8;
	var Mypeso= Peso * G_Luna;
	Grav.innerHTML = "El peso ingresado en la Luna sera de: " + Mypeso + " N";
}
