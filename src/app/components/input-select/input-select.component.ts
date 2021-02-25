import { Component, OnInit, Input } from '@angular/core';
import { FormControlBase } from 'src/app/shared/controls/form-control-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {

  @Input() input: FormControlBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
