function calcularConsumo(){

    const pessoas = Number(document.getElementById("pessoas").value);
    const banho = Number(document.getElementById("banho").value);
    const descarga = Number(document.getElementById("descarga").value);

    const resultado = document.getElementById("resultado");

    if(!pessoas || !banho || !descarga){
        resultado.innerHTML = "⚠️ Preencha todos os campos.";
        return;
    }

    const litrosBanho = banho * 12;
    const litrosDescarga = descarga * 6;

    const consumoPessoa = litrosBanho + litrosDescarga;

    const consumoDiario = consumoPessoa * pessoas;
    const consumoMensal = consumoDiario * 30;

    let classificacao;

    if(consumoDiario < 300){
        classificacao = "🌱 Excelente consumo!";
    }else if(consumoDiario < 600){
        classificacao = "💧 Consumo moderado.";
    }else{
        classificacao = "⚠️ Consumo alto. Procure economizar água.";
    }

    resultado.innerHTML = `
        <h3>Resultado</h3>
        <p><strong>Consumo diário:</strong> ${consumoDiario.toFixed(0)} litros</p>
        <p><strong>Consumo mensal:</strong> ${consumoMensal.toFixed(0)} litros</p>
        <br>
        <p>${classificacao}</p>
    `;
}
