import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-time',
  templateUrl: './resource-time.component.html',
  styleUrls: ['./resource-time.component.css']
})
export class ResourceTimeComponent {
  selectedOption!: string;
  minutes: number = 0;


  get isFixedTimeSelected(): boolean {
    return this.selectedOption === 'fixed';
  }


  increaseMinutes() {
    this.minutes++;
  }

  decreaseMinutes() {
    if (this.minutes > 0) {
      this.minutes--;
    }
  }
}
