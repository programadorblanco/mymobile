window.addEventListener("load", function(){
    let signature = "";
    var dataUrl = "data:image/png;base64,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";
    var direccion1 = '', direccion2 = '', direccion3 = '';
    var name = $('#name');
    var SSN = $('#ssn-full');
    var phone = $('#phone');
    var email = $('#email');
    var address = $('#address');
    var city = $('#city').val();
    var zipcode = $('#zipcode');
    var state = $('#state');
    var month = $('#month');
    var day = $('#day');
    var year = $('#year');
    var idFront;
    var idBack;
    var selfie;
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
            miCanvas.height = 280;
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
        // ELIMINAR TODAS LAS LINEAS DEL ARRAY DE SIGNATURE
        for(let i = 0; i < lineas.length; i++){
            lineas.splice(i, 1);
        }
        miCanvas.width= miCanvas.width;
        ClearCanva();
        // ELIMINAR TODAS LAS LINEAS DEL ARRAY DE SIGNATURE
        for(let i = 0; i < lineas.length; i++){
            lineas.splice(i, 1);
        }
        
    });

    function ClearCanva(){
        ctx.clearRect(0, 0, miCanvas.width, miCanvas.height);
    }

    function generatePDF(){
            const body1 = `
                <section class="body">
                <p class="justify">Authorization: By signing below, you authorize: (a) backgroundchecks.com (“BGC”) to request information about you from any public or private information source; (b) anyone to provide information about you to BGC; (c) BGC to provide us My Mobile, LLC and its client, TracFone Wireless, Inc., one or more reports based on that information; and (d) us to share those reports with others for legitimate business purposes related to your employment. BGC may investigate your education, work history, professional licenses and credentials, references, address history, social security number validity, right to work, criminal record, lawsuits, driving record, credit history, and any other information with public or private information sources. You acknowledge that a fax, image, or copy of this authorization is as valid as the original. You make this authorization to be valid for as long as you are an applicant or employee with us<p>
                <img src="${direccion1}" class="pdf-img">
                <img src="${direccion2}" class="pdf-img">
                <img src="${direccion3}" class="pdf-img">
                <section>
            `;
    
        html2pdf().from(body1).save();
    };

    // EVENTO PARA EJECUTAR EL SUBMIT DEL FORMULARIO
    var warnings = [];
    var arrayProp = [];
    $(document).on('submit', "#form", function(event){
        event.preventDefault();
        // CAMPOS DEL FORMULARIO
        name = $('#name').val();
        SSN = $('#ssn-full').val();
        phone = $('#phone').val();
        email = $('#email').val();
        address = $('#address').val();
        city = $('#city').val();
        zipcode = $('#zipcode').val();
        state = $('#state').val();
        month = $('#month').val();
        day = $('#day').val();
        year = $('#year').val();
        idFront = direccion1;
        idBack = direccion3;
        selfie = direccion2;
        var arrayCampos = {
            _name: name,
            _ssn: SSN,
            _phone: phone,
            _email: email,
            _address: address,
            _city: city,
            _zipcode: zipcode,
            _state: state,
            _day: day,
            _month: month,
            _year: year,
            _idFront: idFront,
            _idBack: idBack,
            _selfie: selfie
        };
        ValidarCampos(arrayCampos);
        var mensaje;
        if(lineas.length == 0){
            console.log("No firmo");
        }
        else{
            console.log("Firmo");
            signature = miCanvas.toDataURL("image/png");
        }
        
        var warningTemporal = [];
        for(var key in arrayCampos){
            arrayProp.push(arrayCampos[key]);
            warningTemporal.push(key);
        }

        console.log(lineas)
        if(warnings.length == 0 && lineas.length > 0){
            // console.log("Datos llenados");
            generatePDF();
            $('.popup').show(500);
            $('.popup').css("display", "flex");
        }
        else{
            for(var j = 0; j < warnings.length; j++){
                if(arrayProp[j] == ""){
                    mensaje = $('.'+ warningTemporal[j] + ' .flex input');
                    mensaje.css("border", "1px solid red");
                }
                else{
                    mensaje = $('.'+ warningTemporal[j] + ' .flex input');
                    mensaje.css("border", "1px solid #c7c7c7"); 
                }   
                
                if(arrayProp[j] == "default"){
                    mensaje = $('.'+ warningTemporal[j] + ' .flex select');
                    mensaje.css("border", "1px solid red");
                }
                else{
                    mensaje = $('.'+ warningTemporal[j] + ' .flex select');
                    mensaje.css("border", "1px solid #c7c7c7"); 
                } 
            }
            arrayProp.splice(0, arrayProp.length);
            $('.result').show(500);
            warnings.splice(0, warnings.length);
        }
    });


    // EVENTO PARA CARGAR LA FOTO ID DE LA PARTE DE ENFRENTE
    var loadID = document.querySelector('#txtFileID');
    loadID.addEventListener('change', function(event){
        var reader = new FileReader();
        reader.onload = function()
        {
            direccion1 = reader.result;
            document.querySelector('._idFront .message').style.display = "block";
        };
        reader.readAsDataURL(event.target.files[0]);
    });

    // EVENTO PARA CARGAR LA FOTO ID DE LA PARTE DE TRASERA
    var loadIDback = document.querySelector('#txtFileIDback');
    loadIDback.addEventListener('change', function(event){
        var reader = new FileReader();
        reader.onload = function()
        {
            direccion3 = reader.result;
            document.querySelector('._idBack .message').style.display = "block";
        };
        reader.readAsDataURL(event.target.files[0]);
    });

    // EVENTO PARA CARGAR LA FOTO SELFIE
    var loadSelfie = document.querySelector('#txtFileSelfie');
    loadSelfie.addEventListener('change', function(event){
        var reader = new FileReader();
        reader.onload = function()
        {
            direccion2 = reader.result;
            document.querySelector('._selfie .message').style.display = "block";
        };
        reader.readAsDataURL(event.target.files[0]);
    });



    function ValidarCampos(arrayCampos){
        for(let key in arrayCampos){
            if(arrayCampos[key] == ""){
                warnings.push(key);
            }     
            if(key == "_state"){
                if(arrayCampos._state == "default"){
                    warnings.push(key);
                }
            }
            if(key == "_month"){
                if(arrayCampos._month == "default"){
                    warnings.push(key);
                }
            }
            if(key == "_day"){
                if(arrayCampos._day == "default"){
                    warnings.push(key);
                }
            }
            if(key == "_year"){
                if(arrayCampos._year == "default"){
                    warnings.push(key);
                }
            }
        }         
    }

});



