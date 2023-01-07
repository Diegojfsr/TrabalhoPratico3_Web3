<template>
<div>
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand">Adicionar Produto</a>
            <form class="form-inline ">
                <input class="form-control mr-sm-2" type="text" placeholder="Nome" v-model="produto.nome" />
                <input class="form-control mr-sm-2" type="text" placeholder="Quantidade" v-model="produto.quantidade">
                <input class="form-control mr-sm-2" type="text" placeholder="Descricao" v-model="produto.descricao">
    
                <button class="btn btn-success" @click="salvar" > Salvar </button>
            </form>
        </nav>
        <br>
    
        <!--Inicio Tabela de Exibition--> 
        <table class="table table-striped">
            <tr>
                <th>Select</th>
                <th scope="col">Nome</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Descricao</th>
                <th> Editar | Excluir </th>
            </tr>
            
            <tbody>
                <tr v-for="(item, id) in produtos" :key="id" class="itens">
                    <td> <input  type="checkbox" v-model="item.completed"  @change="updateItem (item)"> </td>
                    <td> {{ item.nome }} </td>
                    <td> {{ item.quantidade }} </td>
                    <td> {{ item.descricao }} </td>
                    <td>
                        <button class="btn btn-outline-primary mr-2"  @click="preencher(id)"> Alterar </button>
                        <button class="btn btn-outline-danger mr-2" @click="excluir(id)"> Excluir </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!--Final Tabela de Exibition-->

</div>
</template>
 <!-- ......................................................................-->>   
<script>
    export default{
        data(){
            return{
                produtos:[],
                produto:{
                    nome:'',
                    quantidade:'',
                    descricao:''
                },
                id:0
            }
        },
       
        methods:{
    limpar(){
        this.id = 0;
        this.produto.nome = '';
        this.produto.quantidade = '';
        this.produto.descricao = '';
    },
    salvar(){
        if(this.id==0){
            this.$http.post('produto.json', 
                this.produto).then(()=>{
                    alert('Produto Cadastrado!');
                    this.limpar();
                }).catch(() =>{
                    alert('Erro ao Cadastrar!');
                });
        }else{
            this.$http.patch(`/produto/${this.id}.json`,
            this.produto).then(()=>{
                this.carregar();
                alert('Produto alterado com sucesso!');
                this.limpar();
            }).catch(()=>{
                alert('Erro ao alterar o produto!');
            });
        }
    },
    carregar(){
        this.$http.get('produto.json').then(
            res=>{
                this.produtos = res.data;
            }
        )
    },
    excluir(id){
        this.$http.delete(`/produto/${id}.json`).then(
            ()=>{
                alert('Produto removido com sucesso!');
                this.carregar();
            }).catch(()=>{
                alert('Erro ao remover o produto!');
            })
    },
    preencher(id){
        this.id = id;
        this.produto = {...this.produtos[id]};
    },

    updateTodo(item) { 
        this.$http.update(`/item/${item.id}.json`) 
        .then( function () { 
            console.log("Documento atualizado com ID: ", item.id); 
        }) 
        .catch( function () { 
            console.error("Erro ao atualizar documento: "); 
        }); 
    }


    },

    created(){
        this.carregar();
    }


    } // Final export default
</script>

<style>


</style>