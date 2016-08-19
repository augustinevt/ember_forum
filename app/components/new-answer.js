import Ember from 'ember';

export default Ember.Component.extend({
  formShow: false,
  actions: {
    showForm(){
      this.set('formShow', true);
    },
    save(){
      var params = {
        body: this.get('body'),
        author: this.get('author'),
        upvotes: 1,
        downvotes: 1,
        question: this.get('question')
      };
      this.set('formShow', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
