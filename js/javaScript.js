var imagem = '';

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
	//imagem = 'a';
    console.log(event.target.files);
    //console.log(event.target.files[0].name)
    
	if (!event.target.files.length) return;

    var ajuste = event.path[1]
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
    localStorage.setItem(key, img_base64String);
}

function getImagem(key) {
    console.log("getImagem")
    let professor = JSON.parse(sessionStorage.getItem('professor'));
    key =  key+'_'+professor.professor ; 
    return localStorage.getItem(key);
}

function inserirBotaoModal (event) {
    document.querySelector(`#${event.target.dataset.dia}`).setAttribute('src', 'imagens/expandir.png');
    document.querySelector(`#div${event.target.dataset.dia}`).style.zIndex = '1';
}

function inserirImagemModal(element) {
    console.log(imagem);
    document.querySelector('.corpo-modal').insertAdjacentElement('afterbegin', document.createElement('img'));
    document.querySelector('.corpo-modal').children[0].classList.add('imagemModal');
    let src = element.src.substring(element.src.indexOf('/imagens/') + 1);
    // event.target.files
    document.querySelector(`#file${element.id}`).setAttribute('src', )
    // document.querySelector('.imagemModal').setAttribute('src', src);
    
}

const botaoEl = document.getElementById('sexta');
botaoEl.addEventListener('click', abreModal);

function abreModal(e){
    const modalEl = document.querySelector('.modal')
    modalEl.classList.add('visivel')
    inserirImagemModal(e);
}

const botoesDeFechar = document.getElementById('fechar-modal')
botoesDeFechar.addEventListener('click', fechaModal);

function fechaModal(e) {
    console.log("oi")
    const modalEl = document.querySelector('.modal')
    modalEl.classList.remove('visivel')
}