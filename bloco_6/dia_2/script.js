let selectEstados = document.getElementById("estados");
let date = document.getElementById("data-inicio");


let states= ['Selecione','Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 
'Distrito Federal', 'Espirito Santo' , 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso',
'Minas Gerais', 'Pará', 'Paraíba', 'Parana', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 
'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Ronraima', 'Santa Catarina',
'São Paulo', 'Sergipe', 'Tocantins'];

for(let i = 0;i < states.length; i +=1) {
    let options = document.createElement('option');
    selectEstados.appendChild(options).innerHTML = states[i];
}
    


let submit = document.querySelector('#button');
submit.addEventListener('click', function(event){
    event.preventDefault();
    console.log(date.value);
})

date.DatePickerX.init({
    mondayFirst: true ,
    format: "dd/mm/yyyy"
});

