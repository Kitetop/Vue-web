<template>
    <div id="app">
        <my-login></my-login>
    </div>
</template>

<script>
    import MyLogin from "./pages/MyLogin";
    export default {
        name: 'App',
        components: {
            'my-login':MyLogin
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
