import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component
({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {

  username: string = '';

  constructor
  (
    private route: ActivatedRoute,library: FaIconLibrary
  )
  {
    library.addIcons( faHome);
  }

  ngOnInit(): void
  {
    this.route.params.subscribe(params =>
    {
      this.username = params['username'];
    });
  }

}
