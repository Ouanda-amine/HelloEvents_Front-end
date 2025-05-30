import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowclientsComponent } from './showclients.component';

describe('ShowclientsComponent', () => {
  let component: ShowclientsComponent;
  let fixture: ComponentFixture<ShowclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowclientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
