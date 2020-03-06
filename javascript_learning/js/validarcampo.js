function validarcampo(){
    var nome = form1.nome.value;
    var email = form1.email.value;
    var cpf = form1.cpf.value;
    var cep = form1.cep.value;

    if (nome == "") {
        alert('Preencha o campo com seu nome');
        form1.nome.focus();
        return false;
        }
    
    if (nome.length < 8) {
        alert('Digite seu nome completo');
        form1.nome.focus();
        return false;
        }
    
    if(email == "") {
        alert('Preencha o campo E-mail');
        form1.email.focus();
        return false;
    }
    
    if(cpf == "") {
        alert('Preencha o campo CPF');
        form1.cpf.focus();
        return false;
    }

    if(cpf.length < 12){
        alert('O campo cpf está incompleto');
        form1.cpf.focus();
        return false;
    }

    if(cep == "") {
        alert('Preencha o campo CEP');
        form1.cep.focus();
        return false;
    }

    if(cep.length < 6){
        alert('O campo CEP está incompleto');
        form.cep.focus();
        return false;
    }
}
