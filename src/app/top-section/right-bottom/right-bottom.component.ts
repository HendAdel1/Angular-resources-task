
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-right-bottom',
  templateUrl: './right-bottom.component.html',
  styleUrls: ['./right-bottom.component.css']
})
export class RightBottomComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      type: ''
    });
  }
}
