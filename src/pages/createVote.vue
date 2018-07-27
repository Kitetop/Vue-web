<template>
    <div>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-form label-width="100px" class="demo-dynamic">
                    <el-form-item label="问卷标题">
                        <el-input v-model="voteText.title"></el-input>
                    </el-form-item>
                </el-form>
                <div :model="voteText" ref="voteText" v-for="(question,que) in voteText.vote">
                    <el-form label-width="100px" class="demo-dynamic">
                        <el-form-item
                                :label="'问题 '+ (que+1)"
                        >
                            <el-input v-model="question.question"></el-input>
                            <template>
                                <el-radio v-model="question.type" label="radio">单选</el-radio>
                                <el-radio v-model="question.type" label="checkbox">多选</el-radio>
                            </template>
                        </el-form-item>
                        <el-form-item
                                v-for="(select,index) in question.chose"
                                :label="'选项 '+ (index+1)"
                                :key="select.key"
                        >
                            <el-input v-model="question.chose[index]"></el-input>
                            <el-button @click.prevebt="removeChose(select,que)">删除</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="info" plain style="width: 100%" @click="addChose(que)"> 新增选项</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-form label-width="100px" class="demo-dynamic">
                    <el-form-item>
                        <el-button style="width: 100%" @click="addQuestion" type="primary"> 新增问题</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button style="width: 100%" type="primary" @click="submit">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        name: "createVote",
        data() {
            return {
                voteText: {
                    title: '',
                    userId: '',
                    vote: [{
                        chose: [''],
                        question: '',
                        type: '',
                    }]
                },
            };
        },
        methods: {
            removeChose(chose, index) {
                var list = this.voteText.vote[index].chose.indexOf(chose);
                if (list != -1) {
                    this.voteText.vote[index].chose.splice(list, 1)
                }
            },
            addChose(index) {
                this.voteText.vote[index].chose.push('');
            },
            addQuestion() {
                this.voteText.vote.push({
                    chose: [''],
                    question: '',
                    type: '',
                });
            },
            submit() {
                this.voteText.userId = this.id;
                $.ajax({
                    type: "post",
                    url: "http://10.0.20.190:8090/vote/v1/vote_v1",
                    dataType: 'json',
                    async: true,
                    data: this.voteText,
                    contentType: "application/x-www-form-urlencoded",//默认值
                    success: function (data, textStatus) {
                        console.log(data, textStatus);
                    },
                    error: function (xhr, status, errMsg) {
                        console.log(xhr, status, errMsg);
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>