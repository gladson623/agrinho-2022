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

    console.log(nota1)
    console.log(nota2)
    console.log(nota3)

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

function moveImage(media) {
    let image = document.querySelector('.professoraC');
    let bold = document.querySelector('.media');
    let btnAverage = document.querySelector('.btnAverage');


    image.setAttribute('src', 'imagens/professora.png');
    image.style.width = '70%';
    image.style.padding = '0px';

    bold.innerHTML = media;
    bold.style.color = 'red';
    bold.style.position = 'relative';
    bold.style.bottom = '30vh';
    bold.style.right = '12vw';
    bold.style.fontSize = '50px'
    bold.style.userSelect = 'none';

    btnAverage.style.margin = '0'
}

function presenca() {

    var dia = document.getElementById("dia").value;
    var falta = document.getElementById("falta").value;

    if (dia == '') {
        dia = 0;
    } 
    if (falta == '') {
        falta = 0;
    } 

    
    dia = parseFloat(dia);
    falta = parseFloat(falta);

    //console.log(dia)
    

    var totalPresenca = parseInt((dia * 200))
    var quantidadeFalta = parseInt((totalPresenca / 100) * 25)
    var quantidadeDiaFalta = parseInt((quantidadeFalta / dia - falta))
    var quantidadeAulasFalta = parseInt(((quantidadeFalta / dia - falta) * dia))
    console.log(quantidadeAulasFalta)

    alert("voce ainda pode faltar " + quantidadeDiaFalta + " dias ou " + quantidadeAulasFalta + " aula");

}

function onSelectImage(event) {
	
	if (!event.target.files.length) return;

    var ajuste = event.path[1]
	var selectedFile = event.target.files[0];
    var sumir = document.querySelector('.sumir');
	
	var reader = new FileReader();


	reader.onload = function(event) {
		ajuste.style.background = "url('" + event.target.result + "') no-repeat 0 0";
        ajuste.style.backgroundSize = 'cover';
        ajuste.style.backgroundPosition = 'center';
        sumir.style.display = 'none';
	};

	reader.readAsDataURL(selectedFile);

    inserirBotaoModal(event)
}

function inserirBotaoModal(event) {
    document.querySelector(`#${event.target.dataset.dia}`).setAttribute('src', 'imagens/expandir.png');

}

const botaoEl = document.getElementById('sexta');
botaoEl.addEventListener('click', abreModal);

function abreModal(e){
    const modalEl = document.querySelector('.modal')
    modalEl.classList.add('visivel')
}

const botoesDeFechar = document.getElementById('fechar-modal')
botoesDeFechar.addEventListener('click', fechaModal);

function fechaModal(e) {
    console.log("oi")
    const modalEl = document.querySelector('.modal')
    modalEl.classList.remove('visivel')
}