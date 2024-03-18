import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  // posts = [
  //   {title:'First Post', contend:'This is a first post\'s content.'},
  //   {title:'Second Post', contend:'This is a second post\'s content.'},
  //   {title:'Third Post', contend:'This is a third post\'s content.'}
  // ];

  posts = [];
  
}
