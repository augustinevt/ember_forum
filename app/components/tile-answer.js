import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvote(answer){
      console.log('first');
      this.sendAction('upvote', answer);
    },
    downvote(answer){
      console.log('first');
      this.sendAction('downvote', answer);
    },
  }
});
