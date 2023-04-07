import { Component } from "@angular/core";

@Component({
  selector: "app-success-alert",
  templateUrl: "./success-alert.component.html",
  // styleUrls: ['./success-alert.component.css'],
  styles: [
    `
      .alert {
        color: rgb(0, 152, 0);
        text-transform: uppercase;
        font-weight: bold;
      }
    `,
  ],
})
export class SuccessAlertComponent {}
