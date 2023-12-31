import {
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_SUCCESS,
  ALL_ORDERS_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  CLEAR_ERRORS,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
} from "../constants/orderConstant";

import axios from "axios";

export const createOrder = (order) => async (dispatch) => {
  // console.log(order);
  
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data } = await axios.post("/api/v1/order/new", order, config);
//   try {
//     dispatch({ CREATE_ORDER_REQUEST });
    
//   dispatch({
//     type: CREATE_ORDER_SUCCESS,
//     payload: data,
//   });
// } catch (err) {
//     dispatch({
//       type: CREATE_ORDER_FAIL,
//       payload: err.response.data.message,
//     });
//   }
};

//get currently user order
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: MY_ORDERS_REQUEST,
    });

    const { data } = await axios.get("/api/v1/orders/me");

    dispatch({
      type: MY_ORDERS_SUCCESS,
      payload: data.orders,
    });
  } catch (err) {
    dispatch({
      type: MY_ORDERS_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/order/${id}`);

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data.order,
    });
  } catch (err) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: err.response.data.message,
    });
  }
};

//get all orders - ADMIN
export const allOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_ORDERS_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/admin/orders`);

    dispatch({
      type: ALL_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ALL_ORDERS_FAIL,
      payload: err.response.data.message,
    });
  }
};

// update order
export const updateOrder = (id, orderData) => async (dispatch, getState) => {
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data } = await axios.put(
    `/api/v1/admin/order/${id}`,
    orderData,
    config
  );
  // try {
  //   console.log("orderData");
  //   dispatch({ UPDATE_ORDER_REQUEST });


  //   dispatch({
  //     type: UPDATE_ORDER_SUCCESS,
  //     payload: data.success,
  //   });
  // } catch (err) {
  //   dispatch({
  //     type: UPDATE_ORDER_FAIL,
  //     payload: err.response.data.message,
  //   });
  // }
};

// update order
export const delteOrder = (id) => async (dispatch) => {
  
  const { data } = await axios.delete(`/api/v1/admin/order/${id}`);
  
  // try {
    //   dispatch({
    // dispatch( {DELETE_ORDER_REQUEST} );
  //     type: DELETE_ORDER_SUCCESS,
  //     payload: data.success,
  //   });
  // } catch (err) {
  //   dispatch({
  //     type: DELETE_ORDER_FAIL,
  //     payload: err.response.data.message,
  //   });
  // }
};

//clear errors

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
