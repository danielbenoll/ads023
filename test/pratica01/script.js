function validarForm(){
  const login = document.querySelector("ion-input[name='login']").value; 
  const senha = document.querySelector("ion-input[name='senha']").value;
  console.log(login)
  if(!login || !senha){
    alert('Campos obrigatórios!');
    return false;
  }
  return true;
} 

function validarForm2(){
  const nome = document.querySelector("ion-input[name='nome']").value; 
  const equipe = document.querySelector("ion-input[name='equipe']").value;
  const pais = document.querySelector("ion-input[name='pais']").value;
  if(!nome || !equipe || !pais){
    alert('Campos obrigatórios!');
    return false;
  }else{
    alert('Cadastrado com sucesso!');
  }

  return true;
} 