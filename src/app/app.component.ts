import { Component, NgZone } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'stream-viewer';

  constructor(private _loadingBar: SlimLoadingBarService,
      private _router: Router,
      ngZone: NgZone,
      private us: UserService) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });

    window['onSignIn'] = user => {
      ngZone.run(() => this.onSignIn(user))
    };
  }
  
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }

  private onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    this.us.setProfile(profile);

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    this.us.setIdToken(id_token);
  }

}
