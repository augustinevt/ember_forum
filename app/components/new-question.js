import Ember from 'ember';

export default Ember.Component.extend({
  formShow: false,
  actions: {
    showForm(){
      this.set('formShow', true);
    },
    save(){
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        author: this.get('author')
      };
      this.set('formShow', false);
      this.sendAction('save', params);
    }
  }
});
