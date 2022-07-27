const usuarios = [
    {"id":1,"usuario": "professor1", "senha": "123", "isprofessor": 1}, 
    {"id":2,"usuario": "aluno1", "senha": "456", "isprofessor": 0},
    {"id":3,"usuario": "aluno2", "senha": "456", "isprofessor": 0},
    {"id":4,"usuario": "aluno3", "senha": "456", "isprofessor": 0},
    {"id":5,"usuario": "aluno4", "senha": "456", "isprofessor": 0},
    {"id":6,"usuario": "professor2", "senha": "123", "isprofessor": 1}, 
    {"id":7,"usuario": "aluno5", "senha": "456", "isprofessor": 0},
    {"id":8,"usuario": "aluno6", "senha": "456", "isprofessor": 0},
    {"id":9,"usuario": "aluno7", "senha": "456", "isprofessor": 0},
    {"id":10,"usuario": "aluno8", "senha": "456", "isprofessor": 0},
    {"id":11,"usuario": "aluno9", "senha": "456", "isprofessor": 0} ,
    {"id":12,"usuario": "aluno10", "senha": "456", "isprofessor": 0},
    {"id":13,"usuario": "aluno11", "senha": "456", "isprofessor": 0}           
    ];

const professores = [
        {"id":1,"professor": "professor1", "idusuario":1}, 
        {"id":2,"professor": "professor2", "idusuario":6}           
        ];

const alunos = [
        {"id":1,"aluno": "aluno1", "idusuario":2,"idprofessor":1}, 
        {"id":2,"aluno": "aluno2", "idusuario":3,"idprofessor":1},
        {"id":3,"aluno": "aluno3","idusuario":4,"idprofessor":1},
        {"id":4,"aluno": "aluno4", "idusuario":5,"idprofessor":1},
        {"id":5,"aluno": "aluno5", "idusuario":7,"idprofessor":1},
        {"id":6,"aluno": "aluno6", "idusuario":8,"idprofessor":2},
        {"id":7,"aluno": "aluno7", "idusuario":9,"idprofessor":2},
        {"id":8,"aluno": "aluno8", "idusuario":10,"idprofessor":2},
        {"id":9,"aluno": "aluno9", "idusuario":11,"idprofessor":2},
        {"id":10,"aluno": "aluno10", "idusuario":12,"idprofessor":2},
        {"id":11,"aluno": "aluno11", "idusuario":13,"idprofessor":2}           
        ];

const alunosnotas = [
    {"id":1,"idaluno": 1, "nota1":10.0,"nota2":10.0,"nota3":9.0}, 
    {"id":2,"idaluno": 2, "nota1":8.0,"nota2":9.0,"nota3":4.0},
    {"id":3,"idaluno": 3, "nota1":3.0,"nota2":8.0,"nota3":7.0},
    {"id":4,"idaluno": 4, "nota1":4.0,"nota2":7.0,"nota3":2.0}, 
    {"id":5,"idaluno": 5, "nota1":5.0,"nota2":6.0,"nota3":9.0}, 
    {"id":6,"idaluno": 6, "nota1":6.0,"nota2":6.0,"nota3":6.0}, 
    {"id":7,"idaluno": 7, "nota1":7.0,"nota2":5.0,"nota3":7.0}, 
    {"id":8,"idaluno": 8, "nota1":8.0,"nota2":4.0,"nota3":8.0}, 
    {"id":8,"idaluno": 9, "nota1":8.0,"nota2":8.0,"nota3":9.0}, 
    {"id":10,"idaluno": 10, "nota1":10.0,"nota2":2.0,"nota3":5.0}, 
    {"id":11,"idaluno": 11, "nota1":5.0,"nota2":1.0,"nota3":5.0}
];        

