<template>
    <body>
        
    <form class="container form1" @submit.prevent="salvar">
    <h2 class="text-center">Conte-nos um Pouco Sobre Você</h2>
  <div class="form-group">
    <label for="nome">Nome:</label>
    <input type="text" required class="form-control mb-4" placeholder="Seu Nome" id="nome"
    v-model="prop.nome" ref="nome">
  </div>
  <div class="form-group">
    <label for="email">E-mail:</label>
    <input type="email" required class="form-control mb-4" placeholder="Seu Email" id="email"
    v-model="prop.email">
  </div>
  <div class="form-group">
    <label for="telefone">Telefone:</label>
    <input type="text" required class="form-control mb-4" placeholder="Seu Telefone" id="telefone"
    v-model="prop.telefone">
  </div>
  <div class="form-group">
    <label for="adocao_id">ID do Pet Escolhido:</label>
    <input type="text" required class="form-control mb-4" placeholder="ID do Pet" id="adocao_id"
    v-model="prop.adocao_id">
  </div>
  <div class="form-group">
    <label for="sobre_dados">Sobre Você:</label>
  <textarea class="form-control" required rows="5" id="sobre_dados" v-model="prop.sobre_dados"></textarea>
  </div>
  <button type="submit" @click="emailConfirma(prop.adocao_id)" class="btn mt-2">Enviar Pedido de Adoção</button>
  <button class="btn mt-2 ml-4" @click="goBack">Cancelar</button>
  
    </form>

    </body>
    
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      prop: {
        id: null,
        nome: null,
        email: null,
        telefone: null,
        adocao_id: null,
        sobre_dados: null,
      }
    }
  },
  methods: {
    salvar() {
      axios
      .post(this.$urlAPI+'/pedido', this.prop)
      .then(response => {
          alert(`Seu Pedido Foi Enviado ${response.data.nome}. Aguarde Nosso Retorno... `)
      })
      this.prop = {}
      this.$refs.nome.focus()
    },
    emailConfirma(adocao_id) {
      axios.get(this.$urlAPI+'/pedido/email/'+adocao_id)
      .then(() => {alert('Você Receberá um Email de Confirmação...');
      }) 
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.form1 {
    max-width: 600px;
    padding-top: 140px;
    padding-bottom: 90px;
}

label {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    letter-spacing: .1em;
    line-height: 12px;
    padding-bottom: 6px;
}
body {
    background-color: rgb(211, 168, 229);
}
.btn {
    background-color: rgb(170, 100, 236);
    font-weight: bold;
}
.btn:hover {
    background-color: rgb(156, 71, 236);
}
h2 {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: black;
    font-weight: bold;
    letter-spacing: .1em;
}
h2::after {
    content: "";
    width: 200px;
    height: 3px;
    display: block;
    background: #000;
    margin: 20px auto 50px auto;
}
label {
  color: #000;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

</style>