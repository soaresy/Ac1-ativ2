import { Component } from '@angular/core';

interface Produto {
  nome: string;
  preco: number;
  descricao: string;
  emEstoque: boolean;
}

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
})
export class ProdutoComponent {
  produtos: Produto[] = [
    { nome: 'Iphone 15', preco: 4000, descricao: 'Celular Basico', emEstoque: true },
    { nome: 'Iphone 15 Pro', preco: 6000, descricao: 'Celular Pro', emEstoque: false },
    { nome: 'Iphone 15 Pro Max', preco: 9000, descricao: 'Celular Pro Max', emEstoque: true },
  ];
}