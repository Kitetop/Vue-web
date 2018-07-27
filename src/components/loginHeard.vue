<template>
    <div>
        <el-button size="mini" type="text" @click="goLogin" plain>登录</el-button>
        <el-button size="mini" type="text" plain>注册</el-button>
    </div>
</template>

<script>
    export default {
        name: "loginHeard",
        methods: {
            goLogin() {
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>

</style>