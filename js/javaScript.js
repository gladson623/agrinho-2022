var imagem = '';

var loader = document.getElementById("preloader")
window.addEventListener("load", function(){
    loader.style.display = "none"
})

function media() {

    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;

    if (nota1 == '') {
        nota1 = 0;
    } 

    if (nota2 == '') {
        nota2 = 0;
    } 
    
    if (nota3 == '') {
        nota3 = 0;
    }

    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);

    

    var media = parseInt((nota1 + nota2 + nota3) / 3)

    if (media >= 60) {
        if (media == 100) {
            alert("Uau! Aprovado com media maxima! Media " + media);
        } else {
            alert("Parabens, aprovado! Media " + media);
        }
    } else {
        alert("Reprovado! Media " + media)
    }

    moveImage(media);

}


function presenca() {

    var dia = document.getElementById("dia").value;
    var falta = document.getElementById("falta").value;

    if (dia == '' || dia == "NaN" || dia == 0) {
        dia = 1;
    } 
    if (falta == '' || falta == "NaN") {
        falta = 0;
    } 
    //console.log(dia)
    
    dia = parseFloat(dia);
    falta = parseFloat(falta);

    //console.log(dia)
    

    var totalPresenca = parseInt((dia * 200))
    //console.log(totalPresenca)
    var quantidadeFalta = parseInt((totalPresenca / 100) * 25)
    var quantidadeDiaFalta = parseInt((quantidadeFalta / dia - falta))
    var quantidadeAulasFalta = parseInt(((quantidadeFalta / dia - falta) * dia))
    

    alert("voce ainda pode faltar " + quantidadeDiaFalta + " dias ou " + quantidadeAulasFalta + " aula");

}

function onSelectImage(event) {
	//imagem = 'a';
    //console.log(event.target.files);
    //console.log(event.target.files[0].name)
    
	if (!event.target.files.length) return;

    var path = event.path || (event.composedPath && event.composedPath());

    var ajuste = path[1]

	var selectedFile = event.target.files[0];
    //var sumir = document.querySelector('.sumir');
	
	var reader = new FileReader();

	reader.onload = function(e) {
		ajuste.style.background = "url('" + e.target.result + "') no-repeat 0 0";
        ajuste.style.backgroundSize = 'cover';
        ajuste.style.backgroundPosition = 'center';
        saveImagem(event, e.target.result)

	};

	reader.readAsDataURL(selectedFile);
    inserirBotaoModal(event);
}

function saveImagem(event, img_base64String) {
    
    let professor = JSON.parse(sessionStorage.getItem('professor'));
    let key =  event.target.id+'_'+professor.professor ;
    
    sessionStorage.setItem(key, img_base64String);
}


function getImagem(key) {
    let professor = JSON.parse(sessionStorage.getItem('professor'));
    key =  key+'_'+professor.professor ; 
    return sessionStorage.getItem(key);
}

function inserirBotaoModal (event) {
    document.querySelector(`#${event.target.dataset.dia}`).setAttribute('src', 'imagens/expandir.png');
    document.querySelector(`#div${event.target.dataset.dia}`).style.zIndex = '1';
}





function abreModal(e){
    const modalEl = document.querySelector('.modal')
    modalEl.classList.add('visivel')
}

// const botoesDeFechar = document.getElementById('fechar-modal')
// botoesDeFechar.addEventListener('click', fechaModal);

function fechaModal(e) {
    
    const modalEl = document.querySelector('.modal')
    modalEl.classList.remove('visivel')
}