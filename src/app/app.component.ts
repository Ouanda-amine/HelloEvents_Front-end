import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButton, MatToolbar, RouterLink, MatIcon, MatIconButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloEventsFrontEnd';
}
