import { test } from 'qunit';
import moduleForAcceptance from 'name-tags/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | tags/list/edit');

test('should render pre-filled input and display sections', function(assert) {
  var tag = server.create('tag',{firstName:"Jordan",lastName:"Riser",template:1});
  visit(`/tags/edit/${tag.attrs.id}`);

  andThen(function() {
    assert.equal( find('.input-section input#first-name').val(), 'Jordan');
    assert.equal( find('.input-section input#last-name').val(), 'Riser');
    assert.equal( find('.display-section .tag-component .first-name').text(), 'Jordan');
    assert.equal( find('.display-section .tag-component .last-name').text(), 'Riser');
  });
});
