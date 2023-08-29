

let fortunes = [
  "A vida trará grandes surpresas para você.",
  "Seja a mudança que você deseja ver no mundo.",
  "Grandes coisas estão por vir na sua vida.",
  "Acredite em si mesmo e tudo será possível.",
  "O segredo do sucesso é a constância no objetivo.",
  "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
  "Nunca é tarde demais para ser o que você poderia ter sido.",
  "A sorte favorece a mente preparada.",
  "Cada dia é uma chance de mudar a direção das nossas vidas.",
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
];

let button = document.querySelector ('.fortune-button');
let messageContainer = document.querySelector ('.fortune-message p');
let screen1 = document.querySelector('.screen1');
let screen2 = document.querySelector('.screen2')
let cookie = document.querySelector('.content img')

button.addEventListener('click', ()=> {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const randomFortune = fortunes[randomIndex];
  messageContainer.textContent = randomFortune;

  screen1.classList.add('hide');
  screen2.classList.remove('hide');

});

document.addEventListener('keydown', (event) =>{
  if (event.key === 'Enter') { // Verifica se a tecla pressionada é "Enter"
    screen1.classList.add('hide');
    screen2.classList.remove('hide');

    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];
    messageContainer.textContent = randomFortune;
  }
});

cookie.addEventListener('click', ()=>{ //verifica o click no cookie
  screen1.classList.add('hide');
  screen2.classList.remove('hide');

  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const randomFortune = fortunes[randomIndex];
  messageContainer.textContent = randomFortune;
});










