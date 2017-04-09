module.exports = {
    'GET /testapi': async (ctx, next) => {
        ctx.render('testapi.html');
    }
};