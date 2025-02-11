import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text?: String;

  @Input() type = "default";
  @Input() link? : string;
  @Input() img? : string;
  @Input() color? : string;

  @Input() move = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickFunc(): void {
    if (this.link) {
      window.open(this.link, "_blank");
    }
  }

}
