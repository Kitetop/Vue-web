<template>
    <div id="app">
        <input id="username" v-model="username" type="text">
        <input id="password" v-model="password" type="password">
        <input type="submit" @click="login" value="登录">
    </div>
</template>
<script>
    export default {
        name: 'root',
        data () {
            return {
                username:'',
                password:'',
            }
        },
        methods:{
            login:function(){
                console.log('hah');
                this.$http.post('http://10.0.20.190:8090/v1/login') //把url地址换成你的接口地址即可
                    .then(res => {
                        //this.request.response = res.data
                        this.username = res.data.data.username; //把取item的数据赋给 item: []中
                        console.log(res.data.data.username);
                        if (res.data.code == '0') {
                            console.log('haha');
                        }else{
                            alert('数据不存在');
                        }
                    })
                    .catch(err => {
                        alert('请求失败');
                    })
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    *{margin: 0;padding: 0;}
    @function torem($px){//$px为需要转换的字号
        @return $px / 100px * 1rem; //100px为根字体大小
    }
    ul{
        width: 100%;
        position: absolute;
        bottom: 0;
        li{
            width: torem(187.5px);
            float:left;
            height: torem(98px);
            text-align:center;
            background: #ccc;
        }
    }
    img{
        width: torem(200px);
        height: torem(200px);
    }
</style>