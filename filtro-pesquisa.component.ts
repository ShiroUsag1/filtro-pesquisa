import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabelaFiltroService } from '../../services/tabelaFiltro/tabela-filtro.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArquivosService } from '../../../../../mod-acervo/src/lib/services/arquivos/arquivos.service';

@Component({
  selector: 'app-filtro-pesquisa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtro-pesquisa.component.html',
  styleUrl: './filtro-pesquisa.component.scss',
})
export class FiltroPesquisaComponent {
  @Output() funcaoNovo = new EventEmitter();

  painelFiltro: boolean = false;
  filtroBusca = '';

  @Input() busca:boolean;
  @Input() novo:boolean;

  chamarFuncaoNovo() {
    this.funcaoNovo.emit();
  }

  limparFiltro() {
    this.filtroBusca = '';
    this.painelFiltro = false;
    this.busca = true;
    TabelaFiltroService.setTermo('');
    ArquivosService.setFiltro('');
  }

  filtrarArtigos() {
    TabelaFiltroService.setTermo(this.filtroBusca);
    ArquivosService.setFiltro(this.filtroBusca);
  }

  abrirPainel() {
    this.painelFiltro = true;
    this.busca = false;
  }
}
