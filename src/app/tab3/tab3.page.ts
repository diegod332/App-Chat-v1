import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tab3Page {

  calls: any[] = [
    {
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'Jaime HR',
      date: '13:28',
      type: 'incoming'
    },
    {
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'Usuario 2',
      date: '13:30',
      type: 'outgoing'
    }
  ];

  constructor() {}

}