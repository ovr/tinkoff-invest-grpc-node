// package: tinkoff.public.invest.api.contract.v1
// file: operations.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class OperationsRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getState(): OperationStateMap[keyof OperationStateMap];
  setState(value: OperationStateMap[keyof OperationStateMap]): void;

  getFigi(): string;
  setFigi(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OperationsRequest): OperationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationsRequest;
  static deserializeBinaryFromReader(message: OperationsRequest, reader: jspb.BinaryReader): OperationsRequest;
}

export namespace OperationsRequest {
  export type AsObject = {
    accountId: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: OperationStateMap[keyof OperationStateMap],
    figi: string,
  }
}

export class OperationsResponse extends jspb.Message {
  clearOperationsList(): void;
  getOperationsList(): Array<Operation>;
  setOperationsList(value: Array<Operation>): void;
  addOperations(value?: Operation, index?: number): Operation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OperationsResponse): OperationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationsResponse;
  static deserializeBinaryFromReader(message: OperationsResponse, reader: jspb.BinaryReader): OperationsResponse;
}

export namespace OperationsResponse {
  export type AsObject = {
    operationsList: Array<Operation.AsObject>,
  }
}

export class Operation extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getParentOperationId(): string;
  setParentOperationId(value: string): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  hasPayment(): boolean;
  clearPayment(): void;
  getPayment(): common_pb.MoneyValue | undefined;
  setPayment(value?: common_pb.MoneyValue): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): common_pb.MoneyValue | undefined;
  setPrice(value?: common_pb.MoneyValue): void;

  getState(): OperationStateMap[keyof OperationStateMap];
  setState(value: OperationStateMap[keyof OperationStateMap]): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getQuantityRest(): number;
  setQuantityRest(value: number): void;

  getFigi(): string;
  setFigi(value: string): void;

  getInstrumentType(): string;
  setInstrumentType(value: string): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getType(): string;
  setType(value: string): void;

  getOperationType(): OperationTypeMap[keyof OperationTypeMap];
  setOperationType(value: OperationTypeMap[keyof OperationTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operation.AsObject;
  static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operation;
  static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
  export type AsObject = {
    id: string,
    parentOperationId: string,
    currency: string,
    payment?: common_pb.MoneyValue.AsObject,
    price?: common_pb.MoneyValue.AsObject,
    state: OperationStateMap[keyof OperationStateMap],
    quantity: number,
    quantityRest: number,
    figi: string,
    instrumentType: string,
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    type: string,
    operationType: OperationTypeMap[keyof OperationTypeMap],
  }
}

export class PortfolioRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortfolioRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PortfolioRequest): PortfolioRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortfolioRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortfolioRequest;
  static deserializeBinaryFromReader(message: PortfolioRequest, reader: jspb.BinaryReader): PortfolioRequest;
}

export namespace PortfolioRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class PortfolioResponse extends jspb.Message {
  hasTotalAmountShares(): boolean;
  clearTotalAmountShares(): void;
  getTotalAmountShares(): common_pb.MoneyValue | undefined;
  setTotalAmountShares(value?: common_pb.MoneyValue): void;

  hasTotalAmountBonds(): boolean;
  clearTotalAmountBonds(): void;
  getTotalAmountBonds(): common_pb.MoneyValue | undefined;
  setTotalAmountBonds(value?: common_pb.MoneyValue): void;

  hasTotalAmountEtf(): boolean;
  clearTotalAmountEtf(): void;
  getTotalAmountEtf(): common_pb.MoneyValue | undefined;
  setTotalAmountEtf(value?: common_pb.MoneyValue): void;

  hasTotalAmountCurrencies(): boolean;
  clearTotalAmountCurrencies(): void;
  getTotalAmountCurrencies(): common_pb.MoneyValue | undefined;
  setTotalAmountCurrencies(value?: common_pb.MoneyValue): void;

  hasTotalAmountFutures(): boolean;
  clearTotalAmountFutures(): void;
  getTotalAmountFutures(): common_pb.MoneyValue | undefined;
  setTotalAmountFutures(value?: common_pb.MoneyValue): void;

  hasExpectedYield(): boolean;
  clearExpectedYield(): void;
  getExpectedYield(): common_pb.Quotation | undefined;
  setExpectedYield(value?: common_pb.Quotation): void;

  clearPositionsList(): void;
  getPositionsList(): Array<PortfolioPosition>;
  setPositionsList(value: Array<PortfolioPosition>): void;
  addPositions(value?: PortfolioPosition, index?: number): PortfolioPosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortfolioResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PortfolioResponse): PortfolioResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortfolioResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortfolioResponse;
  static deserializeBinaryFromReader(message: PortfolioResponse, reader: jspb.BinaryReader): PortfolioResponse;
}

export namespace PortfolioResponse {
  export type AsObject = {
    totalAmountShares?: common_pb.MoneyValue.AsObject,
    totalAmountBonds?: common_pb.MoneyValue.AsObject,
    totalAmountEtf?: common_pb.MoneyValue.AsObject,
    totalAmountCurrencies?: common_pb.MoneyValue.AsObject,
    totalAmountFutures?: common_pb.MoneyValue.AsObject,
    expectedYield?: common_pb.Quotation.AsObject,
    positionsList: Array<PortfolioPosition.AsObject>,
  }
}

export class PositionsRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsRequest): PositionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsRequest;
  static deserializeBinaryFromReader(message: PositionsRequest, reader: jspb.BinaryReader): PositionsRequest;
}

export namespace PositionsRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class PositionsResponse extends jspb.Message {
  clearMoneyList(): void;
  getMoneyList(): Array<common_pb.MoneyValue>;
  setMoneyList(value: Array<common_pb.MoneyValue>): void;
  addMoney(value?: common_pb.MoneyValue, index?: number): common_pb.MoneyValue;

  clearBlockedList(): void;
  getBlockedList(): Array<common_pb.MoneyValue>;
  setBlockedList(value: Array<common_pb.MoneyValue>): void;
  addBlocked(value?: common_pb.MoneyValue, index?: number): common_pb.MoneyValue;

  clearSecuritiesList(): void;
  getSecuritiesList(): Array<PositionsSecurities>;
  setSecuritiesList(value: Array<PositionsSecurities>): void;
  addSecurities(value?: PositionsSecurities, index?: number): PositionsSecurities;

  getLimitsLoadingInProgress(): boolean;
  setLimitsLoadingInProgress(value: boolean): void;

  clearFuturesList(): void;
  getFuturesList(): Array<PositionsFutures>;
  setFuturesList(value: Array<PositionsFutures>): void;
  addFutures(value?: PositionsFutures, index?: number): PositionsFutures;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsResponse): PositionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsResponse;
  static deserializeBinaryFromReader(message: PositionsResponse, reader: jspb.BinaryReader): PositionsResponse;
}

export namespace PositionsResponse {
  export type AsObject = {
    moneyList: Array<common_pb.MoneyValue.AsObject>,
    blockedList: Array<common_pb.MoneyValue.AsObject>,
    securitiesList: Array<PositionsSecurities.AsObject>,
    limitsLoadingInProgress: boolean,
    futuresList: Array<PositionsFutures.AsObject>,
  }
}

export class WithdrawLimitsRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawLimitsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawLimitsRequest): WithdrawLimitsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WithdrawLimitsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawLimitsRequest;
  static deserializeBinaryFromReader(message: WithdrawLimitsRequest, reader: jspb.BinaryReader): WithdrawLimitsRequest;
}

export namespace WithdrawLimitsRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class WithdrawLimitsResponse extends jspb.Message {
  clearMoneyList(): void;
  getMoneyList(): Array<common_pb.MoneyValue>;
  setMoneyList(value: Array<common_pb.MoneyValue>): void;
  addMoney(value?: common_pb.MoneyValue, index?: number): common_pb.MoneyValue;

  clearBlockedList(): void;
  getBlockedList(): Array<common_pb.MoneyValue>;
  setBlockedList(value: Array<common_pb.MoneyValue>): void;
  addBlocked(value?: common_pb.MoneyValue, index?: number): common_pb.MoneyValue;

  clearBlockedGuaranteeList(): void;
  getBlockedGuaranteeList(): Array<common_pb.MoneyValue>;
  setBlockedGuaranteeList(value: Array<common_pb.MoneyValue>): void;
  addBlockedGuarantee(value?: common_pb.MoneyValue, index?: number): common_pb.MoneyValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawLimitsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawLimitsResponse): WithdrawLimitsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WithdrawLimitsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawLimitsResponse;
  static deserializeBinaryFromReader(message: WithdrawLimitsResponse, reader: jspb.BinaryReader): WithdrawLimitsResponse;
}

export namespace WithdrawLimitsResponse {
  export type AsObject = {
    moneyList: Array<common_pb.MoneyValue.AsObject>,
    blockedList: Array<common_pb.MoneyValue.AsObject>,
    blockedGuaranteeList: Array<common_pb.MoneyValue.AsObject>,
  }
}

export class PortfolioPosition extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getInstrumentType(): string;
  setInstrumentType(value: string): void;

  hasQuantity(): boolean;
  clearQuantity(): void;
  getQuantity(): common_pb.Quotation | undefined;
  setQuantity(value?: common_pb.Quotation): void;

  hasAveragePositionPrice(): boolean;
  clearAveragePositionPrice(): void;
  getAveragePositionPrice(): common_pb.MoneyValue | undefined;
  setAveragePositionPrice(value?: common_pb.MoneyValue): void;

  hasExpectedYield(): boolean;
  clearExpectedYield(): void;
  getExpectedYield(): common_pb.Quotation | undefined;
  setExpectedYield(value?: common_pb.Quotation): void;

  hasCurrentNkd(): boolean;
  clearCurrentNkd(): void;
  getCurrentNkd(): common_pb.MoneyValue | undefined;
  setCurrentNkd(value?: common_pb.MoneyValue): void;

  hasAveragePositionPricePt(): boolean;
  clearAveragePositionPricePt(): void;
  getAveragePositionPricePt(): common_pb.Quotation | undefined;
  setAveragePositionPricePt(value?: common_pb.Quotation): void;

  hasCurrentPrice(): boolean;
  clearCurrentPrice(): void;
  getCurrentPrice(): common_pb.MoneyValue | undefined;
  setCurrentPrice(value?: common_pb.MoneyValue): void;

  hasAveragePositionPriceFifo(): boolean;
  clearAveragePositionPriceFifo(): void;
  getAveragePositionPriceFifo(): common_pb.MoneyValue | undefined;
  setAveragePositionPriceFifo(value?: common_pb.MoneyValue): void;

  hasQuantityLots(): boolean;
  clearQuantityLots(): void;
  getQuantityLots(): common_pb.Quotation | undefined;
  setQuantityLots(value?: common_pb.Quotation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PortfolioPosition.AsObject;
  static toObject(includeInstance: boolean, msg: PortfolioPosition): PortfolioPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PortfolioPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PortfolioPosition;
  static deserializeBinaryFromReader(message: PortfolioPosition, reader: jspb.BinaryReader): PortfolioPosition;
}

export namespace PortfolioPosition {
  export type AsObject = {
    figi: string,
    instrumentType: string,
    quantity?: common_pb.Quotation.AsObject,
    averagePositionPrice?: common_pb.MoneyValue.AsObject,
    expectedYield?: common_pb.Quotation.AsObject,
    currentNkd?: common_pb.MoneyValue.AsObject,
    averagePositionPricePt?: common_pb.Quotation.AsObject,
    currentPrice?: common_pb.MoneyValue.AsObject,
    averagePositionPriceFifo?: common_pb.MoneyValue.AsObject,
    quantityLots?: common_pb.Quotation.AsObject,
  }
}

export class PositionsSecurities extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getBlocked(): number;
  setBlocked(value: number): void;

  getBalance(): number;
  setBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsSecurities.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsSecurities): PositionsSecurities.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionsSecurities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsSecurities;
  static deserializeBinaryFromReader(message: PositionsSecurities, reader: jspb.BinaryReader): PositionsSecurities;
}

export namespace PositionsSecurities {
  export type AsObject = {
    figi: string,
    blocked: number,
    balance: number,
  }
}

