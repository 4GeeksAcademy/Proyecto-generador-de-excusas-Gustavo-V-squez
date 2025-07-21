var generadorExcusas = document.querySelector('.generadorExcusas');
var culpable = ["mi perro ", "mi prima ", "mi madre ", "mi hermana ", "mi amigo ", "mi casero "];
var action   = ["rompió ", "arruinó ", "votó ", "destrozó ", "ocultó ", "se llevó ", "se comió "];
var cosa     = ["mi tarea ", "mi carro ", "el libro que me prestaste ", "el pastel de cumpleaños ", "el dinero del regalo ", "el regalo "];
var cuando   = ["hace una hora ", "hace un par de horas ", "hace cinco horas ", "al mediodía ", "ayer en la noche ", "ayer ", "la semana pasada ", "el mes pasado "];


function azar(number){
	var result=Math.random()*number;
	result = Math.floor(result);
	return result;
}

function excusas(){
	var result = "hola";
	result = culpable[azar(5)] + action[azar(6)] + cosa[azar(5)] + cuando[azar(7)];
	return result;
}



generadorExcusas.textContent=excusas();

