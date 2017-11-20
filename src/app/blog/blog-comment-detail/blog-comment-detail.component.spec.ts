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

describe('BlogCommentDetailComponent', () => {
    let component: BlogCommentDetailComponent;
    let fixture: ComponentFixture<BlogCommentDetailComponent>;

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
    const comment = {
        id: 3,
        postId: 123,
        parent_id: null,
        user: "Name",
        date: "2017-06-03",
        content: "Content"
    };
    const commentList = [{
        id: 22,
        postId: 123,
        parent_id: 3,
        user: "Name",
        date: "2017-06-08",
        content: "Content"
    },{
        id: 25,
        postId: 123,
        parent_id: 2,
        user: "Name2",
        date: "2017-06-10",
        content: "Content2"
    }];


    beforeEach(() => {
        fixture = TestBed.createComponent(BlogCommentDetailComponent);
        component = fixture.componentInstance;
        component.commentList = commentList;
        component.comment = comment;
        component.post = post;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should display the comment', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('p.card-text').textContent).toContain(component.comment.content);
    });

    it('should have one reply', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('div.ml-3:not(.card) .card').length).toBe(1);
    });

});
