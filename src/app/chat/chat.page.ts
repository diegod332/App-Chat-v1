import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ItemChatComponent } from '../item-chat/item-chat.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ItemChatComponent]
})
export class ChatPage implements OnInit {

  chats: any[] = [
    {
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'Jaime HR',
      message: 'Bienvenido al curso de DMM',
      date: '13:28'
    },
    {
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'Usuario 2',
      message: '¡Hola! Estoy bien, ¿y tú?',
      date: '13:30'
    },
    {
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      username: 'Usuario 1',
      message: 'Todo bien, gracias.',
      date: '13:32'
    }
  ];

  constructor() { }

  ngOnInit() {}
}