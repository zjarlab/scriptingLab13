import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  feedbackList = []
  constructor(private eventService : EventService) { }

  ngOnInit(): void {
    this.eventService.getFeedback();;
    this.eventService.getFeedbackUpdateListener().subscribe(data =>{
      this.feedbackList = data;
    })
  }
}
