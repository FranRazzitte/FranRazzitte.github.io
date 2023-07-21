const btnSabores = document.getElementById('btnSabores');
const btnChocolate = document.getElementById('btnChocolate');
const btnMaicena = document.getElementById('btnMaicena');
const btnAvena = document.getElementById('btnAvena');
const btnFrutal = document.getElementById('btnFrutal');
const btnMerengue = document.getElementById('btnMerengue');
const btnIntegral = document.getElementById('btnIntegral');
const btnCajas = document.getElementById('btnCajas');
const sabores = document.getElementById('sabores');
const chocolates = document.getElementById('chocolates');
const maicena = document.getElementById('maicena');
const avena = document.getElementById('avena');
const frutales = document.getElementById('frutales');
const merengue = document.getElementById('merengue');
const integrales = document.getElementById('integrales');
const cajas = document.getElementById('cajas');

btnSabores.addEventListener('click', function() {
    btnSabores.classList.add('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnMerengue.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-flex');
    sabores.classList.remove('d-none');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-flex');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-flex');
    avena.classList.add('d-none');
    avena.classList.remove('d-flex');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-flex');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-flex');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-flex');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-flex');
});

btnChocolate.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.add('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnMerengue.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-flex');
    chocolates.classList.add('d-flex');
    chocolates.classList.remove('d-none');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-flex');
    avena.classList.add('d-none');
    avena.classList.remove('d-flex');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-flex');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-flex');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-flex');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-flex');
});

btnMaicena.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.add('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnMerengue.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-flex');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-flex');
    maicena.classList.add('d-flex');
    maicena.classList.remove('d-none');
    avena.classList.add('d-none');
    avena.classList.remove('d-flex');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-flex');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-flex');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-flex');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-flex');
});

btnAvena.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.add('active');
    btnFrutal.classList.remove('active');
    btnMerengue.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-flex');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-flex');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-flex');
    avena.classList.add('d-flex');
    avena.classList.remove('d-none');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-flex');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-flex');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-flex');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-flex');
});

btnFrutal.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.add('active');
    btnMerengue.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-flex');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-flex');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-flex');
    avena.classList.add('d-none');
    avena.classList.remove('d-flex');
    frutales.classList.add('d-flex');
    frutales.classList.remove('d-none');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-flex');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-flex');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-flex');
});

btnMerengue.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnMerengue.classList.add('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-flex');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-flex');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-flex');
    avena.classList.add('d-none');
    avena.classList.remove('d-flex');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-flex');
    merengue.classList.add('d-flex');
    merengue.classList.remove('d-none');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-flex');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-flex');
});
  
btnIntegral.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnMerengue.classList.remove('active');
    btnIntegral.classList.add('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-flex');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-flex');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-flex');
    avena.classList.add('d-none');
    avena.classList.remove('d-flex');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-flex');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-flex');
    integrales.classList.add('d-flex');
    integrales.classList.remove('d-none');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-flex');
});

btnCajas.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnMerengue.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.add('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-flex');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-flex');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-flex');
    avena.classList.add('d-none');
    avena.classList.remove('d-flex');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-flex');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-flex');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-flex');
    cajas.classList.add('d-flex');
    cajas.classList.remove('d-none');
});