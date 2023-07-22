import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-search',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  protected country?:string;
  protected city?:string;

  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.city = this.route.snapshot.paramMap.get('city') ?? undefined;
    this.country = this.route.snapshot.paramMap.get('country') ?? undefined;
  }
}
