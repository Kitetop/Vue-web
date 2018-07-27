<template>
    <div>
        <component
           :is="show"
           @login="login"
           @success="success"
           :username="username"
        />
        <!--<my-login></my-login>-->
        <!--<user-center></user-center>-->
        <!--<router-view></router-view>-->
    </div>
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