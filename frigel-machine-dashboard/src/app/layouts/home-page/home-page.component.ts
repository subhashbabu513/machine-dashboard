import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material';
import { ParentErrorStateMatcher } from 'src/app/validators';

@Component({
  selector: 'app-default',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  sideBarOpen = true;
  inputValueForm: FormGroup;
  toggleName = 'MACHINE ON';
  showForm = false;

  parentErrorStateMatcher = new ParentErrorStateMatcher();
  @Output() changed = new EventEmitter<boolean>();


  validationMessages = {
    value: [
      { type: 'required', message: 'Value is required and value should be in the range between 10 to 15' }
    ],
  };


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForms();
    this.showForm = true;
  }

  onChange(event: MatSlideToggleChange) {
    if (event.checked === false) {
    this.toggleName = 'MACHINE OFF';
    // when machine is off disabling dashboard and enabling the form
    setTimeout(() => {
      this.inputValueForm.get('value').setValue(1);
    }, 2000);

    } else {
      this.toggleName = 'MACHINE ON';
    }
}
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  createForms() {
    // input value form validations
    this.inputValueForm = this.fb.group({
      value: ['', [Validators.max(15), Validators.min(10), Validators.required] ],
    });
  }
}
