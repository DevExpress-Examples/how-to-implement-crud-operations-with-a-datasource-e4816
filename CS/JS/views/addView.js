Application1.addView = function (params) {
    var viewModel = {
        categoryName: ko.observable(),
        btnSaveClick: function (e) {
            var category = {
                CategoryID: 0,
                CategoryName: viewModel.categoryName()
            }
            Application1.db.insert(category).done(function (data) {
                app.back();
            });
        }
    };
    return viewModel;
};