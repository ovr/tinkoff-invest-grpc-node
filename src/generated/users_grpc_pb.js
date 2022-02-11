// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var users_pb = require('./users_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_tinkoff_public_invest_api_contract_v1_GetAccountsRequest(arg) {
  if (!(arg instanceof users_pb.GetAccountsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetAccountsRequest(buffer_arg) {
  return users_pb.GetAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetAccountsResponse(arg) {
  if (!(arg instanceof users_pb.GetAccountsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetAccountsResponse(buffer_arg) {
  return users_pb.GetAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetInfoRequest(arg) {
  if (!(arg instanceof users_pb.GetInfoRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetInfoRequest(buffer_arg) {
  return users_pb.GetInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetInfoResponse(arg) {
  if (!(arg instanceof users_pb.GetInfoResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetInfoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetInfoResponse(buffer_arg) {
  return users_pb.GetInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest(arg) {
  if (!(arg instanceof users_pb.GetMarginAttributesRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetMarginAttributesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest(buffer_arg) {
  return users_pb.GetMarginAttributesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse(arg) {
  if (!(arg instanceof users_pb.GetMarginAttributesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetMarginAttributesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse(buffer_arg) {
  return users_pb.GetMarginAttributesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetUserTariffRequest(arg) {
  if (!(arg instanceof users_pb.GetUserTariffRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetUserTariffRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetUserTariffRequest(buffer_arg) {
  return users_pb.GetUserTariffRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetUserTariffResponse(arg) {
  if (!(arg instanceof users_pb.GetUserTariffResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetUserTariffResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetUserTariffResponse(buffer_arg) {
  return users_pb.GetUserTariffResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersServiceService = exports.UsersServiceService = {
  // Метод получения счетов пользователя.
getAccounts: {
    path: '/tinkoff.public.invest.api.contract.v1.UsersService/GetAccounts',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetAccountsRequest,
    responseType: users_pb.GetAccountsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetAccountsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetAccountsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetAccountsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetAccountsResponse,
  },
  // Расчёт маржинальных показателей по счёту.
getMarginAttributes: {
    path: '/tinkoff.public.invest.api.contract.v1.UsersService/GetMarginAttributes',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetMarginAttributesRequest,
    responseType: users_pb.GetMarginAttributesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetMarginAttributesRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetMarginAttributesResponse,
  },
  // Запрос тарифа пользователя.
getUserTariff: {
    path: '/tinkoff.public.invest.api.contract.v1.UsersService/GetUserTariff',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetUserTariffRequest,
    responseType: users_pb.GetUserTariffResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetUserTariffRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetUserTariffRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetUserTariffResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetUserTariffResponse,
  },
  // Метод получения информации о пользователе.
getInfo: {
    path: '/tinkoff.public.invest.api.contract.v1.UsersService/GetInfo',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetInfoRequest,
    responseType: users_pb.GetInfoResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetInfoRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetInfoRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetInfoResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetInfoResponse,
  },
};

exports.UsersServiceClient = grpc.makeGenericClientConstructor(UsersServiceService);
// Сервис предназначен для получения: </br> **1**.
// списка счетов пользователя; </br> **2**. маржинальных показателе по счёту.
