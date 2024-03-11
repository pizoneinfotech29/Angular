import { Component } from '@angular/core';
import { PostService } from './services/post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prj-api';

  posts:any;

  /**
   *
   */
  constructor(private post: PostService) { }

  ngOnInit(): void {
       this.post.getPosts().subscribe(response =>{
        this.posts = response;
        console.log(this.posts);
       })

  }


}
