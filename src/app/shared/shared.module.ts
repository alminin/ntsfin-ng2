import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

// Shared Directives and Pipes
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports:      [ CommonModule ],
  declarations: [ FooterComponent ],
  exports:      [ CommonModule, FormsModule, FooterComponent ]
})
export class SharedModule { }
