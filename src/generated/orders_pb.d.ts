// package: tinkoff.public.invest.api.contract.v1
// file: orders.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TradesStreamRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradesStreamRequest): TradesStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradesStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesStreamRequest;
  static deserializeBinaryFromReader(message: TradesStreamRequest, reader: jspb.BinaryReader): TradesStreamRequest;
}

export namespace TradesStreamRequest {
  export type AsObject = {
  }
}

export class TradesStreamResponse extends jspb.Message {
  hasOrderTrades(): boolean;
  clearOrderTrades(): void;
  getOrderTrades(): OrderTrades | undefined;
  setOrderTrades(value?: OrderTrades): void;

  hasPing(): boolean;
  clearPing(): void;
  getPing(): common_pb.Ping | undefined;
  setPing(value?: common_pb.Ping): void;

  getPayloadCase(): TradesStreamResponse.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradesStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TradesStreamResponse): TradesStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradesStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradesStreamResponse;
  static deserializeBinaryFromReader(message: TradesStreamResponse, reader: jspb.BinaryReader): TradesStreamResponse;
}

export namespace TradesStreamResponse {
  export type AsObject = {
    orderTrades?: OrderTrades.AsObject,
    ping?: common_pb.Ping.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    ORDER_TRADES = 1,
    PING = 2,
  }
}

export class OrderTrades extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDirection(): OrderDirectionMap[keyof OrderDirectionMap];
  setDirection(value: OrderDirectionMap[keyof OrderDirectionMap]): void;

  getFigi(): string;
  setFigi(value: string): void;

  clearTradesList(): void;
  getTradesList(): Array<OrderTrade>;
  setTradesList(value: Array<OrderTrade>): void;
  addTrades(value?: OrderTrade, index?: number): OrderTrade;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderTrades.AsObject;
  static toObject(includeInstance: boolean, msg: OrderTrades): OrderTrades.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderTrades, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderTrades;
  static deserializeBinaryFromReader(message: OrderTrades, reader: jspb.BinaryReader): OrderTrades;
}

export namespace OrderTrades {
  export type AsObject = {
    orderId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    direction: OrderDirectionMap[keyof OrderDirectionMap],
    figi: string,
    tradesList: Array<OrderTrade.AsObject>,
  }
}

export class OrderTrade extends jspb.Message {
  hasDateTime(): boolean;
  clearDateTime(): void;
  getDateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): common_pb.Quotation | undefined;
  setPrice(value?: common_pb.Quotation): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderTrade.AsObject;
  static toObject(includeInstance: boolean, msg: OrderTrade): OrderTrade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderTrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderTrade;
  static deserializeBinaryFromReader(message: OrderTrade, reader: jspb.BinaryReader): OrderTrade;
}

export namespace OrderTrade {
  export type AsObject = {
    dateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    price?: common_pb.Quotation.AsObject,
    quantity: number,
  }
}

export class PostOrderRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): common_pb.Quotation | undefined;
  setPrice(value?: common_pb.Quotation): void;

  getDirection(): OrderDirectionMap[keyof OrderDirectionMap];
  setDirection(value: OrderDirectionMap[keyof OrderDirectionMap]): void;

  getAccountId(): string;
  setAccountId(value: string): void;

  getOrderType(): OrderTypeMap[keyof OrderTypeMap];
  setOrderType(value: OrderTypeMap[keyof OrderTypeMap]): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostOrderRequest): PostOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostOrderRequest;
  static deserializeBinaryFromReader(message: PostOrderRequest, reader: jspb.BinaryReader): PostOrderRequest;
}

export namespace PostOrderRequest {
  export type AsObject = {
    figi: string,
    quantity: number,
    price?: common_pb.Quotation.AsObject,
    direction: OrderDirectionMap[keyof OrderDirectionMap],
    accountId: string,
    orderType: OrderTypeMap[keyof OrderTypeMap],
    orderId: string,
  }
}

