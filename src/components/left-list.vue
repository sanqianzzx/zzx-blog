<template>
    <div id="l-list">
        <div class="type">文章类别
            <ul >
                <li v-for="(v,k) in type" :key="k">
                    <div class="list">
                            {{ v.tname }}
                    </div>
                    </li>
            </ul>
        </div>
        <div class="type">
            联系我们
        </div>
    </div>
</template>

<script>
export default {
    name:"left-list",
    data(){
        return{
            type:[]
        }
    },
    created(){
       
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
    #l-list{
        width:15%;
        height:100%;
        background:white;
        border-right: 1px solid #EDEDED;
        float: left;
    }
    li{
        list-style: none;
        color: #999;
        font-size: 20px;
    }
    .list{
        height:50px;
        text-align: left ;
        position: relative;
        top:20px;
        left: 20px;
    }
    .type{
        font-size: 18px;
        position: relative;
        top: 40px;
        left: 10px;
        margin-bottom: 10px;
        
    }
</style>