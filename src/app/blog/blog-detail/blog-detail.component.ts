import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
          console.log(params);
        });
    }

}
