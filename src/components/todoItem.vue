<template>
<div>
    <div>
    <li class="item" @click="delect">{{item}}</li>
    </div>
</div>
</template>

<script>
    export default {
        name: 'todoItem',
        props:['item','index'],
        methods:{
            delect(){
                this.$emit('delect',this.index);
            }
        }
    };
</script>
<!--scoped 局部作用修饰符，样式只在这里面使用，不加会变成全局样式-->
<style scoped>
    .item{
        color: green;
    }
</style>