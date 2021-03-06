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

test('Clicking a tag "Delete" removes it from the list', function(assert){
  server.create('tag');
  server.create('tag');
  visit('/tags');
  click('.tag-component .delete-button');

  andThen(function(){
    assert.equal(find('.tag-component').length, 1);
  })
})

test('Clicking a tag "Delete" removes it from the print list', function(assert){
  server.create('tag');
  visit('/tags');
  click('.tag-component .click-area');
  click('.tag-component .delete-button');

  andThen(()=>{
    let route = this.application.__container__.lookup('route:tags/list/new');
    assert.equal(route.get('printList.list.length'),0);
  })
})

test('Clicking a tag adds it to the print list',function(assert){
  server.create('tag');
  visit('/tags');
  click('.tag-component .click-area');
  andThen(()=>{
    var countEl = find('.print-list .count');
    assert.equal(countEl.text().trim(),'1');
  });
});

test('Clicking a tag after adding it to the print list removes it from the print list',function(assert){
  server.create('tag');
  visit('/tags');
  click('.tag-component .click-area');
  andThen(()=>{
    click('.tag-component .click-area');
    andThen(()=>{
      let route = this.application.__container__.lookup('route:tags/list/new');
      assert.equal(route.get('printList.list.length'),0);
    })
  });
});

test('Clicking the print list opens the print dialog',function(assert){
  server.create('tag');
  visit('/tags');
  click('.tag-component .click-area');
  click('.print-list');

  andThen(function(){
    assert.equal(find('.print-section').length, 1);
  });
});

test('Searching a name filters results',function(assert){
  server.create('tag',{
    firstName: 'George',
    lastName: 'Washington'
  });
  server.create('tag',{
    firstName: 'Abe',
    lastName: 'Lincoln'
  });
  visit('/tags');
  fillIn('#search','Washington');
  andThen(()=>{
    assert.equal( find('.tag-component').length, 1 );
  });
});

test('Command + A selects all tags', function(assert){
  server.create('tag',{
    firstName: 'George',
    lastName: 'Washington'
  });
  server.create('tag',{
    firstName: 'Abe',
    lastName: 'Lincoln'
  });
  visit('/tags');
  keyEvent(find('#ember-testing'), 'keypress', '65',{metaKey: true});
  andThen(()=>{
    var countEl = find('.print-list .count');
    assert.equal(countEl.text().trim(),'1');
  });
});

test('Should add all searched tags to print list',function(assert){
  server.create('tag',{
    firstName: 'George',
    lastName: 'Washington'
  });
  server.create('tag',{
    firstName: 'Abe',
    lastName: 'Lincoln'
  });
  visit('/tags');
  // set search term
  fillIn('#search','Washington');
  andThen(()=>{
    click('.select-all');
    andThen(()=>{
      var countEl = find('.print-list .count');
      assert.equal(countEl.text().trim(),'1');
      fillIn('#search','');
      andThen(()=>{
        click('.select-all');
        andThen(()=>{
          assert.equal(countEl.text().trim(),'2');
        })
      })
    })
  })
})

test('Shows Dropzone on toggle click',function(assert){
  visit('/tags')
  click('.import-names');
  andThen(()=>{
    assert.equal( find('.drop-zone').hasClass('show'), true );
  })
})