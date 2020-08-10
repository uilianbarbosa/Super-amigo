<template>
<body>
    <img src="amigo3.jpg" alt="">
    <h2 class="mt-5 text-center">Como Adotar Seu Novo Amigo</h2>

    <div class="container requisitos mt-5">
        <h4>PRÉ-REQUISITOS</h4>
            <p>- Ser maior de 21 anos (caso seja um menor que mora com responsáveis, eles devem estar presentes no momento e aprovar a adoção)
            <br>- Possuir renda fixa
            <br>- Apresentar documento de identidade com foto e comprovante de residência
            <br>- Responder a uma entrevista e preencher o Termo de Adoção Responsável
            <br>- Serão feitas visitas para acompanhar a adoção, não necessariamente com aviso prévio
            </p>

        <h4 class="mt-5">CUIDADOS NECESSÁRIOS</h4>
            <p>- Sua residência deve ter espaço suficiente para a espécie escolhida
            <br>- Em períodos de ausência, como viagens, haverá alguém para cuidar do animal em seu lugar
            <br>- Você deve estar disposto a cuidar do bichinho por toda sua vida, que pode durar cerca de 20 anos
            <br>- As pessoas que moram com você estão de acordo com a adoção
            <br>- Você arcará com todas as despesas do animal, incluindo cuidados veterinários e remédios
            <br>- Se você mora num lugar pequeno, certifique-se de que terá tempo para passear com o animal, pois ele precisa se exercitar
            <br>- Você não pode deixar seu pet sozinho por longos períodos, afinal ele pode se estressar, chorar, fazer muito barulho e até “aprontar” para se distrair
            <br>- Você não poderá vender, perder, abandonar ou deixar o animal fugir
            <br>- Um gato ou cachorro não é um objeto, é um ser vivo com sentimentos. Não deve ser trocado ou dispensado por apresentar “problemas” ou tornar-se “obsoleto”
            </p>
    </div>
    <div class="container text-center">
        <router-link to="/adocao"><button type="button" class="btn mt-4">Click Aqui e Procure Seu Novo Amigo</button></router-link>
    </div>

    <div class="container requisitos">
        <p class="p2">
            Para quem se interessa por apadrinhar um animalzinho o procedimento é simples, basta estar disposto a assumir essa
            responsabilidade pelo animal, isso inclui: ajudar nas medições, cirurgias, castração, levar para passear, brincar, 
            dar muito amor e carinho. E aí, só entrar em contato conosco. E aí, já pensou
            em apadrinhar um bichinho?
        </p>
    </div>

    <div class="container requisitos mt-5">
        <h2 class="text-center mb-5">Ajude-nos a Encontrar um Pet</h2>
            <p>- Ser maior de 21 anos (caso seja um menor que mora com responsáveis, eles devem estar presentes no momento e aprovar a adoção)
            <br>- Possuir renda fixa
            <br>- Apresentar documento de identidade com foto e comprovante de residência
            <br>- Responder a uma entrevista e preencher o Termo de Adoção Responsável
            <br>- Serão feitas visitas para acompanhar a adoção, não necessariamente com aviso prévio
        </p>
    </div>

</body>
</template>

<script>
export default {
    
}
</script>

<style scoped>
h4 {
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
    letter-spacing: .1em;
    color: #000;
    font-size: 28px;

}
h4::after {
    content: "";
    width: 130px;
    height: 3px;
    display: block;
    background: #000;
    margin: 20px auto 40px auto;
}
body {
    background-color: rgb(211, 168, 229);
    padding-bottom: 10px;
}
img {
    margin-top:76px;
    width: 100%;
}
h2 {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
    letter-spacing: .1em;
    color: #000;
    margin-top: 60px;
    font-size: 43px;
}
h2::after {
    content: "";
    width: 960px;
    height: 1px;
    display: block;
    background: #000;
    margin: 20px auto;
}
.requisitos {
    max-width: 960px;
}
p {
    font-size: 22px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}

button {
    background-color: rgb(170, 100, 236);
    padding: 18px 100px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    font-size: 19px;
    letter-spacing: .1rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
button:hover {
    color: #000;
    background-color: rgb(156, 71, 236);
}
.p2::before {
    content: "";
    width: 200px;
    height: 3px;
    display: block;
    background: #000;
    margin: 20px auto 40px auto;
}

</style>