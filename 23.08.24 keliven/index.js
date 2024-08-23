var usuarios = []
function adicionarUsuario(nome, idade, email){
    // verificando se os nomes foram preenchidos
    if(!nome || !idade || !email){
        console.log("Os campos não foram preenchidos")
        return
    }
    // verificande se idade é maior que 0
    if(idade <= 0){
        console.log("idade precisa ser maior que zero")
        return
    }
    // criando objeto usuario
    let usuario = {
        nome: nome,
        idade: idade,
        email: email
    }
    usuario.push(usuario)
    //adicionando o usuario na nossa lista de usuarios
    console.log("usuario cadastrado com sucesso!")
}

function listarUsuarios(){
    if(usuarios.lenght === 0){
        console.log("nenhum usuario cadastrado")
    }else{
        console.log("usuários: ")
        usuarios.forEach ((usuario, index) =>{
        console.log(`${index + 1}. ${usuario.nome}, ${usuario.email}`)
        })
    }
}
 adicionarUsuario("Isadora", 16, "isasozo2007@gmail.com")
 adicionarUsuario("joão", 19, "joão@gmail.com")

 listarUsuarios()     