import { Component, OnInit } from '@angular/core';
import { CitiesService } from "../../shared/services/cities.service";
import { RouterLinkWithHref } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [NgFor, RouterLinkWithHref]
})
export class HomeComponent implements OnInit {

  cities = [];

  constructor(protected citiesService: CitiesService) { }

  ngOnInit(): void {
    this.cities = this.citiesService.getCities().map(c => c.name);
  }

  login() {

  }
}
