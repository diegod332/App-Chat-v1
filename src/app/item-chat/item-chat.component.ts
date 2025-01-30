import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-chat',
  templateUrl: './item-chat.component.html',
  styleUrls: ['./item-chat.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ItemChatComponent implements OnInit {

  @Input() username: string = "";
  @Input() message: string = ""; 
  @Input() date: string = "";
  @Input() avatarUrl: string = "";

  constructor() { }

  ngOnInit() {}
}