// package: tinkoff.public.invest.api.contract.v1
// file: marketdata.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class MarketDataRequest extends jspb.Message {
  hasSubscribeCandlesRequest(): boolean;
  clearSubscribeCandlesRequest(): void;
  getSubscribeCandlesRequest(): SubscribeCandlesRequest | undefined;
  setSubscribeCandlesRequest(value?: SubscribeCandlesRequest): void;

  hasSubscribeOrderBookRequest(): boolean;
  clearSubscribeOrderBookRequest(): void;
  getSubscribeOrderBookRequest(): SubscribeOrderBookRequest | undefined;
  setSubscribeOrderBookRequest(value?: SubscribeOrderBookRequest): void;

  hasSubscribeTradesRequest(): boolean;
  clearSubscribeTradesRequest(): void;
  getSubscribeTradesRequest(): SubscribeTradesRequest | undefined;
  setSubscribeTradesRequest(value?: SubscribeTradesRequest): void;

  hasSubscribeInfoRequest(): boolean;
  clearSubscribeInfoRequest(): void;
  getSubscribeInfoRequest(): SubscribeInfoRequest | undefined;
  setSubscribeInfoRequest(value?: SubscribeInfoRequest): void;

  getPayloadCase(): MarketDataRequest.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDataRequest): MarketDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDataRequest;
  static deserializeBinaryFromReader(message: MarketDataRequest, reader: jspb.BinaryReader): MarketDataRequest;
}

export namespace MarketDataRequest {
  export type AsObject = {
    subscribeCandlesRequest?: SubscribeCandlesRequest.AsObject,
    subscribeOrderBookRequest?: SubscribeOrderBookRequest.AsObject,
    subscribeTradesRequest?: SubscribeTradesRequest.AsObject,
    subscribeInfoRequest?: SubscribeInfoRequest.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    SUBSCRIBE_CANDLES_REQUEST = 1,
    SUBSCRIBE_ORDER_BOOK_REQUEST = 2,
    SUBSCRIBE_TRADES_REQUEST = 3,
    SUBSCRIBE_INFO_REQUEST = 4,
  }
}

export class MarketDataResponse extends jspb.Message {
  hasSubscribeCandlesResponse(): boolean;
  clearSubscribeCandlesResponse(): void;
  getSubscribeCandlesResponse(): SubscribeCandlesResponse | undefined;
  setSubscribeCandlesResponse(value?: SubscribeCandlesResponse): void;

  hasSubscribeOrderBookResponse(): boolean;
  clearSubscribeOrderBookResponse(): void;
  getSubscribeOrderBookResponse(): SubscribeOrderBookResponse | undefined;
  setSubscribeOrderBookResponse(value?: SubscribeOrderBookResponse): void;

  hasSubscribeTradesResponse(): boolean;
  clearSubscribeTradesResponse(): void;
  getSubscribeTradesResponse(): SubscribeTradesResponse | undefined;
  setSubscribeTradesResponse(value?: SubscribeTradesResponse): void;

  hasSubscribeInfoResponse(): boolean;
  clearSubscribeInfoResponse(): void;
  getSubscribeInfoResponse(): SubscribeInfoResponse | undefined;
  setSubscribeInfoResponse(value?: SubscribeInfoResponse): void;

  hasCandle(): boolean;
  clearCandle(): void;
  getCandle(): Candle | undefined;
  setCandle(value?: Candle): void;

  hasTrade(): boolean;
  clearTrade(): void;
  getTrade(): Trade | undefined;
  setTrade(value?: Trade): void;

  hasOrderbook(): boolean;
  clearOrderbook(): void;
  getOrderbook(): OrderBook | undefined;
  setOrderbook(value?: OrderBook): void;

  hasTradingStatus(): boolean;
  clearTradingStatus(): void;
  getTradingStatus(): TradingStatus | undefined;
  setTradingStatus(value?: TradingStatus): void;

  hasPing(): boolean;
  clearPing(): void;
  getPing(): common_pb.Ping | undefined;
  setPing(value?: common_pb.Ping): void;

  getPayloadCase(): MarketDataResponse.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarketDataResponse): MarketDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketDataResponse;
  static deserializeBinaryFromReader(message: MarketDataResponse, reader: jspb.BinaryReader): MarketDataResponse;
}

