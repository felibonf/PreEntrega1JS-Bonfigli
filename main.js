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

  // Guardar resultados en localStorage
  let resultados = JSON.parse(localStorage.getItem("imcResultados")) || [];
  let currentDate = new Date().toLocaleString();
  let nuevoResultado = {
    date: currentDate,
    peso: peso,
    altura: altura,
    imc: resultado.toFixed(2),
  };
  resultados.push(nuevoResultado);
  localStorage.setItem("imcResultados", JSON.stringify(resultados));
}

function mostrarResultados() {
  let resultados = JSON.parse(localStorage.getItem("imcResultados")) || [];
  let resultadosLista = document.getElementById("resultadosLista");

  resultadosLista.innerHTML = "";

  resultados.forEach(function (resultados) {
    let listItem = document.createElement("li");
    listItem.textContent = `${resultados.date}: Peso: ${resultados.peso} kg, Altura: ${resultados.altura} cm, IMC: ${resultados.imc}`;
    resultadosLista.appendChild(listItem);
  });
}

// Mostrar resultados almacenados al cargar la página
mostrarResultados();

const boton = document.getElementById("miBtn");
boton.addEventListener("click", () => {
  Swal.fire({
    title: "Tus datos han sido ingresados!",
    text: "Danos un segundo mientras calculamos tu IMC...",
    icon: "info",
    confirmButtonText: "Aceptar",
  });
});
