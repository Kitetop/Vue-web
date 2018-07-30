<template>
    <div>
        <el-row v-for="(item ,index) in result"
                :key=index
        >
            <el-col :span="12" :offset="6">
                <el-card class="box-card">
                    <div class="clearfix">
                        <span>{{item.question}}</span>
                    </div>
                    <div class="text item" v-for=" (chose,key) in item.choseKey">
                        <span>{{chose}} :</span> <span>{{item.choseValue[key]}}</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-col :span="4" :offset="7">
            <el-button style="width: 100%" @click="change" type="success" plain>我知道了</el-button>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: "showResult",
        props: ['voteId'],
        data() {
            return {
                result: [],
                index: 0,
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.getResult();
        },
        methods: {
            getResult() {
                this.axios({
                    url: 'http://10.0.20.190:8090/vote/v1/result_v1?voteId=' + this.voteId,
                    method: 'GET',
                }).then(res => {
                    for (var i = 0; i < res.data.result.length; i++) {
                        this.result.push({
                                question: '',
                                choseKey: [],
                                choseValue: [],
                            },
                        )
                        this.result[i].question = res.data.result[i].question;
                        for (var key in res.data.result[i]) {
                            if (key === 'question') {
                                continue;
                            }
                            this.result[i].choseKey.push(key);
                            this.result[i].choseValue.push(res.data.result[i][key]);
                        }
                    }
                }).catch(err => {
                    alert('Some errors have occurred on the server');
                    this.change();
                })
            },
            change() {
                this.$emit('change');
            },
        }
    }
</script>

<style scoped>
    .text {
        font-size: 11px;
        color: dodgerblue;
    }

    .item {
        padding: 10px 0;
    }

    .box-card {
        width: 480px;
    }
</style>