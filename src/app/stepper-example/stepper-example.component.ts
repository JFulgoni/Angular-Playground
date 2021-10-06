import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-example',
  templateUrl: './stepper-example.component.html',
  styleUrls: ['./stepper-example.component.css']
})
export class StepperExampleComponent implements OnInit {

  isLinear = false;
  firstStepFormGroup: FormGroup;
  secondStepFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.firstStepFormGroup = this.createStep1Form();
    this.secondStepFormGroup = this.createStep2Form();
  }

  createStep1Form() {
    return new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  createStep2Form() {
    return new FormGroup({
      addressLine1: new FormControl('', [Validators.required]),
      addressLine2: new FormControl('', [Validators.required])
    });
  }

}
