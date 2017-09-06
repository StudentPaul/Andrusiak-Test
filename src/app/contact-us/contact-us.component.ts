import { Component, OnInit } from '@angular/core';
import { EnquiryType } from './shared/contact-us.model';
import { ContactUsService } from './shared/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent implements OnInit {

  enquiryTypes: EnquiryType[];

  constructor(private contactUsService: ContactUsService) { }

  ngOnInit() {
    this.fetchTypes();
  }
  fetchTypes() {
    this.contactUsService.getEnquiryTypes()
      .subscribe(
        types => {
          this.enquiryTypes = types;
          console.log(this.enquiryTypes);
        },
        error => {console.log(error); }
      );
  }

}
