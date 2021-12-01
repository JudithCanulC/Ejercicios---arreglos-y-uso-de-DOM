
var aceptar = function Matriz(){
    
    var a= document.getElementById("fila").value;
    var b = document.getElementById("columna").value;
    
    document.getElementById("MatrizIdentidad").innerHTML = "Matriz identidad" +"<br>"+ "<br>";

    let matrizIdent =[];
    for (let i =0; i < a; ++i){
        let fila = [];
        for (let j =0; j < b; ++j){
            if(i==j){
                fila.push(1);

            }else{
                

                fila.push (0);
            }
        }
        matrizIdent.push(fila);

    }
    for(let i=0;i<matrizIdent.length;++i){

        document.getElementById("MatrizIdentidad").innerHTML +=  matrizIdent[i] + "<br>";
        
    }
  
  }