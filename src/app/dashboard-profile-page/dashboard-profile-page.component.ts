import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordDialogComponent } from '../change-password-dialog/change-password-dialog.component';
import { ChangeUsernameDialogComponent } from '../change-username-dialog/change-username-dialog.component';
import { ChangeEmailDialogComponent } from '../change-email-dialog/change-email-dialog.component';
import { HttpClient } from '@angular/common/http';
import { ChangeProfilePicDialogComponent } from '../change-profile-pic-dialog/change-profile-pic-dialog.component';
import { ChangeAddressDialogComponent } from '../change-address-dialog/change-address-dialog.component';

@Component
({
  selector: 'app-dashboard-profile-page',
  templateUrl: './dashboard-profile-page.component.html',
  styleUrl: './dashboard-profile-page.component.css'
})

export class DashboardProfilePageComponent {

  username: string = '';
  profilePicUrl: string = '../../assets/images/default-profile.jpg';
  googlePic: string= '../../assets/images/google-logo.jpg';
  address: string = 'xyz-4, p-road, area, locality, city, State, Country (PIN : 123456)';
  email: string = "";

  constructor
  (
    private route: ActivatedRoute,
    library: FaIconLibrary,
    private dialog: MatDialog,
    private http: HttpClient
  )
  {
    library.addIcons( faHome);
  }

  ngOnInit(): void
  {
    this.route.params.subscribe(params =>
    {
      this.username = params['username'];
      console.log('Username received from route:', this.username);
    });

    this.fetchUserProfile();
  }

  fetchUserProfile(): void
  {
    console.log('Fetching user profile for:', this.username);
    this.http.get<{ profilePicUrl: string, address: string, email: string }>
    (`http://localhost:3000/api/users/profile/${this.username}`)
    .subscribe
    ({
      next: (user) =>
      {
        this.profilePicUrl = `http://localhost:3000/${user.profilePicUrl}`;
        this.address = user.address;
        this.email = user.email;
        console.log('Profile Picture URL: ', this.profilePicUrl);
        console.log('Address :', this.address);
        console.log('Email: ', this.email);

      },
      error: (error) =>
      {
        console.error('Error fetching user profile:', error);
      }
    });
  }

  openChangePasswordDialog(username:string): void
  {
    this.dialog.open
    (
      ChangePasswordDialogComponent,
      {
        data: { username: this.username }
      }
    );
  }

  openChangeUsernameDialog(username:string): void
  {
    this.dialog.open
    (
      ChangeUsernameDialogComponent,
      {
        data: { username: this.username }
      }
    );
  }

  openChangeEmailDialog(): void
  {
    this.dialog.open
    (
      ChangeEmailDialogComponent
    );
  }

  openChangeProfilePicDialog(): void
  {
    this.dialog.open
    (
      ChangeProfilePicDialogComponent,
      {
        data: { username: this.username }
      });
  }

  openChangeAddressDialog(): void
  {
    this.dialog.open
    (
      ChangeAddressDialogComponent,
      {
        data: { username: this.username }
      });
  }

}
