<template>
    <el-row>
        <el-col :span="8" :offset="8">
            <div style="margin: 20px;"></div>
            <el-form :label-position="labelPosition" label-width="80px">
                <el-form-item label="用户名" for="username">
                    <el-input id="username" v-model="username"></el-input>
                </el-form-item>
                <el-form-item label="密码" for="password">
                    <el-input id="password" type="password" v-model="password"></el-input>
                </el-form-item>
            </el-form>
            <el-col :span="21" :offset="3">
                <el-button style="width: 100%" type="primary" @click="login">登录</el-button>
            </el-col>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        data() {
            return {
                labelPosition: 'right',
                username: '',
                password: '',
            };
        },
        methods: {
            login() {
                this.axios({
                    url: "http://10.0.20.190:8090/vote/v1/login",
                    method: "POST",
                    params: {
                        username: this.username,
                        password: this.password
                    }
                }).then(res => {
                    this.$router.push('/user/' + this.username +'/'+res.data.id);
                }).catch(err => {
                    alert('账号或者密码错误，请确认信息');
                    this.password = null;
                });
             }
        }
    }
</script>
<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .el-col {
        border-radius: 4px;
    }
</style>
