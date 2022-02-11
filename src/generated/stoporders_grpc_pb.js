// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var stoporders_pb = require('./stoporders_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest(arg) {
  if (!(arg instanceof stoporders_pb.CancelStopOrderRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.CancelStopOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest(buffer_arg) {
  return stoporders_pb.CancelStopOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse(arg) {
  if (!(arg instanceof stoporders_pb.CancelStopOrderResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.CancelStopOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse(buffer_arg) {
  return stoporders_pb.CancelStopOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest(arg) {
  if (!(arg instanceof stoporders_pb.GetStopOrdersRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetStopOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest(buffer_arg) {
  return stoporders_pb.GetStopOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse(arg) {
  if (!(arg instanceof stoporders_pb.GetStopOrdersResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetStopOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse(buffer_arg) {
  return stoporders_pb.GetStopOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_PostStopOrderRequest(arg) {
  if (!(arg instanceof stoporders_pb.PostStopOrderRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.PostStopOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_PostStopOrderRequest(buffer_arg) {
  return stoporders_pb.PostStopOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_PostStopOrderResponse(arg) {
  if (!(arg instanceof stoporders_pb.PostStopOrderResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.PostStopOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_PostStopOrderResponse(buffer_arg) {
  return stoporders_pb.PostStopOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var StopOrdersServiceService = exports.StopOrdersServiceService = {
  // Метод выставления стоп-заявки.
postStopOrder: {
    path: '/tinkoff.public.invest.api.contract.v1.StopOrdersService/PostStopOrder',
    requestStream: false,
    responseStream: false,
    requestType: stoporders_pb.PostStopOrderRequest,
    responseType: stoporders_pb.PostStopOrderResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_PostStopOrderRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PostStopOrderRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_PostStopOrderResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PostStopOrderResponse,
  },
  // Метод получения списка активных стоп заявок по счёту.
getStopOrders: {
    path: '/tinkoff.public.invest.api.contract.v1.StopOrdersService/GetStopOrders',
    requestStream: false,
    responseStream: false,
    requestType: stoporders_pb.GetStopOrdersRequest,
    responseType: stoporders_pb.GetStopOrdersResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetStopOrdersRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetStopOrdersResponse,
  },
  // Метод отмены стоп-заявки.
cancelStopOrder: {
    path: '/tinkoff.public.invest.api.contract.v1.StopOrdersService/CancelStopOrder',
    requestStream: false,
    responseStream: false,
    requestType: stoporders_pb.CancelStopOrderRequest,
    responseType: stoporders_pb.CancelStopOrderResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_CancelStopOrderRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_CancelStopOrderResponse,
  },
};

exports.StopOrdersServiceClient = grpc.makeGenericClientConstructor(StopOrdersServiceService);
// Сервис предназначен для работы со стоп-заявками:</br> **1**.
// выставление;</br> **2**. отмена;</br> **3**. получение списка стоп-заявок.
