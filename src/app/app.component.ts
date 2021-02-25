import { Component, OnInit } from '@angular/core';
import { FormControlBase } from './shared/controls/form-control-base';
import { Observable } from 'rxjs/internal/Observable';
import { FormControlService } from './shared/services/form-control-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormControlService]
})
export class AppComponent implements OnInit {

  data$: Observable<FormControlBase<string>[]>;
  title = 'dynamic-forms';

  constructor(private service: FormControlService) {
  }

  ngOnInit() {
    debugger;
    const control = this.service.controls.find(x => x.key === 'Gender');
    this.loadGenderOptions(control);
    this.data$ = this.service.getFormControls();
  }

  loadGenderOptions(control) {
    control.options = [
      {
        key: 'Male',
        value: 'male'
      },
      {
        key: 'Female',
        value: 'female'
      }
    ];
  }
}
