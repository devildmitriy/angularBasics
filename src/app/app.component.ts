import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Хочу выучить angular',
      text: 'я все еще учу компоненты',
      id: 1
    },
    // {
    //   title: 'Следующий блок ',
    //   text: 'про дерективы и пайпы',
    //   id: 2
    // }
  ]

  ngOnInit(): void {
  
  }

  updatePosts(post: Post) {
    //this.posts = [post,...this.posts]
    this.posts.unshift(post)
  }

  removePost (id: number){
    console.log(id)
    this.posts = this.posts.filter(postItem => postItem.id !== id)
  }
}

