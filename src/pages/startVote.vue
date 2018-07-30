<template>
    <div>
        <el-row v-for="item in votes.list" :key="item.id" v-show="! showComponent">
            <el-col :span="12" :offset="6">
                <el-card class="box-card">
                    <div class="clearfix">
                        <span>{{item.title}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="addResult(item.id)">参加投票</el-button>
                    </div>
                    <div class="text item">
                        {{item.time}}
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <component :is="showComponent"
                   :voteId="voteId"
                   :userId="id"
                   @change="change"/>
    </div>
</template>

<script>
    import addResult from './addResult'
    export default {
        name: "startVote",
        data() {
            return {
                id: '', //用户编号
                voteId: '', //投票编号
                showComponent: '', //显示的组件
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
                    url: "http://10.0.20.190:8090/vote/v1/showlist_v1?all=true&userId=" + this.id,
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
            addResult(id) {
                this.voteId = id;
                this.showComponent = addResult;
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