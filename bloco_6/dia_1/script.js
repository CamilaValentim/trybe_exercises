let select = document.querySelector('#estados');
let submit = document.querySelector('#button');
let date = document.querySelector('#data-inicio');
submit.addEventListener('click', function(event){
    event.preventDefault();
})

let estados = ['Selecione o seu Estado','Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 
'Distrito Federal', 'Espirito Santo' , 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso',
'Minas Gerais', 'Pará', 'Paraíba', 'Parana', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 
'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Ronraima', 'Santa Catarina',
'São Paulo', 'Sergipe', 'Tocantins'];

for(let i = 0;i < estados.length; i +=1) {
    let option = document.createElement('option');
    option.setAttribute('name', 'estados');
    option.innerText = estados[i];
    select.append(option);
}




