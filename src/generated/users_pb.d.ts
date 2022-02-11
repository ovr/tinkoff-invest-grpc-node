// package: tinkoff.public.invest.api.contract.v1
// file: users.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class GetAccountsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountsRequest): GetAccountsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountsRequest;
  static deserializeBinaryFromReader(message: GetAccountsRequest, reader: jspb.BinaryReader): GetAccountsRequest;
}

export namespace GetAccountsRequest {
  export type AsObject = {
  }
}

export class GetAccountsResponse extends jspb.Message {
  clearAccountsList(): void;
  getAccountsList(): Array<Account>;
  setAccountsList(value: Array<Account>): void;
  addAccounts(value?: Account, index?: number): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountsResponse): GetAccountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountsResponse;
  static deserializeBinaryFromReader(message: GetAccountsResponse, reader: jspb.BinaryReader): GetAccountsResponse;
}

export namespace GetAccountsResponse {
  export type AsObject = {
    accountsList: Array<Account.AsObject>,
  }
}

export class Account extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): AccountTypeMap[keyof AccountTypeMap];
  setType(value: AccountTypeMap[keyof AccountTypeMap]): void;

  getName(): string;
  setName(value: string): void;

  getStatus(): AccountStatusMap[keyof AccountStatusMap];
  setStatus(value: AccountStatusMap[keyof AccountStatusMap]): void;

  hasOpenedDate(): boolean;
  clearOpenedDate(): void;
  getOpenedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOpenedDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasClosedDate(): boolean;
  clearClosedDate(): void;
  getClosedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClosedDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAccessLevel(): AccessLevelMap[keyof AccessLevelMap];
  setAccessLevel(value: AccessLevelMap[keyof AccessLevelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    id: string,
    type: AccountTypeMap[keyof AccountTypeMap],
    name: string,
    status: AccountStatusMap[keyof AccountStatusMap],
    openedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    closedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    accessLevel: AccessLevelMap[keyof AccessLevelMap],
  }
}

export class GetMarginAttributesRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarginAttributesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarginAttributesRequest): GetMarginAttributesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMarginAttributesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarginAttributesRequest;
  static deserializeBinaryFromReader(message: GetMarginAttributesRequest, reader: jspb.BinaryReader): GetMarginAttributesRequest;
}

export namespace GetMarginAttributesRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class GetMarginAttributesResponse extends jspb.Message {
  hasLiquidPortfolio(): boolean;
  clearLiquidPortfolio(): void;
  getLiquidPortfolio(): common_pb.MoneyValue | undefined;
  setLiquidPortfolio(value?: common_pb.MoneyValue): void;

  hasStartingMargin(): boolean;
  clearStartingMargin(): void;
  getStartingMargin(): common_pb.MoneyValue | undefined;
  setStartingMargin(value?: common_pb.MoneyValue): void;

  hasMinimalMargin(): boolean;
  clearMinimalMargin(): void;
  getMinimalMargin(): common_pb.MoneyValue | undefined;
  setMinimalMargin(value?: common_pb.MoneyValue): void;

  hasFundsSufficiencyLevel(): boolean;
  clearFundsSufficiencyLevel(): void;
  getFundsSufficiencyLevel(): common_pb.Quotation | undefined;
  setFundsSufficiencyLevel(value?: common_pb.Quotation): void;

  hasAmountOfMissingFunds(): boolean;
  clearAmountOfMissingFunds(): void;
  getAmountOfMissingFunds(): common_pb.MoneyValue | undefined;
  setAmountOfMissingFunds(value?: common_pb.MoneyValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarginAttributesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarginAttributesResponse): GetMarginAttributesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMarginAttributesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarginAttributesResponse;
  static deserializeBinaryFromReader(message: GetMarginAttributesResponse, reader: jspb.BinaryReader): GetMarginAttributesResponse;
}

export namespace GetMarginAttributesResponse {
  export type AsObject = {
    liquidPortfolio?: common_pb.MoneyValue.AsObject,
    startingMargin?: common_pb.MoneyValue.AsObject,
    minimalMargin?: common_pb.MoneyValue.AsObject,
    fundsSufficiencyLevel?: common_pb.Quotation.AsObject,
    amountOfMissingFunds?: common_pb.MoneyValue.AsObject,
  }
}

export class GetUserTariffRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserTariffRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserTariffRequest): GetUserTariffRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserTariffRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserTariffRequest;
  static deserializeBinaryFromReader(message: GetUserTariffRequest, reader: jspb.BinaryReader): GetUserTariffRequest;
}