export namespace MarketDataResponse {
  export type AsObject = {
    subscribeCandlesResponse?: SubscribeCandlesResponse.AsObject,
    subscribeOrderBookResponse?: SubscribeOrderBookResponse.AsObject,
    subscribeTradesResponse?: SubscribeTradesResponse.AsObject,
    subscribeInfoResponse?: SubscribeInfoResponse.AsObject,
    candle?: Candle.AsObject,
    trade?: Trade.AsObject,
    orderbook?: OrderBook.AsObject,
    tradingStatus?: TradingStatus.AsObject,
    ping?: common_pb.Ping.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    SUBSCRIBE_CANDLES_RESPONSE = 1,
    SUBSCRIBE_ORDER_BOOK_RESPONSE = 2,
    SUBSCRIBE_TRADES_RESPONSE = 3,
    SUBSCRIBE_INFO_RESPONSE = 4,
    CANDLE = 5,
    TRADE = 6,
    ORDERBOOK = 7,
    TRADING_STATUS = 8,
    PING = 9,
  }
}

export class SubscribeCandlesRequest extends jspb.Message {
  getSubscriptionAction(): SubscriptionActionMap[keyof SubscriptionActionMap];
  setSubscriptionAction(value: SubscriptionActionMap[keyof SubscriptionActionMap]): void;

  clearInstrumentsList(): void;
  getInstrumentsList(): Array<CandleInstrument>;
  setInstrumentsList(value: Array<CandleInstrument>): void;
  addInstruments(value?: CandleInstrument, index?: number): CandleInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeCandlesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeCandlesRequest): SubscribeCandlesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeCandlesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeCandlesRequest;
  static deserializeBinaryFromReader(message: SubscribeCandlesRequest, reader: jspb.BinaryReader): SubscribeCandlesRequest;
}

export namespace SubscribeCandlesRequest {
  export type AsObject = {
    subscriptionAction: SubscriptionActionMap[keyof SubscriptionActionMap],
    instrumentsList: Array<CandleInstrument.AsObject>,
  }
}

export class CandleInstrument extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getInterval(): SubscriptionIntervalMap[keyof SubscriptionIntervalMap];
  setInterval(value: SubscriptionIntervalMap[keyof SubscriptionIntervalMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandleInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: CandleInstrument): CandleInstrument.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CandleInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandleInstrument;
  static deserializeBinaryFromReader(message: CandleInstrument, reader: jspb.BinaryReader): CandleInstrument;
}

export namespace CandleInstrument {
  export type AsObject = {
    figi: string,
    interval: SubscriptionIntervalMap[keyof SubscriptionIntervalMap],
  }
}

export class SubscribeCandlesResponse extends jspb.Message {
  getTrackingId(): string;
  setTrackingId(value: string): void;

  clearCandlesSubscriptionsList(): void;
  getCandlesSubscriptionsList(): Array<CandleSubscription>;
  setCandlesSubscriptionsList(value: Array<CandleSubscription>): void;
  addCandlesSubscriptions(value?: CandleSubscription, index?: number): CandleSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeCandlesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeCandlesResponse): SubscribeCandlesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeCandlesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeCandlesResponse;
  static deserializeBinaryFromReader(message: SubscribeCandlesResponse, reader: jspb.BinaryReader): SubscribeCandlesResponse;
}

export namespace SubscribeCandlesResponse {
  export type AsObject = {
    trackingId: string,
    candlesSubscriptionsList: Array<CandleSubscription.AsObject>,
  }
}

export class CandleSubscription extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getInterval(): SubscriptionIntervalMap[keyof SubscriptionIntervalMap];
  setInterval(value: SubscriptionIntervalMap[keyof SubscriptionIntervalMap]): void;

  getSubscriptionStatus(): SubscriptionStatusMap[keyof SubscriptionStatusMap];
  setSubscriptionStatus(value: SubscriptionStatusMap[keyof SubscriptionStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CandleSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: CandleSubscription): CandleSubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CandleSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CandleSubscription;
  static deserializeBinaryFromReader(message: CandleSubscription, reader: jspb.BinaryReader): CandleSubscription;
}

