import { test } from 'qunit';
import moduleForAcceptance from 'name-tags/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | tags');

test('List view shows 2 tags', function(assert) {
  server.createList('tag', 2);
  visit('/tags');

  andThen(function() {
    assert.equal( find('.tag-component').length, 2 );
  });
});

test('Shows a message to create first name tag when list is empty', function(assert) {
  visit('/tags');

  andThen(function() {
    assert.equal( find('.tag-component').length, 0 );
    assert.equal( find('.no-tags').length, 1 );
  });
});

test('Clicking "New" button links to the new tag page', function(assert){
  visit('/tags');
  click('button.add-new');

  andThen(function(){
    assert.equal(currentRouteName(),'tags.list.new');
  })
})

test('Clicking a tag "Edit" button links to the edit tag page', function(assert){
  server.create('tag');
  visit('/tags');
  click('.tag-component .edit-button');

  andThen(function(){
    assert.equal(currentRouteName(),'tags.list.edit');
  })
})

test('Clicking a tag "Edit" button links to the edit tag page', function(assert){
  server.create('tag');
  server.create('tag');
  visit('/tags');
  click('.tag-component:first .delete-button');

  andThen(function(){
    assert.equal(find('.tag-component').length, 1);
  })
})
