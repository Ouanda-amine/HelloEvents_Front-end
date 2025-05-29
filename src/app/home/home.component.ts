import {Component, OnInit} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import {EventService} from '../event.service';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardModule} from '@angular/material/card';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {NgForOf} from '@angular/common';

interface Event {
  id: number;
  name: string;
  description: string;
  type: string;

}

@Component({
  selector: 'app-home',
  imports: [
    MatToolbar,
    MatButton,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
    MatChipSet,
    MatChip,
    MatCardFooter,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements  OnInit {

  ArrayEvents : Event[] = []

  constructor(private service : EventService ) { }

  ngOnInit(): void {
    this.service.getAllEvents().subscribe(data=>{
      this.ArrayEvents = data;

    })
  }



}
