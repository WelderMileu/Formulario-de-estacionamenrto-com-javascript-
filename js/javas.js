function alerta(){
	alert('Cadastro de Cliente em JS!');
}
//window.setTimeout(alerta,4000);
function inserir(){
	var data = new Date();
	var hora = data.getHours();
	var min = data.getMinutes();
	var dia = data.getDate();
	var mes = data.getMonth()+1;
	var ano = data.getFullYear();
	var p1 = document.getElementById('infor');

	if (mes < 10) {
		mes = '0'+mes;
	}
	if (dia < 10) {
		dia = '0'+dia;
	}
	if (hora < 10) {
		hora = '0'+hora;
	}
	if (min < 10) {
		min = '0'+min;
	}

	var p2 = document.getElementById('placa').value;
	var p3 = document.getElementById('modelo').value;
	var p4 = document.getElementById('ano').value;

	if (p2 == '' || p3 =='' || p4 == '') {
		alert('Por favor preencha os campos vazios!');
		return false;
	}else{
		var num = Math.random();
		p1.innerHTML += '<tr id='+num+' class="ola" onclick="apagar(this.id)">'+'<td>'+p2+'</td>'+
		'<td style="background-color:#000;color:#fff;opacity:0.5;">'+p3+'</td>'+'<td>'+p4+'</td>'+'<td>'
		+hora+':'+min+' '+dia+'/'+mes+'/'+ano+'</td>'+
		'<td id="opa"></td>'+'<td><button class="botao">Remover Registro</button></td>'+'</tr>';
		document.getElementById('placa').value = '';
		document.getElementById('modelo').value = '';
		document.getElementById('ano').value = '';
	}
}

function apagar(id){
	var dv = document.getElementById(id);
	var chama = confirm('Tem certeza que deseja excluir esse registro?');
	if (chama == false) {
		return false;
	}else{
		dv.remove();//Achar uma forma de Atribuir esse comando somente para o botao
		alert('Registro excluido com sucesso!');
	}
	// var alto = dv.getAttribute("class"); - Exemplo estudo
	// alert("Esse Elemento possui a classe " + alto); - Exemplo estudo
}

function contar(){
	var como = document.getElementById('opa');//arrumar uma forma de colocar o contador de moedas para cada id
	var cont = 0;
	if (cont == cont) {
		cont=1;
	}
	// como.innerHTML = 'R$ '+ cont;
	var time = setInterval(contar,10000);
	como.innerHTML = 'R$ '+ time+',00';
}	
