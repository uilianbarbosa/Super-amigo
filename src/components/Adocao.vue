<template>
<body>

<div class="container pt-4 footal">
    <div id="demo" class="carousel slide car" data-ride="carousel">
  <!-- Indicators -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  <!-- The slideshow -->
  <div class="carousel-inner car">
    <div class="carousel-item active">
      <img src="pets1.jpg" alt="Los Angeles carimg">
      <div class="carousel-caption carcelh3">
            <h3>Amizade</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src="pets2.jpg" alt="Chicago">
      <div class="carousel-caption carcelh3">
            <h3>Confiança</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src="pets3.jpg" alt="Chicago">
      <div class="carousel-caption carcelh3">
            <h3>Respeito</h3>
      </div>
    </div>
</div>
  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
  </div>
        <h2 class="mt-5 text-center">Pets Para Adoção</h2>

    <table class="table table-striped mt-5 text-center">
            <tbody>
                <div class="card ml-2 mb-5 " style="width:360px" v-for="adoca in adocao" v-bind:key="adoca.id">
                    <img v-bind:src="adoca.foto" alt="Card image">
                    <div class="card-body">
                        <h4 class="card-title">NOME: {{ adoca.nome }}</h4>
                        <p>PORTE: {{adoca.porte}}</p>
                        <p>RAÇA: {{adoca.raca}}</p>
                        <p>SEXO: {{adoca.sexo}}</p>
                        <p class="idade">IDADE: {{ adoca.idade}}</p>
                        <p> CÓDIGO PARA ADOÇÃO: {{adoca.id}}</p>
                        <td class="btnprop">
                            <router-link to="/pedAdocao" class="btn">
                            Quero Adotar!</router-link>
                        </td>
                    </div>
                </div>
            </tbody>
        </table>
        </div>
    </body>

</template>


<script>
import axios from "axios"

export default {
    data() {
        return {
            adocao: [],
        }
    },
    methods: {
        listar() {
            axios.get(this.$urlAPI+"/adocao")
            .then(response => (this.adocao = response.data))
        }
    },
    mounted() {
        this.listar()
    },
}
</script>


<style scoped>
body {
    background-color: rgb(211, 168, 229);
    bottom:0;
    padding-bottom: 10px;
}

.carcelh3 h3{
    margin-bottom: 290px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
    letter-spacing: .1em;
    font-size: 48px;
    color: #000;
}
.carcelh3 h3::after {
    content: "";
    width: 200px;
    height: 3px;
    display: block;
    background: #000;
    margin: 15px auto;
}
h2 {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
    letter-spacing: .1em;
    color: #000;
}
h2::after {
    content: "";
    width: 200px;
    height: 3px;
    display: block;
    background: #000;
    margin: 20px auto;
}
.car img {
    width: 1120px;
    height: 420px;
    margin-top: 52px;
}
.card {
    float: left;
    border: none;
    background-color:  rgb(182, 121, 240);

} 
.card-body p {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    letter-spacing: .1em;
    line-height: 12px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}
.card-body h4 {
    color: #fff;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
}

table img {
    height: 280px;
    display: inline-block;
}

.btnprop {
    padding-left: 93px;
    border-top: none ;
}
.btn {
    background-color: rgb(170, 100, 236);
    font-weight: bold;
}
.btn:hover {
    background-color: rgb(156, 71, 236);
}
.idade::after {
    content: "";
    width: 90px;
    height: 3px;
    display: block;
    background: #fff;
    margin: 15px auto;
}
</style>