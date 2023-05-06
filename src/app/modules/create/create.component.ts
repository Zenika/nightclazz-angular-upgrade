import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {CitiesService} from "../../shared/services/cities.service";
import {Router} from "@angular/router";
import { GeoPosition } from "../../core/domain/geo-position";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf]
})
export class CreateComponent implements OnInit {
  public form: UntypedFormGroup;

  constructor(protected fb: UntypedFormBuilder, protected citiesService: CitiesService, protected router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      latitude: ['', [Validators.required, Validators.pattern(/^\d+.?\d*$/), Validators.max(180), Validators.min(-180)]],
      longitude: ['', [Validators.required, Validators.pattern(/^\d+.?\d*$/), Validators.max(180), Validators.min(-180)]],
    })
  }

  createCity() {
    const cityToAdd = this.form.value;
    this.citiesService.addCity({name: cityToAdd.name, position: new GeoPosition(cityToAdd.latitude, cityToAdd.longitude)});
    this.router.navigate(['/']);
  }
}
