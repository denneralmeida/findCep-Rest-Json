$(document).ready(function () {
    $('#cep').blur(function () { //quando perder o foco do campo
        var cep = $(this).val().toString().replace(/[^0-9]/g, "") || ''; //substitui tudo que não for numeros, e se for diferente da vazio
        if(!cep || cep.length !== 8){ //se não for vazio ou estiver a quantidade de digitos corretos
            $('#endereco').val('').removeClass('active'); // (Em materialize css) ativa o campo e a label (Opcional)
            $('#bairro').val('').removeClass('active');
            $("label[for='bairro'").removeClass('active');
            $("label[for='endereco'").removeClass('active');
        }
        var url = 'http://viacep.com.br/ws/' + cep + '/json'; 
        $.getJSON(url, function (result) { //busca pela url retornando um json
            
            if ("error" in result) {
                $('#endereco').val(''); //caso não conter retorno sai da função e limpa os campos
                $('#bairro').val('');
                return;
            }
            //o código abaixo preenche o endereco e o bairro
            $('#endereco').val(result.logradouro.toString().toUpperCase()).addClass('active'); 
            $('#bairro').val(result.bairro.toString().toUpperCase()).addClass('active');
            $("label[for='bairro'").addClass('active');
            $("label[for='endereco'").addClass('active');
        });
    });
});
