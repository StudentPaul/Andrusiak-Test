import { Component, OnInit } from '@angular/core';
import { EnquiryType } from './shared/contact-us.model';
import { ContactUsService } from './shared/contact-us.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent implements OnInit {

  enquiryTypes: EnquiryType[];
  imageConfig = {
    minWidth: 300,
    minHeight: 300,
    maxSize: 5 * 1024 * 1024
  };
  file: any;
  image: any;
  imageWidth: number;
  imageHeight: number;

  constructor(private contactUsService: ContactUsService, private http: Http) { }

  ngOnInit() {
    this.fetchTypes();
  }
  fetchTypes() {
    this.contactUsService.getEnquiryTypes()
      .subscribe(
        types => {
          this.enquiryTypes = types.data;
          console.log(this.enquiryTypes);
        },
        error => {console.log(error); }
      );
  }
  imageUpdated($event) {
    const files = $event.target.files || $event.srcElement.files;
    this.file = files[0];
    this.image = new Image();
    this.image.onload = event => {
      this.imageWidth = event.path[0].width;
      this.imageHeight = event.path[0].height;
      document.getElementById('file-label').style.backgroundImage = 'url(' + this.image.src + ')';
    };
    this.image.src = window.URL.createObjectURL(this.file);
    // const formData = new FormData();
    // formData.append('file', this.file);
    //
    // const headers = new Headers({});
    // const options = new RequestOptions({ headers });
    // const url = environment.apiUrl + '/support';
    //
    // this.http.post(url, formData, options).subscribe(res => {
    //   alert('callback');
    // });
  }

}
