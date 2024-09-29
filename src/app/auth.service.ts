import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginAgainPleaseDialogComponent } from './login-again-please-dialog/login-again-please-dialog.component';

@Injectable
({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = 'http://localhost:3000/api/users';
  private sessionTimeout = 0.2 * 60 * 1000;
  private sessionTimer: any; // To hold the session timer reference

  constructor
  (
    private http: HttpClient,
    private router: Router,
    private dialog: MatDialog
  )
  {}

  login(credentials: { username: string; password: string }): Observable<any>
  {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  signUp(data: { username: string; email: string; password: string }): Observable<any>
  {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  private isLocalStorageAvailable(): boolean
  {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  storeUserData(username: string, profilePicUrl: string)
  {
    if (this.isLocalStorageAvailable())
    {
      localStorage.setItem('username', username);
      localStorage.setItem('profilePicUrl', profilePicUrl);
      const loginTime = new Date().getTime().toString();
      localStorage.setItem('loginTime', loginTime);

      this.startSessionTimer();
    }
  }

  private startSessionTimer()
  {
    this.sessionTimer = setTimeout(() =>
    {
      this.logout();
    },this.sessionTimeout);
  }

  private resetSessionTimer()
  {
    clearTimeout(this.sessionTimer);
    this.startSessionTimer();
  }

  getUsername(): string
  {
    if (this.isLocalStorageAvailable())
    {
      return localStorage.getItem('username') || '';
    }
    return '';
  }

  getProfilePicUrl(): string
  {
    if (this.isLocalStorageAvailable())
    {
      return localStorage.getItem('profilePicUrl') || 'assets/images/default-profile.jpg';
    }
    return 'assets/images/default-profile.jpg';
  }

  isLoggedIn(): boolean
  {
    if (this.isLocalStorageAvailable())
    {
      const username = localStorage.getItem('username');
      const loginTime = localStorage.getItem('loginTime');

      if (username && loginTime)
      {
        const currentTime = new Date().getTime();
        const sessionDuration = currentTime - parseInt(loginTime, 10);

        if (sessionDuration < this.sessionTimeout)
        {
          this.resetSessionTimer();
          return true;
        }
        else
        {
          this.logout();
        }
      }
    }
    return false;
  }

  logout()
  {
    if (this.isLocalStorageAvailable())
    {
      localStorage.removeItem('username');
      localStorage.removeItem('profilePicUrl');
      localStorage.removeItem('loginTime');
    }
    this.router.navigate(['/login']).then(() =>
    {
      this.OpenLoginAgain();
    });

    clearTimeout(this.sessionTimer);
  }

  SignOut()
  {
    if (this.isLocalStorageAvailable())
    {
      localStorage.removeItem('username');
      localStorage.removeItem('profilePicUrl');
      localStorage.removeItem('loginTime');
    }

    clearTimeout(this.sessionTimer);
    this.router.navigate(['/login']);
  }

  OpenLoginAgain()
  {
    this.dialog.open(LoginAgainPleaseDialogComponent,
    {
      data:
      {
        message: 'Session Expired Login Again Please'
      }
    });
  }

}
