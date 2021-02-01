import { Component } from '@angular/core';
import { FormControlBase } from './shared/interface/form-control-base';
import { Observable } from 'rxjs/internal/Observable';
import { FormControlService } from './shared/service/form-control-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormControlService]
})
export class AppComponent {

  data$: Observable<FormControlBase<string>[]>;
  title = 'dynamic-forms';

  constructor(service: FormControlService) {
    this.data$ = service.getFormControls();
  }
}
