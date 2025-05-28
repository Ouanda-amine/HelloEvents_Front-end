import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [
    MatToolbar,
    MatButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