function login() {
    var usuario = (document.querySelector("#usuario")).value;
    var senha = (document.querySelector("#password")).value;

    let usuarioFiltrado = usuarios.filter((item) => {
        return item.usuario == usuario && item.senha == senha
    })

    if(usuarioFiltrado == null || usuarioFiltrado.length < 1) {
        document.getElementById('mensagemErro').innerHTML = '<p class="paragrafoTentar">Usuário e/ou Senha Inválido(s)</p>'
        // setTimeout(function() {
        //     $('#mensagemErro').fadeOut('fast');
        //  }, 2000);
          return
    } 

    let professorFiltrado = professores.filter((item) => {
        return item.idusuario == usuarioFiltrado[0].id
    })

    let alunosFiltrado = [];
    if (professorFiltrado.length > 0) {
        alunosFiltrado = alunos.filter((item) => {
            return item.idprofessor == professorFiltrado[0].id
        })
    } else {
        alunosFiltrado = alunos.filter((item) => {
            return item.idusuario == usuarioFiltrado[0].id
        })
        professorFiltrado = professores.filter((item) => {
            return item.id == alunosFiltrado[0].idprofessor
        })
        
    }

    let alunosNotasFiltrado = [];
    alunosFiltrado.forEach((aluno) => {
        alunosNotasFiltrado = alunosNotasFiltrado.concat(alunosnotas.filter((item) => {
            return item.idaluno == aluno.id
        })) 
    }) 

    clearSession();
    sessionStorage.setItem('usuario' , JSON.stringify(usuarioFiltrado[0])); 
    sessionStorage.setItem('professor' , JSON.stringify(professorFiltrado[0])); 
    sessionStorage.setItem('alunos' , JSON.stringify(alunosFiltrado)); 
    sessionStorage.setItem('alunosnotas' , JSON.stringify(alunosNotasFiltrado));
    window.location.href = "index.html";

}

function islogado(type="") {
    let usuario = JSON.parse(sessionStorage.getItem('usuario'))
    const list = document.getElementById('cabecario');
    if (usuario == null || usuario.length < 1) {
        window.location.href = "login.html";
    }
    if (usuario.isprofessor == 1) {
        const el = document.createElement('li');
        el.innerHTML = '<a href="alunos.html">Alunos(' + usuario.usuario + ')</a>';
        list.appendChild(el);
    }
    if (type=="alunos") {
        listaAlunos()
    }

}

function clearSession() {
    sessionStorage.removeItem('alunosnotas');
    sessionStorage.removeItem('alunos');
    sessionStorage.removeItem('professor');
    sessionStorage.removeItem('usuario');
    sessionStorage.clear;
} 

function deslogarUsuario(redirecionar=true){
    
    clearSession();
    window.location.href = "login.html";
   
}
 
function criarTabela(conteudo) {
    var tabela = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody=document.createElement("tbody");
    var thd=function(i){return (i==0)?"th":"td";};
    for (var i=0;i<conteudo.length;i++) {
      var tr = document.createElement("tr");
      for(var o=0;o<conteudo[i].length;o++){
        var t = document.createElement(thd(i));
        var texto=document.createTextNode(conteudo[i][o]);
        t.appendChild(texto);
        tr.appendChild(t);
      }
      (i==0)?thead.appendChild(tr):tbody.appendChild(tr);
    }
    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    return tabela;
  }

  function listaAlunos(){
    let alunosnotas = JSON.parse(sessionStorage.getItem('alunosnotas'));
    let alunos = JSON.parse(sessionStorage.getItem('alunos'));
    let arr = []
    arr.push(["Id","Aluno","1Trim","2Trim","3Trim","Média"])

    //console.log(alunos)

    alunosnotas.forEach((nota) => {
        let alunoFiltrado = alunos.filter((item) => {
            return item.id == nota.idaluno
        }) 
        console.log(alunoFiltrado) 
       arr.push([nota.idaluno, alunoFiltrado[0].aluno,nota.nota1,nota.nota2,nota.nota3, ((nota.nota1+nota.nota2+nota.nota3)/3).toFixed(2)])
    }) 

     

 console.log(arr)
    //let alunosNotasFiltrado = alunosNotasFiltrado.concat(
    document.getElementById("corpo").appendChild(criarTabela(
        arr
      ));
  }

  

function Init() {
    const form = document.getElementById('loginForm')
    form.addEventListener('submit', e => {
        e.preventDefault()
        login()
    })
}