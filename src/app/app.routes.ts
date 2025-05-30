import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddEventComponent} from './add-event/add-event.component';
import {ShowclientsComponent} from './showclients/showclients.component';
import {AddClientComponent} from './add-client/add-client.component';

export const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'home', component: HomeComponent},
  {path : 'addevent' , component : AddEventComponent},
  {path : 'client' , component : ShowclientsComponent},
  {path : 'addclient' , component : AddClientComponent}
];
