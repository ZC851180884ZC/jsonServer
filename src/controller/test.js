const test = require('../../data/test')

module.exports = (req,res,next) =>{
    const testData = test()
    //自定义data
    testData.desc = '自定义data数据'
    res.success(testData)
}