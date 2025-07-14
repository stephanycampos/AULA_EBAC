document.addEventListener('DOMContentLoaded', function () {
  const resultado = document.getElementById('resultado');
  const botao = document.getElementById('btn-sortear');

  const numerosAngelicais = [
    { numero: 111, mensagem: "Você está alinhado com o universo. Mantenha seus pensamentos positivos!" },
    { numero: 222, mensagem: "Confiança! Tudo está se encaixando perfeitamente em sua vida." },
    { numero: 333, mensagem: "Seus guias espirituais estão próximos. Confie na jornada." },
    { numero: 444, mensagem: "Você está sendo protegido e guiado. Continue firme." },
    { numero: 555, mensagem: "Mudanças importantes estão chegando. Abrace o novo!" },
    { numero: 666, mensagem: "Equilibre sua energia. Foque no bem-estar espiritual e material." },
    { numero: 777, mensagem: "Você está no caminho certo. Milagres estão a caminho." },
    { numero: 888, mensagem: "Abundância e prosperidade estão fluindo para você." },
    { numero: 999, mensagem: "Fim de um ciclo. É hora de liberar e seguir em frente." }
  ];

  botao.addEventListener('click', function () {
    const indice = Math.floor(Math.random() * numerosAngelicais.length);
    const escolhido = numerosAngelicais[indice];

    resultado.innerHTML = `
      <div class="numero">${escolhido.numero}</div>
      <div class="mensagem">${escolhido.mensagem}</div>
    `;
  });
});
