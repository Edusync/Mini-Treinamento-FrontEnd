// Extrair o parâmetro "node-id" da URL atual da página
const params = new URLSearchParams(window.location.search);
const sabor = params.get("sabor");
const refeicao = params.get("refeicao");
const ingredientes = params.get("ingredientes");

console.log(sabor);
console.log(refeicao);
console.log(ingredientes);

if(sabor != null){
    const elemento1 = document.querySelector('#'+sabor);
    elemento1.style.display = 'flex';
}

if(refeicao != null){
    const elemento2 = document.querySelector('#'+refeicao);
    elemento2.style.display = 'flex';
}

const loadingIcon = document.querySelector('#loadingIcon');
loadingIcon.style.display = 'block'; // Mostra o ícone de loading

const apiKey    = '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';
const url       = 'https://api.openai.com/v1/chat/completions';

const data = {
  model: 'gpt-3.5-turbo',
  messages: [{ 
    role: 'user', 
    content: `Me dê uma receita para um ${refeicao} que seja ${sabor}, sendo que em casa tenho apenas ${ingredientes}`
    }],
  temperature: 0.7
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
    // Faça algo com o resultado retornado pela API
    console.log(result.choices[0].message.content);
    if(result.choices[0].message.content != null){
        document.querySelector('.resultados').innerHTML = result.choices[0].message.content.replace(/\n/g, '<br>');
    }
})
.catch(error => {
    // Trate qualquer erro que ocorra
    console.error('Ocorreu um erro:', error);
})
.finally(() => {
    loadingIcon.style.display = 'none';
});


const RecarregarPagina = () => {
    window.location.reload()
}

const Voltar = () => {
    window.location.href = '/index.html'
}