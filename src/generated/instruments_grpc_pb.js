// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var instruments_pb = require('./instruments_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');

function serialize_tinkoff_public_invest_api_contract_v1_BondResponse(arg) {
  if (!(arg instanceof instruments_pb.BondResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.BondResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_BondResponse(buffer_arg) {
  return instruments_pb.BondResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_BondsResponse(arg) {
  if (!(arg instanceof instruments_pb.BondsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.BondsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_BondsResponse(buffer_arg) {
  return instruments_pb.BondsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_CurrenciesResponse(arg) {
  if (!(arg instanceof instruments_pb.CurrenciesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.CurrenciesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_CurrenciesResponse(buffer_arg) {
  return instruments_pb.CurrenciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_CurrencyResponse(arg) {
  if (!(arg instanceof instruments_pb.CurrencyResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.CurrencyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_CurrencyResponse(buffer_arg) {
  return instruments_pb.CurrencyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_EtfResponse(arg) {
  if (!(arg instanceof instruments_pb.EtfResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.EtfResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_EtfResponse(buffer_arg) {
  return instruments_pb.EtfResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_EtfsResponse(arg) {
  if (!(arg instanceof instruments_pb.EtfsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.EtfsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_EtfsResponse(buffer_arg) {
  return instruments_pb.EtfsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_FutureResponse(arg) {
  if (!(arg instanceof instruments_pb.FutureResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.FutureResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_FutureResponse(buffer_arg) {
  return instruments_pb.FutureResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_FuturesResponse(arg) {
  if (!(arg instanceof instruments_pb.FuturesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.FuturesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_FuturesResponse(buffer_arg) {
  return instruments_pb.FuturesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest(arg) {
  if (!(arg instanceof instruments_pb.GetAccruedInterestsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetAccruedInterestsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest(buffer_arg) {
  return instruments_pb.GetAccruedInterestsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse(arg) {
  if (!(arg instanceof instruments_pb.GetAccruedInterestsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetAccruedInterestsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse(buffer_arg) {
  return instruments_pb.GetAccruedInterestsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetDividendsRequest(arg) {
  if (!(arg instanceof instruments_pb.GetDividendsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetDividendsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetDividendsRequest(buffer_arg) {
  return instruments_pb.GetDividendsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetDividendsResponse(arg) {
  if (!(arg instanceof instruments_pb.GetDividendsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetDividendsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetDividendsResponse(buffer_arg) {
  return instruments_pb.GetDividendsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest(arg) {
  if (!(arg instanceof instruments_pb.GetFuturesMarginRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetFuturesMarginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest(buffer_arg) {
  return instruments_pb.GetFuturesMarginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse(arg) {
  if (!(arg instanceof instruments_pb.GetFuturesMarginResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetFuturesMarginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse(buffer_arg) {
  return instruments_pb.GetFuturesMarginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest(arg) {
  if (!(arg instanceof instruments_pb.InstrumentRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.InstrumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest(buffer_arg) {
  return instruments_pb.InstrumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_InstrumentResponse(arg) {
  if (!(arg instanceof instruments_pb.InstrumentResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.InstrumentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_InstrumentResponse(buffer_arg) {
  return instruments_pb.InstrumentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest(arg) {
  if (!(arg instanceof instruments_pb.InstrumentsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.InstrumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest(buffer_arg) {
  return instruments_pb.InstrumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_ShareResponse(arg) {
  if (!(arg instanceof instruments_pb.ShareResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.ShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_ShareResponse(buffer_arg) {
  return instruments_pb.ShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_SharesResponse(arg) {
  if (!(arg instanceof instruments_pb.SharesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.SharesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_SharesResponse(buffer_arg) {
  return instruments_pb.SharesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest(arg) {
  if (!(arg instanceof instruments_pb.TradingSchedulesRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.TradingSchedulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest(buffer_arg) {
  return instruments_pb.TradingSchedulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse(arg) {
  if (!(arg instanceof instruments_pb.TradingSchedulesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.TradingSchedulesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse(buffer_arg) {
  return instruments_pb.TradingSchedulesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var InstrumentsServiceService = exports.InstrumentsServiceService = {
  // Метод получения расписания торгов торговых площадок.
tradingSchedules: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/TradingSchedules',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.TradingSchedulesRequest,
    responseType: instruments_pb.TradingSchedulesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse,
  },
  // Метод получения облигации по её идентификатору.
bondBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/BondBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentRequest,
    responseType: instruments_pb.BondResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_BondResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_BondResponse,
  },
  // Метод получения списка облигаций.
bonds: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/Bonds',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentsRequest,
    responseType: instruments_pb.BondsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_BondsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_BondsResponse,
  },
  // Метод получения валюты по её идентификатору.
currencyBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/CurrencyBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentRequest,
    responseType: instruments_pb.CurrencyResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_CurrencyResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_CurrencyResponse,
  },
  // Метод получения списка валют.
currencies: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/Currencies',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentsRequest,
    responseType: instruments_pb.CurrenciesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_CurrenciesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_CurrenciesResponse,
  },
  // Метод получения инвестиционного фонда по его идентификатору.
etfBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/EtfBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentRequest,
    responseType: instruments_pb.EtfResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_EtfResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_EtfResponse,
  },
  // Метод получения списка инвестиционных фондов.
etfs: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/Etfs',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentsRequest,
    responseType: instruments_pb.EtfsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_EtfsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_EtfsResponse,
  },
  // Метод получения фьючерса по его идентификатору.
futureBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/FutureBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentRequest,
    responseType: instruments_pb.FutureResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_FutureResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_FutureResponse,
  },
  // Метод получения списка фьючерсов.
futures: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/Futures',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentsRequest,
    responseType: instruments_pb.FuturesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_FuturesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_FuturesResponse,
  },
  // Метод получения акции по её идентификатору.
shareBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/ShareBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentRequest,
    responseType: instruments_pb.ShareResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_ShareResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_ShareResponse,
  },
  // Метод получения списка акций.
shares: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/Shares',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentsRequest,
    responseType: instruments_pb.SharesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_SharesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_SharesResponse,
  },
  // Метод получения накопленного купонного дохода по облигации.
getAccruedInterests: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAccruedInterests',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetAccruedInterestsRequest,
    responseType: instruments_pb.GetAccruedInterestsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse,
  },
  // Метод получения размера гарантийного обеспечения по фьючерсам.
getFuturesMargin: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetFuturesMargin',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetFuturesMarginRequest,
    responseType: instruments_pb.GetFuturesMarginResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse,
  },
  // Метод получения основной информации об инструменте.
getInstrumentBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetInstrumentBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentRequest,
    responseType: instruments_pb.InstrumentResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentResponse,
  },
  // Метод для получения событий выплаты дивидендов по инструменту.
getDividends: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetDividends',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetDividendsRequest,
    responseType: instruments_pb.GetDividendsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetDividendsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetDividendsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetDividendsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetDividendsResponse,
  },
};

exports.InstrumentsServiceClient = grpc.makeGenericClientConstructor(InstrumentsServiceService);
// Сервис предназначен для получения:</br>**1**. информации об инструментах;</br>**2**.
// расписания торговых сессий;</br>**3**. календаря выплат купонов по облигациям;</br>**4**.
// размера гарантийного обеспечения по фьючерсам;</br>**5**. дивидендов по ценной бумаге.
