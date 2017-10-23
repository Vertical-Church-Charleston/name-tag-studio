import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tag-component', 'Integration | Component | tag component', {
  integration: true
});

test('it renders first and last name', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('data',{firstName:"Jordan",lastName:"Riser"});

  this.render(hbs`{{tag-component data=data}}`);

  assert.equal(this.$().find('.first-name').text(), 'Jordan');
  assert.equal(this.$().find('.last-name').text(), 'Riser');


  // // Template block usage:
  // this.render(hbs`
  //   {{#tag-component}}
  //     template block text
  //   {{/tag-component}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
