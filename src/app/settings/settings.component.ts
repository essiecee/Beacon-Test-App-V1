import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  checked: boolean = true;
  constructor(
    private formService: FormService
  ) { }

  ngOnInit() {
  }

}
