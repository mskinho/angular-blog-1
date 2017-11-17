import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCommentNewComponent } from './blog-comment-new.component';

describe('BlogCommentNewComponent', () => {
  let component: BlogCommentNewComponent;
  let fixture: ComponentFixture<BlogCommentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCommentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCommentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
