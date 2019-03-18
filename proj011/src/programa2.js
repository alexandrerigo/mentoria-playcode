/* 
Fixar um valor de uma variável no código não faz muito sentido, pois só 
o programador poderia alterar os valores. Faz mais sentido capturarmos os 
dados de entrada digitados pelo usuário. Vamos usar o comando prompt para 
pegar os dados do usuário e o comando alert para exibit os dados capturados. 

## Referências:

https://www.w3schools.com/jsref/met_win_prompt.asp
https://www.w3schools.com/jsref/met_win_alert.asp

*/

/******************************************************************************* 
	Tarefa 1:
    Coletar o nome do usuário e mostrar concatenado com a frase, exibindo 
    Bom dia Bia, caso o nome informado seja Bia.
*******************************************************************************/



let Nome = prompt('Qual seu nome','Bia')
    alert('Bom Dia ' + Nome);





//*************FUNCINANDO FILE */

// let Nome = prompt("seu nome","")
//     if(Nome == 'Bia'){
//         alert('Bom Dia ' + Nome)
//     }else{
//         alert('vc não é a Bia')
//     }



//**************ESSE TA FUNCIONANDO FILE */

// let Nome = prompt('Digite seu nome','nome');
// let Sobrenome = prompt('Digiteo seu sobrenome');
// let Completo = Nome +" "+ Sobrenome
//  alert(Nome +" "+ Sobrenome);
// document.write(Nome +" "+ Sobrenome)






//************nao ta funcionando quando atribui o resultado do alert a uma variavel
  
//   let Nome = prompt('Digite seu nome','nome');
// let Sobrenome = prompt('Digiteo seu sobrenome');
// let Completo = alert(Nome +" "+ Sobrenome);
// document.write(Completo);




 