export namespace CandleSubscription {
  export type AsObject = {
    figi: string,
    interval: SubscriptionIntervalMap[keyof SubscriptionIntervalMap],
    subscriptionStatus: SubscriptionStatusMap[keyof SubscriptionStatusMap],
  }
}

export class SubscribeOrderBookRequest extends jspb.Message {
  getSubscriptionAction(): SubscriptionActionMap[keyof SubscriptionActionMap];
  setSubscriptionAction(value: SubscriptionActionMap[keyof SubscriptionActionMap]): void;

  clearInstrumentsList(): void;
  getInstrumentsList(): Array<OrderBookInstrument>;
  setInstrumentsList(value: Array<OrderBookInstrument>): void;
  addInstruments(value?: OrderBookInstrument, index?: number): OrderBookInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeOrderBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeOrderBookRequest): SubscribeOrderBookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeOrderBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeOrderBookRequest;
  static deserializeBinaryFromReader(message: SubscribeOrderBookRequest, reader: jspb.BinaryReader): SubscribeOrderBookRequest;
}

export namespace SubscribeOrderBookRequest {
  export type AsObject = {
    subscriptionAction: SubscriptionActionMap[keyof SubscriptionActionMap],
    instrumentsList: Array<OrderBookInstrument.AsObject>,
  }
}

export class OrderBookInstrument extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getDepth(): number;
  setDepth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBookInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBookInstrument): OrderBookInstrument.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderBookInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBookInstrument;
  static deserializeBinaryFromReader(message: OrderBookInstrument, reader: jspb.BinaryReader): OrderBookInstrument;
}

export namespace OrderBookInstrument {
  export type AsObject = {
    figi: string,
    depth: number,
  }
}

export class SubscribeOrderBookResponse extends jspb.Message {
  getTrackingId(): string;
  setTrackingId(value: string): void;

  clearOrderBookSubscriptionsList(): void;
  getOrderBookSubscriptionsList(): Array<OrderBookSubscription>;
  setOrderBookSubscriptionsList(value: Array<OrderBookSubscription>): void;
  addOrderBookSubscriptions(value?: OrderBookSubscription, index?: number): OrderBookSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeOrderBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeOrderBookResponse): SubscribeOrderBookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeOrderBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeOrderBookResponse;
  static deserializeBinaryFromReader(message: SubscribeOrderBookResponse, reader: jspb.BinaryReader): SubscribeOrderBookResponse;
}

export namespace SubscribeOrderBookResponse {
  export type AsObject = {
    trackingId: string,
    orderBookSubscriptionsList: Array<OrderBookSubscription.AsObject>,
  }
}

export class OrderBookSubscription extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getDepth(): number;
  setDepth(value: number): void;

  getSubscriptionStatus(): SubscriptionStatusMap[keyof SubscriptionStatusMap];
  setSubscriptionStatus(value: SubscriptionStatusMap[keyof SubscriptionStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBookSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBookSubscription): OrderBookSubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderBookSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBookSubscription;
  static deserializeBinaryFromReader(message: OrderBookSubscription, reader: jspb.BinaryReader): OrderBookSubscription;
}

export namespace OrderBookSubscription {
  export type AsObject = {
    figi: string,
    depth: number,
    subscriptionStatus: SubscriptionStatusMap[keyof SubscriptionStatusMap],
  }
}

export class SubscribeTradesRequest extends jspb.Message {
  getSubscriptionAction(): SubscriptionActionMap[keyof SubscriptionActionMap];
  setSubscriptionAction(value: SubscriptionActionMap[keyof SubscriptionActionMap]): void;

  clearInstrumentsList(): void;
  getInstrumentsList(): Array<TradeInstrument>;
  setInstrumentsList(value: Array<TradeInstrument>): void;
  addInstruments(value?: TradeInstrument, index?: number): TradeInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeTradesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeTradesRequest): SubscribeTradesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeTradesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeTradesRequest;
  static deserializeBinaryFromReader(message: SubscribeTradesRequest, reader: jspb.BinaryReader): SubscribeTradesRequest;
}

export namespace SubscribeTradesRequest {
  export type AsObject = {
    subscriptionAction: SubscriptionActionMap[keyof SubscriptionActionMap],
    instrumentsList: Array<TradeInstrument.AsObject>,
  }
}

