<template>

    <nav class="navbar fixed-top">
        
    <div class="container ul">
        <router-link to="/"><img src="amigos4.png" alt="Amigo"></router-link>
        <ul class="navbar-nav home">
            <li class="nav-item home1">
                <router-link to="/">HOME</router-link>
            </li>
        </ul>
        <ul class="navbar-nav inicio">
            <li class="nav-item">
                <router-link to="/adocao">ADOÇÃO</router-link>
            </li>
        </ul>
        <ul class="navbar-nav perd">
            <li class="nav-item ">
                <router-link to="/perdidos">PERDIDOS</router-link>
            </li>
        </ul>
        <ul class="navbar-nav sobre">
            <li class="nav-item">
                <router-link to="/sobre">SOBRE</router-link>
            </li>
        </ul>
        </div>
</nav>


</template>

<script>

export default {
    
}
</script>

<style scoped>
.cont {
    background-color: rgb(211, 168, 229);
    
}
.infonav {
    color: #fff;
    font-size: 18px;
}

.navbar {
    background-color: rgb(161, 84, 233);
}

img {
    width: 90px;
    height: 60px;
}

.home1 {
    padding: 20px 0;
}

ul li a {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: .1em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding: 10px 0;
}
ul li a:hover {
    color: #000;
    text-decoration: none;
}
.ul {
    float: right;
}

.home {
    margin-left: 580px;
}

.btn {
    background-color: rgb(160, 160, 160);
    font-weight: bold;
}
.btn:hover {
    background-color: rgb(216, 216, 216);
}

</style>