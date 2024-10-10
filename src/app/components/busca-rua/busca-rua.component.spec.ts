import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaRuaComponent } from './busca-rua.component';

describe('BuscaRuaComponent', () => {
  let component: BuscaRuaComponent;
  let fixture: ComponentFixture<BuscaRuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscaRuaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaRuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
