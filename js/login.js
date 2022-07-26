 //var usuarios = "../dados/usuarios.js";
// var alunos = '../dados/alunos.js';
// var professores = '../dados/professores.js';

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
    {"id":1,"idaluno": 1, "trimestre":1,"nota":5.0}, 
    {"id":2,"idaluno": 1, "trimestre":2,"nota":7.0}, 
    {"id":3,"idaluno": 1, "trimestre":3,"nota":10.0}, 
    {"id":4,"idaluno": 2, "trimestre":1,"nota":8.0}, 
    {"id":5,"idaluno": 2, "trimestre":2,"nota":4.0}, 
    {"id":6,"idaluno": 2, "trimestre":3,"nota":2.0}, 
    {"id":7,"idaluno": 3, "trimestre":1,"nota":9.0}, 
    {"id":8,"idaluno": 3, "trimestre":2,"nota":7.0}, 
    {"id":9,"idaluno": 3, "trimestre":3,"nota":5.0}, 
    {"id":10,"idaluno": 4, "trimestre":1,"nota":5.0}, 
    {"id":11,"idaluno": 4, "trimestre":2,"nota":10.0}, 
    {"id":12,"idaluno": 4, "trimestre":3,"nota":9.0}, 
    {"id":13,"idaluno": 5, "trimestre":1,"nota":5.0}, 
    {"id":14,"idaluno": 5, "trimestre":2,"nota":8.0}, 
    {"id":15,"idaluno": 5, "trimestre":3,"nota":10.0}, 
    {"id":16,"idaluno": 6, "trimestre":1,"nota":3.0}, 
    {"id":17,"idaluno": 6, "trimestre":2,"nota":7.0}, 
    {"id":18,"idaluno": 6, "trimestre":3,"nota":4.0}, 
    {"id":19,"idaluno": 7, "trimestre":1,"nota":5.0}, 
    {"id":20,"idaluno": 7, "trimestre":2,"nota":7.0}, 
    {"id":21,"idaluno": 7, "trimestre":3,"nota":8.0}, 
    {"id":22,"idaluno": 8, "trimestre":1,"nota":9.0}, 
    {"id":23,"idaluno": 8, "trimestre":2,"nota":7.0}, 
    {"id":24,"idaluno": 8, "trimestre":3,"nota":10.0}, 
    {"id":25,"idaluno": 9, "trimestre":1,"nota":10.0}, 
    {"id":26,"idaluno": 9, "trimestre":2,"nota":3.0}, 
    {"id":27,"idaluno": 9, "trimestre":3,"nota":10.0}, 
    {"id":28,"idaluno": 10, "trimestre":1,"nota":9.0}, 
    {"id":29,"idaluno": 10, "trimestre":2,"nota":7.0}, 
    {"id":30,"idaluno": 10, "trimestre":3,"nota":4.0}, 
    {"id":31,"idaluno": 11, "trimestre":1,"nota":10.0}, 
    {"id":32,"idaluno": 11, "trimestre":2,"nota":10.0}, 
    {"id":33,"idaluno": 11, "trimestre":3,"nota":10.0}
];        

function login() {
    var usuario = (document.querySelector("#usuario")).value;
    var senha = (document.querySelector("#password")).value;

    let usuarioFiltrado = usuarios.filter((item) => {
        return item.usuario == usuario && item.senha == senha
    })

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


    
    if(usuarioFiltrado.length > 0) {
        sessionStorage.clear;
        sessionStorage.setItem('usuario' , JSON.stringify(usuarioFiltrado[0])); 
        sessionStorage.setItem('professor' , JSON.stringify(professorFiltrado[0])); 
        sessionStorage.setItem('alunos' , JSON.stringify(alunosFiltrado)); 
        sessionStorage.setItem('alunosnotas' , JSON.stringify(alunosNotasFiltrado));
        window.location.href = "index.html";
    } else {
        document.getElementById('mensagemErro').innerHTML = '<p class="paragrafoTentar">usuario e/ou senha incorreta</p>'
        setTimeout(function() {
            $('#mensagemErro').fadeOut('fast');
         }, 2000);
    }

}

function Init() {
    const form = document.getElementById('loginForm')
    form.addEventListener('submit', e => {
        e.preventDefault()
        login()
    })
}