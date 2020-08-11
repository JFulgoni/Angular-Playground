import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WowRaidsComponent } from './wow-raids.component';

describe('WowRaidsComponent', () => {
  let component: WowRaidsComponent;
  let fixture: ComponentFixture<WowRaidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WowRaidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WowRaidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
