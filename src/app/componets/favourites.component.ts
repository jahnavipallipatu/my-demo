import { Component, OnInit } from '@angular/core';


export enum Key {
  FAVORITES = 'favorites'
}
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
