import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<p> You have succeeded!!! Great Job. <p>`,
  styles: ['p {padding:20px; background-color:green;']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
