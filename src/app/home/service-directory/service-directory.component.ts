import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service';
import { Category } from '../shared/home.model';

@Component({
  selector: 'app-service-directory',
  templateUrl: './service-directory.component.html',
  styleUrls: ['./service-directory.component.sass']
})
export class ServiceDirectoryComponent implements OnInit {

  categories: Category[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.fetchCategories();
  }
  fetchCategories() {
    this.homeService.getCategories()
      .subscribe(
        categories => {
          this.categories = categories;
          console.log(this.categories);
        },
        error => {console.log(error); }
      );
  }

}
