// GENERATED CODE -- DO NOT EDIT!

// package: tinkoff.public.invest.api.contract.v1
// file: marketdata.proto

import * as marketdata_pb from "./marketdata_pb";
import * as grpc from "@grpc/grpc-js";

interface IMarketDataServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCandles: grpc.MethodDefinition<marketdata_pb.GetCandlesRequest, marketdata_pb.GetCandlesResponse>;
  getLastPrices: grpc.MethodDefinition<marketdata_pb.GetLastPricesRequest, marketdata_pb.GetLastPricesResponse>;
  getOrderBook: grpc.MethodDefinition<marketdata_pb.GetOrderBookRequest, marketdata_pb.GetOrderBookResponse>;
  getTradingStatus: grpc.MethodDefinition<marketdata_pb.GetTradingStatusRequest, marketdata_pb.GetTradingStatusResponse>;
}

export const MarketDataServiceService: IMarketDataServiceService;

export interface IMarketDataServiceServer extends grpc.UntypedServiceImplementation {
  getCandles: grpc.handleUnaryCall<marketdata_pb.GetCandlesRequest, marketdata_pb.GetCandlesResponse>;
  getLastPrices: grpc.handleUnaryCall<marketdata_pb.GetLastPricesRequest, marketdata_pb.GetLastPricesResponse>;
  getOrderBook: grpc.handleUnaryCall<marketdata_pb.GetOrderBookRequest, marketdata_pb.GetOrderBookResponse>;
  getTradingStatus: grpc.handleUnaryCall<marketdata_pb.GetTradingStatusRequest, marketdata_pb.GetTradingStatusResponse>;
}

export class MarketDataServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCandles(argument: marketdata_pb.GetCandlesRequest, callback: grpc.requestCallback<marketdata_pb.GetCandlesResponse>): grpc.ClientUnaryCall;
  getCandles(argument: marketdata_pb.GetCandlesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<marketdata_pb.GetCandlesResponse>): grpc.ClientUnaryCall;
  getCandles(argument: marketdata_pb.GetCandlesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<marketdata_pb.GetCandlesResponse>): grpc.ClientUnaryCall;
  getLastPrices(argument: marketdata_pb.GetLastPricesRequest, callback: grpc.requestCallback<marketdata_pb.GetLastPricesResponse>): grpc.ClientUnaryCall;
  getLastPrices(argument: marketdata_pb.GetLastPricesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<marketdata_pb.GetLastPricesResponse>): grpc.ClientUnaryCall;
  getLastPrices(argument: marketdata_pb.GetLastPricesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<marketdata_pb.GetLastPricesResponse>): grpc.ClientUnaryCall;
  getOrderBook(argument: marketdata_pb.GetOrderBookRequest, callback: grpc.requestCallback<marketdata_pb.GetOrderBookResponse>): grpc.ClientUnaryCall;
  getOrderBook(argument: marketdata_pb.GetOrderBookRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<marketdata_pb.GetOrderBookResponse>): grpc.ClientUnaryCall;
  getOrderBook(argument: marketdata_pb.GetOrderBookRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<marketdata_pb.GetOrderBookResponse>): grpc.ClientUnaryCall;
  getTradingStatus(argument: marketdata_pb.GetTradingStatusRequest, callback: grpc.requestCallback<marketdata_pb.GetTradingStatusResponse>): grpc.ClientUnaryCall;
  getTradingStatus(argument: marketdata_pb.GetTradingStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<marketdata_pb.GetTradingStatusResponse>): grpc.ClientUnaryCall;
  getTradingStatus(argument: marketdata_pb.GetTradingStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<marketdata_pb.GetTradingStatusResponse>): grpc.ClientUnaryCall;
}

interface IMarketDataStreamServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  marketDataStream: grpc.MethodDefinition<marketdata_pb.MarketDataRequest, marketdata_pb.MarketDataResponse>;
}

export const MarketDataStreamServiceService: IMarketDataStreamServiceService;

export interface IMarketDataStreamServiceServer extends grpc.UntypedServiceImplementation {
  marketDataStream: grpc.handleBidiStreamingCall<marketdata_pb.MarketDataRequest, marketdata_pb.MarketDataResponse>;
}

export class MarketDataStreamServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  marketDataStream(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<marketdata_pb.MarketDataRequest, marketdata_pb.MarketDataResponse>;
  marketDataStream(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<marketdata_pb.MarketDataRequest, marketdata_pb.MarketDataResponse>;
}
