function calendario(dataAtual) {

    

var meses=["JANEIRO","FEVEREIRO","MARÇO","ABRIL","MAIO","JUNHO","JULHO","AGOSTO","SETEMBRO","OUTUBRO","NOVEMBRO","DEZEMBRO"]



mesAtual=dataAtual.getMonth().valueOf();

var anoAtual=dataAtual.getFullYear().valueOf(); 

var num = numDias(mesAtual+1,anoAtual);

let todayElement ='d'+parseInt(dataAtual.getDate()-1);
document.getElementById(todayElement).innerHTML='<span style={z-index=2000;} class="active" id="10">10</span>';


console.log(todayElement);

var inicioMes = new Date(dataAtual.getFullYear().valueOf(),mesAtual,1);

var primeiroDia = inicioMes.getDay().valueOf();



var idUltimoDia= primeiroDia+numDias()

var idPrimeiroDia="d"+primeiroDia;



primeiroDiaMes=primeiroDia;



///Preencher o ano



//Preencher o mês

document.getElementById("mesAtual").innerHTML=meses[mesAtual] +' DE ' + anoAtual;

//Preencher o primeiro dia do mês

document.getElementById(idPrimeiroDia).innerHTML=01;



////Preencher os dias do mês atual

for(var i=1;i<num;i++){

    var numb=i+primeiroDia;

    var id="d"+numb;

    document.getElementById(id.toString()).innerHTML=i+1;

}



///Preencher os dias antes do mês atual

//Verificar se não é janeiro



var ultimoDiaMesPassado = numDias(mesAtual-1,anoAtual)-1;





for(var i=primeiroDia-1;i>=0;i--){

    var id="d"+i;

    document.getElementById(id.toString()).innerHTML=ultimoDiaMesPassado-((primeiroDia-1)-i);



}





//Preencher os dias depois do mês atual



var ultimoDia =num+primeiroDia-1;

for(var i=ultimoDia+1;i<=36;i++){

    var id="d"+i;

    document.getElementById(id).innerHTML=i-ultimoDia;

}



}
