function carregar() {
  var msg = window.document.querySelector("div#msg");
  var img = window.document.querySelector("img#imagem");
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();
  // var segundos = data.getSeconds();
  // var hora = 14;
  // var minutos = 20;
  msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`;
  if (hora >= 0 && hora < 12) {
    // BOM DIA
    msg.innerHTML += `<p>BOM DIA!</p>`;
    img.src = "manhã1.png";
    document.body.style.background = "#e5d6bd";
  } else if (hora >= 12 && hora <= 18) {
    // BOA TARDE
    msg.innerHTML += `<p>BOA TARDE!</p>`;
    img.src = "tarde2.png";
    document.body.style.background = "#d49383";
  } else {
    //BOA NOITE!!
    msg.innerHTML += `<p>BOA NOITE!</p>`;
    img.src = "noite2.png";
    document.body.style.background = "#373544";
  }
}
