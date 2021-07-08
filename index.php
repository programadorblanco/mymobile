<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/styles.css">
        <script src="js/jquery.js"></script>
        <script src="js/main.js"></script>
        <script src="js/signature.js"></script>
        <script src="js/html2pdf.js"></script>
        <script src="js/convertPDF.js"></script>
        <title>My Mobile LLC</title>
    </head>
    <body>
        <div class="container-form">
            <form action="" method="post" enctype="multipart/form-data">
                <div class="box">
                    <img src="img/logo.jpg" class="logo">
                </div>
                <div class="box">
                    <h2>New Agent Info</h2>
                </div>
                <div class="box _first-name">
                    <div class="flex">
                        <div><label>First Name</label></div>
                        <div><input name="name" id="name" type="text" class="input" placeholder="Enter First Name"></div>
                    </div>
                    <div class="warning"><label>Debe llenar este campo *</label></div>
                </div>
                <div class="box _last-name">
                    <div class="flex">
                        <div><label>Last Name</label></div>
                        <div><input name="lName" id="lName" type="text" class="input" placeholder="Enter Last Name"></div>
                    </div>
                    <div class="warning"><label>Debe llenar este campo *</label></div>
                </div>
                <div class="box _ssn">
                    <div class="flex">
                        <div><label>SSN (full 9 digits)</label></div>
                        <div><input name="ssn" type="number" class="input" placeholder="Enter SSN"></div>
                    </div>
                    <div class="warning"><label>Debe llenar este campo *</label></div>
                </div>
                <div class="box _date-of-birth">
                    <div class="flex">
                        <div><label>Date of Birth</label></div>
                        <div class="container-select">
                            <select class="select" id="month" name="month">
                                <option value="default">Select Value</option>
                            </select>
                            <select class="select" id="day" name="day">
                                <option value="default">Select Value</option>
                            </select>
                            <select class="select" id="year" name="year">
                                <option value="default">Select Value</option>
                            </select>
                        </div>
                    </div>
                    <div class="warning"><label>Debe llenar este campo *</label></div>
                </div>
                <div class="box _phone">
                    <div class="flex">
                        <div><label>Phone</label></div>
                        <div><input name="phone" type="tel" class="input" placeholder="Enter Phone"></div>
                    </div>
                    <div class="warning"><label>Debe llenar este campo *</label></div>
                </div>
                <div class="box _email">
                    <div class="flex">
                        <div><label>Email</label></div>
                        <div><input name="email" type="email" class="input" placeholder="Enter Email"></div>
                    </div>
                    <div class="warning"><label>Debe llenar este campo *</label></div>
                </div>
                <div class="box _id">
                    <div class="flex">
                        <div><label>Upload ID</label></div>
                        <div class="container-file">
                            <label for="txtFileID" class="lblFile">Upload Photo</label>
                            <input id="txtFileID" type="file" name="txtFileID" style="display: none;" accept="image/*">
                        </div>
                    </div>
                    <div class="warning"><label>Debe llenar este campo *</label></div>
                </div>
                <div class="box _selfie">
                    <div class="flex">
                        <div><label>Headshot Image</label></div>
                        <div>
                            <label for="txtFileSelfie" class="lblFile">Upload Photo</label>
                            <input id="txtFileSelfie" type="file" name="txtFileSelfie" style="display: none;" accept="image/*">
                        </div>
                    </div>
                    <div class="warning"><label>Debe llenar este campo *</label></div>
                </div>
                <div class="box _address">
                    <div class="flex">
                        <div><label>Address</label></div>
                        <div><input name="address" id="address" type="text" class="input" placeholder="Enter Address"></div>
                    </div>
                    <div class="warning"><label>Debe llenar este campo *</label></div>
                </div>
                <div class="box _address2">
                    <div class="flex">
                        <div><label>Address 2</label></div>
                        <div><input name="address2" type="text" class="input" placeholder="Enter Address 2"></div>
                    </div>
                    <div class="warning"><label>Debe llenar este campo *</label></div>
                </div>
                <div class="box _city">
                    <div class="flex">
                        <div><label>City</label></div>
                        <div><input name="city" type="text" class="input" placeholder="Enter City"></div>
                    </div>
                    <div class="warning"><label>Debe llenar este campo *</label></div>
                </div>
                <div class="box _state">
                    <div class="flex">
                        <div><label>State</label></div>
                        <div class="container-select">
                            <select class="select state" id="state" name="state">
                                <option value="default">Select Value</option>
                            </select>
                        </div>
                    </div>
                    <div class="warning"><label>Debe llenar este campo *</label></div>
                </div>
                <div class="box _zipcode">
                    <div class="flex">
                        <div><label>Zip Code</label></div>
                        <div><input name="zipCode" type="number" class="input" placeholder="Enter Zip Code"></div>
                    </div>
                    <div class="warning"><label>Debe llenar este campo *</label></div>
                </div>
                <div class="box _signature">
                    <div class="sub-box">
                        <canvas id="pizarra"></canvas>
                        <div class="tools">
                            <img src="img/delete.png" id="imgDelete">
                            <img src="img/save.png" id="imgSave">
                        </div>
                        <div class="signature">
                            <p>Signature</p>
                        </div>
                    </div>
                    <div class="sub-box container-label">
                        <label>Al firmar esta aceptando autorización para el uso personal de sus datos. <a href="#">Leer terminos</a></label>
                    </div>
                    <div class="warning"><label>Firma requerida*</label></div>
                </div>
                <div class="box result">
                    <label id="respuesta">Debe llenar todos los campos</label>
                </div>
            </form>
            <div class="box container-button">
                <button onclick="generatePDF()" class="txtSend">Submit</button>
            </div>
        </div>   
        <div class="popup">
            <div class="sub-popup">
                <label>Firma cargada con exito</label>
            </div>
            <div class="sub-popup">
                <input type="button" value="Accept" class="txtSend" id="txtAccept">
            </div>
        </div> 
    </body>
</html>