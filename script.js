// Simulando a classe Calculadora no frontend
class Calculadora {
    adicionar(a, b) {
        return a + b;
    }

    subtrair(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return a / b;
    }
}

document.getElementById('form-calculadora').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacao = document.getElementById('operacao').value;
    let resultado;

    const calculadora = new Calculadora(); // Instanciando a classe Calculadora

    // Executando a operação selecionada
    switch (operacao) {
        case 'adicionar':
            resultado = calculadora.adicionar(numero1, numero2);
            break;
        case 'subtrair':
            resultado = calculadora.subtrair(numero1, numero2);
            break;
        case 'multiplicar':
            resultado = calculadora.multiplicar(numero1, numero2);
            break;
        case 'dividir':
            try {
                resultado = calculadora.dividir(numero1, numero2);
            } catch (error) {
                resultado = error.message; // Capturando erro de divisão por zero
            }
            break;
    }

    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}); 