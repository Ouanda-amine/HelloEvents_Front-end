import {Component, OnInit} from '@angular/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatButton, MatIconButton} from '@angular/material/button';
import {EventService} from '../event.service';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardModule} from '@angular/material/card';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';

interface Event {
  id: number;
  eventname: string;
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
    NgForOf,
    RouterLink,
    MatToolbarRow,
    MatInput,
    MatIconButton,
    MatIcon,
    MatIcon
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements  OnInit {

  ArrayEvents : Event[] = []
  filtredEvents = [...this.ArrayEvents]




  constructor(private service : EventService ) { }

  ngOnInit(): void {
    this.service.getAllEvents().subscribe(data=>{
      this.ArrayEvents = data;
      this.filtredEvents = [...this.ArrayEvents];


    })
  }

  filtrer(search: string) {
    this.filtredEvents = this.ArrayEvents.filter((event) =>
      event.type.toLowerCase().includes(search.toLowerCase()),



    );
  }





}
