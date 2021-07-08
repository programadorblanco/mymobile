$(document).ready(function(){
    // AUTOR: EDUARDO BLANCO
    // 02/07/21

    // IMPRIMIR OPTION DENTRO DE SELECT EN FECHA
    // DAY
    let day = $('#day');
    for(let i = 1; i<32; i++){
        day.append("<option value='"+i+"'>"+i+"</option>");
    }

    // MONTH
    let month = $('#month');
    let arraymonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    arraymonth.forEach(valor =>{
        month.append("<option value='"+valor+"'>"+valor+"</option>");
    });

    // YEAR
    let year = $('#year');
    for(let i = 2020; i>1970; i--){
        year.append("<option value='"+i+"'>"+i+"</option>");
    }

    // STATE
    let state = $('#state');
    let arrayState = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Massachusetts", "Maryland", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
    arrayState.forEach(valor =>{
        state.append("<option value='"+valor+"'>"+valor+"</option>");
    });  

    // GENERAR PDF
    function GenertePDF(){
        var doc = new jsPDF();
        doc.text(20, 20, 'Hola mundo!');
        doc.text(20, 30, 'Esto es un generador de PDF en Java Script.');
        doc.addPage();
        doc.text(20, 20, '¿Cómo estas?');
        doc.addImage(imgData, 15, 40, 180, 160);

        doc.save("example.pdf");
    }

    GenertePDF(); 

    /*var doc = new jsPDF();
    doc.fromHTML(
        $('#result'), 15, 15,
        {width: 170},
        function()
        {
            var blob = doc.output('blob');

            var formData = new FormData();
            formData.append('pdf', blob);

            $.ajax('./php/upload.php',
            {
                method: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(data){console.log(data)},
                error: function(data){console.log(data)}
            });
        }
    );  */ 

});