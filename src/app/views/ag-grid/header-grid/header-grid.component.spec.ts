import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGridComponent } from './header-grid.component';

describe('HeaderGridComponent', () => {
  let component: HeaderGridComponent;
  let fixture: ComponentFixture<HeaderGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
