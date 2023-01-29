# Example: Invoking Svelte Components from Ember

This repo contains a runnable demo that shows how to invoke a Svelte component from an Ember app.

## Run it

1. `pnpm install`
2. `cd app && pnpm run start`

## Understand it

 - `some-svelte-lib` is intended to stand in for your library package that contains a Svelte component.
 - `app` is the Ember app
   - it contains a `{{svelte}}` element modifier that can [render a Svelte component](./app/app/components/example.hbs) into any dom element.
   - the modifier is implemented in [app/modifiers/svelte.js](./app/app/modifiers/svelte.js).
   - in order to import the Svelte component into the Ember app, we [configure ember-auto-import with Svelte support](./app/ember-cli-build.js). The same webpack config could be passed to `@embroider/compat` instead, if you're using Embroider rather than the classic build pipeline.


## Gotchas

 - this example assumes your Svelte component is in a separate NPM package, so we're importing it via `ember-auto-import`. If instead you want to make Svelte components work *inside* your app's own package, you would need to move `svelte-loader` into the app's own babel config.
 - remember to install `ember-modifier`. It's not part of the default Ember app blueprint.
 - make sure your app declares its dependency on your library, otherwise ember-auto-import won't be able to import it. 
 - It's a good idea for the library to declare a peerDependency on `svelte` so that it will definitely share the app's copy.
 
## References
- [svelte-loader](https://github.com/sveltejs/svelte-loader)
- [Svlete client-side component API](https://svelte.dev/docs#run-time-client-side-component-api)
