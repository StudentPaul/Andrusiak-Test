import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactUsService {

  headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': environment.testToken});
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getEnquiryTypes() {
    return this.http
      .get(environment.apiUrl + '/directories/enquiry-types', this.options)
      .map(response => {
        return response.json();
      });
  }

}
