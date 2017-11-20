import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogListComponent } from '../blog-list/blog-list.component';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { BlogCommentListComponent } from '../blog-comment-list/blog-comment-list.component';
import { BlogCommentDetailComponent } from '../blog-comment-detail/blog-comment-detail.component';
import { BlogCommentNewComponent } from '../blog-comment-new/blog-comment-new.component';
import { ParentFilterPipe } from '../blog-comment-list/comment-filter.pipe';

import { BlogRoutingModule } from '../blog-routing.module';

describe('BlogCommentListComponent', () => {
    let component: BlogCommentListComponent;
    let fixture: ComponentFixture<BlogCommentListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                OrderModule,
                BlogRoutingModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                BlogListComponent,
                BlogDetailComponent,
                BlogCommentListComponent,
                BlogCommentDetailComponent,
                BlogCommentNewComponent,
                ParentFilterPipe
            ],
        })
        .compileComponents();

    }));

    const post = {
        id: 123,
        title: "post 1",
        author: "first author",
        publish_date: "2017-03-01",
        slug: "post-1",
        description: "description of post 1",
        content: "content of post 1"
    };
    const comments = [{
        id: 22,
        postId: 123,
        parent_id: null,
        user: "Name",
        date: "2017-06-08",
        content: "Content"
    },{
        id: 25,
        postId: 123,
        parent_id: null,
        user: "Name2",
        date: "2017-06-10",
        content: "Content2"
    }];


    beforeEach(() => {
        fixture = TestBed.createComponent(BlogCommentListComponent);
        component = fixture.componentInstance;
        component.comments = comments;
        component.parentId = null;
        component.post = post;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should display each of the comments', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('h4.card-title').length).toBe(2);
    });

});
