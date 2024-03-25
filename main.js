function Calcular() {
  const altura = document.getElementById("altura-input").value;
  const peso = document.getElementById("peso-input").value;

  const resultado = peso / (altura / 100) ** 2;

  if (resultado) {
    document.getElementById("imc-resultado").innerHTML = resultado;
    if (resultado < 18.5) {
      document.getElementById("imc-estado").innerHTML = "Bajo peso";
    } else if (resultado < 25) {
      document.getElementById("imc-estado").innerHTML = "Saludable";
    } else if (resultado < 30) {
      document.getElementById("imc-estado").innerHTML = "Sobrepeso";
    } else {
      document.getElementById("imc-estado").innerHTML = "Obesidad";
    }
  }

  function felicitar() {
    for (let i = 1; i >= 18, i <= 25; i++) {
      if (resultado === i) {
        console.log("¡Felicidades tu IMC es de " + i + "! ¡Bien hecho!");
        return;
      }
    }
    console.log("Sigue esforzándote para obtener tu peso ideal!");
  }

  felicitar();

  function Array(resultado) {
    let valorRedondeado = Math.round(resultado);
    return [valorRedondeado];
  }
  let arrayRedondeado = Array(resultado);
  console.log("Numero redondeado y guardado en el array:", arrayRedondeado);

  //Guardar el resultado en localStorage
  const resultadoGuardado = JSON.stringify(resultado);

  localStorage.setItem("resultado1", resultado);

  const resultadoRecuperadoJSON = localStorage.getItem("resultado1");

  const resultadoRecuperado = JSON.parse(resultadoRecuperadoJSON);

  console.log(resultadoRecuperado);
}

const boton = document.getElementById("miBtn");
boton.addEventListener("click", () => {
  Swal.fire({
    title: "Tus datos han sido ingresados!",
    text: "Danos un segundo mientras calculamos tu IMC...",
    icon: "info",
    confirmButtonText: "Aceptar",
  });
});
