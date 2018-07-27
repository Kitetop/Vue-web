<template>
    <div>
        <div>
            <el-card class="box-card">
                <div class="clearfix">
                    <span>{{votes.list[0]}}</span>
                    <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
                </div>
                <div class="text item"></div>
            </el-card>
        </div>
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
        created () {
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
                    for (var key in res.data.list) {
                        this.votes.list [key] = {
                            id: res.data.list[key].id,
                            title: res.data.list[key].title,
                            time: res.data.list[key].createTime,
                        }
                    }
                }).catch(err => {
                    console.log(err);
                });
            },
        },
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 480px;
    }
</style>