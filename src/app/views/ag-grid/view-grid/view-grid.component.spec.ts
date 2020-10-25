import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { YoutubeService } from 'src/app/services/youtube.service';

import { ViewGridComponent } from './view-grid.component';

describe('ViewGridComponent', () => {
  let component: ViewGridComponent;
  let fixture: ComponentFixture<ViewGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGridComponent ],
      imports: [HttpClientModule],
      providers: [YoutubeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
