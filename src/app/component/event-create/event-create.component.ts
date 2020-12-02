import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  pname:string;
  feedback:string;
  constructor(private eventService : EventService) { 
    this.pname = '';
    this.feedback = '';
  }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.eventService.submit(this.pname,this.feedback);
    this.pname='';
    this.feedback='';
  }
}
