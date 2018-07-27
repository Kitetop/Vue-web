<template>
    <div>
        <el-row v-for="item in votes.list" :key="item.id">
            <el-col :span="12" :offset="6">
                <el-card class="box-card">
                    <div class="clearfix">
                        <span>{{item.title}}</span>
                        <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
                    </div>
                    <div class="text item">
                        {{item.time}}
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        // name: "myVotes",
        data() {
            return {
                id: '',
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
            console.log("votes:", this.votes);
        },
        watch: {
            votes: function () {
                console.log("change");
                list = votes.list;
                console.log(votes.list);
            }
        },
        methods: {
            getVotes() {
                this.axios({
                    url: "http://10.0.20.190:8090/vote/v1/showlist_v1?userId=" + this.id,
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
                        console.log(item);
                    });
                }).catch(err => {
                    console.log(err);
                });
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