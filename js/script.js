let resulta = document.querySelector('.result');
const igual = document.querySelector('.igual');


function insert(valor){
    resulta.innerHTML += valor;
    

} 


function cleart(){
   resulta.innerHTML = '  ';
}
function deletr(){
    if(resulta.textContent){
        let result = document.getElementById('resultado').innerHTML; 
        resulta.innerHTML = result.substring(0, result.length  -1)
    
    }else{

    }
}

function enter(){
    if(resulta.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML = eval(resulta.innerHTML) 
    }

}