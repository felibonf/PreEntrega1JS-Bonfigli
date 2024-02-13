function Calcular() {
  var altura = document.getElementById("altura-input").value;
  var peso = document.getElementById("peso-input").value;

  var resultado = peso / (altura / 100) ** 2;

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
}
