$('.coluna-1 button').click(function(){
    $('.coluna-1 button').addClass('disabled')
    $(this).removeClass('disabled')
    $(this).addClass('selecionado')
})

$('#btn-col-4').click(function(){
    if ($('#btn-col-1').hasClass('selecionado')){
        $('#btn-col-1').removeClass('selecionado')
        $('#btn-col-1').addClass('certo')
        $('#btn-col-4').addClass('certo')
    } else {
        $('#btn-col-1').removeClass('selecionado')
        $('.selecionado').addClass('errado')
        $('#btn-col-4').addClass('errado')
        window.setTimeout(function(){
            $('.selecionado').removeClass('errado')
            $('.selecionado').removeClass('selecionado')
            $('#btn-col-4').removeClass('errado')
        }, 1500)
    }
    $('.coluna-1 button').removeClass('disabled')
})
$('#btn-col-5').click(function(){
    if ($('#btn-col-3').hasClass('selecionado')){
        $('#btn-col-3').removeClass('selecionado')
        $('#btn-col-3').addClass('certo')
        $('#btn-col-5').addClass('certo')
    } else {
        $('#btn-col-3').removeClass('selecionado')
        $('.selecionado').addClass('errado')
        $('#btn-col-5').addClass('errado')
        window.setTimeout(function(){
            $('.selecionado').removeClass('errado')
            $('.selecionado').removeClass('selecionado')
            $('#btn-col-5').removeClass('errado')
        }, 1500)
    }
    $('.coluna-1 button').removeClass('disabled')
})
$('#btn-col-6').click(function(){
    if ($('#btn-col-2').hasClass('selecionado')){
        $('#btn-col-2').removeClass('selecionado')
        $('#btn-col-2').addClass('certo')
        $('#btn-col-6').addClass('certo')
    } else {
        $('#btn-col-2').removeClass('selecionado')
        $('.selecionado').addClass('errado')
        $('#btn-col-6').addClass('errado')
        window.setTimeout(function(){
            $('.selecionado').removeClass('errado')
            $('.selecionado').removeClass('selecionado')
            $('#btn-col-6').removeClass('errado')
        }, 1500)
    }
    $('.coluna-1 button').removeClass('disabled')
})