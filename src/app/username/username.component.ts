import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-username",
  templateUrl: "./username.component.html",
})
export class UsernameComponent implements OnInit {
  username: string = "";

  ngOnInit() {}

  onUpdateUsername(event: any) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onResetUsername() {
    this.username = "";
  }
}
