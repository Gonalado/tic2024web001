function mostrarCréditos()
{alert("Gonzalo Vicario Álvarez, 2ºB")}
function ocultarDiv()
{document.getElementById("Bloque1").style.display = "none"}
function mostrarDiv()
{document.getElementById("Bloque1").style.display = ""}
function cambiarColor()
{document.getElementById("Bloque1").style.backgroundColor = "Blue"}
function date()
{alert(Date())}
function Cambiocolor()
{document.getElementById("Bloque2").style.backgroundColor = "Red"}
function Vuelvocolor()
{document.getElementById("Bloque2").style.backgroundColor = "silver"}

const getLocationBtn = document.getElementById('getLocationBtn');
const coordinatesParagraph = document.getElementById('coordinates');
    getLocationBtn.addEventListener('click', () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(Geolocalizar);
      } else {
        coordinatesParagraph.textContent = "La geolocalización no es compatible con este navegador.";
      }
    });
    function Geolocalizar(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      coordinatesParagraph.textContent = `Latitud: ${latitude}, Longitud: ${longitude}`;
      const map = L.map('map').setView([latitude, longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Tu ubicación actual.')
            .openPopup();
   }
