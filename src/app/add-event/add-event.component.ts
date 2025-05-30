import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventService} from '../event.service';
import {Router} from '@angular/router';
import {MatFormField, MatHint, MatInput, MatLabel} from '@angular/material/input';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatChip, MatChipsModule} from '@angular/material/chips';
import {MatCardSubtitle} from '@angular/material/card';
import {MatOption, MatRipple} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {MatSelect} from '@angular/material/select';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-add-event',
  imports: [
    MatFormField,
    MatHint,
    MatIcon,
    MatIconModule,
    MatLabel,
    MatLabel,
    MatInput,
    MatChipsModule,
    MatCardSubtitle,
    MatRipple,
    MatRipple,
    MatRipple,
    FormsModule,
    MatOption,
    MatSelect,
    MatButton
  ],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

  constructor(private service : EventService , private router : Router) {

  }

  data ={
    eventname: "",
    description: "",
    type : ""
  }

  addEvent() {
    this.service.addEvent(this.data).subscribe({
      next: (result) => {

        this.router.navigate(['/home'])

      }
    })

  }



}
