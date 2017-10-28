import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'punchline-section',
  templateUrl: './punchline.component.html',
  styleUrls: ['./punchline.component.css']
})
export class PunchlineComponent implements OnInit {

  @Output() readMore = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  readMoreClicked() {
    console.log("ReadMoreClicked");
    this.readMore.emit();
  }

}
