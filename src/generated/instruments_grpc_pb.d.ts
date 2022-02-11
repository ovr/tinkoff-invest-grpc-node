// GENERATED CODE -- DO NOT EDIT!

// package: tinkoff.public.invest.api.contract.v1
// file: instruments.proto

import * as instruments_pb from "./instruments_pb";
import * as grpc from "@grpc/grpc-js";

interface IInstrumentsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  tradingSchedules: grpc.MethodDefinition<instruments_pb.TradingSchedulesRequest, instruments_pb.TradingSchedulesResponse>;
  bondBy: grpc.MethodDefinition<instruments_pb.InstrumentRequest, instruments_pb.BondResponse>;
  bonds: grpc.MethodDefinition<instruments_pb.InstrumentsRequest, instruments_pb.BondsResponse>;
  currencyBy: grpc.MethodDefinition<instruments_pb.InstrumentRequest, instruments_pb.CurrencyResponse>;
  currencies: grpc.MethodDefinition<instruments_pb.InstrumentsRequest, instruments_pb.CurrenciesResponse>;
  etfBy: grpc.MethodDefinition<instruments_pb.InstrumentRequest, instruments_pb.EtfResponse>;
  etfs: grpc.MethodDefinition<instruments_pb.InstrumentsRequest, instruments_pb.EtfsResponse>;
  futureBy: grpc.MethodDefinition<instruments_pb.InstrumentRequest, instruments_pb.FutureResponse>;
  futures: grpc.MethodDefinition<instruments_pb.InstrumentsRequest, instruments_pb.FuturesResponse>;
  shareBy: grpc.MethodDefinition<instruments_pb.InstrumentRequest, instruments_pb.ShareResponse>;
  shares: grpc.MethodDefinition<instruments_pb.InstrumentsRequest, instruments_pb.SharesResponse>;
  getAccruedInterests: grpc.MethodDefinition<instruments_pb.GetAccruedInterestsRequest, instruments_pb.GetAccruedInterestsResponse>;
  getFuturesMargin: grpc.MethodDefinition<instruments_pb.GetFuturesMarginRequest, instruments_pb.GetFuturesMarginResponse>;
  getInstrumentBy: grpc.MethodDefinition<instruments_pb.InstrumentRequest, instruments_pb.InstrumentResponse>;
  getDividends: grpc.MethodDefinition<instruments_pb.GetDividendsRequest, instruments_pb.GetDividendsResponse>;
}

export const InstrumentsServiceService: IInstrumentsServiceService;

export interface IInstrumentsServiceServer extends grpc.UntypedServiceImplementation {
  tradingSchedules: grpc.handleUnaryCall<instruments_pb.TradingSchedulesRequest, instruments_pb.TradingSchedulesResponse>;
  bondBy: grpc.handleUnaryCall<instruments_pb.InstrumentRequest, instruments_pb.BondResponse>;
  bonds: grpc.handleUnaryCall<instruments_pb.InstrumentsRequest, instruments_pb.BondsResponse>;
  currencyBy: grpc.handleUnaryCall<instruments_pb.InstrumentRequest, instruments_pb.CurrencyResponse>;
  currencies: grpc.handleUnaryCall<instruments_pb.InstrumentsRequest, instruments_pb.CurrenciesResponse>;
  etfBy: grpc.handleUnaryCall<instruments_pb.InstrumentRequest, instruments_pb.EtfResponse>;
  etfs: grpc.handleUnaryCall<instruments_pb.InstrumentsRequest, instruments_pb.EtfsResponse>;
  futureBy: grpc.handleUnaryCall<instruments_pb.InstrumentRequest, instruments_pb.FutureResponse>;
  futures: grpc.handleUnaryCall<instruments_pb.InstrumentsRequest, instruments_pb.FuturesResponse>;
  shareBy: grpc.handleUnaryCall<instruments_pb.InstrumentRequest, instruments_pb.ShareResponse>;
  shares: grpc.handleUnaryCall<instruments_pb.InstrumentsRequest, instruments_pb.SharesResponse>;
  getAccruedInterests: grpc.handleUnaryCall<instruments_pb.GetAccruedInterestsRequest, instruments_pb.GetAccruedInterestsResponse>;
  getFuturesMargin: grpc.handleUnaryCall<instruments_pb.GetFuturesMarginRequest, instruments_pb.GetFuturesMarginResponse>;
  getInstrumentBy: grpc.handleUnaryCall<instruments_pb.InstrumentRequest, instruments_pb.InstrumentResponse>;
  getDividends: grpc.handleUnaryCall<instruments_pb.GetDividendsRequest, instruments_pb.GetDividendsResponse>;
}

