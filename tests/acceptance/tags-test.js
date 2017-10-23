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
