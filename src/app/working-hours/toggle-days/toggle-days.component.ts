import { Component } from '@angular/core';
import 'bootstrap-timepicker';

@Component({
  selector: 'app-toggle-days',
  templateUrl: './toggle-days.component.html',
  styleUrls: ['./toggle-days.component.css']
})
export class ToggleDaysComponent {
  isDayActivated!: boolean;
  elementRef: any;


  toggleTimePicker(event: any, day: { id: string; name: string; activated?: boolean; }) {
    const checkbox = event.target as HTMLInputElement;
    day.activated = checkbox.checked;

    if (checkbox && checkbox.checked) {
      this.isDayActivated = true;
    } else {
      this.isDayActivated = false;
    }

    if (day.activated === undefined) {
      day.activated = false;
    }
  }

  days = [
    { id: 'day1', name: 'component6.saturday', activated: false, cloned: false },
    { id: 'day2', name: 'component6.sunday', activated: false, cloned: false  },
    { id: 'day4', name: 'component6.tuesday', activated: false, cloned: false  },
    { id: 'day5', name: 'component6.wednesday', activated: false, cloned: false },
    { id: 'day6', name: 'component6.thursday', activated: false, cloned: false  },
    { id: 'day7', name: 'component6.friday', activated: false, cloned: false  }
  ];

  copyToClipboard() {
    const textToCopy = 'Your content to be copied';
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Text copied successfully
      console.log('Text copied to clipboard');
    }).catch((error) => {
      // Error occurred while copying
      console.error('Error copying text to clipboard:', error);
    });
  }



  cloneRow(day: any) {
    day.cloned = true;
  }

  removeClonedRow(day: any) {
    day.cloned = false;
  }

}
