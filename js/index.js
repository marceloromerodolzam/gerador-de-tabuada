let InpNum = document.getElementById('InpNum');
let numBtn = document.getElementById('numBtn');
let ulTabuada = document.getElementById('ulTabuada');



numBtn.addEventListener('click', function(){

    ulTabuada.innerHTML = '';

    InpNum.innerHTML = '';

    var numero = Number(InpNum.value);

    if(numero === 0){

        alert('Digite um número');

    }else{

        for(var i = 0; i < 11; i++){

            var resultado = numero * i;

            var li = document.createElement('li');

            li.textContent = `${numero} x ${i} = ${resultado}`;
            
            ulTabuada.appendChild(li);
            
        }

    }
});