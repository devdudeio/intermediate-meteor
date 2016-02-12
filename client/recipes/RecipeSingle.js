Template.RecipeSingle.onCreated(function () {
    var self = this;
    self.autorun(function () {
        const id = FlowRouter.getParam('id');
        self.subscribe('singleRecipe', id);
    });
});

Template.RecipeSingle.helpers({
    recipe: ()=> {
        const id = FlowRouter.getParam('id');
        return Recipes.findOne({_id: id});
    }
});
