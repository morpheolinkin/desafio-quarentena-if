var verificarArray = [];

async function cpfValidador() {

    let users = await (await fetch('./data.json')).json();

    users.forEach(user => {

        if (user.cpf.length === 14)
            verificarArray.push({ nome: user.nome, cpf: tirarCarateres(user.cpf) });

    });

    digitoVerificador(verificarArray);
}

function tirarCarateres(cpf) {
    let cpfNew = cpf.replace(/[^\d]+/g, '');
    return cpfNew;
}

function digitoVerificador(verificarArray) {

    for (let i = 0; i < verificarArray.length; i++) {
        let cpfNumerico = verificarArray[i].cpf.split('');
        verificarArray[i].cpf =  convertParaInteiro(cpfNumerico);
        
        if (verificarIqualdade(verificarArray[i].cpf)) {

            if(contaVerificar(10, 2, 9, verificarArray[i].cpf)){

                if(contaVerificar(11, 1, 10, verificarArray[i].cpf)){
                    console.log(`${verificarArray[i].nome}: CPF Correto!`);
                }else{
                    console.log(`${verificarArray[i].nome}: Segundo digito de verificação errado`);
                }

            }else{
                console.log(`${verificarArray[i].nome}: Primeiro digito de verificação errado`);
            }

        } else {
            console.log(`${verificarArray[i].nome}: CPF invalido por úumeros iguais, EX: 111.111.111-11`);
        }

    }

}

function convertParaInteiro(cpfConverter){
    for(let i = 0; i < cpfConverter.length; i++){
        cpfConverter[i] = parseInt(cpfConverter[i]);
    }
    return cpfConverter;
}

function verificarIqualdade(cpfVer) {
    let soma = 0;
    let prosseguir = 0;
    

    for (let i = 0; i < cpfVer.length; i++) {
        soma += cpfVer[i];
    }

    let resultado = (soma / 11);

    for (let i = 0; i < cpfVer.length; i++) {
        if (cpfVer[i] == resultado) {
            prosseguir += 1;
        }
    }

    if (prosseguir === 11) {
        return false;
    } else {
        return true;
    }
}

function contaVerificar(valorMultiplicar, digitoCorecao, posicao, cpfVer) {
    let soma = 0;
    let resto = 0;

    for (let i = 0; i < cpfVer.length - digitoCorecao; i++) {
        soma += cpfVer[i] * valorMultiplicar;
        valorMultiplicar--;
    }

    resto = (soma * 10) % 11

    if (cpfVer[posicao] == resto || cpfVer[posicao] == 0 && resto == 10 || cpfVer[posicao] == 0 && resto == 11) {
        return true;
    } else {
        return false;
    }
}
