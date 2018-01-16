import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxExampleComponent } from './rx-example.component';

describe('RxExampleComponent', () => {
  let component: RxExampleComponent;
  let fixture: ComponentFixture<RxExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
