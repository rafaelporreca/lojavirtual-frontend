import { RefDTO } from "./ref.dto";
import { ItemPedidoDTO } from "./item-pedido.dto";

export interface PedidoDTO{
    cliente: RefDTO;
    enderedoDeEntrega: RefDTO;
    pagamento: RefDTO;
    items: ItemPedidoDTO[];
}