import { Component, OnInit } from '@angular/core';
import {GithubProfileService} from '../services/github-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username;
  profile;
  repository;

  constructor(private github_profile: GithubProfileService) { }

  ngOnInit() {

  }

  search_profile(event) {
    // console.log(event.target.value);
    this.username = event.target.value;
    this.github_profile.getInfo(this.username).subscribe((profile) => {
        this.profile = profile;
    });

    this.github_profile.getRepo(this.username).subscribe((repository) => {
      //
      if (repository) {
        this.repository = repository;
      console.log(repository);
      }
    });
  }

}
