$('input[type=text]').focus(function(){
    resetarCampoInvalido($(this));
})
$('select[name=passeio]').focus(function(){
    resetarCampoInvalido($(this));
})
let form = document.querySelector("#cadastrar");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let nome = $('input[name=nome]').val();
    let email = $('input[name=email]').val();
    let telefone = $('input[name=telefone]').val();

    if (verificarNome(nome) == false){
        aplicarCampoInvalido($('input[name=nome]'));
    }else if(verificarEmail(email) == false){
        aplicarCampoInvalido($('input[name=email]'));
    }else if(verificarTelefone(telefone) == false){
        aplicarCampoInvalido($('input[name=telefone]'))
    }else if(habilitaBtn() == false){
        aplicarCampoInvalido($('select[name=passeio]'))
    }else{
        return false;
    }
         
})
function habilitaBtn(){
    var passeio = document.getElementById("passeio").value;
    if (passeio != "0"){
        return true;
      }else{
          return false;
    }
}
function aplicarCampoInvalido(el){
    el.css('color','red');
    el.css('border', '1px solid,red');
    el.val('Campo Invalido !');
    //el.data('invalido' , 'true');
}
function resetarCampoInvalido(el){
    el.css('color','black');
    el.css('border','1px solid white');
    el.val('');
}
function verificarNome(nome){
    if(nome == ' '){
        return false;
    }
}
function verificarEmail(email){
    if(email == ' '){
        return false;
    }
}

function verificarTelefone(telefone){
    if(telefone == ''){
        return false;
    }
}