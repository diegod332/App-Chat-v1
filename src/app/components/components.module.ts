import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ItemChatComponent } from '../item-chat/item-chat.component';
import { ChatPage } from '../chat/chat.page';
import { ChatPageRoutingModule } from '../chat/chat-routing.module';

@NgModule({
  declarations: [
    ItemChatComponent,
    ChatPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ChatPageRoutingModule
  ],
  exports: [
    ItemChatComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }