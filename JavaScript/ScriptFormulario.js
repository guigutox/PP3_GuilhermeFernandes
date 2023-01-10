
const btnEditar = document.getElementById("btn-editar");
btnEditar.disabled = true;
//Declarando botão de edição e tornando ele desabilitado
const btnSubmeter = document.getElementById("submeter");
btnSubmeter.disabled = true;
//Declarando botão de submissao e tornando ele desabilitado
const btnLimpar = document.getElementById("limpar");
btnLimpar.disabled = false;

const btnValidar = document.getElementById("btn-verifica");
btnValidar.disabled = false;


btnLimpar.addEventListener('click',limpar);
btnEditar.addEventListener('click', religar);
btnValidar.addEventListener('click', validarForm)

const validou = false;

function validarForm(){

 
    var formValido = true;
    event.preventDefault();
    //Impede que a pagina de reload

    let form = event.target;
    
    
    btnSubmeter.disabled = true;
    btnEditar.disabled = true;

    const spanNome = document.getElementById("spanNome");
    const spanSobrenome = document.getElementById("spanSobre");
    const spanEmail = document.getElementById("spanEmail");
    const spanDoacao = document.getElementById("spanDoacao");
    //Declarando campos de span

    spanNome.textContent = "";
    spanSobrenome.textContent = "";
    spanEmail.textContent = "";
    spanDoacao.textContent = "";
    //Setando como vazio os campos 

    

    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const email = document.getElementById("email");
    //Pegando os campos do formulario

    nome.style.borderColor = 'rgba(117, 212, 117, 1)';
    sobrenome.style.borderColor = 'rgba(117, 212, 117, 1)';
    email.style.borderColor = 'rgba(117, 212, 117, 1)';

    const inputSelecionado = document.querySelector("input[name = 'doacao']:checked");
    //Recebe a partir do querySelector o imput de doacao que foi checkado
    const radioInputs = document.querySelectorAll("input[name = 'doacao']");
    //Recebe todos os inputs como o name doacao
    let erros = [];


    if(!nome.value){
        erros.push({span: spanNome, menssagem: "ERRO DIGITE O NOME DA FORMA CERTA"});
        nome.style.borderColor = ' rgb(230, 0, 0)';
        formValido = false;
    }if(!sobrenome.value){
        erros.push({span: spanSobrenome, menssagem: "ERRO DIGITE O SOBRENOME DA FORMA CERTA"})
        sobrenome.style.borderColor = ' rgb(230, 0, 0)';
        formValido = false;

    }if(!email.value){
        erros.push({span: spanEmail, menssagem: "ERRO AO VALIDAR EMAIL, CAMPO VAZIO"})
        email.style.borderColor = ' rgb(230, 0, 0)';
        formValido = false;
    }if(inputSelecionado === null){
        erros.push({span: spanDoacao, menssagem: "NENHUMA OPÇÃO DE DOACAO MARCADA"})
        formValido = false;
    }

    erros.forEach((erro)=>{
        erro.span.textContent = erro.menssagem;
    })

    const resultado = document.getElementById("spanResultado");


    if(formValido){
        nome.disabled = formValido;
        sobrenome.disabled = formValido;
        email.disabled = formValido;
        radioInputs.forEach((input)=>{
            alternaBtn(input, true);
        })

        btnEditar.disabled = false;
        btnSubmeter.disabled = false;

        resultado.innerHTML = `
        <table id="tabela"  border = 1>
            <thead>
                <th> NOME </th>
                <th> SOBRENOME </th>
                <th> EMAIL </th>
                <th> Valor Doação<th>
            </thead>
            <tbody>
                <tr>
                    <td>${nome.value}</td>
                    <td>${sobrenome.value}</td>
                    <td>${email.value}</td>
                    <td>R$${inputSelecionado.value}.00</td>
                </tr>
            </tbody>
        </table>
    `
        btnLimpar.disabled = true;
    }
 
}

function religar(){

    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const email = document.getElementById("email");
    const radioInputs = document.querySelectorAll("input[name = 'doacao']");
    //Selecionando campos


    nome.disabled = false;
    sobrenome.disabled = false;
    email.disabled = false;
    radioInputs.forEach((input)=>{
        input.disabled = false;
        //Habilita todos os campos
    })
    btnEditar.disabled = true;
    btnSubmeter.disabled = true;
    btnLimpar.disabled = false;
    //Desabilita os botoes

}

function alternaBtn(btn, estado){
        btn.disabled = estado;
}

function limpar(){


    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const email = document.getElementById("email");
    const radioInputs = document.querySelectorAll("input[name = 'doacao']");

    nome.value = "";
    sobrenome.value = "";
    email.value = "";
}