export class PositionsFutures extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getBlocked(): number;
  setBlocked(value: number): void;

  getBalance(): number;
  setBalance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionsFutures.AsObject;
  static toObject(includeInstance: boolean, msg: PositionsFutures): PositionsFutures.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionsFutures, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionsFutures;
  static deserializeBinaryFromReader(message: PositionsFutures, reader: jspb.BinaryReader): PositionsFutures;
}

export namespace PositionsFutures {
  export type AsObject = {
    figi: string,
    blocked: number,
    balance: number,
  }
}

export class BrokerReportRequest extends jspb.Message {
  hasGenerateBrokerReportRequest(): boolean;
  clearGenerateBrokerReportRequest(): void;
  getGenerateBrokerReportRequest(): GenerateBrokerReportRequest | undefined;
  setGenerateBrokerReportRequest(value?: GenerateBrokerReportRequest): void;

  hasGetBrokerReportRequest(): boolean;
  clearGetBrokerReportRequest(): void;
  getGetBrokerReportRequest(): GetBrokerReportRequest | undefined;
  setGetBrokerReportRequest(value?: GetBrokerReportRequest): void;

  getPayloadCase(): BrokerReportRequest.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrokerReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BrokerReportRequest): BrokerReportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BrokerReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrokerReportRequest;
  static deserializeBinaryFromReader(message: BrokerReportRequest, reader: jspb.BinaryReader): BrokerReportRequest;
}

export namespace BrokerReportRequest {
  export type AsObject = {
    generateBrokerReportRequest?: GenerateBrokerReportRequest.AsObject,
    getBrokerReportRequest?: GetBrokerReportRequest.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    GENERATE_BROKER_REPORT_REQUEST = 1,
    GET_BROKER_REPORT_REQUEST = 2,
  }
}

export class BrokerReportResponse extends jspb.Message {
  hasGenerateBrokerReportResponse(): boolean;
  clearGenerateBrokerReportResponse(): void;
  getGenerateBrokerReportResponse(): GenerateBrokerReportResponse | undefined;
  setGenerateBrokerReportResponse(value?: GenerateBrokerReportResponse): void;

  hasGetBrokerReportResponse(): boolean;
  clearGetBrokerReportResponse(): void;
  getGetBrokerReportResponse(): GetBrokerReportResponse | undefined;
  setGetBrokerReportResponse(value?: GetBrokerReportResponse): void;

  getPayloadCase(): BrokerReportResponse.PayloadCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrokerReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BrokerReportResponse): BrokerReportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BrokerReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrokerReportResponse;
  static deserializeBinaryFromReader(message: BrokerReportResponse, reader: jspb.BinaryReader): BrokerReportResponse;
}

export namespace BrokerReportResponse {
  export type AsObject = {
    generateBrokerReportResponse?: GenerateBrokerReportResponse.AsObject,
    getBrokerReportResponse?: GetBrokerReportResponse.AsObject,
  }

  export enum PayloadCase {
    PAYLOAD_NOT_SET = 0,
    GENERATE_BROKER_REPORT_RESPONSE = 1,
    GET_BROKER_REPORT_RESPONSE = 2,
  }
}

export class GenerateBrokerReportRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateBrokerReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateBrokerReportRequest): GenerateBrokerReportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateBrokerReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateBrokerReportRequest;
  static deserializeBinaryFromReader(message: GenerateBrokerReportRequest, reader: jspb.BinaryReader): GenerateBrokerReportRequest;
}

export namespace GenerateBrokerReportRequest {
  export type AsObject = {
    accountId: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GenerateBrokerReportResponse extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateBrokerReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateBrokerReportResponse): GenerateBrokerReportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateBrokerReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateBrokerReportResponse;
  static deserializeBinaryFromReader(message: GenerateBrokerReportResponse, reader: jspb.BinaryReader): GenerateBrokerReportResponse;
}

export namespace GenerateBrokerReportResponse {
  export type AsObject = {
    taskId: string,
  }
}

export class GetBrokerReportRequest extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): void;

  getPage(): number;
  setPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBrokerReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBrokerReportRequest): GetBrokerReportRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBrokerReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBrokerReportRequest;
  static deserializeBinaryFromReader(message: GetBrokerReportRequest, reader: jspb.BinaryReader): GetBrokerReportRequest;
}

