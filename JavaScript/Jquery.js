

$( document ).ready(function() {
    $('#superTexto').toggle();
});

$('#btn_aumentar').click(

    function(){
        $('#pandaIMG').animate({width:"800px"})
    }
)


$('#btn_diminuir').click(

    function(){
        $('#pandaIMG').animate({width:"400px"})
    }
)

$('#botao').click(

    function(){
        $('#superTexto').toggle();
    }


)