<template>
    <div>
        <el-row>
            <el-col :span="4" :offset="6">
                <el-menu default-active="2" class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1" @click="choseFunction(1)">我的投票</el-menu-item>
                    <el-menu-item index="2" @click="choseFunction(2)">发起投票</el-menu-item>
                    <el-menu-item index="3" @click="choseFunction(3)">开始投票</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="3" :offset="8" class="block-col-2">
                <login-heard @goLogin="goLogin" v-show="!username"></login-heard>
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
        <component :is="currentView"></component>
    </div>
</template>
<script>
    import createVote from './createVote'
    import loginHeard from '../components/loginHeard'

    export default {
        components: {loginHeard, createVote},
        props: ['username'],
        data() {
            return {
                id: '',
                index: '',
                chose1: '',
                chose2: '',
                chose3: '',
                currentView: 'createVote',
            };
        },
        methods: {
            getParameterByName(_name) {
                let name = _name;
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                let results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            },
            choseFunction(index) {
                if (index == 2) {
                    this.currentView = createVote;
                } else {
                    alert('该组件还没有实现^_^');
                }
            },
            goLogin() {
                console.log('hjhhh');
                this.$emit('login');
            }
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
