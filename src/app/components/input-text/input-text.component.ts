import { Component, OnInit, Input } from '@angular/core';
import { FormControlBase } from 'src/app/shared/controls/form-control-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() input: FormControlBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
