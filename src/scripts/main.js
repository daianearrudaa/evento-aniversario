
const dataEvento = new Date("Aug 12, 2024 19:00:00");
const timeTemp= dataEvento.getTime();

const interval = setInterval(function(){
     const agora = new Date();
     const timestempAtual = agora.getTime();

     const distanciaEvento = timeTemp - timestempAtual;

     const diasEmMs= 1000*60*60*24;
     const horasEmMs=1000*60*60;
     const minutosEmMs=1000*60;
     const segEmMs= 1000;

     const diasateEvento = Math.floor(distanciaEvento / diasEmMs);
     const horasEvento = Math.floor((distanciaEvento%diasEmMs)/ horasEmMs);
     const MinEvento = Math.floor((distanciaEvento%horasEmMs)/ minutosEmMs);
     const segEvento = Math.floor((distanciaEvento%minutosEmMs)/1000);

     document.getElementById('contador').innerHTML= `${diasateEvento}d  ${horasEvento}h ${MinEvento}m ${segEvento}s`;

     if (distanciaEvento<0){
        clearInterval(contaasHoras);
        document.getElementById('contador').innerHTML= 'Evento Expirado'

     }

},1000);
