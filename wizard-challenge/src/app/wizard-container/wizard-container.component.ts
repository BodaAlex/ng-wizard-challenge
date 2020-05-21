import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-container',
  templateUrl: './wizard-container.component.html',
  styleUrls: ['./wizard-container.component.css'],
})
export class WizardContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  active1: boolean = true;
  active2: boolean = false;
  active3: boolean = false;

  changeActive_Forward1 = (): void => {
    this.active1 = false;
    this.active2 = true;
  };
  changeActive_Forward2 = (): void => {
    this.active2 = false;
    this.active3 = true;
  };
  changeActive_Backward1 = (): void => {
    this.active1 = true;
    this.active2 = false;
  };
  changeActive_Backward2 = (): void => {
    this.active2 = true;
    this.active3 = false;
  };
}
