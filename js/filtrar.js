const btnSabores = document.getElementById('btnSabores');
const btnChocolate = document.getElementById('btnChocolate');
const btnMaicena = document.getElementById('btnMaicena');
const btnAvena = document.getElementById('btnAvena');
const btnFrutal = document.getElementById('btnFrutal');
const btnSaludables = document.getElementById('btnSaludables');
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
const saludables = document.getElementById('saludables');
const cajas = document.getElementById('cajas');

btnSabores.addEventListener('click', function() {
    btnSabores.classList.add('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnMerengue.classList.remove('active');
    btnSaludables.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-block');
    sabores.classList.remove('d-none');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-block');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-block');
    avena.classList.add('d-none');
    avena.classList.remove('d-block');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-block');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-block');
    saludables.classList.remove('d-block');
    saludables.classList.add('d-none');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-block');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-block');
});

btnChocolate.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.add('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnMerengue.classList.remove('active');
    btnSaludables.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-block');
    chocolates.classList.add('d-block');
    chocolates.classList.remove('d-none');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-block');
    avena.classList.add('d-none');
    avena.classList.remove('d-block');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-block');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-block');
    saludables.classList.remove('d-block');
    saludables.classList.add('d-none');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-block');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-block');
});

btnMaicena.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.add('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnMerengue.classList.remove('active');
    btnSaludables.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-block');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-block');
    maicena.classList.add('d-block');
    maicena.classList.remove('d-none');
    avena.classList.add('d-none');
    avena.classList.remove('d-block');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-block');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-block');
    saludables.classList.remove('d-block');
    saludables.classList.add('d-none');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-block');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-block');
});

btnAvena.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.add('active');
    btnFrutal.classList.remove('active');
    btnSaludables.classList.remove('active');
    btnMerengue.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-block');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-block');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-block');
    avena.classList.add('d-block');
    avena.classList.remove('d-none');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-block');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-block');
    saludables.classList.remove('d-block');
    saludables.classList.add('d-none');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-block');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-block');
});

btnFrutal.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.add('active');
    btnMerengue.classList.remove('active');
    btnSaludables.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-block');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-block');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-block');
    avena.classList.add('d-none');
    avena.classList.remove('d-block');
    frutales.classList.add('d-block');
    frutales.classList.remove('d-none');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-block');
    saludables.classList.remove('d-block');
    saludables.classList.add('d-none');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-block');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-block');
});

btnMerengue.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnMerengue.classList.add('active');
    btnSaludables.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-block');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-block');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-block');
    avena.classList.add('d-none');
    avena.classList.remove('d-block');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-block');
    merengue.classList.add('d-block');
    merengue.classList.remove('d-none');
    saludables.classList.remove('d-block');
    saludables.classList.add('d-none');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-block');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-block');
});
  
btnIntegral.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnMerengue.classList.remove('active');
    btnSaludables.classList.remove('active');
    btnIntegral.classList.add('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-block');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-block');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-block');
    avena.classList.add('d-none');
    avena.classList.remove('d-block');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-block');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-block');
    saludables.classList.remove('d-block');
    saludables.classList.add('d-none');
    integrales.classList.add('d-block');
    integrales.classList.remove('d-none');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-block');
});

btnSaludables.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnMerengue.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnSaludables.classList.add('active');
    btnCajas.classList.remove('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-block');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-block');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-block');
    avena.classList.add('d-none');
    avena.classList.remove('d-block');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-block');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-block');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-block');
    saludables.classList.add('d-block');
    saludables.classList.remove('d-none');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-block');
});

btnCajas.addEventListener('click', function() {
    btnSabores.classList.remove('active');
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnMerengue.classList.remove('active');
    btnSaludables.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.add('active');
    sabores.classList.add('d-none');
    sabores.classList.remove('d-block');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-block');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-block');
    avena.classList.add('d-none');
    avena.classList.remove('d-block');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-block');
    merengue.classList.add('d-none');
    merengue.classList.remove('d-block');
    saludables.classList.remove('d-block');
    saludables.classList.add('d-none');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-block');
    cajas.classList.add('d-block');
    cajas.classList.remove('d-none');
});