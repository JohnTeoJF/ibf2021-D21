import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  ngOnInit(): void {
  }

  title = Date();
  myNumber: number;

  localTime: String = "";

  photo: String = "";
  showhide : boolean = false;
  buttonName : String = "Show it!"

  constructor() {
    this.myNumber = 88;
  }

  incNum() {
    this.myNumber += 1;
  }
  decNum() {
    this.myNumber -= 1;
  }

  getTime() {
    this.localTime = Date();

  }

  togglePhoto() {
      this.showhide = !this.showhide;

      // CHANGE THE NAME OF THE BUTTON.
      if(this.showhide)
        this.buttonName = "Hide it!";
      else
        this.buttonName = "Show it!";
    }

}
