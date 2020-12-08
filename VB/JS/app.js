window.Application1 = window.Application1 || {};

$(function() {
    app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application1,
        navigationType: Application1.config.navigationType,
        navigation: Application1.config.navigation
    });
    app.router.register(':view/:categoryId/:categoryName', { view: 'editView', categoryId: undefined, categoryName: undefined });
    app.router.register(':view/:id', { view: 'Index', id: undefined });
    app.navigate('Index');
});

