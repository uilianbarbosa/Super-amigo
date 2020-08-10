<template>
    <body>

    <section class="pt-5 pb-4 sobre">
        <div class="sobre2 mx-4 text-light">
        <h4>SOBRE A SUPER AMIGO</h4>
        <p>No Super Amigos, nós nos importamos com pets. Nossa missão é arrumar um lar para pets que moram na rua, informar sobre pets perdidos, ajudando seus donos a localizalos.</p>
        <p>No Super Amigos, nós nos importamos com pets. Nossa missão é arrumar um lar para pets que moram na rua, informar sobre pets perdidos, ajudando seus donos a localizalos.</p>
        <p>No Super Amigos, nós nos importamos com pets. Nossa missão é arrumar um lar para pets que moram na rua, informar sobre pets perdidos, ajudando seus donos a localizalos.</p>
        <p>No Super Amigos, nós nos importamos com pets. Nossa missão é arrumar um lar para pets que moram na rua, informar sobre pets perdidos, ajudando seus donos a localizalos.</p>
        <p>No Super Amigos, nós nos importamos com pets.</p>
        </div>
        <div class="img mr-4">
            <img src="adote1.jpg" alt="">
        </div>
    </section>

</body>
</template>


<script>
export default {
    
}
</script>

<style scoped>
h4 {
    font-family: 'dezen-pro', Arial, Helvetica, sans-serif;
    text-align: center;
    color: #000;
}
h4::after {
    content: "";
    width: 200px;
    height: 3px;
    display: block;
    background: #000;
    margin: 10px auto 20px auto;
}
p {
    font-family: 'dezen-pro', Arial, Helvetica, sans-serif;
}
.sobre {
    display: flex;
    margin-top: 76px;
}
.sobre2 {
    display: block;
    line-height: 26px;
    letter-spacing: .1em;
}
p {
    color: #000;
}
img {
    max-width: 672px;
    height: 464px;
}
body {
    background-color: rgb(211, 168, 229);
}
</style>