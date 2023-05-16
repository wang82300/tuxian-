// 导入mockjs
const Mock = require('mockjs');

// 调用mock方法,生成模拟数据
let data = Mock.mock({
    id:'@id',
    username:'@cname',
    date:'@date(yyyy-MM-dd)',
    description: '@paragraph()',
    email:'@email',
    'age|18-40':0
})

// console.log(data);

module.exports = function(app) {
    app.use('/api/userinfo', (req, res) => {
        // 将模拟的数据转成json格式返回给浏览器
        res.json(data)
    })
}