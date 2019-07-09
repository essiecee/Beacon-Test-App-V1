import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { FormService } from '../form.service';

// testing datepicker from ionic
//import { DatePicker } from '@ionic-native/date-picker/ngx';

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
    private formService: FormService,
    //private datePicker: DatePicker // testing ionic datepicker
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

    // this.datePicker.show({
    //   date: new Date(),
    //   mode: 'date',
    //   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    // }).then(
    //   date => console.log('Got date: ', date),
    //   err => console.log('Error occurred while getting date: ', err)
    // );
  }

}
