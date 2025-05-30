import { Component } from '@angular/core';
import {ClientService} from '../client.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-add-client',
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton
  ],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {



  constructor(private service : ClientService , private router : Router) {
  }

  data = {

    firstName: "",
    lastName: "",
    email: "",
    password: ""

  }

  addClient(){
    this.service.AddClient(this.data).subscribe({
      next: (result)=>{
        this.router.navigate(['/client'])
      }
    })
  }



}
