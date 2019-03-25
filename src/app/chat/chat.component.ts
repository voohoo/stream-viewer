import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import Message from './Message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Message[];
  chatForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.messages = [];
    this.createForm();
  }

  createForm() {
    this.chatForm = this.fb.group({
      text: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.messages.push({ username: 'Voohoo', text: 'hi :)' });
    this.messages.push({ username: 'Huanway', text: 'sup' });
  }

}
