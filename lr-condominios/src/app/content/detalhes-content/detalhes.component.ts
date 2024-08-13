import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { infos2024 } from '../../../../db/info/2024';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  templateUrl: './detalhes.component.html',
  imports: [NgFor],
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent {
  data = infos2024();
  @Input() info: any;
  @Output() fechar = new EventEmitter<void>();
}
