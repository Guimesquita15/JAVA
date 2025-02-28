function showContent(topic) {
    const content = {
        pacotes: `
            <h3>Pacotes, Encapsulamento e JavaBeans</h3>
            <p>Pacotes em Java são usados para agrupar classes relacionadas, facilitando a organização e a reutilização do código. O encapsulamento é um princípio da programação orientada a objetos que restringe o acesso a certos componentes de um objeto, protegendo assim os dados. JavaBeans são classes Java que seguem convenções específicas, como ter um construtor padrão e métodos getters e setters, permitindo que sejam facilmente manipuladas em ambientes de desenvolvimento.</p>
        `,
        nucleo: `
            <h3>Núcleo de Funcionalidades</h3>
            <p>O núcleo de funcionalidades do Java refere-se às bibliotecas e APIs fundamentais que fornecem as bases para o desenvolvimento de aplicativos. Isso inclui classes para manipulação de strings, operações matemáticas, manipulação de datas e muito mais, que são essenciais para a construção de qualquer aplicação Java.</p>
        `,
        documentacao: `
            <h3>Documentação da API</h3>
            <p>A documentação da API (Application Programming Interface) do Java é um recurso essencial que fornece informações detalhadas sobre as classes, métodos e pacotes disponíveis na linguagem. É uma ferramenta valiosa para desenvolvedores, pois ajuda a entender como usar as funcionalidades do Java de forma eficaz.</p>
        `,
        colecoes: `
            <h3>Coleções e Strings</h3>
            <p>As coleções em Java são estruturas de dados que permitem armazenar e manipular grupos de objetos, como listas, conjuntos e mapas. A classe String, por outro lado, é uma das classes mais utilizadas em Java, representando sequências de caracteres e oferecendo métodos para manipulação de texto, como concatenação, busca e substituição.</p>
        `,
        aplicacoes: `
            <h3>Aplicações Gráficas em Java</h3>
            <p>Java oferece várias bibliotecas para o desenvolvimento de interfaces gráficas, como Swing e JavaFX. Essas bibliotecas permitem criar aplicativos com interfaces ricas e interativas, facilitando a construção de janelas, botões, menus e outros componentes gráficos.</p>
        `,
        entrada: `
            <h3>Entrada e Saída (java.io)</h3>
            <p>O pacote java.io fornece classes e interfaces para realizar operações de entrada e saída em Java. Isso inclui leitura e gravação de arquivos, manipulação de fluxos de dados e interação com o sistema de arquivos, permitindo que os desenvolvedores criem aplicativos que possam processar dados de forma eficiente.</p>
        `,
        controle: `
            <h3>Controle de Erros e Exceções</h3>
            <p>O controle de erros e exceções em Java é um mecanismo que permite lidar com situações inesperadas durante a execução de um programa. Java utiliza blocos try, catch e finally para capturar e tratar exceções, garantindo que o programa possa continuar a funcionar ou falhar de maneira controlada.</p>
        `,
        fundamentos: `
            <h3>Fundamentos da Programação Orientada a Objetos</h3>
            <p>A Programação Orientada a Objetos (POO) é um paradigma de programação que utiliza "objetos" para representar dados e métodos. Os principais fundamentos incluem:</p>
            <ul>
                <li><strong>Encapsulamento:</strong> Protege os dados, permitindo acesso controlado.</li>
                <li><strong>Herança:</strong> Permite que uma classe herde características de outra.</li>
                <li><strong>Polimorfismo:</strong> Permite que métodos tenham diferentes comportamentos.</li>
                <li><strong>Abstração:</strong> Foca nos aspectos essenciais de um objeto, ocultando detalhes desnecessários.</li>
            </ul>
        `,
        poo: `
            <h3>Programação Orientada a Objetos</h3>
            <p>A POO promove a criação de programas mais flexíveis e reutilizáveis. Através de classes e objetos, é possível modelar entidades do mundo real, facilitando a manutenção e a escalabilidade do software. A POO também permite a criação de sistemas complexos de forma mais organizada.</p>
        `,
        tipos: `
            <h3>Tipos, Literais, Operadores e Controle de Fluxo</h3>
            <p>Java possui tipos primitivos como <code>int</code>, <code>double</code> e <code>char</code>, além de literais que representam valores. Os operadores aritméticos, lógicos e relacionais são usados para manipular dados. As estruturas de controle, como <code>if</code>, <code>switch</code>, <code>for</code> e <code>while</code>, permitem a execução condicional e repetitiva de código, tornando o programa dinâmico e responsivo.</p>
        `,
        classes: `
            <h3>Como Criar Classes, Objetos, Métodos, Variáveis</h3>
            <p>Classes são moldes para criar objetos, que são instâncias dessas classes. Métodos são funções definidas dentro de classes, e variáveis armazenam dados. A criação de classes e objetos é fundamental para a POO, permitindo a organização do código e a reutilização de funcionalidades. Por exemplo, uma classe <code>Carro</code> pode ter métodos como <code>acelerar()</code> e <code>frear()</code>.</p>
        `,
        heranca: `
            <h3>Reutilização com Herança e Composição</h3>
            <p>A herança permite que uma classe herde características de outra, promovendo a reutilização de código e a criação de hierarquias. Por exemplo, uma classe <code>Veiculo</code> pode ser a superclasse de <code>Carro</code> e <code>Bicicleta</code>. A composição, por outro lado, envolve a criação de classes que contêm objetos de outras classes, permitindo uma estrutura mais flexível e modular, como um <code>Carro</code> que possui um objeto <code>Motor</code>.</p>
        `,
        interfaces: `
            <h3>Interfaces e Polimorfismo</h3>
            <p>Interfaces definem contratos que as classes devem seguir, permitindo a implementação de métodos de forma consistente. O polimorfismo permite que métodos sejam utilizados de diferentes formas, seja através da sobrecarga (mesmo nome, diferentes parâmetros) ou sobrescrita (métodos em subclasses). Isso proporciona flexibilidade e extensibilidade ao código, permitindo que diferentes classes implementem a mesma interface de maneiras distintas.</p>
        `
    };

    // Exibe o conteúdo correspondente ao tópico clicado dentro do contêiner
    document.getElementById('text-container').innerHTML = content[topic];
} 