export namespace GetBrokerReportRequest {
  export type AsObject = {
    taskId: string,
    page: number,
  }
}

export class GetBrokerReportResponse extends jspb.Message {
  clearBrokerReportList(): void;
  getBrokerReportList(): Array<BrokerReport>;
  setBrokerReportList(value: Array<BrokerReport>): void;
  addBrokerReport(value?: BrokerReport, index?: number): BrokerReport;

  getItemscount(): number;
  setItemscount(value: number): void;

  getPagescount(): number;
  setPagescount(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBrokerReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBrokerReportResponse): GetBrokerReportResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBrokerReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBrokerReportResponse;
  static deserializeBinaryFromReader(message: GetBrokerReportResponse, reader: jspb.BinaryReader): GetBrokerReportResponse;
}

export namespace GetBrokerReportResponse {
  export type AsObject = {
    brokerReportList: Array<BrokerReport.AsObject>,
    itemscount: number,
    pagescount: number,
    page: number,
  }
}

export class BrokerReport extends jspb.Message {
  getTradeId(): string;
  setTradeId(value: string): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  getFigi(): string;
  setFigi(value: string): void;

  getExecuteSign(): string;
  setExecuteSign(value: string): void;

  hasTradeDatetime(): boolean;
  clearTradeDatetime(): void;
  getTradeDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTradeDatetime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getExchange(): string;
  setExchange(value: string): void;

  getClassCode(): string;
  setClassCode(value: string): void;

  getDirection(): string;
  setDirection(value: string): void;

  getName(): string;
  setName(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): common_pb.MoneyValue | undefined;
  setPrice(value?: common_pb.MoneyValue): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  hasOrderAmount(): boolean;
  clearOrderAmount(): void;
  getOrderAmount(): common_pb.MoneyValue | undefined;
  setOrderAmount(value?: common_pb.MoneyValue): void;

  hasAciValue(): boolean;
  clearAciValue(): void;
  getAciValue(): common_pb.Quotation | undefined;
  setAciValue(value?: common_pb.Quotation): void;

  hasTotalOrderAmount(): boolean;
  clearTotalOrderAmount(): void;
  getTotalOrderAmount(): common_pb.MoneyValue | undefined;
  setTotalOrderAmount(value?: common_pb.MoneyValue): void;

  hasBrokerCommission(): boolean;
  clearBrokerCommission(): void;
  getBrokerCommission(): common_pb.MoneyValue | undefined;
  setBrokerCommission(value?: common_pb.MoneyValue): void;

  hasExchangeCommission(): boolean;
  clearExchangeCommission(): void;
  getExchangeCommission(): common_pb.MoneyValue | undefined;
  setExchangeCommission(value?: common_pb.MoneyValue): void;

  hasExchangeClearingCommission(): boolean;
  clearExchangeClearingCommission(): void;
  getExchangeClearingCommission(): common_pb.MoneyValue | undefined;
  setExchangeClearingCommission(value?: common_pb.MoneyValue): void;

  hasRepoRate(): boolean;
  clearRepoRate(): void;
  getRepoRate(): common_pb.Quotation | undefined;
  setRepoRate(value?: common_pb.Quotation): void;

  getParty(): string;
  setParty(value: string): void;

  hasClearValueDate(): boolean;
  clearClearValueDate(): void;
  getClearValueDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setClearValueDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasSecValueDate(): boolean;
  clearSecValueDate(): void;
  getSecValueDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setSecValueDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getBrokerStatus(): string;
  setBrokerStatus(value: string): void;

  getSeparateAgreementType(): string;
  setSeparateAgreementType(value: string): void;

  getSeparateAgreementNumber(): string;
  setSeparateAgreementNumber(value: string): void;

  getSeparateAgreementDate(): string;
  setSeparateAgreementDate(value: string): void;

  getDeliveryType(): string;
  setDeliveryType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrokerReport.AsObject;
  static toObject(includeInstance: boolean, msg: BrokerReport): BrokerReport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BrokerReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrokerReport;
  static deserializeBinaryFromReader(message: BrokerReport, reader: jspb.BinaryReader): BrokerReport;
}

