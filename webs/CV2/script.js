let cont = 0;

function verDP() {
	var dp = document.getElementById('dp');
	var texto = document.getElementById('texto');
	cont++;

	if (cont == 1) {
		dp.innerHTML = "<ul><li>Juan Manuel Cortez Reyes</li><li>1997, Sevilla, Palmete</li><li>Apodos: The Young Gypsy</li><li>jcreyes@gmail.com</li><li>+34 678 98 76 56</li></ul>";
		texto.innerHTML = "Ocultar";
	} else {
		dp.innerHTML = " ";
		texto.innerHTML = "Mostrar";
		cont = 0;
	}
}

function verAP() {
	var ap = document.getElementById('ap');
	var text = document.getElementById('text');
	cont++;

	if (cont == 1) {
		ap.innerHTML = "<ul><li>Flow</li><li>Malianteo</li><li>Drogata</li><li>Rico</li><li>Cubierto en oro</li><li>Mujeriego</li></ul>";
		text.innerHTML = "Ocultar";
	} else {
		ap.innerHTML = " ";
		text.innerHTML = "Mostrar";
		cont = 0;
	}
}

function verCarrera() {
	var carrera = document.getElementById('carrera');
	var centro1 = document.getElementById('centro1');
	cont++;

	if (cont == 1) {
		carrera.innerHTML = "<p>Publiqué canciones en 2017 y mi primer tema conocido se tituló «Hasta Comernos». En mis inicios pasé muy desapercibido, pero gané algo de reconocimiento cuando en 2018 publiqué «Prende y Pasa» con Bad Fifty y Papi Paler. Un año más tarde, en 2019 publiqué «Si Me Muero» con El Daddy, otro tema con el que gané cierta repercusión y fué mi primera canción publicada en mi canal de Youtube.</p>";
		centro1.innerHTML = "Ocultar";
	} else {
		carrera.innerHTML = " ";
		centro1.innerHTML = "Mostrar";
		cont = 0;
	}
}

function verPasado() {
	var pasado = document.getElementById('pasado');
	var centro2 = document.getElementById('centro2');
	cont++;

	if (cont == 1) {
		pasado.innerHTML = "<p>En mi pasado fuí un delincuente, ya que vengo de una familia humilde y con poca educación. Fuí detenido por un atraco a mano armada a dos alemanes, además de tener antecedentes por robo con fuerza, tenencia ilícita de armas y tráfico de drogas. De estudios tengo la ESO, y no tengo ningún tipo de experiencia laboral.</p>";
		centro2.innerHTML = "Ocultar";
	} else {
		pasado.innerHTML = " ";
		centro2.innerHTML = "Mostrar";
		cont = 0;
	}
}

function verTemazos() {
	var temazos = document.getElementById('temazos');
	var centro3 = document.getElementById('centro3');
	cont++;

	if (cont == 1) {
		temazos.innerHTML = "<p>En cuanto a mis temazos, estos son los mejores:</p><ol><li><a href='https://www.youtube.com/watch?v=IQhQPt96_yA&ab_channel=LOSGREENLANTERS'>34 Amor y Mafia</a></li><li><a href='https://www.youtube.com/watch?v=AIzGxHyEKNs&ab_channel=LOSGREENLANTERS'>ADN (Freestyle)</a></li><li><a href='https://www.youtube.com/watch?v=A-uE6kzLvHQ&ab_channel=LOSGREENLANTERS'>Demoniaca</a></li><li><a href='https://www.youtube.com/watch?v=s2JdNQkiRhg&ab_channel=LOSGREENLANTERS'>A 300</a></li><li><a href='https://www.youtube.com/watch?v=IOvHQA6xc4w&ab_channel=LOSGREENLANTERS'>Coronamos</a></li><li><a href='https://www.youtube.com/watch?v=TUhWPnmDX9c&ab_channel=LOSGREENLANTERS'>Tiene el cielo ganao</a></li><li><a href='https://www.youtube.com/watch?v=4Yexzoh3OOM&ab_channel=PROK'>Brigantes</a></li><li><a href='https://www.youtube.com/watch?v=1axWEtJx3bw&ab_channel=LOSGREENLANTERS'>Bandido</a></li></ol>";
		centro3.innerHTML = "Ocultar";
	} else {
		temazos.innerHTML = " ";
		centro3.innerHTML = "Mostrar";
		cont = 0;
	}
}