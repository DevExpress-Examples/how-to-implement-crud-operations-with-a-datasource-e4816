Application1.Index = function (params) {
    var viewModel = {
        dSource: new DevExpress.data.DataSource(Application1.db),
        btnEditClick: function (id, name) {
            var uri = app.router.format({
                view: 'editView',
                categoryId: id,
                categoryName: name
            });
            app.navigate(uri);
        },
        btnDeleteClick: function (id) {
            var self = this;
            Application1.db.remove(id).done(function (data) {
                if (data)
                    viewModel.dSource.load();
            });
        },
        btnAddClick: function (e) {
            app.navigate('addView');
        },
        viewShown: function (e) {
            if (e.direction == 'backward')
                this.dSource.load();
        }
    };
    return viewModel;
};