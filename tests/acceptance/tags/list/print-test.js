import { test } from 'qunit';
import moduleForAcceptance from 'name-tags/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | tags/index/new');

test('should display a list of tags to print', function(assert) {
  visit('/tags/print');

  andThen(function() {
    assert.equal( find('.print-section').length, 1 );
  });
});