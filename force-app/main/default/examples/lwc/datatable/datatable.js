import { LightningElement } from 'lwc';
import mobile from './templates/mobile.html';
import desktop from './templates/desktop.html';
import AdaptiveComponent from 'c/adaptiveComponent';
import generateData from './generateData';

const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];

export default class Datatable extends AdaptiveComponent(LightningElement, {
  templates: {
    mobile,
    desktop
  },
  mediaQuery: '(min-width: 600px)'
}) {
  data = [];
  columns = columns;

  connectedCallback() {
      super.connectedCallback(); // Call the parent class's connectedCallback method to prevent overriding its functionality
      this.data = generateData({ amountOfRecords: 100 });
  }
}