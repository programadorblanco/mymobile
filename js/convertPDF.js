window.addEventListener("load", function(){
    let signature = "";
    var dataUrl = "data:image/png;base64,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";
    var direccion1 = '', direccion2 = '', direccion3 = '';
    var name = $('#name');
    var lname = $('#lName');
    var middle = "";
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
            <section class="body margin">
                <p class="center"><strong>Authorization</strong></p>
                <p class="justify"><strong class="bottom">Authorization:</strong> By signing below, you authorize: (a) backgroundchecks.com (“BGC”) to request information about you from any public or private information source; (b) anyone to provide information about you to BGC; (c) BGC to provide us <strong>My Mobile, LLC</strong> and its client, TracFone Wireless, Inc., one or more reports based on that information; and (d) us to share those reports with others for legitimate business purposes related to your employment. BGC may investigate your education, work history, professional licenses and credentials, references, address history, social security number validity, right to work, criminal record, lawsuits, driving record, credit history, and any other information with public or private information sources. You acknowledge that a fax, image, or copy of this authorization is as valid as the original. You make this authorization to be valid for as long as you are an applicant or employee with us</p>
                <p class="justify">The Consumer Financial Protection Bureau’s “Summary of Your Rights under the Fair Credit Reporting Act” is attached to this authorization. If you are a New York applicant, a copy of New York’s law on the use of criminal records is attached. By signing below, you acknowledge receipt of these documents.</p>
                <p class="justify"><strong class="bottom">Personal Information:</strong> Please print the information requested below to identify yourself for BGC</p><br/>
                <div class="pdf-flex">
                    <div class="pdf-label">
                        <p>Printed name:</p>
                    </div>
                    <div class="pdf-input">
                        <div class="superior">
                            <span class="nombre">${name}</span>
                            <span class="middle">Falta Variable</span>
                            <span class="apellido">${lname}</span>
                        </div>
                        <div class="inferior inf">
                            <span class="nombre">First</span>
                            <span class="middle">Middle</span>
                            <span class="apellido">Last</span>
                        </div>
                    </div>
                </div>
                <br>
                <div class="pdf-flex">
                    <div class="pdf-label">
                        <p>Other names used:</p>
                    </div>
                    <div class="pdf-input">
                        <div class="superior">
                            <span class="oher">Falta Variable</span>
                        </div>
                        <div class="inf"></div>
                    </div>
                </div>
                <p>Current and former addresses:</p>
                <div class="guru-flex">
                    <div class="s1">
                        <div class="sup">
                            <span>FALTA VARIABLE</span>
                        </div>
                        <div class="inf">
                            <span>from Mo/Yr</span>
                        </div>
                    </div>
                    <div class="s2">
                        <div class="sup">
                            <span>Current</span>
                        </div>
                        <div class="inf">
                            <span>from Mo/Yr</span>
                        </div>
                    </div>
                    <dis class="s3">
                        <div class="sup">
                            <span>${address} ${city} ${state} ${zipcode}</span>
                        </div>
                        <div class="inf inf-flex">
                            <span>Street</span>
                            <span>City, State & Zip</span>
                        </div>
                    </div>
                </div><br>
                <div class="guru-flex">
                    <div class="s1">
                        <div class="sup">
                            <span></span>
                        </div>
                        <div class="inf">
                            <span>from Mo/Yr</span>
                        </div>
                    </div>
                    <div class="s2">
                        <div class="sup">
                            <span></span>
                        </div>
                        <div class="inf">
                            <span>from Mo/Yr</span>
                        </div>
                    </div>
                    <dis class="s3">
                        <div class="sup">
                            <span></span>
                        </div>
                        <div class="inf inf-flex">
                            <span>Street</span>
                            <span>City, State & Zip</span>
                        </div>
                    </div>
                </div> <br>
                <div class="guru-flex">
                    <div class="s1">
                        <div class="sup">
                            <span></span>
                        </div>
                        <div class="inf">
                            <span>from Mo/Yr</span>
                        </div>
                    </div>
                    <div class="s2">
                        <div class="sup">
                            <span></span>
                        </div>
                        <div class="inf">
                            <span>from Mo/Yr</span>
                        </div>
                    </div>
                    <dis class="s3">
                        <div class="sup">
                            <span></span>
                        </div>
                        <div class="inf inf-flex">
                            <span>Street</span>
                            <span>City, State & Zip</span>
                        </div>
                    </div>
                </div>
                <div class="div-signature">
                    <div class="sub-container">
                        <div class="sign">
                            <img src="${signature}" class="img-signature">
                        </div>
                        <div class="inf">
                            <span>Signature</span>
                        </div>
                    </div>
                    <div class="sub-container">
                        <div class="date-a">
                            <span>FALTA VARIABLE</span>
                        </div>
                        <div class="inf">
                            <span>Date</span>
                        </div>
                    </div>
                </div>
                <section>
                <br><br><br><br><br><br><br><br><br><br><br><br><br>
                <section>
                <p class="center"><strong>Disclosure</strong></p>
                <p class="justify">We <strong class="bottom">My Mobile, LLC</strong> and our client, TracFone Wireless, Inc., will obtain one or more consumer reports or investigative consumer reports (or both) about you for purposes of employment with My Mobile, LLC and potential assignment to work on projects for our client TracFone Wireless, Inc. These purposes may include hiring, contract, assignment, promotion, re-assignment, and termination. The reports will include information about your character, general reputation, personal characteristics, and mode of livin</p>
                <p class="justify">We will obtain these reports through a consumer reporting agency. Our consumer reporting agency is backgroundchecks.com (“BGC”). BGC’s address is P.O. Box 353, Chapin, SC 29036. BGC’s telephone number is (866) 265-6602. BGC’s website is www.backgroundchecks.com, where you can find information about whether BGC’s international privacy practices.</p>
                <p class="justify">To prepare the reports, BGC may investigate your education, work history, professional licenses and credentials, references, address history, social security number validity, right to work, criminal record, lawsuits, driving record, credit history, and any other information with public or private information sources.</p>
                <p class="justify">You may obtain a copy of any report that BGC provides and BGC’s files about you (in person, by mail, or by phone) by providing identification to BGC. If you do, BGC will provide you help to understand the files, including trained personnel and an explanation of any codes. Another person may accompany you by providing identification.</p>
                <p class="justify">If BGC obtains any information by interview, you have the right to obtain a complete and accurate disclosure of the scope and nature of the investigation performed</p>
                <p class="justify">Please sign below to acknowledge your receipt of this disclosure.</p>
                <br><br>
                <div class="div-signature">
                    <div class="sub-container">
                        <div class="sign">
                            <img src="${signature}" class="img-signature">
                        </div>
                        <div class="inf">
                            <span>Signature</span>
                        </div>
                    </div>
                    <div class="sub-container">
                        <div class="date-a">
                            <span>FALTA VARIABLE</span>
                        </div>
                        <div class="inf">
                            <span>Date</span>
                        </div>
                    </div>
                </div>
                <br><br>
                <div class="div-signature">
                    <div class="sub-container">
                        <div class="date-a">
                            <span>${name} ${middle} ${lname}</span>
                        </div>
                        <div class="inf">
                            <span>Printed Name</span>
                        </div>
                    </div>
                </div>
                </section>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <section>
                <p class="center"><strong>Information</strong></p>
                <p>SSN: <span>${SSN}</span></p>
                <p>Date of birthday: <span>${month} ${day}, ${year}</span></p>
                <p>Phone: <span>${phone}</span></p>
                <p>Email: <span>${email}</span></p>
                <img src="${idFront}" class="img-signature">
                <img src="${idBack}" class="img-signature">
                <span><img src="${selfie}" class="img-signature">
                </section>
            `;
    
        html2pdf().from(body1).save();
    };
    // generatePDF();

    // EVENTO PARA EJECUTAR EL SUBMIT DEL FORMULARIO
    var warnings = [];
    var arrayProp = [];
    $(document).on('submit', "#form", function(event){
        event.preventDefault();
        // CAMPOS DEL FORMULARIO
        name = $('#name').val();
        lname = $('#lName').val();
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
            $('canvas').css("border", "1px solid red");
                 
        }
        else{
            console.log("Firmo");
            signature = miCanvas.toDataURL("image/png");
            $('canvas').css("border", "none");
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
            setTimeout(function(){ location.reload(); }, 3250);
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

                if(arrayProp[11] == ""){
                    mensaje = $('.'+ warningTemporal[11] + ' .container-file label');
                    mensaje.css("border", "1px solid red");
                }
                else{
                    mensaje = $('.'+ warningTemporal[11] + ' .container-file label');
                    mensaje.css("border", "none"); 
                }  

                if(arrayProp[12] == ""){
                    mensaje = $('.'+ warningTemporal[12] + ' .container-file label');
                    mensaje.css("border", "1px solid red");
                }
                else{
                    mensaje = $('.'+ warningTemporal[12] + ' .container-file label');
                    mensaje.css("border", "none"); 
                }

                if(arrayProp[13] == ""){
                    mensaje = $('.'+ warningTemporal[13] + ' .container-file label');
                    mensaje.css("border", "1px solid red");
                }
                else{
                    mensaje = $('.'+ warningTemporal[13] + ' .container-file label');
                    mensaje.css("border", "none"); 
                }
            }
            console.log(arrayProp, warningTemporal);
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
            $('.popup-image').show(500);
            $('.popup-image').css("display", "flex");
            $('#lbl-front').css("color", "#46f746");
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
            $('.popup-image').show(500);
            $('.popup-image').css("display", "flex");
            $('#lbl-back').css("color", "#46f746");
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
            $('.popup-image').show(500);
            $('.popup-image').css("display", "flex");
            $('#lbl-selfie').css("color", "#46f746");
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



