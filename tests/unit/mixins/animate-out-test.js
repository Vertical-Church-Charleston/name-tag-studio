import Route from '@ember/routing/route';
import AnimateOutMixin from 'name-tags/mixins/animate-out';
import { module, test } from 'ember-qunit';

module('Unit | Mixin | animate out');

// Replace this with your real tests.
test('it works', function(assert) {
  let AnimateOutRoute = Route.extend(AnimateOutMixin);
  let subject = AnimateOutRoute.create();
  assert.ok(subject);
});
