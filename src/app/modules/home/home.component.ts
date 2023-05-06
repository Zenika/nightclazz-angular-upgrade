import { Component, OnInit } from '@angular/core';
import { CitiesService } from "../../shared/services/cities.service";
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [NgFor, RouterLink]
})
export class HomeComponent implements OnInit {

  cities: string[] = [];

  constructor(protected citiesService: CitiesService) { }

  ngOnInit(): void {
    this.cities = this.citiesService.getCities().map(c => c.name);
  }

}
