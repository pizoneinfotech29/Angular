import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
 Recipe: Recipe[] = [
  new Recipe('A Test Rexipe', 'This is simply a test', 'https://imgs.search.brave.com/uFyzvA6F5T8RdjUXuZaDBS80v-f_Agxrxw7QfD3NucQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzc1LzMxLzg1/LzM2MF9GXzM3NTMx/ODUwMl9NcjV3eU8w/c25pYWd1VUZkUVlE/ZVkweVBteldkWUxx/ay5qcGc' )
 ];

 constructor () {}

 ngOnInit(): void {

 }
}
