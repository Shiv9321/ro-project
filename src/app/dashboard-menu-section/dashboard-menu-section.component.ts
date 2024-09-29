import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import
{
  faHome, faPersonWalking, faShoppingBag,
  faContactCard, faHeadphonesSimple, faSignOut
} from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordDialogComponent } from '../change-password-dialog/change-password-dialog.component';
import { ChangeUsernameDialogComponent } from '../change-username-dialog/change-username-dialog.component';
import { ChangeEmailDialogComponent } from '../change-email-dialog/change-email-dialog.component';
import { HttpClient } from '@angular/common/http';
import { ChangeProfilePicDialogComponent } from '../change-profile-pic-dialog/change-profile-pic-dialog.component';
import { AuthService } from '../auth.service';

@Component
({
  selector: 'app-dashboard-menu-section',
  templateUrl: './dashboard-menu-section.component.html',
  styleUrl: './dashboard-menu-section.component.css'
})

export class DashboardMenuSectionComponent implements OnInit {

  username: string = '';
  profilePicUrl: string = '../../assets/images/default-profile.jpg';
  googlePic: string= '../../assets/images/google-logo.jpg';

  constructor
  (
    private route: ActivatedRoute,
    library: FaIconLibrary,
    private dialog: MatDialog,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  )
  {
    library.addIcons
    (
      faHome, faPersonWalking, faContactCard,
      faShoppingBag, faHeadphonesSimple, faSignOut
    );
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
    this.http.get<{ profilePicUrl: string }>
    (`http://localhost:3000/api/users/profile/${this.username}`)
    .subscribe
    ({
      next: (user) =>
      {
        this.profilePicUrl = `http://localhost:3000/${user.profilePicUrl}`;
        console.log('Profile Picture URL:', this.profilePicUrl);
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

  SignOut(): void
  {
    this.authService.SignOut();
  }

}

