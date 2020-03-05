<template>
    <div id="write">
        <div v-if="req">
            <h1 >{{ req }}</h1>
            <router-link to="/">回到主页</router-link> 
        </div>
        <div v-else>
            {{ req }}
            <h1>发表文章</h1>

            <label>标题</label><input name="name" type="text" v-model="name">
            <label>类别</label>
            <select v-model="t" id="select">
                <option v-for="(v,k) in type" :key="k" :value="k">{{ v.tname }}</option>
            </select>
            <label>内容</label><textarea name="content" v-model="content"> </textarea>
            <button @click="submit">提交</button>

            <p> {{ name }} </p>
            <p> {{ t }} </p>
            <p> {{ content }} </p>
        </div>
    </div>


</template>

<script>
    import $ from "jquery"
    export default {
        name: "write",
        data() {
            return {
                type: [],
                name: "",
                content: "",
                t: "",
                req:""

            }
        },
        methods:{
            submit(){
                //提交 
                // var _this = this;
                if(this.name && this.content && this.t){
                    var ty = $("#select").val();
                    
                    this.$axios({
                            url: 'http://localhost/blog/blog.php',
                            method: 'post',
                            params: {
                                parameter: "write",
                                name: this.name,
                                content: this.content,
                                ty: ty
                            }
                        }).then((res)=>{
                            console.log(res.data);
                            if(res.data == 1){
                                this.req = "添加成功";
                            }
                        })
                    }
            }
        },
        created() {

            var _this = this;
            this.$axios({
                url: 'http://localhost/blog/blog.php',
                method: 'post',
                params: {
                    parameter: "type",  
                }
            }).then((res)=>{
          
                _this.type = res.data;
            })

        }
    }
</script>

<style scoped>
    #write {
        max-width: 960px;
        margin: 0 auto;

    }

    label {
        display: block;
    }

    input {
        width: 60%;
        height: 20px;
    }

    select {
        width: 80px;
    }

    textarea {
        width: 60%;
        height: 200px;
    }

    button {
        display: block;
        width: 80px;
        height: 20px;
    }
</style>