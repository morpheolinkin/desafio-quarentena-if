var cpf_numbers = [], cnpj_numbers = [];
var CPF_valideDigit10 = [10,9,8,7,6,5,4,3,2];
var CPF_valideDigit11 = [11,10,9,8,7,6,5,4,3,2];
var CNPJ_module10 = [6,7,8,9,2,3,4,5,6,7,8,9];
var CNPJ_module11 = [5,6,7,8,9,2,3,4,5,6,7,8,9];
var maskCPF = ["###.###.###-##"];
var maskCNPJ = ["##.###.###/####-##"];

    let onlyNumbers = function(elm){
        if($.isNumeric(elm)) return elm;
    }

    function AllNumbersEquals(elm, index, self) { 
        return self.indexOf(elm) === index;
    }

    var CPFmultiply_digits = function(elm, i){
        return elm*cpf_numbers[i];
    };

    function validateMask(arr, mask){
        var target = [];
        let total = 0;
        for(let i = 0; i < arr.length; i++){
            if(mask[i] == "#") target.push(arr[i]);
            else target.push(arr[i]);
        }

        for(let j = 0; j < arr.length; j++){
            if(target[j] == arr[j]) total++;
        }

        if(total < mask[0].length) return false;
    }

    var CNPJmultiply_digits = function(elm, i){
        return elm*cnpj_numbers[i];
    };

    let mod11 = function(total, elm){
        return (total + elm)%11;
    };

    function validateCPF(num){
        let dig10 = 0, dig11 = 0;
        var mask = true;

        cpf_numbers = num.split('').filter(onlyNumbers);

        if(num.split('').length > 11){
            mask = validateMask(num.split(''), maskCPF);
        }

        if(mask == false) return 0;
        if(cpf_numbers.filter(AllNumbersEquals).length == 1) return 0;
        
        dig10 = CPF_valideDigit10.map(CPFmultiply_digits).reduce(mod11);
        dig11 = CPF_valideDigit11.map(CPFmultiply_digits).reduce(mod11);
    
        if(dig10 < 2) dig10 = 0;
        else dig10 = 11-(dig10)%11;

        if(dig11 < 2) dig11 = 0;
        else dig11 = 11-(dig11)%11;

        if(dig10 != cpf_numbers[9] || dig11 != cpf_numbers[10])
            return false;
        else
            return true;
    }

    function validateCNPJ(num){
        let dig10 = 0, dig11 = 0;
        var mask = true;

        cnpj_numbers = num.split('').filter(onlyNumbers);

        if(num.split('').length > 14){
            mask = validateMask(num.split(''), maskCNPJ);
        }

        if(mask == false) return 0;
        if(cnpj_numbers.filter(AllNumbersEquals).length == 1) return 0;

        dig10 = CNPJ_module10.map(CNPJmultiply_digits).reduce(mod11);
        dig11 = CNPJ_module11.map(CNPJmultiply_digits).reduce(mod11);

        if(dig10 == 10) dig10 = 0;
        if(dig11 == 10) dig11 = 0;

        if(dig10 != cnpj_numbers[12] || dig11 != cnpj_numbers[13])
            return 0;
        else
            return 1;
    }