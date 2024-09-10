function pesquisar() {
    let section = document.getElementById
    ("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value

if(!campoPesquisa)  {
    section.innerHTML = "<p> nada foi encontrado, pesquise um atleta. </p>"
    return
}
campoPesquisa = campoPesquisa.toLowerCase();

console.log (campoPesquisa);

    let resultados = '';
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase()

    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

        resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">mais sobre</a>
            </div>
        `;
    };

    if (!resultados) {
        resultados = "<p> nada foi encontrado, pesquise um atleta. </p>"


    }

    section.innerHTML = resultados;

    }
};