$(function() {
    $('.submit').click(function(e) {
        var sub = $('#sub').val();
        var whatsapp = $('#number-whatsapp').val();
        var nome = $('#nome').val();
        var telefone = $('#telefone').val();
        var produto = $('#produto').val();
        var site = $("#site").val();
        var msg = $('#msg').val();

        function valida(campo, id, e) {
            if(campo == '') {
                $(id).addClass('error');
                e.preventDefault();
                return false;
            } else {
                $(id).removeClass('error');
                return true;
            }
        }
        if( valida(nome, '#nome', e) && valida(msg, '#msg', e) ) {
            $('#modal-whatsapp').removeAttr('style');
        }
    });
});
$(document).ready(function() {
    $(".wappSend").on("mouseover", function(event) {
        var whatsapp = $('#number-whatsapp').val();
        var $c_nome = $('#nome').val();
        var $c_telefone = $('#telefone').val();
        var $c_mensagem = $("#msg").val();
        var nameProduct = $("#nameproduct").val();
        if(nameProduct.length > 0) {
            $nameProduct = 'Olá, tenho interesse no *DS5 Pocket.*  ';
        } else {
            $nameProduct = '';
        }
        if ($("#nome").length && $c_nome != '') {
            $c_mensagem = $nameProduct + " Meu nome é " + $c_nome + ", " + $c_mensagem;
        }
        $c_mensagem = "https://api.whatsapp.com/send?phone=" + whatsapp + "&text=" + $c_mensagem;
        $('#hidden').val($('#nome').val());
        $('.wappSend').attr('href', $c_mensagem);
    });

});

// RESET
function reset() {
    $('#formWapp .box-campos').show();
    $('#nome').val('');
    $('#msg').val('');
    $("#nome").attr('placeholder', 'Nome Completo');
    $("#msg").attr('placeholder', 'Digite sua mensagem');
    $('.name-complete').hide();
    $('.closebtnmodal').removeAttr('href').removeAttr('onClick').text("Comprar pelo Whatsapp").removeClass('closebtnmodal').addClass('wappSend').attr('href', "#");
}
function closeBtn() {
    reset();
    $('#modal-whatsapp').hide();
    $('input, textarea').removeClass('error');
}
$('.modal-wapp').on('click', function(e) {
    if (e.target == this) {
        $('#modal-whatsapp').removeAttr('style');
    }
});
$('.btn-app').on('click', function() {
    $('#modal-whatsapp').show();
    reset();
    return false;
});
$('.closebtn').on('click', function() {
    $('#modal-whatsapp').hide();
    closeBtn();
    return false;
});
$("#nome, #msg").on('focus', function() {
    $(this).attr('placeholder', '');
});
$("#nome").on('blur', function() {
    $(this).attr('placeholder', 'Nome Completo');
});
$("#msg").on('blur', function() {
    $(this).attr('placeholder', 'Digite sua mensagem');
});