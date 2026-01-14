import { OrderHeader } from "./OrdersHeader";
import { OrderDetailsGrid } from "./OrdersDetailsGrid";

export function OrdersGrid({ orders }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div
            key={order.id}
            className="order-container"
            data-testid="order-container"
          >
            <OrderHeader order={order} />
            <OrderDetailsGrid order={order} />
          </div>
        );
      })}
    </div>
  );
}