export namespace BrokerReport {
  export type AsObject = {
    tradeId: string,
    orderId: string,
    figi: string,
    executeSign: string,
    tradeDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    exchange: string,
    classCode: string,
    direction: string,
    name: string,
    ticker: string,
    price?: common_pb.MoneyValue.AsObject,
    quantity: number,
    orderAmount?: common_pb.MoneyValue.AsObject,
    aciValue?: common_pb.Quotation.AsObject,
    totalOrderAmount?: common_pb.MoneyValue.AsObject,
    brokerCommission?: common_pb.MoneyValue.AsObject,
    exchangeCommission?: common_pb.MoneyValue.AsObject,
    exchangeClearingCommission?: common_pb.MoneyValue.AsObject,
    repoRate?: common_pb.Quotation.AsObject,
    party: string,
    clearValueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    secValueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    brokerStatus: string,
    separateAgreementType: string,
    separateAgreementNumber: string,
    separateAgreementDate: string,
    deliveryType: string,
  }
}

export interface OperationStateMap {
  OPERATION_STATE_UNSPECIFIED: 0;
  OPERATION_STATE_EXECUTED: 1;
  OPERATION_STATE_CANCELED: 2;
}

export const OperationState: OperationStateMap;

export interface OperationTypeMap {
  OPERATION_TYPE_UNSPECIFIED: 0;
  OPERATION_TYPE_INPUT: 1;
  OPERATION_TYPE_BOND_TAX: 2;
  OPERATION_TYPE_OUTPUT_SECURITIES: 3;
  OPERATION_TYPE_OVERNIGHT: 4;
  OPERATION_TYPE_TAX: 5;
  OPERATION_TYPE_BOND_REPAYMENT_FULL: 6;
  OPERATION_TYPE_SELL_CARD: 7;
  OPERATION_TYPE_DIVIDEND_TAX: 8;
  OPERATION_TYPE_OUTPUT: 9;
  OPERATION_TYPE_BOND_REPAYMENT: 10;
  OPERATION_TYPE_TAX_CORRECTION: 11;
  OPERATION_TYPE_SERVICE_FEE: 12;
  OPERATION_TYPE_BENEFIT_TAX: 13;
  OPERATION_TYPE_MARGIN_FEE: 14;
  OPERATION_TYPE_BUY: 15;
  OPERATION_TYPE_BUY_CARD: 16;
  OPERATION_TYPE_INPUT_SECURITIES: 17;
  OPERATION_TYPE_SELL_MARGIN: 18;
  OPERATION_TYPE_BROKER_FEE: 19;
  OPERATION_TYPE_BUY_MARGIN: 20;
  OPERATION_TYPE_DIVIDEND: 21;
  OPERATION_TYPE_SELL: 22;
  OPERATION_TYPE_COUPON: 23;
  OPERATION_TYPE_SUCCESS_FEE: 24;
  OPERATION_TYPE_DIVIDEND_TRANSFER: 25;
  OPERATION_TYPE_ACCRUING_VARMARGIN: 26;
  OPERATION_TYPE_WRITING_OFF_VARMARGIN: 27;
  OPERATION_TYPE_DELIVERY_BUY: 28;
  OPERATION_TYPE_DELIVERY_SELL: 29;
  OPERATION_TYPE_TRACK_MFEE: 30;
  OPERATION_TYPE_TRACK_PFEE: 31;
  OPERATION_TYPE_TAX_PROGRESSIVE: 32;
  OPERATION_TYPE_BOND_TAX_PROGRESSIVE: 33;
  OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE: 34;
  OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE: 35;
  OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE: 36;
  OPERATION_TYPE_TAX_REPO_PROGRESSIVE: 37;
  OPERATION_TYPE_TAX_REPO: 38;
  OPERATION_TYPE_TAX_REPO_HOLD: 39;
  OPERATION_TYPE_TAX_REPO_REFUND: 40;
  OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE: 41;
  OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE: 42;
  OPERATION_TYPE_DIV_EXT: 43;
}

export const OperationType: OperationTypeMap;

