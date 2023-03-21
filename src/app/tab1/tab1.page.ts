import { Component } from '@angular/core';
import { EventsService } from '../services/events.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public data:any = [];
  public handlerMessage= '';
  public roleMessage = '';

  constructor(private eventsService:EventsService,
    private alertController: AlertController) {

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

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alert!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'Alert canceled';
            },
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              this.handlerMessage = 'Alert confirmed';
            },
          },
        ],
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      this.roleMessage = `Dismissed with role: ${role}`;
    }
  }
