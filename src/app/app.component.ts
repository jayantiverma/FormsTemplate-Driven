import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myName = "Jayanti";
  title = 'FormsTemplate';
  onSubmit(value: any) {
    console.log(value);
  }
}
