import Component from '@glimmer/component';
import HelloWorld from 'some-svelte-lib/Hello.svelte';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ExampleComponent extends Component {
  theSvelteComponent = HelloWorld;

  @tracked message = 'hello world';

  @action toggle() {
    if (this.message === 'hello') {
      this.message = 'goodbye';
    } else {
      this.message = 'hello';
    }
  }
}
