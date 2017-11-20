import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogListComponent } from '../blog-list/blog-list.component';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { BlogCommentListComponent } from '../blog-comment-list/blog-comment-list.component';
import { BlogCommentDetailComponent } from '../blog-comment-detail/blog-comment-detail.component';
import { BlogCommentNewComponent } from '../blog-comment-new/blog-comment-new.component';
import { ParentFilterPipe } from '../blog-comment-list/comment-filter.pipe';

import { BlogRoutingModule } from '../blog-routing.module';

import * as PostActions from '../../state/actions/post.actions';
import * as fromRoot from '../../state/reducers';

describe('BlogListComponent', () => {
    let component: BlogListComponent;
    let fixture: ComponentFixture<BlogListComponent>;
    let store: Store<fromRoot.State>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(fromRoot.reducers),
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
            ]
        })
        .compileComponents();

        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should dispatch an action to load data when created', () => {
        const action = new PostActions.PostLoadList();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should dispatch an action to clear blog detail when created', () => {
        const action = new PostActions.PostClearDetail();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should display a list of blogs after data is loaded', () => {
        const blogs = [{
            id: 1,
            title: "post 1",
            author: "first author",
            publish_date: "2017-03-01",
            slug: "post-1",
            description: "description of post 1",
            content: "content of post 1"
        },
        {
            id: 2,
            title: "post 2",
            author: "second author",
            publish_date: "2017-03-04",
            slug: "post-2",
            description: "description of post 2",
            content: "content of post 2"
        }];

        const action = new PostActions.PostListSuccess(blogs);
        store.dispatch(action)

        expect(component.posts).toEqual(blogs);

    });

});
