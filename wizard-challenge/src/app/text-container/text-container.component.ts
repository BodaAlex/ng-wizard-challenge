import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-container',
  templateUrl: './text-container.component.html',
  styleUrls: ['./text-container.component.css'],
})
export class TextContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() textActive1: boolean;
  @Input() textActive2: boolean;
  @Input() textActive3: boolean;
}
