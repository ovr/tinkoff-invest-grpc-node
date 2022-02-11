// package: tinkoff.public.invest.api.contract.v1
// file: stoporders.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class PostStopOrderRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): common_pb.Quotation | undefined;
  setPrice(value?: common_pb.Quotation): void;

  hasStopPrice(): boolean;
  clearStopPrice(): void;
  getStopPrice(): common_pb.Quotation | undefined;
  setStopPrice(value?: common_pb.Quotation): void;

  getDirection(): StopOrderDirectionMap[keyof StopOrderDirectionMap];
  setDirection(value: StopOrderDirectionMap[keyof StopOrderDirectionMap]): void;

  getAccountId(): string;
  setAccountId(value: string): void;

  getExpirationType(): StopOrderExpirationTypeMap[keyof StopOrderExpirationTypeMap];
  setExpirationType(value: StopOrderExpirationTypeMap[keyof StopOrderExpirationTypeMap]): void;

  getStopOrderType(): StopOrderTypeMap[keyof StopOrderTypeMap];
  setStopOrderType(value: StopOrderTypeMap[keyof StopOrderTypeMap]): void;

  hasExpireDate(): boolean;
  clearExpireDate(): void;
  getExpireDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpireDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostStopOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostStopOrderRequest): PostStopOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostStopOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostStopOrderRequest;
  static deserializeBinaryFromReader(message: PostStopOrderRequest, reader: jspb.BinaryReader): PostStopOrderRequest;
}

export namespace PostStopOrderRequest {
  export type AsObject = {
    figi: string,
    quantity: number,
    price?: common_pb.Quotation.AsObject,
    stopPrice?: common_pb.Quotation.AsObject,
    direction: StopOrderDirectionMap[keyof StopOrderDirectionMap],
    accountId: string,
    expirationType: StopOrderExpirationTypeMap[keyof StopOrderExpirationTypeMap],
    stopOrderType: StopOrderTypeMap[keyof StopOrderTypeMap],
    expireDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PostStopOrderResponse extends jspb.Message {
  getStopOrderId(): string;
  setStopOrderId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostStopOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostStopOrderResponse): PostStopOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostStopOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostStopOrderResponse;
  static deserializeBinaryFromReader(message: PostStopOrderResponse, reader: jspb.BinaryReader): PostStopOrderResponse;
}

export namespace PostStopOrderResponse {
  export type AsObject = {
    stopOrderId: string,
  }
}

export class GetStopOrdersRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStopOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStopOrdersRequest): GetStopOrdersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStopOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStopOrdersRequest;
  static deserializeBinaryFromReader(message: GetStopOrdersRequest, reader: jspb.BinaryReader): GetStopOrdersRequest;
}

export namespace GetStopOrdersRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class GetStopOrdersResponse extends jspb.Message {
  clearStopOrdersList(): void;
  getStopOrdersList(): Array<StopOrder>;
  setStopOrdersList(value: Array<StopOrder>): void;
  addStopOrders(value?: StopOrder, index?: number): StopOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStopOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStopOrdersResponse): GetStopOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetStopOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStopOrdersResponse;
  static deserializeBinaryFromReader(message: GetStopOrdersResponse, reader: jspb.BinaryReader): GetStopOrdersResponse;
}

export namespace GetStopOrdersResponse {
  export type AsObject = {
    stopOrdersList: Array<StopOrder.AsObject>,
  }
}

export class CancelStopOrderRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getStopOrderId(): string;
  setStopOrderId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelStopOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelStopOrderRequest): CancelStopOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelStopOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelStopOrderRequest;
  static deserializeBinaryFromReader(message: CancelStopOrderRequest, reader: jspb.BinaryReader): CancelStopOrderRequest;
}

export namespace CancelStopOrderRequest {
  export type AsObject = {
    accountId: string,
    stopOrderId: string,
  }
}

export class CancelStopOrderResponse extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelStopOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelStopOrderResponse): CancelStopOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelStopOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelStopOrderResponse;
  static deserializeBinaryFromReader(message: CancelStopOrderResponse, reader: jspb.BinaryReader): CancelStopOrderResponse;
}

export namespace CancelStopOrderResponse {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class StopOrder extends jspb.Message {
  getStopOrderId(): string;
  setStopOrderId(value: string): void;

  getLotsRequested(): number;
  setLotsRequested(value: number): void;

  getFigi(): string;
  setFigi(value: string): void;

  getDirection(): StopOrderDirectionMap[keyof StopOrderDirectionMap];
  setDirection(value: StopOrderDirectionMap[keyof StopOrderDirectionMap]): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getOrderType(): StopOrderTypeMap[keyof StopOrderTypeMap];
  setOrderType(value: StopOrderTypeMap[keyof StopOrderTypeMap]): void;

  hasCreateDate(): boolean;
  clearCreateDate(): void;
  getCreateDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasActivationDateTime(): boolean;
  clearActivationDateTime(): void;
  getActivationDateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setActivationDateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExpirationTime(): boolean;
  clearExpirationTime(): void;
  getExpirationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): common_pb.MoneyValue | undefined;
  setPrice(value?: common_pb.MoneyValue): void;

  hasStopPrice(): boolean;
  clearStopPrice(): void;
  getStopPrice(): common_pb.MoneyValue | undefined;
  setStopPrice(value?: common_pb.MoneyValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopOrder.AsObject;
  static toObject(includeInstance: boolean, msg: StopOrder): StopOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopOrder;
  static deserializeBinaryFromReader(message: StopOrder, reader: jspb.BinaryReader): StopOrder;
}

export namespace StopOrder {
  export type AsObject = {
    stopOrderId: string,
    lotsRequested: number,
    figi: string,
    direction: StopOrderDirectionMap[keyof StopOrderDirectionMap],
    currency: string,
    orderType: StopOrderTypeMap[keyof StopOrderTypeMap],
    createDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    activationDateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    expirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    price?: common_pb.MoneyValue.AsObject,
    stopPrice?: common_pb.MoneyValue.AsObject,
  }
}

export interface StopOrderDirectionMap {
  STOP_ORDER_DIRECTION_UNSPECIFIED: 0;
  STOP_ORDER_DIRECTION_BUY: 1;
  STOP_ORDER_DIRECTION_SELL: 2;
}

export const StopOrderDirection: StopOrderDirectionMap;

export interface StopOrderExpirationTypeMap {
  STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED: 0;
  STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL: 1;
  STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE: 2;
}

export const StopOrderExpirationType: StopOrderExpirationTypeMap;

export interface StopOrderTypeMap {
  STOP_ORDER_TYPE_UNSPECIFIED: 0;
  STOP_ORDER_TYPE_TAKE_PROFIT: 1;
  STOP_ORDER_TYPE_STOP_LOSS: 2;
  STOP_ORDER_TYPE_STOP_LIMIT: 3;
}

export const StopOrderType: StopOrderTypeMap;

