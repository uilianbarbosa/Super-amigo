<template>
    <div class="geral">
        <form @submit.prevent="logar">
        <div class="form-group">
                <label for="email">Endereço de E-mail:</label>
                <input type="email" class="form-control" placeholder="E-mail" id="email"
                v-model="email">
            </div>
        <div class="form-group">
        <label for="pwd">Senha:</label>
        <input type="password" class="form-control" placeholder="Senha" id="pwd"
        v-model="senha">
    </div>
    <div class="form-group form-check">
        <label class="form-check-label">
        <input class="form-check-input" type="checkbox"> Lembre-me
        </label>
    </div>
    <button type="submit" class="btn">Entrar</button>
</form>
    </div>
</template>


<script>
import axios from 'axios'


export default {
    data() {
        return {
            email: null,
            senha: null
        }
    },
    methods: {
        logar() {
            axios.post(this.$urlAPI+'/auth/authenticate', {email: this.email, password: this.password})
            .then(response => {
                if (response.data.user == null) {
                    alert('Erro... Login ou senha inválido')
                } else {
                    this.$router.push('/')
                }
            })
        }
    }
}
</script>

<style scoped>

template {
    min-height: 100%;
}

label {
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.geral {
    height: 360px;
    width: 450px;
    margin-left: 450px;
    margin-top: 80px;
    position: relative;
}

.btn {
  background: rgb(156, 71, 236);
  color: rgb(205, 173, 235);
  font-weight: bold;
  letter-spacing: .1em;
}

.btn:hover {
  background: rgb(142, 4, 255);
  color: rgb(29, 27, 31);
  font-family: Georgia, 'Times New Roman', Times, serif;
}



</style>