export class TradeInstrument extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: TradeInstrument): TradeInstrument.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradeInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeInstrument;
  static deserializeBinaryFromReader(message: TradeInstrument, reader: jspb.BinaryReader): TradeInstrument;
}

export namespace TradeInstrument {
  export type AsObject = {
    figi: string,
  }
}

export class SubscribeTradesResponse extends jspb.Message {
  getTrackingId(): string;
  setTrackingId(value: string): void;

  clearTradeSubscriptionsList(): void;
  getTradeSubscriptionsList(): Array<TradeSubscription>;
  setTradeSubscriptionsList(value: Array<TradeSubscription>): void;
  addTradeSubscriptions(value?: TradeSubscription, index?: number): TradeSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeTradesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeTradesResponse): SubscribeTradesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeTradesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeTradesResponse;
  static deserializeBinaryFromReader(message: SubscribeTradesResponse, reader: jspb.BinaryReader): SubscribeTradesResponse;
}

export namespace SubscribeTradesResponse {
  export type AsObject = {
    trackingId: string,
    tradeSubscriptionsList: Array<TradeSubscription.AsObject>,
  }
}

export class TradeSubscription extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getSubscriptionStatus(): SubscriptionStatusMap[keyof SubscriptionStatusMap];
  setSubscriptionStatus(value: SubscriptionStatusMap[keyof SubscriptionStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradeSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: TradeSubscription): TradeSubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradeSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradeSubscription;
  static deserializeBinaryFromReader(message: TradeSubscription, reader: jspb.BinaryReader): TradeSubscription;
}

export namespace TradeSubscription {
  export type AsObject = {
    figi: string,
    subscriptionStatus: SubscriptionStatusMap[keyof SubscriptionStatusMap],
  }
}

export class SubscribeInfoRequest extends jspb.Message {
  getSubscriptionAction(): SubscriptionActionMap[keyof SubscriptionActionMap];
  setSubscriptionAction(value: SubscriptionActionMap[keyof SubscriptionActionMap]): void;

  clearInstrumentsList(): void;
  getInstrumentsList(): Array<InfoInstrument>;
  setInstrumentsList(value: Array<InfoInstrument>): void;
  addInstruments(value?: InfoInstrument, index?: number): InfoInstrument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeInfoRequest): SubscribeInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeInfoRequest;
  static deserializeBinaryFromReader(message: SubscribeInfoRequest, reader: jspb.BinaryReader): SubscribeInfoRequest;
}

export namespace SubscribeInfoRequest {
  export type AsObject = {
    subscriptionAction: SubscriptionActionMap[keyof SubscriptionActionMap],
    instrumentsList: Array<InfoInstrument.AsObject>,
  }
}

export class InfoInstrument extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoInstrument.AsObject;
  static toObject(includeInstance: boolean, msg: InfoInstrument): InfoInstrument.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InfoInstrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoInstrument;
  static deserializeBinaryFromReader(message: InfoInstrument, reader: jspb.BinaryReader): InfoInstrument;
}

export namespace InfoInstrument {
  export type AsObject = {
    figi: string,
  }
}

export class SubscribeInfoResponse extends jspb.Message {
  getTrackingId(): string;
  setTrackingId(value: string): void;

  clearInfoSubscriptionsList(): void;
  getInfoSubscriptionsList(): Array<InfoSubscription>;
  setInfoSubscriptionsList(value: Array<InfoSubscription>): void;
  addInfoSubscriptions(value?: InfoSubscription, index?: number): InfoSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeInfoResponse): SubscribeInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeInfoResponse;
  static deserializeBinaryFromReader(message: SubscribeInfoResponse, reader: jspb.BinaryReader): SubscribeInfoResponse;
}

export namespace SubscribeInfoResponse {
  export type AsObject = {
    trackingId: string,
    infoSubscriptionsList: Array<InfoSubscription.AsObject>,
  }
}

export class InfoSubscription extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getSubscriptionStatus(): SubscriptionStatusMap[keyof SubscriptionStatusMap];
  setSubscriptionStatus(value: SubscriptionStatusMap[keyof SubscriptionStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: InfoSubscription): InfoSubscription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InfoSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoSubscription;
  static deserializeBinaryFromReader(message: InfoSubscription, reader: jspb.BinaryReader): InfoSubscription;
}

