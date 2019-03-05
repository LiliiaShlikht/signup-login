import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public activeTab: boolean = true;

  switchForm(event): void {
    event.preventDefault();
    this.activeTab = !this.activeTab;
  }
}
