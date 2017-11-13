import { test } from 'qunit';
import moduleForAcceptance from 'name-tags/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | tags/index/new');

test('should route to list if nothing is in the print list',function(assert){
  visit('/tags/print')
  andThen(function(){
    assert.equal(currentRouteName(),'tags.list.index');
  })
})