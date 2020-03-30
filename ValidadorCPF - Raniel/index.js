/* ------------ VALIDAÇÕES ------------ */
const verificarPrimeiroDigito = (cpf) => {   
   let soma = cpf.reduce((total, digito, index) => total + (parseInt(digito) * (index + 2)), 0);
   
   let resto = Math.floor(soma % 11);
   
   return resto < 2 ? 0 : 11 - resto;
}

const verificarSegundoDigito = (cpf, primeiroDigito) => {
   cpf.unshift(primeiroDigito);
   
   let soma = cpf.reduce((total, digito, index) => total + (parseInt(digito) * (index + 2)), 0);
   
   let resto = Math.floor(soma % 11);
   
   return resto < 2 ? 0 : 11 - resto;
}

const validarCPF = (cpf) => {
   let cpfNumber = cpf.replace(/\D+/g, '');
   let cpfSplit = cpfNumber.split('', 9).reverse();

   let primeiroDigito = verificarPrimeiroDigito(cpfSplit);   
   let segundoDigito = verificarSegundoDigito(cpfSplit, primeiroDigito);
   
   if (primeiroDigito === parseInt(cpfNumber[9])) {
      if (segundoDigito === parseInt(cpfNumber[10]))
      {
         return true;
      }
   } else {
      return false;
   }
}
/* -------------------------------------- */

// REACT
const Title = ({ texto }) => (
   <h1>{texto}</h1>
);

const Input = () => {
   let [ value, setValue ] = React.useState('');
   let [ valido, setValido ] = React.useState(false);
   let [ mensagem, setMensagem ] = React.useState(false);
   
   const handleValue = (evt) => {
      setValue(evt.target.value);
   }
   
   const handleSubmit = (evt) => {
      evt.preventDefault();
      
      setValido(
         validarCPF(value)
      );
      
      setMensagem(true);
   }
   
   const resetar = () => {
      setValue('');
      setMensagem(false);
   };
   
   return (
      <form onSubmit={handleSubmit}>
         <label>Digite seu CPF</label>
         <input type="text"
            value={value}
            onChange={handleValue}
            placeholder="ex: 111.111.111-00"
            required
         />
         
         <div className="botoes">
            <button type="reset" onClick={resetar}>Apagar</button>
            <button type="submit">Verificar</button>
         </div>
            
         {         
            mensagem ?
            <span
               className={valido ? 'valido' : 'invalido'}>
               {`CPF ${valido ? 'válido' : 'inválido'}`}
            </span> : ''
         }
      </form>
   );
}

const App = () => (
   <section className="app">
      <Title texto="Verificador de CPF"/>
      <Input/>
   </section>
);

ReactDOM.render(
   <App/>,
   
   document.querySelector('#app')
);