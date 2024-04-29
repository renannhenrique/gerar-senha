
let passwordLength = 16;
const campoText = document.querySelector("#input-text");
const barra = document.querySelector(".barra");

const upperCaseCheckEl = document.querySelector("#uppercase-check");
const numberCheckEl = document.querySelector("#number-check");
const symbolCheckEl = document.querySelector("#symbol-check");



// Função para gerar senha
const generatePassword = () => {

    // Aqui estão todos os caracteres para serem sorteados
    let chars = "abcdefghjklmnpqrstuvwxyz";

    const upperCaseChars = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const numbersChars = '123456789';
    const symbolChars = '?!@&*()[]';

    


    if (upperCaseCheckEl.checked) {
      chars += upperCaseChars;
    }

    
    if (numberCheckEl.checked) {
      chars += numbersChars;
    }
   

    
    if (symbolCheckEl.checked) {
      chars += symbolCheckEl;
    }
   
   


    // Senha gerada
    let gp = "";


        // Quantidade de caracter que deve ter na senha
        for (let i = 0; i < passwordLength; i++) {

            // Arendondando e gerando valor
            const randomNumber = Math.floor(Math.random() * chars.length);

                // Somando o valor ja atual mais um pedaço da quantidade de caracter
                gp += chars.substring(randomNumber, randomNumber + 1);    
            
        }

        
      campoText.value = gp;



              
     contador = document.querySelector(".quant-char");
     contador.innerText = passwordLength + " Tamanho";

      
      // se o valor do range for menor ou igual a 16 o tamanho da font por padrão sera de 16px
      // senão o tamanho da fonte ira aumentando de acordo com o valor do range
      if (gp.length <= 16) {
            campoText.style.fontSize = "16px";
            barra.style.width = "16px";
            barra.style.backgroundColor = 'red';
            barra.style.width = `${gp.length}%`;
      }else if (gp.length < 30) {
            campoText.style.fontSize = "30px";
            barra.style.backgroundColor = 'orange';
      
      }else if (gp.length > 30) {
            
            barra.style.backgroundColor = 'green';
            barra.style.width = `${gp.length}%`;
      
      }else{
            campoText.style.fontSize = `${gp.length}px`;
            barra.style.width = `${gp.length}%`;

                  
      }
      
};





// Evento para recuperar o valor do input range
const passwordLengthEl = document.querySelector("#input-range");        
      
      passwordLengthEl.addEventListener('input', () => {
            
        passwordLength = passwordLengthEl.value;


        generatePassword();
       
      });  



      upperCaseCheckEl.addEventListener('click', generatePassword);
      numberCheckEl.addEventListener('click', generatePassword);
      symbolCheckEl.addEventListener('click', generatePassword);
      

      // Capturando o elemento button com id="copy2" e adicionando um evento de click
      document.querySelector("#copy2").addEventListener('click', () => {
            // Usando a API do navegador para copiar o valor do campo
            navigator.clipboard.writeText(campoText.value);

            alert("Senha copiada com sucesso!");

           
      })


      // Evento de refresh na página
      document.querySelector("#renew").addEventListener('click', generatePassword)


      generatePassword();

     
      
   
    
    
