var mongoose = require("mongoose");
var widgetSchema = require("./widget.schema.server");
var db = require("./database");
var widgetModel = mongoose.model("widgetModel", widgetSchema);
var pageModel = require("../page/page.model.server");

widgetModel.createWidget = createWidget;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.findWidgetById = findWidgetById;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.reorderWidgets = reorderWidgets;


module.exports = widgetModel;

function createWidget(pageId, widget) {

    widget._page = pageId;
    return widgetModel
        .create(widget)
        .then(function (newWidget) {
            return pageModel
                    .addWidget(pageId, newWidget._id)
        })
}

function updateWidget(widgetId, widget) {

    return widgetModel.update({_id: widgetId},
        {$set: widget});
}

function deleteWidget(pageId, widgetId) {
    return widgetModel
        .remove({_id: widgetId})
        .then(function (status) {
            return pageModel
                .deleteWidget(pageId, widgetId);
        });
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}

// Not Finished
function findAllWidgetsForPage(pageId) {
    return widgetModel.findById(pageId)
}

function reorderWidgets(pageId, start, end) {
    return pageModel
        .findPageById(pageId)
        .then(function (page) {
            page.widgets.splice(end, 0, page.widgets.splice(start, 1)[0]);
            page.save();
            page.update();

            return;
        }, function (err) {
            return err;
        });


}