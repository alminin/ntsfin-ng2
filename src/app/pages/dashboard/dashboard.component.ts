import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard.component.scss')],
  template: require('./dashboard.component.html')
})
export class DashboardComponent {

}
