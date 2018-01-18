import { Component, } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: `
    <p> This is a warning, You are in danger! <p>`,
  styles: [
    `
    p {
         padding: 20px;
         background-color:mistyrose;
    }
    `
  ]
})
export class WarningAlertComponent {

  constructor() { }


}
