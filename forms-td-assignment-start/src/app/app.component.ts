import {Component, OnInit, ViewChild} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSub: string;

  @ViewChild('f') subForm: NgModel;

  onSubmit() {
    console.log(this.subForm);
  }

  ngOnInit(): void {
    this.defaultSub = this.subscriptions[1];
  }
}
