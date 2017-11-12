import { test } from 'qunit';
import moduleForAcceptance from 'name-tags/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | tags/index/new');


test('should render a form section and display section', function(assert) {
  visit('/tags/new');

  andThen(function() {
    assert.equal( find('.input-section').length, 1 );
    assert.equal( find('.display-section').length, 1 );
  });
});

test('updating first name should update first name on name tag display',function(assert){
  visit('/tags/new');
  fillIn('input#first-name','Jordan');
  andThen(function(){
    assert.equal(find('.display-section .tag-component .first-name').text(),'Jordan');
  });
});

test('should not list a record without saving',function(assert){
  visit('/tags/new');
  andThen(function(){
    visit('/tags');
    andThen(function(){
      assert.equal(find('.tag-component').length, 0);
    });
  });
});

test('should push record into print list on save',function(assert){
  visit('/tags/new');
  fillIn('input#first-name','Jordan');
  fillIn('input#last-name','Riser');
  click('button[type=submit]');
  andThen(()=>{
    let route = this.application.__container__.lookup('route:tags/list/new');
    assert.equal(route.get('printList.list.length'),1,'pushes the tag into the array');
    assert.equal(find('.print-list .count').text().trim(),'1','displays the count of the print list');
    assert.equal(find('input').val(),'','clears inputs for next input');
  });
});