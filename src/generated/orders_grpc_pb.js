// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var orders_pb = require('./orders_pb.js');
var common_pb = require('./common_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_tinkoff_public_invest_api_contract_v1_CancelOrderRequest(arg) {
  if (!(arg instanceof orders_pb.CancelOrderRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.CancelOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_CancelOrderRequest(buffer_arg) {
  return orders_pb.CancelOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_CancelOrderResponse(arg) {
  if (!(arg instanceof orders_pb.CancelOrderResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.CancelOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_CancelOrderResponse(buffer_arg) {
  return orders_pb.CancelOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetOrderStateRequest(arg) {
  if (!(arg instanceof orders_pb.GetOrderStateRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetOrderStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetOrderStateRequest(buffer_arg) {
  return orders_pb.GetOrderStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetOrdersRequest(arg) {
  if (!(arg instanceof orders_pb.GetOrdersRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetOrdersRequest(buffer_arg) {
  return orders_pb.GetOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetOrdersResponse(arg) {
  if (!(arg instanceof orders_pb.GetOrdersResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetOrdersResponse(buffer_arg) {
  return orders_pb.GetOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_OrderState(arg) {
  if (!(arg instanceof orders_pb.OrderState)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.OrderState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_OrderState(buffer_arg) {
  return orders_pb.OrderState.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_PostOrderRequest(arg) {
  if (!(arg instanceof orders_pb.PostOrderRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.PostOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_PostOrderRequest(buffer_arg) {
  return orders_pb.PostOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_PostOrderResponse(arg) {
  if (!(arg instanceof orders_pb.PostOrderResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.PostOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_PostOrderResponse(buffer_arg) {
  return orders_pb.PostOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_TradesStreamRequest(arg) {
  if (!(arg instanceof orders_pb.TradesStreamRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.TradesStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_TradesStreamRequest(buffer_arg) {
  return orders_pb.TradesStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_TradesStreamResponse(arg) {
  if (!(arg instanceof orders_pb.TradesStreamResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.TradesStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_TradesStreamResponse(buffer_arg) {
  return orders_pb.TradesStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrdersStreamServiceService = exports.OrdersStreamServiceService = {
  // Stream сделок пользователя
tradesStream: {
    path: '/tinkoff.public.invest.api.contract.v1.OrdersStreamService/TradesStream',
    requestStream: false,
    responseStream: true,
    requestType: orders_pb.TradesStreamRequest,
    responseType: orders_pb.TradesStreamResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_TradesStreamRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_TradesStreamRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_TradesStreamResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_TradesStreamResponse,
  },
};

exports.OrdersStreamServiceClient = grpc.makeGenericClientConstructor(OrdersStreamServiceService);
var OrdersServiceService = exports.OrdersServiceService = {
  // Метод выставления заявки.
postOrder: {
    path: '/tinkoff.public.invest.api.contract.v1.OrdersService/PostOrder',
    requestStream: false,
    responseStream: false,
    requestType: orders_pb.PostOrderRequest,
    responseType: orders_pb.PostOrderResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_PostOrderRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PostOrderRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_PostOrderResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PostOrderResponse,
  },
  // Метод отмены биржевой заявки.
cancelOrder: {
    path: '/tinkoff.public.invest.api.contract.v1.OrdersService/CancelOrder',
    requestStream: false,
    responseStream: false,
    requestType: orders_pb.CancelOrderRequest,
    responseType: orders_pb.CancelOrderResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_CancelOrderRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_CancelOrderRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_CancelOrderResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_CancelOrderResponse,
  },
  // Метод получения статуса торгового поручения.
getOrderState: {
    path: '/tinkoff.public.invest.api.contract.v1.OrdersService/GetOrderState',
    requestStream: false,
    responseStream: false,
    requestType: orders_pb.GetOrderStateRequest,
    responseType: orders_pb.OrderState,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetOrderStateRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetOrderStateRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_OrderState,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_OrderState,
  },
  // Метод получения списка активных заявок по счёту.
getOrders: {
    path: '/tinkoff.public.invest.api.contract.v1.OrdersService/GetOrders',
    requestStream: false,
    responseStream: false,
    requestType: orders_pb.GetOrdersRequest,
    responseType: orders_pb.GetOrdersResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetOrdersRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetOrdersRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetOrdersResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetOrdersResponse,
  },
};

exports.OrdersServiceClient = grpc.makeGenericClientConstructor(OrdersServiceService);
// Сервис предназначен для работы с торговыми поручениями:</br> **1**.
// выставление;</br> **2**. отмена;</br> **3**. получение статуса;</br> **4**.
// расчёт полной стоимости;</br> **5**. получение списка заявок.
