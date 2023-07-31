import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreComcapComponent } from './sobre-comcap.component';

describe('SobreComcapComponent', () => {
  let component: SobreComcapComponent;
  let fixture: ComponentFixture<SobreComcapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreComcapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreComcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
