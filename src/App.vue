<template>
        <router-view></router-view>
</template>

<script>
    import userCenter from './pages/userCenter'
    import myLogin from './pages/myLogin'

    export default {
        name: "App",
        components: {
            userCenter,
            myLogin,
        },
        data () {
            return {
                show: userCenter,
                username:'',
            }
        },
        methods:{
            login(){
                this.show = myLogin;
            },
            success(username){
                this.username = username;
                this.show = userCenter;
            }
        }
    }
</script>

<style scoped>

</style>