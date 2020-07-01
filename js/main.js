function consultaCep(){
    var cep = document.getElementById("cep").value;
    //console.log(cep);

    $.ajax({
        url: "https://viacep.com.br/ws/"+ cep +"/json",
        type: "GET",
        success: function(response){
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#title").html("CEP " + response.cep);
            $(".cep").show();
        }
    })
}

$(function(){
    $(".cep").hide();
})