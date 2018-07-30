<template>
    <div>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-card class="box-card">
                    <span class="text">{{title}}</span>
                </el-card>
            </el-col>
            <el-col :span="12" :offset="6" v-for="(item , index) in result"
                    :key="item.question"
            >
                <el-card class="box-card">
                    <div class="clearfix question">
                        <span>{{item.question}}</span>
                    </div>
                    <div class="answer item" v-for=" (chose,key) in item.choseValue">
                        <div v-if="item.type ==='radio'">
                            <template>
                                <el-radio v-model="item.answer[0]" :label="chose"></el-radio>
                            </template>
                        </div>
                        <div v-if="item.type ==='checkbox'">
                            <template>
                                <el-checkbox v-model="item.answer[key]" :label="chose"></el-checkbox>
                            </template>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4" :offset="7">
                <el-button style="width: 100%" @click="submit" type="primary" plain>提交投票</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import qs from 'qs'
    export default {
        name: "addResult",
        props: ['voteId', 'userId'],
        data() {
            return {
                title: '',
                result: [],
                chose: {
                    voteId: this.voteId,
                    result:[]
                }
            }
        },
        created() {
            this.getResult();
        },
        methods: {
            submit() {
                this.changeForm();
                this.axios({
                    url: "http://10.0.20.190:8090/vote/v1/result_v1",
                    method: 'POST',
                    headers: {'content-type': 'application/x-www-form-urlencoded'},
                    data: qs.stringify(this.chose),
                }).then(res => {
                    alert('投票成功，感谢你的参与');
                    this.change();
                }).catch(err => {
                    alert('请勿重复提交');
                    this.change();
                });
            },
            changeForm() {
                for (var i = 0; i < this.result.length; i++) {
                    this.chose.result.push(this.result[i].answer);
                    if (this.result[i].type != 'checkbox') {
                        continue;
                    }
                    for (var k = 0; k < this.result[i].choseValue.length; k++) {
                        if (this.result[i].answer[k] === true) {
                            this.result[i].answer[k] = this.result[i].choseValue[k];
                        }
                    }
                }
            },
            getResult() {
                this.axios({
                    url: 'http://10.0.20.190:8090/vote/v1/result_v1?voteId=' + this.voteId,
                    method: 'GET',
                }).then(res => {
                    this.title = res.data.title;
                    for (var i = 0; i < res.data.result.length; i++) {
                        this.result.push({
                            choseValue: [],
                            type: '',
                            question: '',
                            answer: [], //用来存储选项值
                        });
                        this.result[i].question = res.data.result[i].question;
                        for (var key in res.data.result[i]) {
                            if (key === 'question' || key === 'type') {
                                continue;
                            }
                            this.result[i].choseValue.push(key);
                        }
                        this.result[i].type = res.data.result[i].type;
                    }
                }).catch(err => {

                })
            },
            change(){
                this.$emit('change')
            }
        }
    }
</script>

<style scoped>
    .text {
        font-size: 18px;
        color: sandybrown;
    }

    .question {
        font-size: 14px;
        color: lightblue;
    }

    .answer {
        font-size: 14px;
        color: black;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 480px;
    }
</style>