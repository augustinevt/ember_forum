import Ember from 'ember';

export default Ember.Component.extend({
  formShow: false,
  actions: {
    showForm(){
      this.set('formShow', true);
    },
    updateAnswer(answer){
      var params = {
        body: this.get('body'),
        author: this.get('author')
      };
      console.log(params);
      this.set('formShow', false);
      this.sendAction('updateAnswer', answer, params);
    },
    deleteAnswer(answer){
      if(confirm('are you sure?')){
        this.sendAction('deleteAnswer', answer);
      }
    },
  }
});
