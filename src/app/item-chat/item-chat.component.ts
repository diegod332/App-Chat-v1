import { Component, Input, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-item-chat',
  templateUrl: './item-chat.component.html',
  styleUrls: ['./item-chat.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule] // Añade CommonModule aquí
})
export class ItemChatComponent implements OnInit {

@Input() username: string="";
@Input() message: string=""; 
@Input() date: string="";
@Input() avatarUrl: string="";


  constructor() { }

  ngOnInit() {}
}