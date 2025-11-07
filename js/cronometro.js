
const dataFinal = new Date("June 19, 2026 00:00:00").getTime();

// 2. Atualize o contador a cada 1 segundo (1000 milissegundos)
const x = setInterval(function() {

  // 3. Obtenha a data e hora de hoje
  const agora = new Date().getTime();

  // 4. Calcule a diferença de tempo (distância) em milissegundos
  const distancia = dataFinal - agora;

  // 5. Cálculos para dias, horas, minutos e segundos
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  // Função para adicionar um '0' na frente se o número for menor que 10
  const formatarTempo = (tempo) => String(tempo).padStart(2, '0');

  // 6. Exiba o resultado no elemento com id="contador"
  const elementodias = document.getElementById("dia");
const elementoMinuto = document.getElementById("minuto")
const elementohoras = document.getElementById("horas")
const elementosegundos = document.getElementById("segundos")

  if (elementodias) {
    elementodias.innerHTML =
        `${dias}  `;
  }
         if (elementohoras) {
         elementohoras.innerHTML = `${formatarTempo(horas)}`
        }
   if (elementoMinuto) {
         elementoMinuto.innerHTML = `${formatarTempo(minutos)}`
        }
if (elementosegundos) {
 elementosegundos.innerHTML =  `${formatarTempo(segundos)}`
}

  // 7. Se a contagem regressiva terminou
  if (distancia < 0) {
    // Para de atualizar a cada segundo
    clearInterval(x);

    if (elementoContador) {
        elementoContador.innerHTML = "<span class='mensagem'>**A Data Chegou!**</span>";
    }
  }
}, 1000);
