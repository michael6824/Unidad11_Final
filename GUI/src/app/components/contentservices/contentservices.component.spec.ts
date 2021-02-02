import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentservicesComponent } from './contentservices.component';

describe('ContentservicesComponent', () => {
  let component: ContentservicesComponent;
  let fixture: ComponentFixture<ContentservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
