import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://imgs.search.brave.com/ILP8Axc-jUb386S9QBror42xDt3zc0VY0W93v8JkC7g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zOTUt/Mzk1MTIxMV9teS1y/ZWNpcGVzLWxvZ28t/cG5nLXRyYW5zcGFy/ZW50LW15LXJlY2lw/ZXMtbG9nby5wbmc'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://imgs.search.brave.com/ILP8Axc-jUb386S9QBror42xDt3zc0VY0W93v8JkC7g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zOTUt/Mzk1MTIxMV9teS1y/ZWNpcGVzLWxvZ28t/cG5nLXRyYW5zcGFy/ZW50LW15LXJlY2lw/ZXMtbG9nby5wbmc')
  ];

  constructor() { }

  ngOnInit() {
  }

}
