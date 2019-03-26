import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  id_token: String;
  id: String;
  name: String;
  givenName: String;
  familyName: String;
  imageUrl: String;
  email: String;

  constructor() {
    this.id_token = null;
    this.id = null;
    this.name = null;
    this.givenName = null;
    this.familyName = null;
    this.imageUrl = null;
    this.email = null;
  }

  setProfile(profile) {
    console.log(profile);
    this.id = profile.getId();
    this.name = profile.getName();
    this.givenName = profile.getGivenName();
    this.familyName = profile.getFamilyName();
    this.imageUrl = profile.getImageUrl();
    this.email = profile.getEmail();
  }

  setIdToken(id_token) {
    this.id_token = id_token;
    console.log(this.id_token);
  }

  isLogged() {
    return this.id_token !== null;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getGivenName() {
    return this.givenName;
  }

  getFamilyName() {
    return this.familyName;
  }

  getImageUrl() {
    return this.imageUrl;
  }

  getEmail() {
    return this.email;
  }

}
