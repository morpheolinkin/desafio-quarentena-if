function pegarCod(){

  let pegarCod = (document.querySelector(".input").value);
  let cod = pegarCod.replace(/([\u0300-\u036f]|[^0-9])/g, '');
  
  if( cod === ''){ 
      alert('Preencha o campo')
  }else if(cod.length !== 11 && cod.length !== 14){
    alert('Deve conter 11 numeros para CPF ou 14 para CNPJ.');
  
  }else{
      cod.length == 11 ?  validar(codInArray(cod),9,10): validar(codInArray(cod),12,13)
  }
}

function codInArray(cod){
let codArray = []

for( let i = 0; i < cod.length; i++ ){
  codArray.push(parseInt(cod.substr(i,1)));
}

  return codArray;
}

function validar(codArray, priDv, segDv){

  let cfp_cnpg=codArray;
  let tipo= 1
  let doc = 'CPF'

  let calPrimDv = calcularDvCpf(10,cfp_cnpg)
  let calSegunDv = calcularDvCpf(11,cfp_cnpg)

  if(cfp_cnpg.length == 14){
    tipo = 2
    doc = 'CNPJ'
    calPrimDv = calcularDvCnpj(1,cfp_cnpg)
    calSegunDv = calcularDvCnpj(2,cfp_cnpg)
 
  } 

  let primeiroDv = cfp_cnpg[priDv];
  let primeiraVerificacao =  verificarDv(calPrimDv,primeiroDv, tipo);

  if(primeiraVerificacao === true){

    let segundoDv = cfp_cnpg[segDv];
    let segundaVerificacao =  verificarDv(calSegunDv,segundoDv, tipo);

    segundaVerificacao === true ? document.getElementById("messege").innerHTML = `${doc} valido!`:  
                                  document.getElementById("messege").innerHTML = `${doc} Invalido!`             

  }else{
  document.getElementById("messege").innerHTML = `CPF Invalido `;
  }
}

function calcularDvCpf(indice,cfp_cnpg){
  let digito = 0;
  let soma = 0;

  for(i=indice; i>=2; i--){
  soma = soma + (cfp_cnpg[digito] * i);
  digito++
}

  let restoCal = (soma*10) % 11;
  return  restoCal;

}

function  calcularDvCnpj(dv,cfp_cnpg ){
  let array = [6,7,8,9,2,3,4,5,6,7,8,9]
  let soma = 0

  if(dv ==2) array.unshift(5)
  for( let  i = 0; i <array.length; i++){
    soma = soma +(cfp_cnpg[i] * array[i])
}

  let resto = soma % 11
  return resto 
}

function verificarDv(resto,digitoVerificador, tipo){
  if( resto == 11 && tipo == 1){
    resto = 0 
    return resto === digitoVerificador ? true : false 
  }    
  if(resto === 10) resto = 0;
    return resto === digitoVerificador ? true : false 
  }

let apagar = () => {
  document.querySelector(".input").value = ''
  document.getElementById("messege").innerHTML = ''
}