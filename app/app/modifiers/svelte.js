import Modifier from 'ember-modifier';
import { registerDestructor } from '@ember/destroyable';

export default class SvelteModifier extends Modifier {
  modify(element, [svelteComponent], props) {
    // this is required , because Svelte appends to the DOM
    element.replaceChildren();
    this.component = new svelteComponent({
      target: element,
      props,
    });

    registerDestructor(this, () => this.component.$destroy());
  }
}
