import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormControlBase } from './../../shared/controls/form-control-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input()formData: FormControlBase<string>[];
  form: FormGroup;
  submitted: boolean;

  constructor() {}

  ngOnInit() {
    const formGroup = {};

    this.formData.forEach(formControl => {
      let validators = [];

      formControl.validators.forEach( validator => {
        debugger;
        const VALUE = (Number(validator.value));

        if (validator.key == 'required') {
          validators.push(Validators.required);
        }
        if ((validator.key).toLowerCase() == 'minlength') {
          validators.push(Validators.minLength(validator.value));
        }
        if ((validator.key).toLowerCase() == 'maxlength') {
          validators.push(Validators.maxLength(validator.value));
        }
        if (validator.key == 'pattern') {
          validators.push(Validators.pattern(validator.value));
        }

      });
      formGroup[formControl.key] = new FormControl(null, validators);
    });
    debugger;
    this.form = new FormGroup(formGroup);
  }

  submitForm() {
    this.submitted = true;
  }
}
