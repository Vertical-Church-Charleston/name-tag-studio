import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('tag-component', 'Unit | Component | tag component', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it generates a template class name', function(assert) {

  // Creates the component instance
  let component = this.subject();
  // Renders the component to the page
  component.set('data',{template:1});
  assert.equal(component.get('templateName'),'template-1');
});

test('it generates a background url', function(assert) {

    // Creates the component instance
    let component = this.subject();
    // Renders the component to the page
    component.set('data',{template:1});
    assert.equal(component.get('backgroundImage'),"background-image: url('images/name-tag-backs/name-tag-1.svg')");
  });
