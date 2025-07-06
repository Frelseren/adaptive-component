/**
 * AdaptiveComponent is a higher-order component that extends a base class with
 * functionality to render a template for desktop and a template for mobile.
 * @param {Class} base - The base class to extend, typically a Lightning Web Component.
 * @param {Object} options - Options for the adaptive component.
 * @param {Object} options.templates - An object containing templates for different screen sizes.
 * @param {string} options.templates.mobile - The template for mobile view.
 * @param {string} options.templates.desktop - The template for desktop view.
 * @param {string} [options.mediaQuery='(min-width: 600px)'] - The media query to determine the screen size.
 * @returns {Class} - The extended class with adaptive rendering capabilities.
 */
export default function AdaptiveComponent(base, options) {
  class AdaptiveComponent extends base {
    desktopMediaQuery = window.matchMedia(options?.mediaQuery ?? '(min-width: 600px)');

    isDesktop = this.desktopMediaQuery.matches;

    handleMediaQueryChange(e) {
      this.isDesktop = e.matches;
    }

    constructor() {
      super();
    }

    connectedCallback() {
      this.handleMediaQueryChange = this.handleMediaQueryChange.bind(this);
      this.desktopMediaQuery.addEventListener('change', this.handleMediaQueryChange);
    }

    disconnectedCallback() {
      this.desktopMediaQuery.removeEventListener('change', this.handleMediaQueryChange);
    }

    render() {
      return this.isDesktop ? options.templates.desktop : options.templates.mobile;
    }
  }

  return AdaptiveComponent;
}