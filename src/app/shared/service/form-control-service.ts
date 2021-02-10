import { FormControlBase } from '../controls/form-control-base';
import { TextboxControl } from '../controls/text-box-control';
import { EmailControl } from '../controls/email-control';
import { SelectControl } from '../controls/select-control';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class FormControlService {

  getFormControls() {
    const controls: FormControlBase<string>[] = [
      new TextboxControl({
        key: 'Username',
        type: 'textbox',
        label: 'Enter username',
        validators: [
          {
            key: 'required',
            value: true,
            text: 'nput required'
          },
          {
            key: 'minlength',
            value: 5,
            text: 'Minimum length is '
          }
        ]
      }),
    
      new TextboxControl({
        key: 'Telephone',
        type: 'tel',
        label: 'Enter Phone',
        validators: [
          {
            key: 'required',
            value: true,
            text: 'Input required'
          },
          {
            key: 'minlength',
            value: 7,
            text: 'Minimum length is '
          },
          {
            key: 'maxlength',
            value: 10,
            text: 'Maximus length is '
          }
        ]
      }),
    
      new EmailControl({
        key: 'Email',
        type: 'email',
        label: 'Enter email',
        validators: [
          {
            key: 'required',
            value: true,
            text: 'nput required'
          },
          {
            key: 'pattern',
            value: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
            text: 'Email format is incorrect'
          },
          {
            key: 'maxlength',
            value: 10,
            text: 'Maximus length is '
          }
        ]
      }),
    
      new SelectControl({
        key: 'Gender',
        label: 'Select Gender',
        options: [
          {
            key: 'Male',
            value: 'male'
          },
          {
            key: 'Female',
            value: 'female'
          }
        ],
        validators: [
          {
            key: 'required',
            value: true,
            text: "You have to select one option"
          }
        ]
    
      })
    
      /* {
        controlName: 'Vehicle you own',
        placeholder: 'Select vehicle',
        controlType: 'radio',
        options: [{
          optionName: 'I have a bike',
          value: 'bike'
        }, {
          optionName: 'I have a car',
          value: 'car'
        }],
        validators: {
          required: true
        }
      } */
    ];

    return of(controls.sort((a, b) => a.order - b.order));

  }

}
