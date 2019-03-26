import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import Chat from './Chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  uri = 'http://localhost:4000/chat';

  constructor(private http: HttpClient) { }

  addChat(chat: Chat) {
    return this.http.post(`${this.uri}/add`, chat);
  }

  getChats() {
    return this.http.get(`${this.uri}`);
  }

}
