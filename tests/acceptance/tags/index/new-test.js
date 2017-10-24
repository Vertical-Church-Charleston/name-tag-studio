import { test } from 'qunit';
import moduleForAcceptance from 'name-tags/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | tags/index/new');

test('visiting /tags/index/new', function(assert) {
  visit('/tags/new');

  andThen(function() {
    assert.equal(currentURL(), '/tags/new');
  });
});
