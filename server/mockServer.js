/**
 * @file 对接开发环境mock server配置
 * @author chuntyang
 */
module.exports = function mockServer(req, res, next) {
    let path = req.path;
    path = path.charAt(0) === '/' ? '../mock' + path : '../mock/' + path;
    const reg = new RegExp('api');
    const regMock = new RegExp('mock');
    if (reg.test(path)) {
        try {
            const mockFn = require(path);
            // TODO模拟下网络延迟状况
             setTimeout(() => {
                res.end(JSON.stringify(mockFn(req, res)));
                // todo使用json形式模拟返回数据
                // res.send(require(`${path}.json`));
             }, 300);
            return;
        } catch (e) {
            console.log(e);
        }
    }
    return next();
};