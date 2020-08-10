<template>
        <div class="formgeral">
        <form class="container form-inline" action="/action_page.php">
            <h4 class="newh4">NewsLetter</h4>

            <label for="text" class="label1 mr-sm-2">Nome:</label>
            <input type="text" class="form-control mb-1 mt-1 mr-sm-2" id="text">
            
            <label for="pwd" class="label2 mr-sm-2">Email:</label>
            <input type="email" class="form-control formemail mb-1 mt-1 mr-sm-2" id="email">
        <div class="form-check mb-2 mr-sm-2">
        </div>
        <button type="submit" class="btn mb-2 mt-2">Enviar</button>
        </form>
    <footer class="footer1">
        <div class="container">
        <div class="div1 text-light">
            <h4 class="cont" id="con">Contato:</h4>
            <p class=" tel"><i class="fas fa-phone-square mr-2"></i>Tel: (53)9847224-54</p>
            <p class=" email"><i class="far fa-envelope mr-2"></i>E-mail: superamigopets@gmail.com</p>
            <p class=" end "><i class="fas fa-map-marker-alt mr-2"></i>Rua De Portugal, 12, Bairro São Vendelino<br>Cidade de Pelotas/RS, CEP: 95743-544</p>
        </div>
        <div class="redes">
            <h4 class="text-light mb-4">Redes Sóciais</h4>
            <a href="https://www.instagram.com/?hl=pt-br" target="blank"><img src="insta2.png" alt="instagram" class="sociais mr-3"></a>
            <a href="https://www.facebook.com/" target="blank"><img src="face.png" alt="facebbok" class="sociais mr-3"></a>
            <a href="https://twitter.com/login?lang=pt" target="blank"><img src="twiter2.png" alt="twiter" class="sociais mr-3"></a>
        </div>
        </div>

    </footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.div1 {
    font-size: 18px;
    letter-spacing: .1em;
    float: left;
}
.div1 p {
    padding-bottom: 10px;
}
.footer1 {
    background-color: rgb(161, 84, 233);
    position: relative;
    width:100%;
    height: 240px;
    bottom:0;
    padding-top: 18px;
}
.sociais {
    width: 40px;
    height: 40px;
    float: right;
    display: block
}
.redes {
    float: right;
    max-width: 168px;
}
.btn {
    background-color: rgb(170, 100, 236);
    font-weight: bold;
    padding: 5px 30px;
}
.btn:hover {
    background-color: rgb(156, 71, 236);
}
.label1 {
    margin-left: 230px;
}
.formgeral {
    background-color: rgb(176, 139, 211);
}
.formemail {
    padding-right: 70px;
}
.label2 {
    margin-left: 35px;
}
label {
    color: #fff;
    font-size: 18px;
}
.newh4 {
    color: #fff;
    margin: 0;
}
</style>