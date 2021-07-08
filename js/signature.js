window.addEventListener("load", function(){
//======================================================================
    //======================================================================
    // LOGICA PARA EL CANVA
    //======================================================================
    //======================================================================
    // VARIABLES
    //======================================================================
    let miCanvas = document.querySelector('#pizarra');
    let lineas = [];
    let correccionX = 0;
    let correccionY = 0;
    let pintarLinea = false;
    let ctx = miCanvas.getContext('2d');
    // Marca el nuevo punto
    let nuevaPosicionX = 0;
    let nuevaPosicionY = 0;

    let posicion = miCanvas.getBoundingClientRect()
    correccionX = posicion.x;
    correccionY = posicion.y;

    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)){
            miCanvas.width = 290;
            miCanvas.height = 290;
        }
        else{
            miCanvas.width = 550;
            miCanvas.height = 450;
        }



    //======================================================================
    // FUNCIONES
    //======================================================================

    /**
     * Funcion que empieza a dibujar la linea
     */
    function empezarDibujo() {
        pintarLinea = true;
        lineas.push([]);
    };

    /**
     * Funcion que guarda la posicion de la nueva línea
     */
    function guardarLinea() {
        lineas[lineas.length - 1].push({
            x: nuevaPosicionX,
            y: nuevaPosicionY
        });
    }

    /**
     * Funcion dibuja la linea
     */
    function dibujarLinea(event) {
        event.preventDefault();
        if (pintarLinea) {
            
            // Estilos de linea
            ctx.lineJoin = ctx.lineCap = 'round';
            ctx.lineWidth = 3;
            // Color de la linea
            ctx.strokeStyle = '#000';
            // Marca el nuevo punto
            if (event.changedTouches == undefined) {
                // Versión ratón
                nuevaPosicionX = event.layerX;
                nuevaPosicionY = event.layerY;
            } else {
                // Versión touch, pantalla tactil
                nuevaPosicionX = event.changedTouches[0].pageX - correccionX;
                nuevaPosicionY = event.changedTouches[0].pageY - correccionY;
            }
            // Guarda la linea
            guardarLinea();
            // Redibuja todas las lineas guardadas
            ctx.beginPath();
            lineas.forEach(function (segmento) {
                ctx.moveTo(segmento[0].x, segmento[0].y);
                segmento.forEach(function (punto, index) {
                    ctx.lineTo(punto.x, punto.y);
                });
            });
            ctx.stroke();
        }
    }

    /**
     * Funcion que deja de dibujar la linea
     */
    function pararDibujar () {
        pintarLinea = false;
        guardarLinea();
    }

    //======================================================================
    // EVENTOS
    //======================================================================

    // Eventos raton
    miCanvas.addEventListener('mousedown', empezarDibujo, false);
    miCanvas.addEventListener('mousemove', dibujarLinea, false);
    miCanvas.addEventListener('mouseup', pararDibujar, false);

    // Eventos pantallas táctiles
    miCanvas.addEventListener('touchstart', empezarDibujo, false);
    miCanvas.addEventListener('touchmove', dibujarLinea, false);

    // BOTONES DE TOOLS PARA CANVAS
    var btnDelete = this.document.querySelector('#imgDelete');
    btnDelete.addEventListener('click', function(){
        console.log(lineas);
        for(let i = 0; i < lineas.length; i++){
            lineas.splice(i, 1);
        }
        miCanvas.width= miCanvas.width;
        ClearCanva();
        console.log(lineas)
        for(let i = 0; i < lineas.length; i++){
            lineas.splice(i, 1);
        }
        
    });

    function ClearCanva(){

        ctx.clearRect(0, 0, miCanvas.width, miCanvas.height);
    }

    // OBTENER URL AL DAR CLICK EN GUARDAR
    var btnSave = this.document.querySelector('#imgSave');
    btnSave.addEventListener("click",function(){	
        if(lineas.length == 0){
            console.log("No firmo");
        }
        else{
            console.log("Firmo");
            let signature = miCanvas.toDataURL("image/png");
            console.log(signature);
        }
        
    },false);

});