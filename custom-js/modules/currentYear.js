window.onload = function() {
    let currentYear = new Date().getFullYear();
    const copyrightInfo = document.getElementById("copyright");

    copyrightInfo.innerHTML = copyrightInfo.innerHTML.replace('year', currentYear);
}