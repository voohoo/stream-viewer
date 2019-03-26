import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import Chat from './Chat';
import { ChatService } from './chat.service';
import { UserService } from  '../user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chats: Chat[];
  chatForm: FormGroup;

  constructor(private fb: FormBuilder,
      private cs: ChatService,
      private us: UserService) {
    this.chats = [];
    this.createForm();
  }

  createForm() {
    this.chatForm = this.fb.group({
      text: ['', Validators.required]
    });
  }

  addChat(text) {
    if (!text) return;
    
    let chat = new Chat();
    chat.username = this.us.getName();
    chat.text = text;
    this.cs.addChat(chat)
      .subscribe(data => {
        this.chatForm.get('text').setValue('');
        this.getChats();
      });
  }

  getChats() {
    this.cs.getChats()
      .subscribe((data: Chat[]) => {
        this.chats = data;
      });
  }

  getImageUrl() {
    return this.us.getImageUrl();
  }

  ngOnInit() {
    this.getChats();
  }

}
