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
  userName = '';
  displayButton = false;
  log = [];

  //public showSecretPassword() {
  //  if (this.displayButton) {
  //    this.displayButton = false;
  //  }
  //  else {
  //    this.displayButton = true;
  //  }
  //}

  onToggleDetails() {
    this.displayButton = !this.displayButton;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

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
