<template>

    <div id="index">
        
        <bigHead />
        <div id="bigBody">
            <leftList></leftList>
            <indexArticle></indexArticle>
        </div>
    </div>

</template>
<script>
    import bigHead from '../components/bigHead'
    import leftList from '../components/left-list'
    import indexArticle from '../components/indexArticle'

    export default {

        name: "index",
        data() {
            return {
                backImg:require("../assets/1.jpg")
            }
        },
        components: {
            bigHead,
            leftList,
            indexArticle
        },
        methods: {

        },

    }
</script>
<style scoped>
    
    #index {
        
    }

    #bigBody {
        max-width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        background: white;
    }

    #index {
       background-image: url("../assets/1.jpg");
       background-repeat: no-repeat;
       background-size: 100% 100%;
       background-attachment: fixed;
    }

</style>