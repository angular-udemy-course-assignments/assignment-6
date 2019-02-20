import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSub: string;
  user: any = {};
  submitted = false;

  @ViewChild('f') subForm: NgForm;

  onSubmit() {
    console.log(this.subForm.form.value);
    this.user.email = this.subForm.form.value.email;
    this.user.password = this.subForm.form.value.password;
    this.user.sub = this.subForm.form.value.subscription;

    this.submitted = true;
    this.subForm.reset();
  }

  ngOnInit(): void {
    this.defaultSub = this.subscriptions[1];
  }
}
