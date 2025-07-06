# Adaptive Component

High-order utility function to extend the Lightning Web Component to support adaptive design.

The new class listens for media query changes and renders either the given desktop or mobile template.

The options object supports both desktop and mobile HTML templates, as well as a media query to match.

By default, the desktop media query is `min-width: 600px;`.

The examples directory contains a sample implementation.

```js
import { LightningElement } from 'lwc';
import mobile from './templates/mobile.html';
import desktop from './templates/desktop.html';
import AdaptiveComponent from 'c/adaptiveComponent';

export default class FdsDatatable extends AdaptiveComponent(LightningElement, {
  templates: {
    mobile,
    desktop
  },
  mediaQuery: '(min-width: 600px)'
}) {
  // ...
}
```

> Note: The AdaptiveComponent uses `connectedCallback` and `disconnectedCallback`, so don't forget to call its parent's instance via `super` to avoid overriding.
