import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-reservation',
  templateUrl: './multi-reservation.component.html',
  styleUrls: ['./multi-reservation.component.css']
})
export class MultiReservationComponent {

  selectedAppointment!: string;

  get isAppointmentSelected(): boolean {
    return this.selectedAppointment === 'multi';
  }

}
