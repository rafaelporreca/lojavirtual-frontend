import { RefDTO } from "./ref.dto";
import { ItemPedidoDTO } from "./item-pedido.dto";
import { PagamentoDTO } from "./pagamento.dto";

export interface PedidoDTO{
    cliente: RefDTO;
    enderedoDeEntrega: RefDTO;
    pagamento: PagamentoDTO;
    items: ItemPedidoDTO[];
}