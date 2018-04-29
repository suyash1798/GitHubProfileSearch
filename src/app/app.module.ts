import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {GithubProfileService} from './services/github-profile.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GithubProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