export namespace GetUserTariffRequest {
  export type AsObject = {
  }
}

export class GetUserTariffResponse extends jspb.Message {
  clearUnaryLimitsList(): void;
  getUnaryLimitsList(): Array<UnaryLimit>;
  setUnaryLimitsList(value: Array<UnaryLimit>): void;
  addUnaryLimits(value?: UnaryLimit, index?: number): UnaryLimit;

  clearStreamLimitsList(): void;
  getStreamLimitsList(): Array<StreamLimit>;
  setStreamLimitsList(value: Array<StreamLimit>): void;
  addStreamLimits(value?: StreamLimit, index?: number): StreamLimit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserTariffResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserTariffResponse): GetUserTariffResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserTariffResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserTariffResponse;
  static deserializeBinaryFromReader(message: GetUserTariffResponse, reader: jspb.BinaryReader): GetUserTariffResponse;
}

export namespace GetUserTariffResponse {
  export type AsObject = {
    unaryLimitsList: Array<UnaryLimit.AsObject>,
    streamLimitsList: Array<StreamLimit.AsObject>,
  }
}

export class UnaryLimit extends jspb.Message {
  getLimitPerMinute(): number;
  setLimitPerMinute(value: number): void;

  clearMethodsList(): void;
  getMethodsList(): Array<string>;
  setMethodsList(value: Array<string>): void;
  addMethods(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnaryLimit.AsObject;
  static toObject(includeInstance: boolean, msg: UnaryLimit): UnaryLimit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnaryLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnaryLimit;
  static deserializeBinaryFromReader(message: UnaryLimit, reader: jspb.BinaryReader): UnaryLimit;
}

export namespace UnaryLimit {
  export type AsObject = {
    limitPerMinute: number,
    methodsList: Array<string>,
  }
}

export class StreamLimit extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  clearStreamsList(): void;
  getStreamsList(): Array<string>;
  setStreamsList(value: Array<string>): void;
  addStreams(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamLimit.AsObject;
  static toObject(includeInstance: boolean, msg: StreamLimit): StreamLimit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamLimit;
  static deserializeBinaryFromReader(message: StreamLimit, reader: jspb.BinaryReader): StreamLimit;
}

export namespace StreamLimit {
  export type AsObject = {
    limit: number,
    streamsList: Array<string>,
  }
}

export class GetInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoRequest): GetInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoRequest;
  static deserializeBinaryFromReader(message: GetInfoRequest, reader: jspb.BinaryReader): GetInfoRequest;
}

export namespace GetInfoRequest {
  export type AsObject = {
  }
}

export class GetInfoResponse extends jspb.Message {
  getPremStatus(): boolean;
  setPremStatus(value: boolean): void;

  getQualStatus(): boolean;
  setQualStatus(value: boolean): void;

  clearQualifiedForWorkWithList(): void;
  getQualifiedForWorkWithList(): Array<string>;
  setQualifiedForWorkWithList(value: Array<string>): void;
  addQualifiedForWorkWith(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfoResponse): GetInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfoResponse;
  static deserializeBinaryFromReader(message: GetInfoResponse, reader: jspb.BinaryReader): GetInfoResponse;
}

export namespace GetInfoResponse {
  export type AsObject = {
    premStatus: boolean,
    qualStatus: boolean,
    qualifiedForWorkWithList: Array<string>,
  }
}

export interface AccountTypeMap {
  ACCOUNT_TYPE_UNSPECIFIED: 0;
  ACCOUNT_TYPE_TINKOFF: 1;
  ACCOUNT_TYPE_TINKOFF_IIS: 2;
  ACCOUNT_TYPE_INVEST_BOX: 3;
}

export const AccountType: AccountTypeMap;

export interface AccountStatusMap {
  ACCOUNT_STATUS_UNSPECIFIED: 0;
  ACCOUNT_STATUS_NEW: 1;
  ACCOUNT_STATUS_OPEN: 2;
  ACCOUNT_STATUS_CLOSED: 3;
}

export const AccountStatus: AccountStatusMap;

export interface AccessLevelMap {
  ACCOUNT_ACCESS_LEVEL_UNSPECIFIED: 0;
  ACCOUNT_ACCESS_LEVEL_FULL_ACCESS: 1;
  ACCOUNT_ACCESS_LEVEL_READ_ONLY: 2;
  ACCOUNT_ACCESS_LEVEL_NO_ACCESS: 3;
}

export const AccessLevel: AccessLevelMap;

