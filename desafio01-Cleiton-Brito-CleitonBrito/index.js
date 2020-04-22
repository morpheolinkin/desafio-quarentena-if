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
	qtd_digits = num_cpf.split('').filter(onlyNumbers).length;
  
	if(qtd_digits > 0){
		if(qtd_digits < 11){
			$("#msg").text("Incompleto!");
			$("#msg_alert").css({'background-color' : "#525252"});
		}else if(validateCPF(num_cpf) && qtd_digits == 11){
			$("#msg").text("CPF Válido");
			$("#msg_alert").css({'background-color' : "#128500"});
		}else{
			$("#msg").text("CPF inválido");
			$("#msg_alert").css({'background-color' : "#730000"});
		}
	}else if(qtd_digits == 0){
		$("#msg").text("Campo Vazio!");
		$("#msg_alert").css({'background-color' : "#000945"});
	}
});

$(".btn_verify#verifyCNPJ").on('click', function(){
	$("#msg_alert").css({'display' : "block"});
	num_cnpj = $("#input_cnpj")[0].value;
	qtd_digits = num_cnpj.split('').filter(onlyNumbers).length;
  
 	if(qtd_digits > 0){
		if(qtd_digits < 14){
			$("#msg").text("Incompleto!");
	  		$("#msg_alert").css({'background-color' : "#525252"});
		}else if(validateCNPJ(num_cnpj) && qtd_digits == 14){
			$("#msg").text("CNPJ Válido");
	  		$("#msg_alert").css({'background-color' : "#128500"});
		}else{
			$("#msg").text("CNPJ inválido");
	  		$("#msg_alert").css({'background-color' : "#730000"});
		}
  	}else if(qtd_digits == 0){
		$("#msg").text("Campo Vazio!");
	  	$("#msg_alert").css({'background-color' : "#000945"});
	}
});