export class PostOrderResponse extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): void;

  getExecutionReportStatus(): OrderExecutionReportStatusMap[keyof OrderExecutionReportStatusMap];
  setExecutionReportStatus(value: OrderExecutionReportStatusMap[keyof OrderExecutionReportStatusMap]): void;

  getLotsRequested(): number;
  setLotsRequested(value: number): void;

  getLotsExecuted(): number;
  setLotsExecuted(value: number): void;

  hasInitialOrderPrice(): boolean;
  clearInitialOrderPrice(): void;
  getInitialOrderPrice(): common_pb.MoneyValue | undefined;
  setInitialOrderPrice(value?: common_pb.MoneyValue): void;

  hasExecutedOrderPrice(): boolean;
  clearExecutedOrderPrice(): void;
  getExecutedOrderPrice(): common_pb.MoneyValue | undefined;
  setExecutedOrderPrice(value?: common_pb.MoneyValue): void;

  hasTotalOrderAmount(): boolean;
  clearTotalOrderAmount(): void;
  getTotalOrderAmount(): common_pb.MoneyValue | undefined;
  setTotalOrderAmount(value?: common_pb.MoneyValue): void;

  hasInitialCommission(): boolean;
  clearInitialCommission(): void;
  getInitialCommission(): common_pb.MoneyValue | undefined;
  setInitialCommission(value?: common_pb.MoneyValue): void;

  hasExecutedCommission(): boolean;
  clearExecutedCommission(): void;
  getExecutedCommission(): common_pb.MoneyValue | undefined;
  setExecutedCommission(value?: common_pb.MoneyValue): void;

  hasAciValue(): boolean;
  clearAciValue(): void;
  getAciValue(): common_pb.MoneyValue | undefined;
  setAciValue(value?: common_pb.MoneyValue): void;

  getFigi(): string;
  setFigi(value: string): void;

  getDirection(): OrderDirectionMap[keyof OrderDirectionMap];
  setDirection(value: OrderDirectionMap[keyof OrderDirectionMap]): void;

  hasInitialSecurityPrice(): boolean;
  clearInitialSecurityPrice(): void;
  getInitialSecurityPrice(): common_pb.MoneyValue | undefined;
  setInitialSecurityPrice(value?: common_pb.MoneyValue): void;

  getOrderType(): OrderTypeMap[keyof OrderTypeMap];
  setOrderType(value: OrderTypeMap[keyof OrderTypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasInitialOrderPricePt(): boolean;
  clearInitialOrderPricePt(): void;
  getInitialOrderPricePt(): common_pb.Quotation | undefined;
  setInitialOrderPricePt(value?: common_pb.Quotation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostOrderResponse): PostOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostOrderResponse;
  static deserializeBinaryFromReader(message: PostOrderResponse, reader: jspb.BinaryReader): PostOrderResponse;
}

export namespace PostOrderResponse {
  export type AsObject = {
    orderId: string,
    executionReportStatus: OrderExecutionReportStatusMap[keyof OrderExecutionReportStatusMap],
    lotsRequested: number,
    lotsExecuted: number,
    initialOrderPrice?: common_pb.MoneyValue.AsObject,
    executedOrderPrice?: common_pb.MoneyValue.AsObject,
    totalOrderAmount?: common_pb.MoneyValue.AsObject,
    initialCommission?: common_pb.MoneyValue.AsObject,
    executedCommission?: common_pb.MoneyValue.AsObject,
    aciValue?: common_pb.MoneyValue.AsObject,
    figi: string,
    direction: OrderDirectionMap[keyof OrderDirectionMap],
    initialSecurityPrice?: common_pb.MoneyValue.AsObject,
    orderType: OrderTypeMap[keyof OrderTypeMap],
    message: string,
    initialOrderPricePt?: common_pb.Quotation.AsObject,
  }
}

export class CancelOrderRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOrderRequest): CancelOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOrderRequest;
  static deserializeBinaryFromReader(message: CancelOrderRequest, reader: jspb.BinaryReader): CancelOrderRequest;
}

export namespace CancelOrderRequest {
  export type AsObject = {
    accountId: string,
    orderId: string,
  }
}

export class CancelOrderResponse extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOrderResponse): CancelOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOrderResponse;
  static deserializeBinaryFromReader(message: CancelOrderResponse, reader: jspb.BinaryReader): CancelOrderResponse;
}

export namespace CancelOrderResponse {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetOrderStateRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderStateRequest): GetOrderStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrderStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderStateRequest;
  static deserializeBinaryFromReader(message: GetOrderStateRequest, reader: jspb.BinaryReader): GetOrderStateRequest;
}

export namespace GetOrderStateRequest {
  export type AsObject = {
    accountId: string,
    orderId: string,
  }
}

export class GetOrdersRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrdersRequest): GetOrdersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrdersRequest;
  static deserializeBinaryFromReader(message: GetOrdersRequest, reader: jspb.BinaryReader): GetOrdersRequest;
}

export namespace GetOrdersRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class GetOrdersResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<OrderState>;
  setOrdersList(value: Array<OrderState>): void;
  addOrders(value?: OrderState, index?: number): OrderState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrdersResponse): GetOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrdersResponse;
  static deserializeBinaryFromReader(message: GetOrdersResponse, reader: jspb.BinaryReader): GetOrdersResponse;
}

export namespace GetOrdersResponse {
  export type AsObject = {
    ordersList: Array<OrderState.AsObject>,
  }
}

