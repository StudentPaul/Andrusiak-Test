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
  postFormData(description: string, email: string,
               enquiryType: string, file: File, subject: string, username: string ) {
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    formData.append('description', description);
    formData.append('email', email);
    formData.append('enquiry_type', enquiryType);
    formData.append('user_name', username);
    formData.append('subject', subject);
    const headers = new Headers({});
     const options = new RequestOptions({ headers });
     const url = environment.apiUrl + '/support';
    return this.http
      .post(url, formData, options)
      .map(response => {
        return response.json();
      });
  }

}
