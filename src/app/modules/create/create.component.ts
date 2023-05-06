import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import {CitiesService} from "../../shared/services/cities.service";
import {Router} from "@angular/router";
import {GeoPosition} from "../../core/domain/geo-position";
import {NgIf} from '@angular/common'

interface CreateForm {
  name: FormControl<string>
  latitude: FormControl<number>
  longitude: FormControl<number>
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ]
})
export default class CreateComponent implements OnInit {
  public form!: FormGroup<CreateForm>;

  constructor(protected fb: FormBuilder, protected citiesService: CitiesService, protected router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.nonNullable.group({
      name: ['', Validators.required],
      latitude: [0, [Validators.required, Validators.pattern(/^\d+.?\d*$/), Validators.max(180), Validators.min(-180)]],
      longitude: [0, [Validators.required, Validators.pattern(/^\d+.?\d*$/), Validators.max(180), Validators.min(-180)]],
    })
  }

  createCity() {
    const cityToAdd = this.form.getRawValue();
    this.citiesService.addCity({name: cityToAdd.name, position: new GeoPosition(cityToAdd.latitude, cityToAdd.longitude)});
    this.router.navigate(['/']);
  }
}