export class OrderState extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): void;

  getExecutionReportStatus(): OrderExecutionReportStatusMap[keyof OrderExecutionReportStatusMap];
  setExecutionReportStatus(value: OrderExecutionReportStatusMap[keyof OrderExecutionReportStatusMap]): void;

  getLotsRequested(): number;
  setLotsRequested(value: number): void;

  getLotsExecuted(): number;
  setLotsExecuted(value: number): void;

  hasInitialOrderPrice(): boolean;
  clearInitialOrderPrice(): void;
  getInitialOrderPrice(): common_pb.MoneyValue | undefined;
  setInitialOrderPrice(value?: common_pb.MoneyValue): void;

  hasExecutedOrderPrice(): boolean;
  clearExecutedOrderPrice(): void;
  getExecutedOrderPrice(): common_pb.MoneyValue | undefined;
  setExecutedOrderPrice(value?: common_pb.MoneyValue): void;

  hasTotalOrderAmount(): boolean;
  clearTotalOrderAmount(): void;
  getTotalOrderAmount(): common_pb.MoneyValue | undefined;
  setTotalOrderAmount(value?: common_pb.MoneyValue): void;

  hasAveragePositionPrice(): boolean;
  clearAveragePositionPrice(): void;
  getAveragePositionPrice(): common_pb.MoneyValue | undefined;
  setAveragePositionPrice(value?: common_pb.MoneyValue): void;

  hasInitialCommission(): boolean;
  clearInitialCommission(): void;
  getInitialCommission(): common_pb.MoneyValue | undefined;
  setInitialCommission(value?: common_pb.MoneyValue): void;

  hasExecutedCommission(): boolean;
  clearExecutedCommission(): void;
  getExecutedCommission(): common_pb.MoneyValue | undefined;
  setExecutedCommission(value?: common_pb.MoneyValue): void;

  getFigi(): string;
  setFigi(value: string): void;

  getDirection(): OrderDirectionMap[keyof OrderDirectionMap];
  setDirection(value: OrderDirectionMap[keyof OrderDirectionMap]): void;

  hasInitialSecurityPrice(): boolean;
  clearInitialSecurityPrice(): void;
  getInitialSecurityPrice(): common_pb.MoneyValue | undefined;
  setInitialSecurityPrice(value?: common_pb.MoneyValue): void;

  clearStagesList(): void;
  getStagesList(): Array<OrderStage>;
  setStagesList(value: Array<OrderStage>): void;
  addStages(value?: OrderStage, index?: number): OrderStage;

  hasServiceCommission(): boolean;
  clearServiceCommission(): void;
  getServiceCommission(): common_pb.MoneyValue | undefined;
  setServiceCommission(value?: common_pb.MoneyValue): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getOrderType(): OrderTypeMap[keyof OrderTypeMap];
  setOrderType(value: OrderTypeMap[keyof OrderTypeMap]): void;

  hasOrderDate(): boolean;
  clearOrderDate(): void;
  getOrderDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOrderDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderState.AsObject;
  static toObject(includeInstance: boolean, msg: OrderState): OrderState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderState;
  static deserializeBinaryFromReader(message: OrderState, reader: jspb.BinaryReader): OrderState;
}

export namespace OrderState {
  export type AsObject = {
    orderId: string,
    executionReportStatus: OrderExecutionReportStatusMap[keyof OrderExecutionReportStatusMap],
    lotsRequested: number,
    lotsExecuted: number,
    initialOrderPrice?: common_pb.MoneyValue.AsObject,
    executedOrderPrice?: common_pb.MoneyValue.AsObject,
    totalOrderAmount?: common_pb.MoneyValue.AsObject,
    averagePositionPrice?: common_pb.MoneyValue.AsObject,
    initialCommission?: common_pb.MoneyValue.AsObject,
    executedCommission?: common_pb.MoneyValue.AsObject,
    figi: string,
    direction: OrderDirectionMap[keyof OrderDirectionMap],
    initialSecurityPrice?: common_pb.MoneyValue.AsObject,
    stagesList: Array<OrderStage.AsObject>,
    serviceCommission?: common_pb.MoneyValue.AsObject,
    currency: string,
    orderType: OrderTypeMap[keyof OrderTypeMap],
    orderDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class OrderStage extends jspb.Message {
  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): common_pb.MoneyValue | undefined;
  setPrice(value?: common_pb.MoneyValue): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getTradeId(): string;
  setTradeId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderStage.AsObject;
  static toObject(includeInstance: boolean, msg: OrderStage): OrderStage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderStage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderStage;
  static deserializeBinaryFromReader(message: OrderStage, reader: jspb.BinaryReader): OrderStage;
}

export namespace OrderStage {
  export type AsObject = {
    price?: common_pb.MoneyValue.AsObject,
    quantity: number,
    tradeId: string,
  }
}

export interface OrderDirectionMap {
  ORDER_DIRECTION_UNSPECIFIED: 0;
  ORDER_DIRECTION_BUY: 1;
  ORDER_DIRECTION_SELL: 2;
}

export const OrderDirection: OrderDirectionMap;

export interface OrderTypeMap {
  ORDER_TYPE_UNSPECIFIED: 0;
  ORDER_TYPE_LIMIT: 1;
  ORDER_TYPE_MARKET: 2;
}

export const OrderType: OrderTypeMap;

export interface OrderExecutionReportStatusMap {
  EXECUTION_REPORT_STATUS_UNSPECIFIED: 0;
  EXECUTION_REPORT_STATUS_FILL: 1;
  EXECUTION_REPORT_STATUS_REJECTED: 2;
  EXECUTION_REPORT_STATUS_CANCELLED: 3;
  EXECUTION_REPORT_STATUS_NEW: 4;
  EXECUTION_REPORT_STATUS_PARTIALLYFILL: 5;
}

export const OrderExecutionReportStatus: OrderExecutionReportStatusMap;

