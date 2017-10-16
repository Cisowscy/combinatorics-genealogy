MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
function zmianaWartosci() {
	var aGener = parseInt(document.getElementById("aG").value, 10);
	var zGener = parseInt(document.getElementById("zG").value, 10);
	var wszyscy = sigma(aGener,zGener, function(x) { return Math.pow(2,x-1) } );
	document.getElementById("ilOS").value = wszyscy;
	if (aGener<=zGener){
		generuj(aGener, zGener, wszyscy);
	}	
}
//----------------------------------------------
/*function KOD2KOD(KOD, S00, T00, kluczS00, kluczT00){
	return writeKOD(readKOD(KOD, S00, kluczS00), T00, kluczT00);
}


function readKOD(KOD, S00, kluczS00) {
	var liczba = 0;
	//z pythona przekształcić
	//for d in KOD 
	//	liczba = S00 * liczba + kluczS00[:S00].index(d);
	//
	return liczba;	
}
*/
function writeKOD(liczba, T00, kluczT00) {
	var KOD = "";
	while (liczba >0){
		KOD = kluczT00[(liczba%T00)-1]+KOD;
		liczba = Math.floor(liczba/T00);
	}
	return KOD;
}
//----------------------------------------------
function nazwaWLASNA(slowo) {
	 var slowo = slowo.toLowerCase();
   return slowo.charAt(0).toUpperCase() + slowo.slice(1);
}
//----------------------------------------------
function sigma(a,z,fn) {
   var s = 0;
   for ( ; a <= z; a++) s += fn(a);
   return s;
}
//----------------------------------------------
function nrYDNA(nrSOSA) {
	while (nrSOSA%2 != 1) {nrSOSA=nrSOSA/2}
	var nrDNA= (nrSOSA+1)/2;
	return nrDNA;
}
function nrMTDNA(nrSOSA) {
	//var nrSOSA = nrSOSA + Math.pow(2,Math.floor(Math.log(nrSOSA)/Math.log(2))) - 2 * (nrSOSA - Math.pow(2,Math.floor(Math.log2(nrSOSA))) + 1) + 1;
	var nrSOSA = -1+3*Math.pow(2,Math.floor(Math.log2(nrSOSA)))-nrSOSA;
	while (nrSOSA%2 != 1) {nrSOSA=nrSOSA/2}
	var nrDNA= (nrSOSA+1)/2;
	return nrDNA;
	
}


var nazT = ["A", "Be", "Ce", "De", "E", "Fy", "Gi", "Ha", "I", "Ji", "Ka", "Li", "Me", "Ne", "O", "Pe", "Re", "Se", "Te", "U", "Wu", "Ze"];
var waT = ["ban", "bana", "backi", "backa"];
function generuj(GENa,GENz, ilOSOB) {
	var tmp = 0;
	var osoby = new Array();	
	while (GENz>=GENa) {
		var osZgen = sigma(GENa,GENa, function(x) { return Math.pow(2,x-1) } );
		var SOSA = Math.pow(2,GENa)-(osZgen);
		for (var os=1; osZgen >= os; os++) {
			var NRoLINI = nrYDNA(SOSA);
			var NRmLINI = nrMTDNA(SOSA);
			var osoba = new Object();
			osoba.pokolenie = GENa;			
			osoba.osobaWpokoleniu = os;
			osoba.SOSA_P = SOSA;
			osoba.SOSA_O = SOSA*2;
			osoba.SOSA_M = SOSA*2+1;
			var naz = nazT[Math.floor(Math.random() * nazT.length)]			
			if (SOSA%2 ==0 && SOSA !=1) {
				var waI = waT[0];
				var waN = waT[2];				
			} else if (SOSA%2 ==1 && SOSA !=1) {
				var waI = waT[1];
				var waN = waT[3];				
			} else {
				var waI = "...";
				var waN = "...";
			}
			osoba.imie = naz+waI;
			osoba.nazwisko = nazwaWLASNA(writeKOD(NRoLINI, nazT.length, nazT)+waN);
			osoba.LiniaOjca = NRoLINI;
			osoba.LiniaMatki = NRmLINI;
			//console.log(SOSA+" : " +naz+waI+", " +naz+waN);
			
			osoby.push(osoba);			
			SOSA++;
   		}		
		GENa++;
	}
	var tabelaOsob = document.getElementById("efekt");	
	for (var ilREK = tabelaOsob.rows.length; ilREK>1; ilREK--)	{
		tabelaOsob.deleteRow(ilREK-1);
	}
	osoby.forEach(function(el) {		
		var rekord = tabelaOsob.insertRow();
		rekord.insertCell(0).innerHTML = el.SOSA_P;
		rekord.insertCell(1).innerHTML = el.pokolenie;
		rekord.insertCell(2).innerHTML = "<b>"+ el.imie+"</b>";
		rekord.insertCell(3).innerHTML = "<b style='color:darkred;'>"+ el.nazwisko +"</b>";
		rekord.insertCell(4).innerHTML = el.SOSA_O;
		rekord.insertCell(5).innerHTML = el.SOSA_M;
		rekord.insertCell(6).innerHTML = el.LiniaOjca;
		rekord.insertCell(7).innerHTML = el.LiniaMatki;
	});	
}