export namespace InfoSubscription {
  export type AsObject = {
    figi: string,
    subscriptionStatus: SubscriptionStatusMap[keyof SubscriptionStatusMap],
  }
}

export class Candle extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getInterval(): SubscriptionIntervalMap[keyof SubscriptionIntervalMap];
  setInterval(value: SubscriptionIntervalMap[keyof SubscriptionIntervalMap]): void;

  hasOpen(): boolean;
  clearOpen(): void;
  getOpen(): common_pb.Quotation | undefined;
  setOpen(value?: common_pb.Quotation): void;

  hasHigh(): boolean;
  clearHigh(): void;
  getHigh(): common_pb.Quotation | undefined;
  setHigh(value?: common_pb.Quotation): void;

  hasLow(): boolean;
  clearLow(): void;
  getLow(): common_pb.Quotation | undefined;
  setLow(value?: common_pb.Quotation): void;

  hasClose(): boolean;
  clearClose(): void;
  getClose(): common_pb.Quotation | undefined;
  setClose(value?: common_pb.Quotation): void;

  getVolume(): number;
  setVolume(value: number): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Candle.AsObject;
  static toObject(includeInstance: boolean, msg: Candle): Candle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Candle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Candle;
  static deserializeBinaryFromReader(message: Candle, reader: jspb.BinaryReader): Candle;
}

export namespace Candle {
  export type AsObject = {
    figi: string,
    interval: SubscriptionIntervalMap[keyof SubscriptionIntervalMap],
    open?: common_pb.Quotation.AsObject,
    high?: common_pb.Quotation.AsObject,
    low?: common_pb.Quotation.AsObject,
    close?: common_pb.Quotation.AsObject,
    volume: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class OrderBook extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getDepth(): number;
  setDepth(value: number): void;

  getIsConsistent(): boolean;
  setIsConsistent(value: boolean): void;

  clearBidsList(): void;
  getBidsList(): Array<Order>;
  setBidsList(value: Array<Order>): void;
  addBids(value?: Order, index?: number): Order;

  clearAsksList(): void;
  getAsksList(): Array<Order>;
  setAsksList(value: Array<Order>): void;
  addAsks(value?: Order, index?: number): Order;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBook.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBook): OrderBook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBook;
  static deserializeBinaryFromReader(message: OrderBook, reader: jspb.BinaryReader): OrderBook;
}

export namespace OrderBook {
  export type AsObject = {
    figi: string,
    depth: number,
    isConsistent: boolean,
    bidsList: Array<Order.AsObject>,
    asksList: Array<Order.AsObject>,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Order extends jspb.Message {
  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): common_pb.Quotation | undefined;
  setPrice(value?: common_pb.Quotation): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    price?: common_pb.Quotation.AsObject,
    quantity: number,
  }
}

export class Trade extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getDirection(): TradeDirectionMap[keyof TradeDirectionMap];
  setDirection(value: TradeDirectionMap[keyof TradeDirectionMap]): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): common_pb.Quotation | undefined;
  setPrice(value?: common_pb.Quotation): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Trade.AsObject;
  static toObject(includeInstance: boolean, msg: Trade): Trade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Trade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Trade;
  static deserializeBinaryFromReader(message: Trade, reader: jspb.BinaryReader): Trade;
}

export namespace Trade {
  export type AsObject = {
    figi: string,
    direction: TradeDirectionMap[keyof TradeDirectionMap],
    price?: common_pb.Quotation.AsObject,
    quantity: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TradingStatus extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getTradingStatus(): common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap];
  setTradingStatus(value: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap]): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingStatus.AsObject;
  static toObject(includeInstance: boolean, msg: TradingStatus): TradingStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradingStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingStatus;
  static deserializeBinaryFromReader(message: TradingStatus, reader: jspb.BinaryReader): TradingStatus;
}

