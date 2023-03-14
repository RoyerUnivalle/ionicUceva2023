import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public data:any = [];

  constructor(private eventsService:EventsService) {

    console.log('Hola tab 1');

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData();
  }

    public getData(){
      this.eventsService.getAllEvents()
      .subscribe(
        resp => {
            this.data = resp.eventos;
            console.log(this.data);
        },
        error => {
            console.log(error);
          }
        );
    }
  }
