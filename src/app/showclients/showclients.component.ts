import {Component, OnInit} from '@angular/core';
import {ClientService} from '../client.service';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatChip, MatChipSet} from '@angular/material/chips';
import {MatIconButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {MatToolbarRow} from '@angular/material/toolbar';
import {NgForOf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

interface client{
  firstName: string;
  lastName: string;
  email: string;
  password: string;

}

@Component({
  selector: 'app-showclients',
  imports: [
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardTitle,
    MatChip,
    MatChipSet,
    MatIcon,
    MatIconButton,
    MatInput,
    MatToolbarRow,
    NgForOf
  ],
  templateUrl: './showclients.component.html',
  styleUrl: './showclients.component.css'
})
export class ShowclientsComponent implements OnInit {

  ClientArray : client[] = []

  constructor(private service : ClientService) {

  }

  ngOnInit(): void {
    this.service.getAllClients().subscribe(client=>{
      this.ClientArray = client;
    })
  }



}
