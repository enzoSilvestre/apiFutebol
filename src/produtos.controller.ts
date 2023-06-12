import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';

import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {

  produtos : Produto[] =[
      new Produto("LIV01","TDD NA PRATICA",29.00),
      new Produto("LIV02","flutter na teoria",10.00),
      new Produto("LIV03","Json na teoria e pratica",29.00),
  ];
  
  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }
  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtos[params.id];
  }

  @Post()
  criar(@Body() produto : Produto) {
    produto.id=100;
    this.produtos.push(produto)
  }

  @Put()
  atualizar(@Body() produto: Produto): Produto {
    return produto;
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.produtos.pop();
  }
}
