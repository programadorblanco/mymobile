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

    // CERRAR POPUP
    let txtAccept = document.querySelector('#txtAccept');
    var popup = document.querySelector('.popup');
    txtAccept.addEventListener('click', function(){
        $(popup).hide(500);
    });

    $('#txtSendImage').click(function(){
        $('.popup-image').hide(500);
    });
});