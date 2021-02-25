import { Directive, Input, ComponentRef, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { InputTextComponent } from 'src/app/components/input-text/input-text.component';
import { InputSelectComponent } from 'src/app/components/input-select/input-select.component';
import { FormGroup } from '@angular/forms';
import { FormControlBase } from '../controls/form-control-base';

const components = {
  'texbox': InputTextComponent,
  'select': InputSelectComponent
};

@Directive({
  selector: '[appDynamicFormInput]'
})
export class DynamicFormInputDirective implements OnInit {


  @Input() input: FormControlBase<any>;
  @Input() form: FormGroup;

  component: ComponentRef<any>;

  constructor(
    public container: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) { }

    ngOnInit() {
      this.loadComponent();
    }

  /**
   * Load component dinamically
   */
  private loadComponent() {    
    if (this.input && this.input.controlType) {
      const component = this.resolver.resolveComponentFactory<any>(components[this.input.controlType]);
      this.component = this.container.createComponent(component);
      this.component.instance.input = this.input;
      this.component.instance.form = this.form;
    }
  }

}
