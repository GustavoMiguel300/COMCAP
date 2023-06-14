import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCurtoComponent } from './header-curto.component';

describe('HeaderCurtoComponent', () => {
  let component: HeaderCurtoComponent;
  let fixture: ComponentFixture<HeaderCurtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCurtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCurtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
