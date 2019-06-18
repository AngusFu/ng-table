import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynExampleComponent } from './dyn-example.component';

describe('DynExampleComponent', () => {
  let component: DynExampleComponent;
  let fixture: ComponentFixture<DynExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