export namespace TradingStatus {
  export type AsObject = {
    figi: string,
    tradingStatus: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap],
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetCandlesRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getInterval(): CandleIntervalMap[keyof CandleIntervalMap];
  setInterval(value: CandleIntervalMap[keyof CandleIntervalMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCandlesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCandlesRequest): GetCandlesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCandlesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCandlesRequest;
  static deserializeBinaryFromReader(message: GetCandlesRequest, reader: jspb.BinaryReader): GetCandlesRequest;
}

export namespace GetCandlesRequest {
  export type AsObject = {
    figi: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    interval: CandleIntervalMap[keyof CandleIntervalMap],
  }
}

export class GetCandlesResponse extends jspb.Message {
  clearCandlesList(): void;
  getCandlesList(): Array<HistoricCandle>;
  setCandlesList(value: Array<HistoricCandle>): void;
  addCandles(value?: HistoricCandle, index?: number): HistoricCandle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCandlesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCandlesResponse): GetCandlesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCandlesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCandlesResponse;
  static deserializeBinaryFromReader(message: GetCandlesResponse, reader: jspb.BinaryReader): GetCandlesResponse;
}

export namespace GetCandlesResponse {
  export type AsObject = {
    candlesList: Array<HistoricCandle.AsObject>,
  }
}

export class HistoricCandle extends jspb.Message {
  hasOpen(): boolean;
  clearOpen(): void;
  getOpen(): common_pb.Quotation | undefined;
  setOpen(value?: common_pb.Quotation): void;

  hasHigh(): boolean;
  clearHigh(): void;
  getHigh(): common_pb.Quotation | undefined;
  setHigh(value?: common_pb.Quotation): void;

  hasLow(): boolean;
  clearLow(): void;
  getLow(): common_pb.Quotation | undefined;
  setLow(value?: common_pb.Quotation): void;

  hasClose(): boolean;
  clearClose(): void;
  getClose(): common_pb.Quotation | undefined;
  setClose(value?: common_pb.Quotation): void;

  getVolume(): number;
  setVolume(value: number): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsComplete(): boolean;
  setIsComplete(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HistoricCandle.AsObject;
  static toObject(includeInstance: boolean, msg: HistoricCandle): HistoricCandle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HistoricCandle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HistoricCandle;
  static deserializeBinaryFromReader(message: HistoricCandle, reader: jspb.BinaryReader): HistoricCandle;
}

export namespace HistoricCandle {
  export type AsObject = {
    open?: common_pb.Quotation.AsObject,
    high?: common_pb.Quotation.AsObject,
    low?: common_pb.Quotation.AsObject,
    close?: common_pb.Quotation.AsObject,
    volume: number,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isComplete: boolean,
  }
}

export class GetLastPricesRequest extends jspb.Message {
  clearFigiList(): void;
  getFigiList(): Array<string>;
  setFigiList(value: Array<string>): void;
  addFigi(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastPricesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastPricesRequest): GetLastPricesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLastPricesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastPricesRequest;
  static deserializeBinaryFromReader(message: GetLastPricesRequest, reader: jspb.BinaryReader): GetLastPricesRequest;
}

export namespace GetLastPricesRequest {
  export type AsObject = {
    figiList: Array<string>,
  }
}

export class GetLastPricesResponse extends jspb.Message {
  clearLastPricesList(): void;
  getLastPricesList(): Array<LastPrice>;
  setLastPricesList(value: Array<LastPrice>): void;
  addLastPrices(value?: LastPrice, index?: number): LastPrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastPricesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastPricesResponse): GetLastPricesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLastPricesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastPricesResponse;
  static deserializeBinaryFromReader(message: GetLastPricesResponse, reader: jspb.BinaryReader): GetLastPricesResponse;
}

export namespace GetLastPricesResponse {
  export type AsObject = {
    lastPricesList: Array<LastPrice.AsObject>,
  }
}

export class LastPrice extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): common_pb.Quotation | undefined;
  setPrice(value?: common_pb.Quotation): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastPrice.AsObject;
  static toObject(includeInstance: boolean, msg: LastPrice): LastPrice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LastPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastPrice;
  static deserializeBinaryFromReader(message: LastPrice, reader: jspb.BinaryReader): LastPrice;
}

export namespace LastPrice {
  export type AsObject = {
    figi: string,
    price?: common_pb.Quotation.AsObject,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetOrderBookRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getDepth(): number;
  setDepth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderBookRequest): GetOrderBookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrderBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderBookRequest;
  static deserializeBinaryFromReader(message: GetOrderBookRequest, reader: jspb.BinaryReader): GetOrderBookRequest;
}

