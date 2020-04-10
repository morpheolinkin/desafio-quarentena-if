$("button#btn_cpf").on('click', function() {
	$(".btn_back").css({'display' : "block"});
  $(".content#home").css({'display': "none"});
  $(".content#validateCPF").css({'display': "block"});
  $("input#input_cpf").focus();
});

$("button#btn_cnpj").on('click', function() {
	$(".btn_back").css({'display' : "block"});
  $(".content#home").css({'display': "none"});
  $(".content#validateCNPJ").css({'display': "block"});
  $("input#input_cnpj").focus();
});

$(".btn_back").on('click', function(){
	$("#msg_alert").css({'display' : "none"});
	$(".btn_back").css({'display' : "none"});
	$(".content#validateCPF").css({'display': "none"});
  $(".content#validateCNPJ").css({'display': "none"});
  $(".content#home").css({'display': "block"});
});

$("input#input_cpf").on('focus', function(){
	$("#msg_alert").css({'display' : "none"});
});

$("input#input_cnpj").on('focus', function(){
	$("#msg_alert").css({'display' : "none"});
});

$(".btn_clear#clear_cpf").on('click', function(){
	$("input#input_cpf").val("");
  $("input#input_cpf").focus();
});

$(".btn_clear#clear_cnpj").on('click', function(){
	$("input#input_cnpj").val("");
  $("input#input_cnpj").focus();
});

$(".btn_verify#verifyCPF").on('click', function(){
	$("#msg_alert").css({'display' : "block"});
	num_cpf = $("#input_cpf")[0].value;
  
  if(num_cpf.length > 0){
      RemoveMaskCPF(num_cpf);
			
      if(tmp_cpf.length < 11){
      	$("#msg").text("Incompleto!");
        $("#msg_alert").css({'background-color' : "#525252"});
      }else if(validaCPF() != 0 && tmp_cpf.length == 11){
        $("#msg").text("CPF Válido");
        $("#msg_alert").css({'background-color' : "#128500"});
      }else{
      	$("#msg").text("CPF inválido");
        $("#msg_alert").css({'background-color' : "#730000"});
      }
    }else if(num_cpf.length == 0){
    	$("#msg").text("Campo Vazio!");
      $("#msg_alert").css({'background-color' : "#000945"});
    }
});

$(".btn_verify#verifyCNPJ").on('click', function(){
$("#msg_alert").css({'display' : "block"});
	num_cnpj = $("#input_cnpj")[0].value;
  
  if(num_cnpj.length > 0){
  	RemoveMaskCNPJ(num_cnpj);
    
    if(tmp_cnpj.length < 14){
    	$("#msg").text("Incompleto!");
      $("#msg_alert").css({'background-color' : "#525252"});
    }else if(validaCNPJ() != 0 && tmp_cnpj.length == 14){
    	$("#msg").text("CNPJ Válido");
      $("#msg_alert").css({'background-color' : "#128500"});
    }else{
    	$("#msg").text("CNPJ inválido");
      $("#msg_alert").css({'background-color' : "#730000"});
    }
  }else if(num_cnpj.length == 0){
    	$("#msg").text("Campo Vazio!");
      $("#msg_alert").css({'background-color' : "#000945"});
    }
});

var num_cpf = "", num_cnpj = "";
var tmp_cpf, tmp_cnpj;

function RemoveMaskCPF(num){
	var tmp_num = "", digits = "";
  tmp_cpf = "";
  
  tmp_num = num.split(/\D+/g, 3);
  
  if(tmp_num.length > 1){
    digits = num.split(/-/).reverse();

    for(var i = 0; i < 3; i++){
      if(tmp_num[i].length != 3 || (i+1 < 3 && tmp_num[i+1] == undefined)){
        return 0;
      }else
        tmp_cpf += tmp_num[i];
    }

    if(digits[0].length == 2)
      tmp_cpf += digits[0];

    tmp_cpf = tmp_cpf.split('');
   }else
   		tmp_cpf = tmp_num[0].split('');
   
}

function RemoveMaskCNPJ(num){
	var tmp_num = "", mask_qtd_numbers = [2,3,3,4,2];
  tmp_cnpj = "";
  
	tmp_num = num.split(/\D+/g, 5);
  
  if(tmp_num.length > 1 && tmp_num.length <= 5){
    for(var i =0; i < 5; i++){
    	if(tmp_num[i].length != mask_qtd_numbers[i]){
      	return 0;
      }else
      	tmp_cnpj += tmp_num[i];
        
    } 
   	tmp_cnpj = tmp_cnpj.split('');
  }else
  	tmp_cnpj = tmp_num[0].split('');
}

function validaCPF(){
	var tmp_dig01 = 0, tmp_dig02 = 0, dig01 = 0, dig02 = 0;
  
	//All digits equals
  var equals = 1;
	for(var i = 0; i < 10; i++){
  	if(tmp_cpf[i] == tmp_cpf[i+1]){
    	equals++;
    }
  }
  
  if(equals == 11)
  	return 0;
	
	//Digit 1
  for(var i = 10, j = 0; i >= 2; i--, j++){
  	tmp_dig01 += tmp_cpf[j] * i;
  }
	
	tmp_dig01 = tmp_dig01 % 11;
	
	if(tmp_dig01 >= 0 && tmp_dig01 <= 1)
		dig01 = 0;
	else if(tmp_dig01 >= 2 && tmp_dig01 <= 10)
		dig01 = 11 - tmp_dig01;
	
	//Digit 2
	for(var i = 11,j = 0; i >= 2; i--, j++){
  	tmp_dig02+= tmp_cpf[j] * i;
  }
	
	tmp_dig02 = tmp_dig02 % 11;
	
	if(tmp_dig02 >= 0 && tmp_dig02 <= 1)
		dig02= 0;
	else if(tmp_dig02 >= 2 && tmp_dig02 <= 10)
		dig02 = 11 - tmp_dig02;

	
  if(dig01 != tmp_cpf[9] || dig02 != tmp_cpf[10])
  	return 0;
  else
  	return 1;
}

function validaCNPJ(){
	var tmp_dig01 = 0, tmp_dig02 = 0, dig01 = 0, dig02 = 0;
  var msk_module_11 = [9,8,7,6,5,4,3,2,9,8,7,6,5];
  
  //All digits equals
  var equals = 1;
	for(var i = 0; i < 14; i++){
  	if(tmp_cnpj[i] == tmp_cnpj[i+1]){
    	equals++;
    }
  }
  
  if(equals == 14)
  	return 0;
  
  for(var i = 11, j = 0; i >= 0; i--, j++){
  	tmp_dig01 += tmp_cnpj[i] * msk_module_11[j];
  }
  
  tmp_dig01 = tmp_dig01 % 11;
  
  if(tmp_dig01 == 10)
  	dig01 = 10;
  else
  	dig01 = tmp_dig01;
    
  for(var i = 12, j = 0; i >= 0; i--, j++){
  	tmp_dig02 += tmp_cnpj[i] * msk_module_11[j];
  }
  
  tmp_dig02 = tmp_dig02 % 11;
  
  if(tmp_dig02 == 10)
  	dig02 = 10;
  else
  	dig02 = tmp_dig02;
  
  if(dig01 != tmp_cnpj[12] || dig02 != tmp_cnpj[13])
  	return 0;
  else
  	return 1;
}