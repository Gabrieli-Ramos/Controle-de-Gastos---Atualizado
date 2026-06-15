   /*
    1. pegar valor informado
    2. pegar categoria informada
    3. impedir números negativos
    4. de acordo com a categoria atualiza o valor
    4.1 criar variaveis para controlar os valores de cada categoria
    5. atualizar interface
    6.limpar campos
    */
import { Categoria, ListaGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizarInterface } from "./uteis.js";
const gastosPorCategoria = new ListaGastosPorCategoria( 
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria ("Lazer"),
    new Categoria("Outros"),
)

//Manipulação do DOM
const formulario = document.querySelector("form");
formulario.addEventListener("submit", (evento) => {
    // Prevenção do comportamento padrão
    evento.preventDefault();

    const valorInformado = formulario.elements.valor.value;
    const categoriaInformada = formulario.elements.categoria.value;

    if(valorNegativo(valorInformado)){
        alert("Valor Inválido. O valor não pode ser negativo.");
        return;
    }

    const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada);
    categoria.adicionarValor(valorInformado);


    atualizarInterface(gastosPorCategoria);
    formulario.reset();
})

