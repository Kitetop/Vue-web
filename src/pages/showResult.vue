<template>
<div>
    <el-row>
        <el-col :span="12" :offset="6">
            <el-card class="box-card">
                <div class="clearfix">
                    <span></span>
                    <el-button style="float: right; padding: 3px 0" type="text" ></el-button>
                </div>
                <div class="text item">
                </div>
            </el-card>
        </el-col>
    </el-row>
    <el-button @click="change">确定</el-button>
</div>
</template>

<script>
    export default {
        name: "showResult",
        props:['voteId'],
        data() {
            return {
                answer:[],
                question:[],
            }
        },
        created() {
            this.id = this.$route.params.id;
            this.getResult();
        },
        methods: {
            getResult() {
                console.log('id===', this.voteId);
                this.axios({
                    url: 'http://10.0.20.190:8090/vote/v1/result_v1?voteId=' + this.voteId,
                    method: 'GET',
                }).then(res => {
                    console.log('res====', res.data);
                    res.data.result.forEach(item => {
                        for(var key in item){
                            this.answer.push(key);
                            // if()
                        }
                        console.log(this.answer);
                    })
                }).catch(err => {
                    console.log('err====', err);
                })
            },
            change() {
              this.$emit('change');
            },
        }
    }
</script>

<style scoped>

</style>