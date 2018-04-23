Application1.editView = function (params) {
    var viewModel = {
        categoryId: params.categoryId,
        categoryName: ko.observable(params.categoryName),
        btnSaveClick: function (e) {
            var category = {
                CategoryID: viewModel.categoryId,
                CategoryName: viewModel.categoryName()
            }
            Application1.db.update(category).done(function (data) {
                app.back();
            });
        }
    };
    return viewModel;
};