export class InstrumentsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  tradingSchedules(argument: instruments_pb.TradingSchedulesRequest, callback: grpc.requestCallback<instruments_pb.TradingSchedulesResponse>): grpc.ClientUnaryCall;
  tradingSchedules(argument: instruments_pb.TradingSchedulesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.TradingSchedulesResponse>): grpc.ClientUnaryCall;
  tradingSchedules(argument: instruments_pb.TradingSchedulesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.TradingSchedulesResponse>): grpc.ClientUnaryCall;
  bondBy(argument: instruments_pb.InstrumentRequest, callback: grpc.requestCallback<instruments_pb.BondResponse>): grpc.ClientUnaryCall;
  bondBy(argument: instruments_pb.InstrumentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.BondResponse>): grpc.ClientUnaryCall;
  bondBy(argument: instruments_pb.InstrumentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.BondResponse>): grpc.ClientUnaryCall;
  bonds(argument: instruments_pb.InstrumentsRequest, callback: grpc.requestCallback<instruments_pb.BondsResponse>): grpc.ClientUnaryCall;
  bonds(argument: instruments_pb.InstrumentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.BondsResponse>): grpc.ClientUnaryCall;
  bonds(argument: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.BondsResponse>): grpc.ClientUnaryCall;
  currencyBy(argument: instruments_pb.InstrumentRequest, callback: grpc.requestCallback<instruments_pb.CurrencyResponse>): grpc.ClientUnaryCall;
  currencyBy(argument: instruments_pb.InstrumentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.CurrencyResponse>): grpc.ClientUnaryCall;
  currencyBy(argument: instruments_pb.InstrumentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.CurrencyResponse>): grpc.ClientUnaryCall;
  currencies(argument: instruments_pb.InstrumentsRequest, callback: grpc.requestCallback<instruments_pb.CurrenciesResponse>): grpc.ClientUnaryCall;
  currencies(argument: instruments_pb.InstrumentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.CurrenciesResponse>): grpc.ClientUnaryCall;
  currencies(argument: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.CurrenciesResponse>): grpc.ClientUnaryCall;
  etfBy(argument: instruments_pb.InstrumentRequest, callback: grpc.requestCallback<instruments_pb.EtfResponse>): grpc.ClientUnaryCall;
  etfBy(argument: instruments_pb.InstrumentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.EtfResponse>): grpc.ClientUnaryCall;
  etfBy(argument: instruments_pb.InstrumentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.EtfResponse>): grpc.ClientUnaryCall;
  etfs(argument: instruments_pb.InstrumentsRequest, callback: grpc.requestCallback<instruments_pb.EtfsResponse>): grpc.ClientUnaryCall;
  etfs(argument: instruments_pb.InstrumentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.EtfsResponse>): grpc.ClientUnaryCall;
  etfs(argument: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.EtfsResponse>): grpc.ClientUnaryCall;
  futureBy(argument: instruments_pb.InstrumentRequest, callback: grpc.requestCallback<instruments_pb.FutureResponse>): grpc.ClientUnaryCall;
  futureBy(argument: instruments_pb.InstrumentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.FutureResponse>): grpc.ClientUnaryCall;
  futureBy(argument: instruments_pb.InstrumentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.FutureResponse>): grpc.ClientUnaryCall;
  futures(argument: instruments_pb.InstrumentsRequest, callback: grpc.requestCallback<instruments_pb.FuturesResponse>): grpc.ClientUnaryCall;
  futures(argument: instruments_pb.InstrumentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.FuturesResponse>): grpc.ClientUnaryCall;
  futures(argument: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.FuturesResponse>): grpc.ClientUnaryCall;
  shareBy(argument: instruments_pb.InstrumentRequest, callback: grpc.requestCallback<instruments_pb.ShareResponse>): grpc.ClientUnaryCall;
  shareBy(argument: instruments_pb.InstrumentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.ShareResponse>): grpc.ClientUnaryCall;
  shareBy(argument: instruments_pb.InstrumentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.ShareResponse>): grpc.ClientUnaryCall;
  shares(argument: instruments_pb.InstrumentsRequest, callback: grpc.requestCallback<instruments_pb.SharesResponse>): grpc.ClientUnaryCall;
  shares(argument: instruments_pb.InstrumentsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.SharesResponse>): grpc.ClientUnaryCall;
  shares(argument: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.SharesResponse>): grpc.ClientUnaryCall;
  getAccruedInterests(argument: instruments_pb.GetAccruedInterestsRequest, callback: grpc.requestCallback<instruments_pb.GetAccruedInterestsResponse>): grpc.ClientUnaryCall;
  getAccruedInterests(argument: instruments_pb.GetAccruedInterestsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.GetAccruedInterestsResponse>): grpc.ClientUnaryCall;
  getAccruedInterests(argument: instruments_pb.GetAccruedInterestsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.GetAccruedInterestsResponse>): grpc.ClientUnaryCall;
  getFuturesMargin(argument: instruments_pb.GetFuturesMarginRequest, callback: grpc.requestCallback<instruments_pb.GetFuturesMarginResponse>): grpc.ClientUnaryCall;
  getFuturesMargin(argument: instruments_pb.GetFuturesMarginRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.GetFuturesMarginResponse>): grpc.ClientUnaryCall;
  getFuturesMargin(argument: instruments_pb.GetFuturesMarginRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.GetFuturesMarginResponse>): grpc.ClientUnaryCall;
  getInstrumentBy(argument: instruments_pb.InstrumentRequest, callback: grpc.requestCallback<instruments_pb.InstrumentResponse>): grpc.ClientUnaryCall;
  getInstrumentBy(argument: instruments_pb.InstrumentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.InstrumentResponse>): grpc.ClientUnaryCall;
  getInstrumentBy(argument: instruments_pb.InstrumentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.InstrumentResponse>): grpc.ClientUnaryCall;
  getDividends(argument: instruments_pb.GetDividendsRequest, callback: grpc.requestCallback<instruments_pb.GetDividendsResponse>): grpc.ClientUnaryCall;
  getDividends(argument: instruments_pb.GetDividendsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.GetDividendsResponse>): grpc.ClientUnaryCall;
  getDividends(argument: instruments_pb.GetDividendsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<instruments_pb.GetDividendsResponse>): grpc.ClientUnaryCall;
}
