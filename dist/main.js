'use estrict';

const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', function (evt) {
    evt.preventDefault();
    paintFactura();
   
})

const paintFactura=()=>{
    
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const pColor = document.getElementById('pColor')
    const color = document.getElementById('color').value;
    const precio = 8399000;
    const resultado = precio*cantidad;
    
    document.getElementById('pTotal').innerHTML = `$ ${resultado}`;
    document.getElementById('pCantidad').innerHTML = ` ${cantidad}`;
    
    switch (color) {
        case "Azul":
            pColor.classList.remove('pColor');
            pColor.classList.add('azul');
        break;
        case "Rojo":
            pColor.classList.remove('pColor');
            pColor.classList.add('rojo');
        break;
        case "Gris":
            pColor.classList.remove('pColor');
            pColor.classList.add('gris');
        break;
        case "Negro":
            pColor.classList.remove('pColor');
            pColor.classList.add('negro');
        break;
    
    }
    
    
}