import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params){
      console.log(params);
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      console.log(question);
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', question.id);
    },
    updateAnswer(answer, params){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          answer.set(key, params[key]);
        }
      });
      answer.save();
      this.transitionTo('question', answer.question.id);
    },
    deleteAnswer(answer){
      console.log(answer);
      answer.destroyRecord();
      this.transitionTo('question', answer.question.id);
    }
  }
});
