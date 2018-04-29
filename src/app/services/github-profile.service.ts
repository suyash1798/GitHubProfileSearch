import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubProfileService {

  private clientid = '1aeb117025c680d787c1';
  private clientsecret = 'afa552d5436d42850b2aedf17cd095feeace5fab';

  constructor(private http: HttpClient) { }

  getInfo(username: string) {
    return this.http.get('https://api.github.com/users/' + username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);
  }

  getRepo(username: string) {
    return this.http.get('https://api.github.com/users/' + username + '/repos' + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);
  }
}
