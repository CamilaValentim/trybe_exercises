let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente : "sim"
  }
  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente : "sim"
  }
  for(let i in info,info2){
    if(info[i] !== "sim" && info2[i] !== "sim"){
        console.log(info[i] + " " + "e" + " " + info2[i])
    }else{
        console.log("ambos recorrentes")
    }
}
   
        

    
    

 
    
  
    
    

    

  
  
     
 