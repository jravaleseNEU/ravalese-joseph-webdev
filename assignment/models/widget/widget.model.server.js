var mongoose = require("mongoose");
var widgetSchema = require("./widget.schema.server");
var db = require("./database");
var widgetModel = mongoose.model("widgetModel", widgetSchema);
widgetModel.createWidget = createWidget;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.findWidgetById = findWidgetById;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModle.reorderWidgets = reorderWidgets;

module.exports = widgetModel;

function createWidget(pageId, widget) {

    return widgetModel.create(widget);
}

function updateWidget(widgetId, widget) {

    return widgetModel.update({_id: widgetId},
        {$set: widget});
}

function deleteWidget(widgetId) {
    return widgetModel.delete({_id: widgetId});
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}
// Not Finished
function findAllWidgetsForPage(pageId) {
    return widgetModel.findById(userId)
}

function reorderWidgets(pageId, start, end) {

}