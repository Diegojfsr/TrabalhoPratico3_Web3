<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->

  <div class="container">
    <h1>Teste-Conexao</h1>
    <input type="text" v-model="nomeDoProduto" />
    <button @click="addProduto()" >Add</button>
  </div>



</template>

<script>
import { app } from './utils/firebase.js'

  export default{
    data(){
      return{
        nomeDoProduto: "Teclado",
        nomesDosProdutos:[]
      }
    },
    methods: {
      addProduto() {
        app.ref('filmes/').push({nomeDoProduto: this.nomeDoProduto})
        .them((data)=>{console.log(data)})
        .catch((error) =>{console.log(error)} )
      }
    },
  }

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
