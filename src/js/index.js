// Pega o botão "Aplicar filtros" do HTML
const botaoFiltrar = document.querySelector('.btn-filtrar');

// Escuta o clique no botão
botaoFiltrar.addEventListener('click', aplicarFiltros);

// Função principal que é chamada quando o botão é clicado
function aplicarFiltros() {
    const categoriaSelecionada = pegarCategoriaSelecionada();
    const precoMaximoSelecionado = pegarPrecoSelecionado();
    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(function (carta) {
        const deveMostrar = verificarSeCartaDeveSerMostrada(carta, categoriaSelecionada, precoMaximoSelecionado);
        atualizarVisibilidadeDaCarta(carta, deveMostrar);
    });
}

// Pega o valor da categoria selecionada no filtro
function pegarCategoriaSelecionada() {
    return document.querySelector('#categoria').value;
}

// Pega o valor do preço máximo selecionado no filtro
function pegarPrecoSelecionado() {
    return document.querySelector('#preco').value;
}

// Verifica se a carta atende aos filtros selecionados
function verificarSeCartaDeveSerMostrada(carta, categoriaFiltro, precoMaximoFiltro) {
    const categoriaCarta = carta.dataset.categoria;
    const precoCarta = parseFloat(carta.dataset.preco);

    let passouNoFiltro = true;

    const temFiltroCategoria = categoriaFiltro !== '';
    const categoriaDiferente = categoriaCarta.toLowerCase() !== categoriaFiltro.toLowerCase();

    if (temFiltroCategoria && categoriaDiferente) {
        passouNoFiltro = false;
    }

    const temFiltroPreco = precoMaximoFiltro !== '';
    const precoMaiorQueFiltro = precoCarta > parseFloat(precoMaximoFiltro);

    if (temFiltroPreco && precoMaiorQueFiltro) {
        passouNoFiltro = false;
    }

    return passouNoFiltro;
}

// Mostra ou esconde a carta com base na verificação
function atualizarVisibilidadeDaCarta(carta, mostrar) {
    if (mostrar) {
        carta.classList.add('mostrar');
        carta.classList.remove('esconder');
    } else {
        carta.classList.remove('mostrar');
        carta.classList.add('esconder');
    }
}