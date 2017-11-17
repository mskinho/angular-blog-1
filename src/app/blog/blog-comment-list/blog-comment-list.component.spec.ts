import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCommentListComponent } from './blog-comment-list.component';

describe('BlogCommentListComponent', () => {
  let component: BlogCommentListComponent;
  let fixture: ComponentFixture<BlogCommentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCommentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
