import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    this.profile = null;
    this.id_token = null;
  }

  setProfile(profile) {
    this.profile = profile;
    console.log(this.profile);
  }

  setIdToken(id_token) {
    this.id_token = id_token;
    console.log(this.id_token);
  }

  getId() {
    return this.profile.getId();
  }

  getName() {
    return this.profile.getName();
  }

  getGivenName() {
    return this.profile.getGivenName();
  }

  getFamilyName() {
    return this.profile.getFamilyName();
  }

  getImageUrl() {
    return this.profile.getImageUrl();
  }

  getEmail() {
    return this.profile.getEmail();
  }

}
