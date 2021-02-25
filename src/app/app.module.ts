import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { DynamicFormInputDirective } from './shared/directives/dynamic-form-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    InputTextComponent,
    InputDateComponent,
    InputSelectComponent,
    DynamicFormInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