export namespace GetOrderBookRequest {
  export type AsObject = {
    figi: string,
    depth: number,
  }
}

export class GetOrderBookResponse extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getDepth(): number;
  setDepth(value: number): void;

  clearBidsList(): void;
  getBidsList(): Array<Order>;
  setBidsList(value: Array<Order>): void;
  addBids(value?: Order, index?: number): Order;

  clearAsksList(): void;
  getAsksList(): Array<Order>;
  setAsksList(value: Array<Order>): void;
  addAsks(value?: Order, index?: number): Order;

  hasLastPrice(): boolean;
  clearLastPrice(): void;
  getLastPrice(): common_pb.Quotation | undefined;
  setLastPrice(value?: common_pb.Quotation): void;

  hasClosePrice(): boolean;
  clearClosePrice(): void;
  getClosePrice(): common_pb.Quotation | undefined;
  setClosePrice(value?: common_pb.Quotation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderBookResponse): GetOrderBookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrderBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderBookResponse;
  static deserializeBinaryFromReader(message: GetOrderBookResponse, reader: jspb.BinaryReader): GetOrderBookResponse;
}

export namespace GetOrderBookResponse {
  export type AsObject = {
    figi: string,
    depth: number,
    bidsList: Array<Order.AsObject>,
    asksList: Array<Order.AsObject>,
    lastPrice?: common_pb.Quotation.AsObject,
    closePrice?: common_pb.Quotation.AsObject,
  }
}

export class GetTradingStatusRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradingStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradingStatusRequest): GetTradingStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTradingStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradingStatusRequest;
  static deserializeBinaryFromReader(message: GetTradingStatusRequest, reader: jspb.BinaryReader): GetTradingStatusRequest;
}

export namespace GetTradingStatusRequest {
  export type AsObject = {
    figi: string,
  }
}

export class GetTradingStatusResponse extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getTradingStatus(): common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap];
  setTradingStatus(value: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTradingStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTradingStatusResponse): GetTradingStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTradingStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTradingStatusResponse;
  static deserializeBinaryFromReader(message: GetTradingStatusResponse, reader: jspb.BinaryReader): GetTradingStatusResponse;
}

export namespace GetTradingStatusResponse {
  export type AsObject = {
    figi: string,
    tradingStatus: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap],
  }
}

export interface SubscriptionActionMap {
  SUBSCRIPTION_ACTION_UNSPECIFIED: 0;
  SUBSCRIPTION_ACTION_SUBSCRIBE: 1;
  SUBSCRIPTION_ACTION_UNSUBSCRIBE: 2;
}

export const SubscriptionAction: SubscriptionActionMap;

export interface SubscriptionIntervalMap {
  SUBSCRIPTION_INTERVAL_UNSPECIFIED: 0;
  SUBSCRIPTION_INTERVAL_ONE_MINUTE: 1;
  SUBSCRIPTION_INTERVAL_FIVE_MINUTES: 2;
}

export const SubscriptionInterval: SubscriptionIntervalMap;

export interface SubscriptionStatusMap {
  SUBSCRIPTION_STATUS_UNSPECIFIED: 0;
  SUBSCRIPTION_STATUS_SUCCESS: 1;
  SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND: 2;
  SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID: 3;
  SUBSCRIPTION_STATUS_DEPTH_IS_INVALID: 4;
  SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID: 5;
  SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED: 6;
  SUBSCRIPTION_STATUS_INTERNAL_ERROR: 7;
}

export const SubscriptionStatus: SubscriptionStatusMap;

export interface TradeDirectionMap {
  TRADE_DIRECTION_UNSPECIFIED: 0;
  TRADE_DIRECTION_BUY: 1;
  TRADE_DIRECTION_SELL: 2;
}

export const TradeDirection: TradeDirectionMap;

export interface CandleIntervalMap {
  CANDLE_INTERVAL_UNSPECIFIED: 0;
  CANDLE_INTERVAL_1_MIN: 1;
  CANDLE_INTERVAL_5_MIN: 2;
  CANDLE_INTERVAL_15_MIN: 3;
  CANDLE_INTERVAL_HOUR: 4;
  CANDLE_INTERVAL_DAY: 5;
}

export const CandleInterval: CandleIntervalMap;

