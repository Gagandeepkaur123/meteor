import { Meteor } from 'meteor/meteor';
import { Restivus } from 'meteor/nimble:restivus';

import { Moood } from '../../imports/collections/moood';
import { Api } from '../main.js';


Api.addRoute('moood', {authRequired: true}, {
  post: function() {
    console.log('never reachign..');
    const userId = this.userId;
    const user = Meteor.users.findOne(this.userId);
    console.log(this.userId,user,"user...");


    try{
      const mooodAdded = Moood.insert({ user: user, addedAt: new Date() });
    }
    catch(e) {
      console.log(e);
      return {
        statusCode: 500,
        message: e.message
      }
    }

    return {
      statusCode: 201,
      message: "Mood added successfully"
    }
  }
});
