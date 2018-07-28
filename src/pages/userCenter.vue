<template>
    <div>
        <el-row>
            <el-col :span="4" :offset="6">
                <el-menu  :default-active="index" class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1" @click="choseFunction(1)">我的投票</el-menu-item>
                    <el-menu-item index="2" @click="choseFunction(2)">发起投票</el-menu-item>
                    <el-menu-item index="3" @click="choseFunction(3)">开始投票</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="3" :offset="8" class="block-col-2">
                <login-heard v-show="!username"></login-heard>
                <el-menu v-show="username">
                    <el-dropdown trigger="click">
                        <p class="el-dropdown-link">
                            {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </p>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人资料</el-dropdown-item>
                            <el-dropdown-item>设置</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-menu>
            </el-col>
        </el-row>
        <router-view></router-view>
    </div>
</template>
<script>
    import createVote from './createVote'
    import loginHeard from '../components/loginHeard'
    import myVotes from './myVotes'
    import startVote from './startVote'

    export default {
        components: {loginHeard,myVotes, createVote},
        data() {
            return {
                id: '',
                index: '',
                username: '',
                chose1: '',
                chose2: '',
                chose3: '',
            };
        },
        created() {
            this.username = this.$route.params.username;
            this.id = this.$route.params.userId;
            let uri = this.$route.path.split('/')[1];
            if(uri === 'user'){
                this.index = '1';
            }else if(uri === 'vote'){
                this.index = '2';
            }else {
                this.index = '3';
            }
        },
        methods: {
            choseFunction(index) {
                if (index == 1) {
                    this.$router.push('/user/'+ this.username +'/' + this.id);
                } else if (index == 2) {
                    this.$router.push('/vote/'+ this.username +'/' + this.id);
                }
                else {
                    this.$router.push('/start/'+ this.username +'/' + this.id);
                }
            },
        }
    }
</script>
<style>
    .el-row {
        margin-bottom: 20px;
    }

    .el-col {
        border-radius: 4px;
    }
</style>
