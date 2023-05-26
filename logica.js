import { data } from "./Data.js";





for (let i = 85; i <= data.length; i++) {



    const formateador = new Intl.NumberFormat("en");

    let insetar = document.querySelector(".gallery");

    let nueva = document.createElement("div");

    nueva.innerHTML = `    
    
 

<div class="card">

<h5 class="Titulo">${data[i].Producto}</h5>
<img class="image" src=./img/${data[i].imagen}.jpg <div id="precios">

<div>
  <p class="descripcion"> <b>Caja Completa por:</b> ${formateador.format(data[i].caja.toFixed(2))} c/u</p>
  <p class="descripcion"> <b>Media Caja por:</b> ${formateador.format(data[i].mediacaja.toFixed(2))} c/u</p>
  <p class="descripcion"> <b>Unidad por:</b> ${formateador.format(data[i].unidad.toFixed(2))} c/u</p>
</div>

</div>


<div class="overlay">

<div class="overlay-content">

  <h6>${data[i].Producto}</h6>

  <div class="calculo">
    <div>
      <p id="CantidadCajaCompleta${i}"></p>
      <p class="text-black"> Completa X ${formateador.format(data[i].caja.toFixed(2))} c/u = </p>

    </div>

    <div>
      <p id="cajaCompletaXCantidad${i}">0,000.00</p>
      <button class = "bmas" type="button" id="sumacajacompleta">+</button>
      <button class = "nmenos" type="button" id="restacajacompleta">-</button>
    </div>
  </div>

  <div class="calculo">
    <div>
      <p id="cantidadMediaCaja${i}"></p>
      <p class="text-black"> Media X ${formateador.format(data[i].mediacaja.toFixed(2))} c/u = </p>

    </div>

    <div>
      <p id="mediacajaXcantidad${i}">0,000.00</p>
      <button class = "bmas" type="button" id="sumamediacaja">+</button>
      <button class = "nmenos" type="button" id="restamediacaja">-</button>
    </div>
  </div>

  <div class="calculo">
    <div>
      <p id="cantidadUnidad${i}"></p>
      <p class="text-black"> Unidad X ${formateador.format(data[i].unidad.toFixed(2))} c/u = </p>

    </div>

    <div>
      <p id="unidadXcantidad${i}">0,000.00</p>
      <button class = "bmas" type="button" id="sumaUnidad">+</button>
      <button class = "nmenos" type="button" id="restaUnidad">-</button>
    </div>
  </div>


  <div class="total">

    <div>
      <p class="total" id="cajaCompletaXCantidadT">Total = </p>
      <p class="total" id="totalCajas${i}"></p>
    </div>

    <button class="button" type="button" id="prefacturar">Enviar Prefactura</button>
    
  </div>

</div>


</div>



`
        ;


    nueva.classList.add("image-container")

    insetar.insertAdjacentElement("afterbegin", nueva)


    // let salir = document.querySelector('#salir');


    let prefacturar = document.querySelector('#prefacturar');

    let sumaUnaCajaCompleta = document.querySelector('#sumacajacompleta');
    let restaUnaCajaCompleta = document.querySelector('#restacajacompleta');

    let sumaMediaCaja = document.querySelector('#sumamediacaja');
    let restaMediaCaja = document.querySelector('#restamediacaja');

    let sumaUnidad = document.querySelector('#sumaUnidad');
    let restaUnidad = document.querySelector('#restaUnidad');


    let cajaCompletaXCantidad = document.querySelector(`#cajaCompletaXCantidad${i}`);
    let CantidadCajaCompleta = document.querySelector(`#CantidadCajaCompleta${i}`);

    let mediacajaXcantidad = document.querySelector(`#mediacajaXcantidad${i}`);
    let cantidadMediaCaja = document.querySelector(`#cantidadMediaCaja${i}`);



    let unidadXcantidad = document.querySelector(`#unidadXcantidad${i}`);
    let cantidadunidad = document.querySelector(`#cantidadUnidad${i}`);






    let totalCajas = document.querySelector(`#totalCajas${i}`);

    let counterUna = 0;
    let counterMedia = 0;
    let counterunidad = 0;

    let resultadoUna = 0
    let resultadoMedia = 0
    let resultadounidad = 0

    function sumaunacaja() {
      event.stopPropagation();
        counterUna++;
        resultadoUna = Number.parseFloat(data[i].caja) * counterUna
        cajaCompletaXCantidad.innerHTML = formateador.format(resultadoUna.toFixed(2));
        CantidadCajaCompleta.innerHTML = formateador.format(counterUna.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad + resultadoMedia + resultadoUna));
       
    }
    function restaunacaja() {
      event.stopPropagation();
        counterUna--;
        resultadoUna = Number.parseFloat(data[i].caja) * counterUna
        cajaCompletaXCantidad.innerHTML = formateador.format(resultadoUna.toFixed(2));
        CantidadCajaCompleta.innerHTML = formateador.format(counterUna.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad + resultadoMedia + resultadoUna));
     
    }
    function sumaumediacaja() {
      event.stopPropagation();
        counterMedia++;

        resultadoMedia = Number.parseFloat(data[i].mediacaja) * counterMedia
        mediacajaXcantidad.innerHTML = formateador.format(resultadoMedia.toFixed(2));
        cantidadMediaCaja.innerHTML = formateador.format(counterMedia.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad + resultadoMedia + resultadoUna));
            }
    function restamediacaja() {
      event.stopPropagation();
        counterMedia--;
        resultadoMedia = Number.parseFloat(data[i].mediacaja) * counterMedia
        mediacajaXcantidad.innerHTML = formateador.format(resultadoMedia.toFixed(2));
        cantidadMediaCaja.innerHTML = formateador.format(counterMedia.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad + resultadoMedia + resultadoUna));
            }


    function sumaunidad() {
      event.stopPropagation();
        counterunidad++;

        resultadounidad = Number.parseFloat(data[i].unidad) * counterunidad
        unidadXcantidad.innerHTML = formateador.format(resultadounidad.toFixed(2));
        cantidadunidad.innerHTML = formateador.format(counterunidad.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad + resultadoMedia + resultadoUna));
           }
    function restaunidad() {
      event.stopPropagation();
        counterunidad--;
        resultadounidad = Number.parseFloat(data[i].unidad) * counterunidad
        unidadXcantidad.innerHTML = formateador.format(resultadounidad.toFixed(2));
        cantidadunidad.innerHTML = formateador.format(counterunidad.toFixed(2));
        totalCajas.innerHTML = formateador.format((resultadounidad + resultadoMedia + resultadoUna));
         }

    // function salirf() {
    //     var imageContainers = document.querySelectorAll('.image-container');
    //     imageContainers.forEach(function (container) {
    //         container.addEventListener('click', function () {
    //             this.classList.toggle('clicked');
    //         });
    //     });

    // }

    prefacturar.addEventListener("click", e => {
      event.stopPropagation();

        // const taskId = e.target.previousSibling.previousSibling.getAttribute('id');
        // const contents = document.getElementById(taskId);


        const totalcajaCompletaXCantidad = document.getElementById(`cajaCompletaXCantidad${i}`).innerHTML;

        const totalCantidadCajaCompleta = document.getElementById(`CantidadCajaCompleta${i}`).innerHTML;
        const totalcantidadMediaCaja = document.getElementById(`cantidadMediaCaja${i}`).innerHTML;
        const totalcantidadunidad = document.getElementById(`cantidadUnidad${i}`).innerHTML;


        const totalmediacajaXcantidad = document.getElementById(`mediacajaXcantidad${i}`).innerHTML;

        const totalunidadXcantidad = document.getElementById(`unidadXcantidad${i}`).innerHTML;

        const totaltotalCajas = document.getElementById(`totalCajas${i}`).innerHTML;

        // 18092425374
        let url = `https://api.whatsapp.com/send?phone=18092425374&text= 
${data[i].Producto}           
                                                                                                            
 *${totalCantidadCajaCompleta} cajas*   ,    *${totalcantidadMediaCaja} media cajas*     y  *${totalcantidadunidad} unidad*                                                                                                                                  
${totalCantidadCajaCompleta} cajas X ${data[i].caja} = ${totalcajaCompletaXCantidad}                        
                                                                                                                
${totalcantidadMediaCaja} media cajas X ${data[i].mediacaja} 
${totalunidadXcantidad} media cajas X ${data[i].unidad} 
=  ${totalmediacajaXcantidad}   
.        total a prefacturar: *${totaltotalCajas}*      *****     al cliente:`


        window.open(url, "_blank");
        // window.focus();
    });

    sumaUnaCajaCompleta.addEventListener('click', sumaunacaja);

    restaUnaCajaCompleta.addEventListener('click', restaunacaja);

    sumaMediaCaja.addEventListener('click', sumaumediacaja);

    restaMediaCaja.addEventListener('click', restamediacaja);

    sumaUnidad.addEventListener('click', sumaunidad);

    restaUnidad.addEventListener('click', restaunidad);



    // salir.addEventListener('click', salirf);


}





