import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { useEffect, useState } from "react";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { getOrderHistory } from "../../utils/firebase/firebase.utils";
import Spinner from "../../components/spinner/spinner.component";
import { CartItemType } from "../../store/cart/cart.types";

const OrderHistory = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (currentUser) {
      getOrderHistory(currentUser).then((res) => setOrders(res));
    }
  }, [currentUser]);

  return (
    <>
      {!orders.length ? (
        <Spinner />
      ) : (
        <div
          style={{ width: "250px", maxWidth: "100vw", margin: "50px auto 0" }}
        >
          {orders.map((order: any, i) => {
            return (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <h2>Order {i + 1}</h2>

                {order.items.map((item: CartItemType) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h4>{item.name}</h4>
                    <h4>
                      ${item.price}.00&nbsp;&nbsp;x&nbsp;&nbsp;{item.quantity}
                    </h4>
                  </div>
                ))}

                <h3 style={{ alignSelf: "flex-end" }}>Total: ${order.total}</h3>
                <hr style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default OrderHistory;
