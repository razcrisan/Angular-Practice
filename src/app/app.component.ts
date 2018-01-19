import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title: 'app';
  clickedSuccess = true;
  clickedWarning = true;
  public showSuccessMessage() {
    if (this.clickedSuccess) {
      this.clickedSuccess = false;
    }
    else {
      this.clickedSuccess = true;
    }
  }
  public showWarningMessage() {
    if (this.clickedWarning) {
      this.clickedWarning = false;
    }
    else {
      this.clickedWarning = true;
    }
  }
}
