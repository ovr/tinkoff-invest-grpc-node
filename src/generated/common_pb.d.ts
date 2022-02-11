// package: tinkoff.public.invest.api.contract.v1
// file: common.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class MoneyValue extends jspb.Message {
  getCurrency(): string;
  setCurrency(value: string): void;

  getUnits(): number;
  setUnits(value: number): void;

  getNano(): number;
  setNano(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoneyValue.AsObject;
  static toObject(includeInstance: boolean, msg: MoneyValue): MoneyValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoneyValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoneyValue;
  static deserializeBinaryFromReader(message: MoneyValue, reader: jspb.BinaryReader): MoneyValue;
}

export namespace MoneyValue {
  export type AsObject = {
    currency: string,
    units: number,
    nano: number,
  }
}

export class Quotation extends jspb.Message {
  getUnits(): number;
  setUnits(value: number): void;

  getNano(): number;
  setNano(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quotation.AsObject;
  static toObject(includeInstance: boolean, msg: Quotation): Quotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Quotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quotation;
  static deserializeBinaryFromReader(message: Quotation, reader: jspb.BinaryReader): Quotation;
}

export namespace Quotation {
  export type AsObject = {
    units: number,
    nano: number,
  }
}

export class Ping extends jspb.Message {
  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ping.AsObject;
  static toObject(includeInstance: boolean, msg: Ping): Ping.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ping;
  static deserializeBinaryFromReader(message: Ping, reader: jspb.BinaryReader): Ping;
}

export namespace Ping {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface SecurityTradingStatusMap {
  SECURITY_TRADING_STATUS_UNSPECIFIED: 0;
  SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING: 1;
  SECURITY_TRADING_STATUS_OPENING_PERIOD: 2;
  SECURITY_TRADING_STATUS_CLOSING_PERIOD: 3;
  SECURITY_TRADING_STATUS_BREAK_IN_TRADING: 4;
  SECURITY_TRADING_STATUS_NORMAL_TRADING: 5;
  SECURITY_TRADING_STATUS_CLOSING_AUCTION: 6;
  SECURITY_TRADING_STATUS_DARK_POOL_AUCTION: 7;
  SECURITY_TRADING_STATUS_DISCRETE_AUCTION: 8;
  SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD: 9;
  SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE: 10;
  SECURITY_TRADING_STATUS_SESSION_ASSIGNED: 11;
  SECURITY_TRADING_STATUS_SESSION_CLOSE: 12;
  SECURITY_TRADING_STATUS_SESSION_OPEN: 13;
  SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING: 14;
  SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING: 15;
  SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING: 16;
}

export const SecurityTradingStatus: SecurityTradingStatusMap;

