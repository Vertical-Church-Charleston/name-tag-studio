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
