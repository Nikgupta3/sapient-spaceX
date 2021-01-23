import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SapceXdataComponent } from './sapce-xdata.component';

describe('SapceXdataComponent', () => {
  let component: SapceXdataComponent;
  let fixture: ComponentFixture<SapceXdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SapceXdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapceXdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
