function pegarCod(){

  let pegarCod = (document.querySelector(".input").value);
  let cod = pegarCod.replace(/([\u0300-\u036f]|[^0-9])/g, '');
  
  if( cod === ''){ 
      alert('Preencha o campo')
  }else if(cod.length !== 11 && cod.length !== 14){
    alert('Deve conter 11 numeros para CPF ou 14 para CNPJ.');
  
  }else{
      cod.length == 11 ?  validarCpf(codInArray(cod)): validarCnpj(codInArray(cod))
  }
}

function codInArray(cod){
  let codArray = []

  for( let i = 0; i < cod.length; i++ ){
    codArray.push(parseInt(cod.substr(i,1)));
  }

  return codArray;
}

function validarCpf(cpfArray){

  let cpfAr=cpfArray;

  let primeiroDv = cpfAr[9];
  let primeiraVerificacao =  verificarDv(calDigito(10,cpfAr),primeiroDv);

  if(primeiraVerificacao === true){

    let segundoDv = cpfAr[10];
    let segundaVerificacao =  verificarDv(calDigito(11,cpfAr),segundoDv, 1);

    segundaVerificacao === true ? document.getElementById("messege").innerHTML = `CPF valido!`:  
                                  document.getElementById("messege").innerHTML = `CPF Invalido!`             

  }else{
    document.getElementById("messege").innerHTML = `CPF Invalido `;
  }
}

function calDigito(indice,cpfAr){
  let digito = 0;
  let soma = 0;

  for(i=indice; i>=2; i--){
    soma = soma + (cpfAr[digito] * i);
    digito++
  }

  let restoCal = (soma*10) % 11;
  return  restoCal;

}

function verificarDv(resto,digitoVerificador){
  if(resto === 10 || resto ===11) resto = 0;
  return resto === digitoVerificador ? true : false 
}

function validarCnpj(codArray){

  let codAr = codArray;
  let primeiroDvCnpj = codAr[12]
  let primeiroDigitoV = digitoDvCnpj( calcularDvCnpj(1,codAr),primeiroDvCnpj)
    
  if( primeiroDigitoV == true){

    let segundoDv = codAr[13];
    let segundaVerificacao = digitoDvCnpj( calcularDvCnpj(2,codAr),segundoDv ) 
      segundaVerificacao === true ? document.getElementById("messege").innerHTML = `CNPJ valido!`:
                                    document.getElementById("messege").innerHTML = `CNPJ Invalido!`             
      
  }else{
    document.getElementById("messege").innerHTML = `CNPJ Invalido `;
  }


}
function  calcularDvCnpj(dv,codAr ){
  let array = [6,7,8,9,2,3,4,5,6,7,8,9]
  let soma = 0

  if(dv ==2) array.unshift(5)

  for( let  i = 0; i <array.length; i++){
    soma = soma +(codAr[i] * array[i])
  }

  let resto = soma % 11
  return resto 
}
function digitoDvCnpj( resto,digitoCnpj){
  if (resto == 10) resto = 0
  let res =  resto === digitoCnpj ? true : false 
  return res;
}

let apagar = () => {
  document.querySelector(".input").value = ''
  document.getElementById("messege").innerHTML = ''
}
