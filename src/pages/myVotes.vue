<template>
    <div>
        <el-row v-for="item in votes.list" :key="item.id" v-show="! showComponent">
            <el-col :span="12" :offset="6">
                <el-card class="box-card">
                    <div class="clearfix">
                        <span>{{item.title}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="getResult(item.id)">查看详情</el-button>
                    </div>
                    <div class="text item">
                        {{item.time}}
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <component :is="showComponent" :voteId="queryId" @change="change"/>
    </div>
</template>

<script>
    import showResult from './showResult'
    import {HOST} from '../apiRoot'
    export default {
        name: "myVotes",
        data() {
            return {
                id: '', //userId
                queryId: '',//将要查询的投票编号
                showComponent:'',
                votes: {
                    pages: '',
                    list: [],
                    prev: '',
                    next: '',
                },
                list: []
            }
        },
        created() {
            this.id = this.$route.params.userId;
            this.getVotes();
        },
        methods: {
            getVotes() {
                this.axios({
                    url: HOST + "showlist_v1?userId=" + this.id,
                    method: "GET",
                }).then(res => {
                    this.votes.pages = res.data.meta.pages;
                    this.votes.prev = res.data.prev;
                    this.votes.next = res.data.next;
                    res.data.list.forEach(item => {
                        this.votes.list.push({
                            id: item.id,
                            title: item.title,
                            time: item.createTime,
                        });
                    });
                }).catch(err => {
                });
            },
            getResult(id) {
                this.queryId = id;
                this.showComponent = showResult;
            },
            change() {
              this.showComponent = '';
            },
        },
    }
</script>
<style scoped>
    .text {
        font-size: 11px;
        color: green;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 480px;
    }
</style>