<template>
<div>
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">Adicionar Produto</a>
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="text" placeholder="Nome" v-model="produto.nome" ><br>
            <input class="form-control mr-sm-2" type="text" placeholder="Quantidade" v-model="produto.quantidade"><br>
            <input class="form-control mr-sm-2" type="text" placeholder="Descricao" v-model="produto.descricao" ><br>

            <button class="btn btn-success" @click="salvar" > Salvar </button>
        </form>
    </nav>

        <!--Inicio Tabela de Exibition--> 
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Descricao</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item, id) in produtos" :key="id" class="itens">
                    <td> {{ item.nome }} </td>
                    <td> {{ item.quantidade }} </td>
                    <td> {{ item.descricao }} </td>
                    <td>
                        <button class="btn btn-primary" @click="preencher(id)"> Alterar </button>
                        <button class="btn btn-danger" @click="excluir(id)"> Excluir </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!--Final Tabela de Exibition-->
   







</div>
</template>
    
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
            }
        },
        created(){
            this.carregar();
        }    
    }
</script>

<style>

</style>