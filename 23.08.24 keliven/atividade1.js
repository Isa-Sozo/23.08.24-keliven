// Array para armazenar os produtos
let produtos = [];

// Função para adicionar novos produtos ao array
function adicionarProduto(nome, preco, quantidade) {
    // Verificar se todos os campos estão preenchidos e se preço e quantidade são maiores que 0
    if (!nome || preco <= 0 || quantidade <= 0) {
        console.log("Erro: Todos os campos devem ser preenchidos e preço e quantidade devem ser maiores que 0.");
        return;
    }

    // Criar um novo produto
    let produto = {
        nome: nome,
        preco: preco,
        quantidade: quantidade
    };

    // Adicionar o produto ao array
    produtos.push(produto);
    console.log("Produto adicionado com sucesso!");
}

// Função para listar todos os produtos cadastrados
function listarProdutos() {
    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
        return;
    }

    console.log("Produtos cadastrados:");
    produtos.forEach((produto, index) => {
        console.log(`${index + 1}. Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}, Quantidade: ${produto.quantidade}`);
    });
}

// Função para calcular e exibir o valor total dos produtos em estoque
function calcularValorEstoque() {
    let valorTotal = 0;

    produtos.forEach(produto => {
        valorTotal += produto.preco * produto.quantidade;
    });

    console.log(`Valor total em estoque: R$${valorTotal.toFixed(2)}`);
}

// Exemplo de uso
adicionarProduto("Produto A", 10.5, 3);
adicionarProduto("Produto B", 20, 5);
listarProdutos();
calcularValorEstoque();