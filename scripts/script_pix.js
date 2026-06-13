
//Função que faz o botão copiar o pix
function copiarPix()
{
    const chave = document.getElementById("chavePix").innerText;
        
    navigator.clipboard.writeText(chave).then(() => {
        const textoBotao = document.getElementById("textoBotao");
        textoBotao.innerText = "Copiado!";
            
        setTimeout(() => {
            textoBotao.innerText = "Copiar";
        }, 2000);
            
        })
        .catch(err => {
            console.error('Falha ao copiar: ', err);
            alert("Não foi possível copiar a chave. Selecione e copie manualmente.");
        });
}