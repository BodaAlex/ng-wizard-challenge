import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-button',
  templateUrl: './wizard-button.component.html',
  styleUrls: ['./wizard-button.component.css'],
})
export class WizardButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public buttonActive1: boolean = true;
}
