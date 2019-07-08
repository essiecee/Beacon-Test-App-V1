import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { FormService } from '../form.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  showID: boolean;
  showName: boolean;
  showBirthday: boolean;
  showSex: boolean;

  constructor(
    private fb: FormBuilder,
    private formService: FormService
    ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      studyID: '',
      name: '',
      dateOfBirth: '',
      sex: '',
    })

    this.myForm.valueChanges.subscribe(console.log)

    this.showID = this.formService.getShowID();
    this.showName = this.formService.getShowName();
    this.showBirthday = this.formService.getShowBirthday();
    this.showSex = this.formService.getShowSex();
  }

}
