<template>
    <div id="indexArticle">
        <h1>我是主页文章列表</h1>
        <div class="aList" v-for="(v,k) in arr" :key="k">
            <div class="s-aList">
                <h3 class="aname" >{{ v.aname }}</h3>
                <div class="type">{{ v.tname }}</div>
                <div class="acontent" >{{ v.content }}</div>
            </div>

        </div>
    </div>    
</template>
<script>
export default {
    name: 'indexArticle',
    data(){
        return{
            arr:[]
        }
    },
    created(){
        var _this = this;
        
        this.$axios({
            url: 'http://localhost/blog/blog.php',
            method: 'post',
            params: {
                parameter: "indexArticle",  
            }
        }).then((res)=>{
            console.log(res.data);
            _this.arr = res.data;
        })
    }
}
</script>
<style scoped>
    #indexArticle{
        /* display: inline; */
        float: left;
        width: 65%;
        max-height: 100%;
        
    }
    .aList{
        width:100%;
        
        height: 100px;
    }
    .s-aList{
        max-width: 95%;
        border: 1px solid;
        height: 95%;
        margin: 0 auto;
        word-break: break-all;

        overflow: hidden;
    }
    .type{
        width:80px;
        height:20px;
        background: #999;
        border: 0;
        float: left;
        display: block;
        text-align: center;
        margin-left: 30px;
        color: white;
        margin-top: 2px;
        
    }
    .aname{
        float:left
    }
    .acontent{
        clear:both
    }
</style>