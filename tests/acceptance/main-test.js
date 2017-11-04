import { test } from 'qunit';
import moduleForAcceptance from 'name-tags/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main');

test('Clicking "Get Started" button links to the tags list page', function(assert){
  visit('/');
  click('button.get-started');

  andThen(function(){
    assert.equal(currentRouteName(),'tags.list.index');
  })
});