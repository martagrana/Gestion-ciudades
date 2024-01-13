import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoBorradoComponent } from './dialogo-borrado.component';

describe('DialogoBorradoComponent', () => {
  let component: DialogoBorradoComponent;
  let fixture: ComponentFixture<DialogoBorradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogoBorradoComponent]
    });
    fixture = TestBed.createComponent(DialogoBorradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
