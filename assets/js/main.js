function openIMO() {
  document.getElementById("imoPopup").style.display = "flex";
}

function closeIMO() {
  document.getElementById("imoPopup").style.display = "none";
}

function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("show");
}


document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', function () {
        document.getElementById('mobileMenu').classList.remove('show');
    });
});
function logoutUser() {
    localStorage.removeItem("access_granted");
    window.location.href = "gate.html";
}
