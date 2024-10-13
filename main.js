    const form = document.getElementById('form-agenda');
    let linhas = '';
    const numero = [];
    const contato = [];

    addEventListener('submit', function(e){
        e.preventDefault();

        addLinha();
        addContato();
    })

    function addLinha(){
        const nomeContato = document.getElementById('nome-contato');
        const numeroContato = document.getElementById('numero-contato');

        if (numero.includes(parseFloat(numeroContato.value))) {
            alert(`O numero: ${numeroContato.value} ja foi inserido`)
        } else{
            numero.push(parseFloat(numeroContato.value));
            let linha = `<tr>`;
            linha += `<td>${nomeContato.value}</td>`; 
            linha += `<td>${numeroContato.value}</td>`;
            linha += `</tr>`;
            linhas += linha

            nomeContato.value = '';
            numeroContato.value = '';
    }
    }
    function addContato(){
        const atualizarTabela = document.querySelector('tbody');
        atualizarTabela.innerHTML = linhas;

    }