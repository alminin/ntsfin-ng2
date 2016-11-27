import './app.loader.ts';
import { Component, ViewEncapsulation } from '@angular/core';
import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from './theme/services';
import { layoutPaths } from './theme/theme.constants';
import { BaThemeConfig } from './theme/theme.config';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../node_modules/normalize.css/normalize.css', './app.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {

  isMenuCollapsed: boolean = false;

  // TODO add spinner service
  constructor(private _state: GlobalState) {

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngAfterViewInit(): void {
    // TODO hide spinner once all loaders are completed
    console.log('spinner was hiden');
  }
}
