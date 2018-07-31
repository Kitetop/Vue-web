var HOST = 'http://10.0.20.190:8090/vote/v1/';

//根据实际环境来动态的设置HOTS地址
// if (process.env.NODE_ENV === 'production') {
//     HOST = 'http://10.0.20.190/vote/v1';
// } else if (process.env.NODE_ENV === 'test') {
//     HOST = 'http://192.168.30.101:7003/v1/';
// } else {
//     HOST = 'http://staging-umai-umai-api.duxze.cn/v1/';
// }

exports.HOST = HOST;
exports.TIMEOUT = 5000; // 接口默认超时时间
