let signature = "";

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
            signature = miCanvas.toDataURL("image/png");
            console.log(signature);
        }
        
    },false);

});

var direccion1 = '', direccion2 = '';

var loadFile = function(event, idn) 
{
    var reader = new FileReader();
    reader.onload = function()
    {
        if(idn == '1')
        {
            direccion1 = reader.result;
            console.log("Dirección 1 guardada.");
        }
        else if(idn == '2')
        {
            direccion2 = reader.result;
            console.log("Dirección 2 guardada.");
        }
        //var output = document.getElementById('output');
        //output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};

function generatePDF(){
    const body1 =   "<br>" + 
                    "<center>" + 
                        "Authorization<hr style='width: 75%'>" +
                        "<p style='text-align: justify; width: 75%; font-size: 12px'>" + 
                        "Authorization: By signing below, you authorize: (a) backgroundchecks.com (“BGC”) to request information about you " + 
                        "from any public or private information source; (b) anyone to provide information about you to BGC; (c) BGC to provide " + 
                        "us My Mobile, LLC and its client, TracFone Wireless, Inc., one or more reports based on that information; and (d) us " + 
                        "to share those reports with others for legitimate business purposes related to your employment. BGC may investigate " + 
                        "your education, work history, professional licenses and credentials, references, address history, social security " + 
                        "number validity, right to work, criminal record, lawsuits, driving record, credit history, and any other information " + 
                        "with public or private information sources. You acknowledge that a fax, image, or copy of this authorization is as " +
                        "valid as the original. You make this authorization to be valid for as long as you are an applicant or employee with us." + 
                        "<br><br>" + 
                        "The Consumer Financial Protection Bureau’s “Summary of Your Rights under the Fair Credit Reporting Act” is attached to " + 
                        "this authorization. If you are a New York applicant, a copy of New York’s law on the use of criminal records is attached. " + 
                        "By signing below, you acknowledge receipt of these documents. Personal Information: <br><br>Please print the information " + 
                        "requested below to identify yourself for BGC.</p>" + 
                    "</center><br><br>" + 
                    "<div style='font-size: 12px'>" + 
                        "Printed name: <u>" + document.getElementById("name").value + " " + document.getElementById("lName").value + "</u><br>" +
                        "Other names used: <u>" + document.getElementById("name").value + "</u><br>" +
                        "Current and former addresses: <u>" + document.getElementById("address").value + "</u><br>" +
                    "</div>" +
                    "<hr><br>";
    const element = "<br><hr>" + document.getElementById("name").value + 
                    "</div><hr><br>" + 
                    "<img src='" + signature + "'>" +
                    "<img src='" + direccion1 + "'>" +
                    "<img src='" + direccion2 + "'>";

    html2pdf().from(body1 + element).save();
};