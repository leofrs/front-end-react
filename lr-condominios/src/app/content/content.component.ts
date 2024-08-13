import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { infos2024 } from '../../../db/info/2024';
import { NgFor, NgIf } from '@angular/common';
import { DetalhesComponent } from './detalhes-content/detalhes.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HeaderComponent, NgIf, NgFor, DetalhesComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  data = infos2024();
  detalhesVisiveis: boolean = false;
  detalhesInfo: any;

  mostrarDetalhes(info: any) {
    this.detalhesVisiveis = true;
    this.detalhesInfo = info;
  }

  fecharDetalhes() {
    this.detalhesVisiveis = false;
  }
}
