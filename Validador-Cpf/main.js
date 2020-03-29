var cpf = "069.004.715-01";
var cpfArray = [];

function cpfValidador() {
    if (cpf.length == 14) {
        cpfArray.push(tirarCarateres(cpf));
        digitoVerificador(cpfArray);
    }
}

function tirarCarateres(cpf) {
    let cpfNew = cpf.replace(/[^\d]+/g, '');
    return cpfNew;
}

function digitoVerificador(cpfArray) {

    for (let i = 0; i < cpfArray.length; i++) {
        let cpfVer = cpfArray[i].split('');
        cpfVer = convertParaInteiro(cpfVer);

        if(verificarIqualdade(cpfVer)){
            if(contaVerificar(10, 2, 9, cpfVer)){
                if(contaVerificar(11, 1, 10, cpfVer)){
                    console.log('EBA!!!');
                }else{
                    console.log('segundo digito de verificação errado');
                }
            }else{
                console.log('primeiro digito de verificação errado');
            }
        }else{
            console.log('Invalido por numeros iguais, EX: 111.111.111-11');
        }
    }
}

function convertParaInteiro(cpfConverter){
    for(let i = 0; i < cpfConverter.length; i++){
        cpfConverter[i] = parseInt(cpfConverter[i]);
    }
    return cpfConverter;
}

function verificarIqualdade(cpfVer){
    let soma = 0;
    let prosseguir = 0;

    for (let i = 0; i < cpfVer.length; i++) {
        soma += cpfVer[i];
    }
    resultado = (soma/11);

    for (let i = 0; i < cpfVer.length; i++) {
        if(cpfVer[i] == resultado){
            prosseguir += 1;
        }
    }

    if(prosseguir == 11){
        return false;
    }else{
        return true;
    }
}

function contaVerificar(valorMultiplicar, digitoCorecao, posicao, cpfVer){
    let soma = 0;
    let resto = 0;

    for (let i = 0; i < cpfVer.length-digitoCorecao; i++) {
            soma += cpfVer[i] * valorMultiplicar;
            valorMultiplicar--;
    }

    resto = (soma * 10) % 11

    if (cpfVer[posicao] == resto || cpfVer[posicao] == 0 && resto == 10 || cpfVer[posicao] == 0 && resto == 11) {
        return true;
    }else{
        return false;
    }
}