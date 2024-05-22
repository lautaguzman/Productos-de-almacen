// Capturamos los elementos del footer
const gitHub = document.querySelector("#github");
const instagram = document.querySelector("#instagram");
const linkedin = document.querySelector("#linkedin");

// Función para abrir el perfil de GitHub en una nueva pestaña
function abrirGitHub() {
    window.open('https://github.com/lautaguzman', '_blank');
}

// Agregamos un evento de clic al icono de GitHub para abrir el perfil
gitHub.addEventListener("click", abrirGitHub);

// Función para abrir el perfil de Instagram en una nueva pestaña
function abrirInstagram() {
    window.open('https://instagram.com/lautaguzman21?igshid=NzZlODBkYWE4Ng==', '_blank');
}

// Agregamos un evento de clic al icono de Instagram para abrir el perfil
instagram.addEventListener("click", abrirInstagram);

// Función para abrir el perfil de LinkedIn en una nueva pestaña
function abrirLinkedin() {
    window.open('https://www.linkedin.com/in/lautaro-guzman-8841431b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
}

// Agregamos un evento de clic al icono de LinkedIn para abrir el perfil
linkedin.addEventListener("click", abrirLinkedin);
