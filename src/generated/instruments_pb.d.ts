// package: tinkoff.public.invest.api.contract.v1
// file: instruments.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";

export class TradingSchedulesRequest extends jspb.Message {
  getExchange(): string;
  setExchange(value: string): void;

  hasFrom(): boolean;
  clearFrom(): void;
  getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrom(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTo(): boolean;
  clearTo(): void;
  getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTo(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingSchedulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradingSchedulesRequest): TradingSchedulesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradingSchedulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingSchedulesRequest;
  static deserializeBinaryFromReader(message: TradingSchedulesRequest, reader: jspb.BinaryReader): TradingSchedulesRequest;
}

export namespace TradingSchedulesRequest {
  export type AsObject = {
    exchange: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TradingSchedulesResponse extends jspb.Message {
  clearExchangesList(): void;
  getExchangesList(): Array<TradingSchedule>;
  setExchangesList(value: Array<TradingSchedule>): void;
  addExchanges(value?: TradingSchedule, index?: number): TradingSchedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingSchedulesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TradingSchedulesResponse): TradingSchedulesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradingSchedulesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingSchedulesResponse;
  static deserializeBinaryFromReader(message: TradingSchedulesResponse, reader: jspb.BinaryReader): TradingSchedulesResponse;
}

export namespace TradingSchedulesResponse {
  export type AsObject = {
    exchangesList: Array<TradingSchedule.AsObject>,
  }
}

export class TradingSchedule extends jspb.Message {
  getExchange(): string;
  setExchange(value: string): void;

  clearDaysList(): void;
  getDaysList(): Array<TradingDay>;
  setDaysList(value: Array<TradingDay>): void;
  addDays(value?: TradingDay, index?: number): TradingDay;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: TradingSchedule): TradingSchedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradingSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingSchedule;
  static deserializeBinaryFromReader(message: TradingSchedule, reader: jspb.BinaryReader): TradingSchedule;
}

export namespace TradingSchedule {
  export type AsObject = {
    exchange: string,
    daysList: Array<TradingDay.AsObject>,
  }
}

export class TradingDay extends jspb.Message {
  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIsTradingDay(): boolean;
  setIsTradingDay(value: boolean): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTime(): boolean;
  clearEndTime(): void;
  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMarketOrderStartTime(): boolean;
  clearMarketOrderStartTime(): void;
  getMarketOrderStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMarketOrderStartTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMarketOrderEndTime(): boolean;
  clearMarketOrderEndTime(): void;
  getMarketOrderEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMarketOrderEndTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingDay.AsObject;
  static toObject(includeInstance: boolean, msg: TradingDay): TradingDay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradingDay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingDay;
  static deserializeBinaryFromReader(message: TradingDay, reader: jspb.BinaryReader): TradingDay;
}

export namespace TradingDay {
  export type AsObject = {
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    isTradingDay: boolean,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    marketOrderStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    marketOrderEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class InstrumentRequest extends jspb.Message {
  getIdType(): InstrumentIdTypeMap[keyof InstrumentIdTypeMap];
  setIdType(value: InstrumentIdTypeMap[keyof InstrumentIdTypeMap]): void;

  getClassCode(): string;
  setClassCode(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentRequest): InstrumentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentRequest;
  static deserializeBinaryFromReader(message: InstrumentRequest, reader: jspb.BinaryReader): InstrumentRequest;
}

export namespace InstrumentRequest {
  export type AsObject = {
    idType: InstrumentIdTypeMap[keyof InstrumentIdTypeMap],
    classCode: string,
    id: string,
  }
}

export class InstrumentsRequest extends jspb.Message {
  getInstrumentStatus(): InstrumentStatusMap[keyof InstrumentStatusMap];
  setInstrumentStatus(value: InstrumentStatusMap[keyof InstrumentStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentsRequest): InstrumentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentsRequest;
  static deserializeBinaryFromReader(message: InstrumentsRequest, reader: jspb.BinaryReader): InstrumentsRequest;
}

export namespace InstrumentsRequest {
  export type AsObject = {
    instrumentStatus: InstrumentStatusMap[keyof InstrumentStatusMap],
  }
}

export class BondResponse extends jspb.Message {
  hasInstrument(): boolean;
  clearInstrument(): void;
  getInstrument(): Bond | undefined;
  setInstrument(value?: Bond): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BondResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BondResponse): BondResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BondResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BondResponse;
  static deserializeBinaryFromReader(message: BondResponse, reader: jspb.BinaryReader): BondResponse;
}

export namespace BondResponse {
  export type AsObject = {
    instrument?: Bond.AsObject,
  }
}

export class BondsResponse extends jspb.Message {
  clearInstrumentsList(): void;
  getInstrumentsList(): Array<Bond>;
  setInstrumentsList(value: Array<Bond>): void;
  addInstruments(value?: Bond, index?: number): Bond;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BondsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BondsResponse): BondsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BondsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BondsResponse;
  static deserializeBinaryFromReader(message: BondsResponse, reader: jspb.BinaryReader): BondsResponse;
}

export namespace BondsResponse {
  export type AsObject = {
    instrumentsList: Array<Bond.AsObject>,
  }
}

export class CurrencyResponse extends jspb.Message {
  hasInstrument(): boolean;
  clearInstrument(): void;
  getInstrument(): Currency | undefined;
  setInstrument(value?: Currency): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrencyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CurrencyResponse): CurrencyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrencyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrencyResponse;
  static deserializeBinaryFromReader(message: CurrencyResponse, reader: jspb.BinaryReader): CurrencyResponse;
}

export namespace CurrencyResponse {
  export type AsObject = {
    instrument?: Currency.AsObject,
  }
}

export class CurrenciesResponse extends jspb.Message {
  clearInstrumentsList(): void;
  getInstrumentsList(): Array<Currency>;
  setInstrumentsList(value: Array<Currency>): void;
  addInstruments(value?: Currency, index?: number): Currency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrenciesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CurrenciesResponse): CurrenciesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrenciesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrenciesResponse;
  static deserializeBinaryFromReader(message: CurrenciesResponse, reader: jspb.BinaryReader): CurrenciesResponse;
}

export namespace CurrenciesResponse {
  export type AsObject = {
    instrumentsList: Array<Currency.AsObject>,
  }
}

export class EtfResponse extends jspb.Message {
  hasInstrument(): boolean;
  clearInstrument(): void;
  getInstrument(): Etf | undefined;
  setInstrument(value?: Etf): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EtfResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EtfResponse): EtfResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EtfResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EtfResponse;
  static deserializeBinaryFromReader(message: EtfResponse, reader: jspb.BinaryReader): EtfResponse;
}

export namespace EtfResponse {
  export type AsObject = {
    instrument?: Etf.AsObject,
  }
}

export class EtfsResponse extends jspb.Message {
  clearInstrumentsList(): void;
  getInstrumentsList(): Array<Etf>;
  setInstrumentsList(value: Array<Etf>): void;
  addInstruments(value?: Etf, index?: number): Etf;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EtfsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EtfsResponse): EtfsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EtfsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EtfsResponse;
  static deserializeBinaryFromReader(message: EtfsResponse, reader: jspb.BinaryReader): EtfsResponse;
}

export namespace EtfsResponse {
  export type AsObject = {
    instrumentsList: Array<Etf.AsObject>,
  }
}

export class FutureResponse extends jspb.Message {
  hasInstrument(): boolean;
  clearInstrument(): void;
  getInstrument(): Future | undefined;
  setInstrument(value?: Future): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FutureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FutureResponse): FutureResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FutureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FutureResponse;
  static deserializeBinaryFromReader(message: FutureResponse, reader: jspb.BinaryReader): FutureResponse;
}

export namespace FutureResponse {
  export type AsObject = {
    instrument?: Future.AsObject,
  }
}

export class FuturesResponse extends jspb.Message {
  clearInstrumentsList(): void;
  getInstrumentsList(): Array<Future>;
  setInstrumentsList(value: Array<Future>): void;
  addInstruments(value?: Future, index?: number): Future;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FuturesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FuturesResponse): FuturesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FuturesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FuturesResponse;
  static deserializeBinaryFromReader(message: FuturesResponse, reader: jspb.BinaryReader): FuturesResponse;
}

export namespace FuturesResponse {
  export type AsObject = {
    instrumentsList: Array<Future.AsObject>,
  }
}

export class ShareResponse extends jspb.Message {
  hasInstrument(): boolean;
  clearInstrument(): void;
  getInstrument(): Share | undefined;
  setInstrument(value?: Share): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShareResponse): ShareResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareResponse;
  static deserializeBinaryFromReader(message: ShareResponse, reader: jspb.BinaryReader): ShareResponse;
}

export namespace ShareResponse {
  export type AsObject = {
    instrument?: Share.AsObject,
  }
}

export class SharesResponse extends jspb.Message {
  clearInstrumentsList(): void;
  getInstrumentsList(): Array<Share>;
  setInstrumentsList(value: Array<Share>): void;
  addInstruments(value?: Share, index?: number): Share;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SharesResponse): SharesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SharesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharesResponse;
  static deserializeBinaryFromReader(message: SharesResponse, reader: jspb.BinaryReader): SharesResponse;
}

export namespace SharesResponse {
  export type AsObject = {
    instrumentsList: Array<Share.AsObject>,
  }
}

export class Bond extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getClassCode(): string;
  setClassCode(value: string): void;

  getIsin(): string;
  setIsin(value: string): void;

  getLot(): number;
  setLot(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  hasKlong(): boolean;
  clearKlong(): void;
  getKlong(): common_pb.Quotation | undefined;
  setKlong(value?: common_pb.Quotation): void;

  hasKshort(): boolean;
  clearKshort(): void;
  getKshort(): common_pb.Quotation | undefined;
  setKshort(value?: common_pb.Quotation): void;

  hasDlong(): boolean;
  clearDlong(): void;
  getDlong(): common_pb.Quotation | undefined;
  setDlong(value?: common_pb.Quotation): void;

  hasDshort(): boolean;
  clearDshort(): void;
  getDshort(): common_pb.Quotation | undefined;
  setDshort(value?: common_pb.Quotation): void;

  hasDlongMin(): boolean;
  clearDlongMin(): void;
  getDlongMin(): common_pb.Quotation | undefined;
  setDlongMin(value?: common_pb.Quotation): void;

  hasDshortMin(): boolean;
  clearDshortMin(): void;
  getDshortMin(): common_pb.Quotation | undefined;
  setDshortMin(value?: common_pb.Quotation): void;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getExchange(): string;
  setExchange(value: string): void;

  getCouponQuantityPerYear(): number;
  setCouponQuantityPerYear(value: number): void;

  hasMaturityDate(): boolean;
  clearMaturityDate(): void;
  getMaturityDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMaturityDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasNominal(): boolean;
  clearNominal(): void;
  getNominal(): common_pb.MoneyValue | undefined;
  setNominal(value?: common_pb.MoneyValue): void;

  hasStateRegDate(): boolean;
  clearStateRegDate(): void;
  getStateRegDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStateRegDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPlacementDate(): boolean;
  clearPlacementDate(): void;
  getPlacementDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPlacementDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPlacementPrice(): boolean;
  clearPlacementPrice(): void;
  getPlacementPrice(): common_pb.MoneyValue | undefined;
  setPlacementPrice(value?: common_pb.MoneyValue): void;

  hasAciValue(): boolean;
  clearAciValue(): void;
  getAciValue(): common_pb.MoneyValue | undefined;
  setAciValue(value?: common_pb.MoneyValue): void;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): void;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): void;

  getSector(): string;
  setSector(value: string): void;

  getIssueKind(): string;
  setIssueKind(value: string): void;

  getIssueSize(): number;
  setIssueSize(value: number): void;

  getIssueSizePlan(): number;
  setIssueSizePlan(value: number): void;

  getTradingStatus(): common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap];
  setTradingStatus(value: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap]): void;

  getOtcFlag(): boolean;
  setOtcFlag(value: boolean): void;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): void;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): void;

  getFloatingCouponFlag(): boolean;
  setFloatingCouponFlag(value: boolean): void;

  getPerpetualFlag(): boolean;
  setPerpetualFlag(value: boolean): void;

  getAmortizationFlag(): boolean;
  setAmortizationFlag(value: boolean): void;

  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): void;
  getMinPriceIncrement(): common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: common_pb.Quotation): void;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bond.AsObject;
  static toObject(includeInstance: boolean, msg: Bond): Bond.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bond, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bond;
  static deserializeBinaryFromReader(message: Bond, reader: jspb.BinaryReader): Bond;
}

export namespace Bond {
  export type AsObject = {
    figi: string,
    ticker: string,
    classCode: string,
    isin: string,
    lot: number,
    currency: string,
    klong?: common_pb.Quotation.AsObject,
    kshort?: common_pb.Quotation.AsObject,
    dlong?: common_pb.Quotation.AsObject,
    dshort?: common_pb.Quotation.AsObject,
    dlongMin?: common_pb.Quotation.AsObject,
    dshortMin?: common_pb.Quotation.AsObject,
    shortEnabledFlag: boolean,
    name: string,
    exchange: string,
    couponQuantityPerYear: number,
    maturityDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nominal?: common_pb.MoneyValue.AsObject,
    stateRegDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    placementDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    placementPrice?: common_pb.MoneyValue.AsObject,
    aciValue?: common_pb.MoneyValue.AsObject,
    countryOfRisk: string,
    countryOfRiskName: string,
    sector: string,
    issueKind: string,
    issueSize: number,
    issueSizePlan: number,
    tradingStatus: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap],
    otcFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    floatingCouponFlag: boolean,
    perpetualFlag: boolean,
    amortizationFlag: boolean,
    minPriceIncrement?: common_pb.Quotation.AsObject,
    apiTradeAvailableFlag: boolean,
  }
}

export class Currency extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getClassCode(): string;
  setClassCode(value: string): void;

  getIsin(): string;
  setIsin(value: string): void;

  getLot(): number;
  setLot(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  hasKlong(): boolean;
  clearKlong(): void;
  getKlong(): common_pb.Quotation | undefined;
  setKlong(value?: common_pb.Quotation): void;

  hasKshort(): boolean;
  clearKshort(): void;
  getKshort(): common_pb.Quotation | undefined;
  setKshort(value?: common_pb.Quotation): void;

  hasDlong(): boolean;
  clearDlong(): void;
  getDlong(): common_pb.Quotation | undefined;
  setDlong(value?: common_pb.Quotation): void;

  hasDshort(): boolean;
  clearDshort(): void;
  getDshort(): common_pb.Quotation | undefined;
  setDshort(value?: common_pb.Quotation): void;

  hasDlongMin(): boolean;
  clearDlongMin(): void;
  getDlongMin(): common_pb.Quotation | undefined;
  setDlongMin(value?: common_pb.Quotation): void;

  hasDshortMin(): boolean;
  clearDshortMin(): void;
  getDshortMin(): common_pb.Quotation | undefined;
  setDshortMin(value?: common_pb.Quotation): void;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getExchange(): string;
  setExchange(value: string): void;

  hasNominal(): boolean;
  clearNominal(): void;
  getNominal(): common_pb.MoneyValue | undefined;
  setNominal(value?: common_pb.MoneyValue): void;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): void;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): void;

  getTradingStatus(): common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap];
  setTradingStatus(value: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap]): void;

  getOtcFlag(): boolean;
  setOtcFlag(value: boolean): void;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): void;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): void;

  getIsoCurrencyName(): string;
  setIsoCurrencyName(value: string): void;

  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): void;
  getMinPriceIncrement(): common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: common_pb.Quotation): void;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Currency.AsObject;
  static toObject(includeInstance: boolean, msg: Currency): Currency.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Currency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Currency;
  static deserializeBinaryFromReader(message: Currency, reader: jspb.BinaryReader): Currency;
}

export namespace Currency {
  export type AsObject = {
    figi: string,
    ticker: string,
    classCode: string,
    isin: string,
    lot: number,
    currency: string,
    klong?: common_pb.Quotation.AsObject,
    kshort?: common_pb.Quotation.AsObject,
    dlong?: common_pb.Quotation.AsObject,
    dshort?: common_pb.Quotation.AsObject,
    dlongMin?: common_pb.Quotation.AsObject,
    dshortMin?: common_pb.Quotation.AsObject,
    shortEnabledFlag: boolean,
    name: string,
    exchange: string,
    nominal?: common_pb.MoneyValue.AsObject,
    countryOfRisk: string,
    countryOfRiskName: string,
    tradingStatus: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap],
    otcFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    isoCurrencyName: string,
    minPriceIncrement?: common_pb.Quotation.AsObject,
    apiTradeAvailableFlag: boolean,
  }
}

export class Etf extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getClassCode(): string;
  setClassCode(value: string): void;

  getIsin(): string;
  setIsin(value: string): void;

  getLot(): number;
  setLot(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  hasKlong(): boolean;
  clearKlong(): void;
  getKlong(): common_pb.Quotation | undefined;
  setKlong(value?: common_pb.Quotation): void;

  hasKshort(): boolean;
  clearKshort(): void;
  getKshort(): common_pb.Quotation | undefined;
  setKshort(value?: common_pb.Quotation): void;

  hasDlong(): boolean;
  clearDlong(): void;
  getDlong(): common_pb.Quotation | undefined;
  setDlong(value?: common_pb.Quotation): void;

  hasDshort(): boolean;
  clearDshort(): void;
  getDshort(): common_pb.Quotation | undefined;
  setDshort(value?: common_pb.Quotation): void;

  hasDlongMin(): boolean;
  clearDlongMin(): void;
  getDlongMin(): common_pb.Quotation | undefined;
  setDlongMin(value?: common_pb.Quotation): void;

  hasDshortMin(): boolean;
  clearDshortMin(): void;
  getDshortMin(): common_pb.Quotation | undefined;
  setDshortMin(value?: common_pb.Quotation): void;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getExchange(): string;
  setExchange(value: string): void;

  hasFixedCommission(): boolean;
  clearFixedCommission(): void;
  getFixedCommission(): common_pb.Quotation | undefined;
  setFixedCommission(value?: common_pb.Quotation): void;

  getFocusType(): string;
  setFocusType(value: string): void;

  hasReleasedDate(): boolean;
  clearReleasedDate(): void;
  getReleasedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReleasedDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasNumShares(): boolean;
  clearNumShares(): void;
  getNumShares(): common_pb.Quotation | undefined;
  setNumShares(value?: common_pb.Quotation): void;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): void;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): void;

  getSector(): string;
  setSector(value: string): void;

  getRebalancingFreq(): string;
  setRebalancingFreq(value: string): void;

  getTradingStatus(): common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap];
  setTradingStatus(value: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap]): void;

  getOtcFlag(): boolean;
  setOtcFlag(value: boolean): void;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): void;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): void;

  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): void;
  getMinPriceIncrement(): common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: common_pb.Quotation): void;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Etf.AsObject;
  static toObject(includeInstance: boolean, msg: Etf): Etf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Etf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Etf;
  static deserializeBinaryFromReader(message: Etf, reader: jspb.BinaryReader): Etf;
}

export namespace Etf {
  export type AsObject = {
    figi: string,
    ticker: string,
    classCode: string,
    isin: string,
    lot: number,
    currency: string,
    klong?: common_pb.Quotation.AsObject,
    kshort?: common_pb.Quotation.AsObject,
    dlong?: common_pb.Quotation.AsObject,
    dshort?: common_pb.Quotation.AsObject,
    dlongMin?: common_pb.Quotation.AsObject,
    dshortMin?: common_pb.Quotation.AsObject,
    shortEnabledFlag: boolean,
    name: string,
    exchange: string,
    fixedCommission?: common_pb.Quotation.AsObject,
    focusType: string,
    releasedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    numShares?: common_pb.Quotation.AsObject,
    countryOfRisk: string,
    countryOfRiskName: string,
    sector: string,
    rebalancingFreq: string,
    tradingStatus: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap],
    otcFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    minPriceIncrement?: common_pb.Quotation.AsObject,
    apiTradeAvailableFlag: boolean,
  }
}

export class Future extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getClassCode(): string;
  setClassCode(value: string): void;

  getLot(): number;
  setLot(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  hasKlong(): boolean;
  clearKlong(): void;
  getKlong(): common_pb.Quotation | undefined;
  setKlong(value?: common_pb.Quotation): void;

  hasKshort(): boolean;
  clearKshort(): void;
  getKshort(): common_pb.Quotation | undefined;
  setKshort(value?: common_pb.Quotation): void;

  hasDlong(): boolean;
  clearDlong(): void;
  getDlong(): common_pb.Quotation | undefined;
  setDlong(value?: common_pb.Quotation): void;

  hasDshort(): boolean;
  clearDshort(): void;
  getDshort(): common_pb.Quotation | undefined;
  setDshort(value?: common_pb.Quotation): void;

  hasDlongMin(): boolean;
  clearDlongMin(): void;
  getDlongMin(): common_pb.Quotation | undefined;
  setDlongMin(value?: common_pb.Quotation): void;

  hasDshortMin(): boolean;
  clearDshortMin(): void;
  getDshortMin(): common_pb.Quotation | undefined;
  setDshortMin(value?: common_pb.Quotation): void;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getExchange(): string;
  setExchange(value: string): void;

  hasFirstTradeDate(): boolean;
  clearFirstTradeDate(): void;
  getFirstTradeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstTradeDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastTradeDate(): boolean;
  clearLastTradeDate(): void;
  getLastTradeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastTradeDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getFuturesType(): string;
  setFuturesType(value: string): void;

  getAssetType(): string;
  setAssetType(value: string): void;

  getBasicAsset(): string;
  setBasicAsset(value: string): void;

  hasBasicAssetSize(): boolean;
  clearBasicAssetSize(): void;
  getBasicAssetSize(): common_pb.Quotation | undefined;
  setBasicAssetSize(value?: common_pb.Quotation): void;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): void;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): void;

  getSector(): string;
  setSector(value: string): void;

  hasExpirationDate(): boolean;
  clearExpirationDate(): void;
  getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTradingStatus(): common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap];
  setTradingStatus(value: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap]): void;

  getOtcFlag(): boolean;
  setOtcFlag(value: boolean): void;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): void;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): void;

  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): void;
  getMinPriceIncrement(): common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: common_pb.Quotation): void;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Future.AsObject;
  static toObject(includeInstance: boolean, msg: Future): Future.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Future, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Future;
  static deserializeBinaryFromReader(message: Future, reader: jspb.BinaryReader): Future;
}

export namespace Future {
  export type AsObject = {
    figi: string,
    ticker: string,
    classCode: string,
    lot: number,
    currency: string,
    klong?: common_pb.Quotation.AsObject,
    kshort?: common_pb.Quotation.AsObject,
    dlong?: common_pb.Quotation.AsObject,
    dshort?: common_pb.Quotation.AsObject,
    dlongMin?: common_pb.Quotation.AsObject,
    dshortMin?: common_pb.Quotation.AsObject,
    shortEnabledFlag: boolean,
    name: string,
    exchange: string,
    firstTradeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastTradeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    futuresType: string,
    assetType: string,
    basicAsset: string,
    basicAssetSize?: common_pb.Quotation.AsObject,
    countryOfRisk: string,
    countryOfRiskName: string,
    sector: string,
    expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    tradingStatus: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap],
    otcFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    minPriceIncrement?: common_pb.Quotation.AsObject,
    apiTradeAvailableFlag: boolean,
  }
}

export class Share extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getClassCode(): string;
  setClassCode(value: string): void;

  getIsin(): string;
  setIsin(value: string): void;

  getLot(): number;
  setLot(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  hasKlong(): boolean;
  clearKlong(): void;
  getKlong(): common_pb.Quotation | undefined;
  setKlong(value?: common_pb.Quotation): void;

  hasKshort(): boolean;
  clearKshort(): void;
  getKshort(): common_pb.Quotation | undefined;
  setKshort(value?: common_pb.Quotation): void;

  hasDlong(): boolean;
  clearDlong(): void;
  getDlong(): common_pb.Quotation | undefined;
  setDlong(value?: common_pb.Quotation): void;

  hasDshort(): boolean;
  clearDshort(): void;
  getDshort(): common_pb.Quotation | undefined;
  setDshort(value?: common_pb.Quotation): void;

  hasDlongMin(): boolean;
  clearDlongMin(): void;
  getDlongMin(): common_pb.Quotation | undefined;
  setDlongMin(value?: common_pb.Quotation): void;

  hasDshortMin(): boolean;
  clearDshortMin(): void;
  getDshortMin(): common_pb.Quotation | undefined;
  setDshortMin(value?: common_pb.Quotation): void;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getExchange(): string;
  setExchange(value: string): void;

  hasIpoDate(): boolean;
  clearIpoDate(): void;
  getIpoDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setIpoDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getIssueSize(): number;
  setIssueSize(value: number): void;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): void;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): void;

  getSector(): string;
  setSector(value: string): void;

  getIssueSizePlan(): number;
  setIssueSizePlan(value: number): void;

  hasNominal(): boolean;
  clearNominal(): void;
  getNominal(): common_pb.MoneyValue | undefined;
  setNominal(value?: common_pb.MoneyValue): void;

  getTradingStatus(): common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap];
  setTradingStatus(value: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap]): void;

  getOtcFlag(): boolean;
  setOtcFlag(value: boolean): void;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): void;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): void;

  getDivYieldFlag(): boolean;
  setDivYieldFlag(value: boolean): void;

  getShareType(): ShareTypeMap[keyof ShareTypeMap];
  setShareType(value: ShareTypeMap[keyof ShareTypeMap]): void;

  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): void;
  getMinPriceIncrement(): common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: common_pb.Quotation): void;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Share.AsObject;
  static toObject(includeInstance: boolean, msg: Share): Share.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Share, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Share;
  static deserializeBinaryFromReader(message: Share, reader: jspb.BinaryReader): Share;
}

export namespace Share {
  export type AsObject = {
    figi: string,
    ticker: string,
    classCode: string,
    isin: string,
    lot: number,
    currency: string,
    klong?: common_pb.Quotation.AsObject,
    kshort?: common_pb.Quotation.AsObject,
    dlong?: common_pb.Quotation.AsObject,
    dshort?: common_pb.Quotation.AsObject,
    dlongMin?: common_pb.Quotation.AsObject,
    dshortMin?: common_pb.Quotation.AsObject,
    shortEnabledFlag: boolean,
    name: string,
    exchange: string,
    ipoDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    issueSize: number,
    countryOfRisk: string,
    countryOfRiskName: string,
    sector: string,
    issueSizePlan: number,
    nominal?: common_pb.MoneyValue.AsObject,
    tradingStatus: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap],
    otcFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    divYieldFlag: boolean,
    shareType: ShareTypeMap[keyof ShareTypeMap],
    minPriceIncrement?: common_pb.Quotation.AsObject,
    apiTradeAvailableFlag: boolean,
  }
}

export class GetAccruedInterestsRequest extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccruedInterestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccruedInterestsRequest): GetAccruedInterestsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccruedInterestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccruedInterestsRequest;
  static deserializeBinaryFromReader(message: GetAccruedInterestsRequest, reader: jspb.BinaryReader): GetAccruedInterestsRequest;
}

export namespace GetAccruedInterestsRequest {
  export type AsObject = {
    figi: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetAccruedInterestsResponse extends jspb.Message {
  clearAccruedInterestsList(): void;
  getAccruedInterestsList(): Array<AccruedInterest>;
  setAccruedInterestsList(value: Array<AccruedInterest>): void;
  addAccruedInterests(value?: AccruedInterest, index?: number): AccruedInterest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccruedInterestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccruedInterestsResponse): GetAccruedInterestsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccruedInterestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccruedInterestsResponse;
  static deserializeBinaryFromReader(message: GetAccruedInterestsResponse, reader: jspb.BinaryReader): GetAccruedInterestsResponse;
}

export namespace GetAccruedInterestsResponse {
  export type AsObject = {
    accruedInterestsList: Array<AccruedInterest.AsObject>,
  }
}

export class AccruedInterest extends jspb.Message {
  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): common_pb.Quotation | undefined;
  setValue(value?: common_pb.Quotation): void;

  hasValuePercent(): boolean;
  clearValuePercent(): void;
  getValuePercent(): common_pb.Quotation | undefined;
  setValuePercent(value?: common_pb.Quotation): void;

  hasNominal(): boolean;
  clearNominal(): void;
  getNominal(): common_pb.Quotation | undefined;
  setNominal(value?: common_pb.Quotation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccruedInterest.AsObject;
  static toObject(includeInstance: boolean, msg: AccruedInterest): AccruedInterest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccruedInterest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccruedInterest;
  static deserializeBinaryFromReader(message: AccruedInterest, reader: jspb.BinaryReader): AccruedInterest;
}

export namespace AccruedInterest {
  export type AsObject = {
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    value?: common_pb.Quotation.AsObject,
    valuePercent?: common_pb.Quotation.AsObject,
    nominal?: common_pb.Quotation.AsObject,
  }
}

export class GetFuturesMarginRequest extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFuturesMarginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFuturesMarginRequest): GetFuturesMarginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFuturesMarginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFuturesMarginRequest;
  static deserializeBinaryFromReader(message: GetFuturesMarginRequest, reader: jspb.BinaryReader): GetFuturesMarginRequest;
}

export namespace GetFuturesMarginRequest {
  export type AsObject = {
    figi: string,
  }
}

export class GetFuturesMarginResponse extends jspb.Message {
  hasInitialMarginOnBuy(): boolean;
  clearInitialMarginOnBuy(): void;
  getInitialMarginOnBuy(): common_pb.MoneyValue | undefined;
  setInitialMarginOnBuy(value?: common_pb.MoneyValue): void;

  hasInitialMarginOnSell(): boolean;
  clearInitialMarginOnSell(): void;
  getInitialMarginOnSell(): common_pb.MoneyValue | undefined;
  setInitialMarginOnSell(value?: common_pb.MoneyValue): void;

  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): void;
  getMinPriceIncrement(): common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: common_pb.Quotation): void;

  hasMinPriceIncrementAmount(): boolean;
  clearMinPriceIncrementAmount(): void;
  getMinPriceIncrementAmount(): common_pb.Quotation | undefined;
  setMinPriceIncrementAmount(value?: common_pb.Quotation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFuturesMarginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFuturesMarginResponse): GetFuturesMarginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFuturesMarginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFuturesMarginResponse;
  static deserializeBinaryFromReader(message: GetFuturesMarginResponse, reader: jspb.BinaryReader): GetFuturesMarginResponse;
}

export namespace GetFuturesMarginResponse {
  export type AsObject = {
    initialMarginOnBuy?: common_pb.MoneyValue.AsObject,
    initialMarginOnSell?: common_pb.MoneyValue.AsObject,
    minPriceIncrement?: common_pb.Quotation.AsObject,
    minPriceIncrementAmount?: common_pb.Quotation.AsObject,
  }
}

export class InstrumentResponse extends jspb.Message {
  hasInstrument(): boolean;
  clearInstrument(): void;
  getInstrument(): Instrument | undefined;
  setInstrument(value?: Instrument): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentResponse): InstrumentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentResponse;
  static deserializeBinaryFromReader(message: InstrumentResponse, reader: jspb.BinaryReader): InstrumentResponse;
}

export namespace InstrumentResponse {
  export type AsObject = {
    instrument?: Instrument.AsObject,
  }
}

export class Instrument extends jspb.Message {
  getFigi(): string;
  setFigi(value: string): void;

  getTicker(): string;
  setTicker(value: string): void;

  getClassCode(): string;
  setClassCode(value: string): void;

  getIsin(): string;
  setIsin(value: string): void;

  getLot(): number;
  setLot(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  hasKlong(): boolean;
  clearKlong(): void;
  getKlong(): common_pb.Quotation | undefined;
  setKlong(value?: common_pb.Quotation): void;

  hasKshort(): boolean;
  clearKshort(): void;
  getKshort(): common_pb.Quotation | undefined;
  setKshort(value?: common_pb.Quotation): void;

  hasDlong(): boolean;
  clearDlong(): void;
  getDlong(): common_pb.Quotation | undefined;
  setDlong(value?: common_pb.Quotation): void;

  hasDshort(): boolean;
  clearDshort(): void;
  getDshort(): common_pb.Quotation | undefined;
  setDshort(value?: common_pb.Quotation): void;

  hasDlongMin(): boolean;
  clearDlongMin(): void;
  getDlongMin(): common_pb.Quotation | undefined;
  setDlongMin(value?: common_pb.Quotation): void;

  hasDshortMin(): boolean;
  clearDshortMin(): void;
  getDshortMin(): common_pb.Quotation | undefined;
  setDshortMin(value?: common_pb.Quotation): void;

  getShortEnabledFlag(): boolean;
  setShortEnabledFlag(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getExchange(): string;
  setExchange(value: string): void;

  getCountryOfRisk(): string;
  setCountryOfRisk(value: string): void;

  getCountryOfRiskName(): string;
  setCountryOfRiskName(value: string): void;

  getInstrumentType(): string;
  setInstrumentType(value: string): void;

  getTradingStatus(): common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap];
  setTradingStatus(value: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap]): void;

  getOtcFlag(): boolean;
  setOtcFlag(value: boolean): void;

  getBuyAvailableFlag(): boolean;
  setBuyAvailableFlag(value: boolean): void;

  getSellAvailableFlag(): boolean;
  setSellAvailableFlag(value: boolean): void;

  hasMinPriceIncrement(): boolean;
  clearMinPriceIncrement(): void;
  getMinPriceIncrement(): common_pb.Quotation | undefined;
  setMinPriceIncrement(value?: common_pb.Quotation): void;

  getApiTradeAvailableFlag(): boolean;
  setApiTradeAvailableFlag(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instrument.AsObject;
  static toObject(includeInstance: boolean, msg: Instrument): Instrument.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Instrument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instrument;
  static deserializeBinaryFromReader(message: Instrument, reader: jspb.BinaryReader): Instrument;
}

export namespace Instrument {
  export type AsObject = {
    figi: string,
    ticker: string,
    classCode: string,
    isin: string,
    lot: number,
    currency: string,
    klong?: common_pb.Quotation.AsObject,
    kshort?: common_pb.Quotation.AsObject,
    dlong?: common_pb.Quotation.AsObject,
    dshort?: common_pb.Quotation.AsObject,
    dlongMin?: common_pb.Quotation.AsObject,
    dshortMin?: common_pb.Quotation.AsObject,
    shortEnabledFlag: boolean,
    name: string,
    exchange: string,
    countryOfRisk: string,
    countryOfRiskName: string,
    instrumentType: string,
    tradingStatus: common_pb.SecurityTradingStatusMap[keyof common_pb.SecurityTradingStatusMap],
    otcFlag: boolean,
    buyAvailableFlag: boolean,
    sellAvailableFlag: boolean,
    minPriceIncrement?: common_pb.Quotation.AsObject,
    apiTradeAvailableFlag: boolean,
  }
}

export class GetDividendsRequest extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDividendsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDividendsRequest): GetDividendsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDividendsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDividendsRequest;
  static deserializeBinaryFromReader(message: GetDividendsRequest, reader: jspb.BinaryReader): GetDividendsRequest;
}

export namespace GetDividendsRequest {
  export type AsObject = {
    figi: string,
    from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetDividendsResponse extends jspb.Message {
  clearDividendsList(): void;
  getDividendsList(): Array<Dividend>;
  setDividendsList(value: Array<Dividend>): void;
  addDividends(value?: Dividend, index?: number): Dividend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDividendsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDividendsResponse): GetDividendsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDividendsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDividendsResponse;
  static deserializeBinaryFromReader(message: GetDividendsResponse, reader: jspb.BinaryReader): GetDividendsResponse;
}

export namespace GetDividendsResponse {
  export type AsObject = {
    dividendsList: Array<Dividend.AsObject>,
  }
}

export class Dividend extends jspb.Message {
  hasDividendNet(): boolean;
  clearDividendNet(): void;
  getDividendNet(): common_pb.MoneyValue | undefined;
  setDividendNet(value?: common_pb.MoneyValue): void;

  hasPaymentDate(): boolean;
  clearPaymentDate(): void;
  getPaymentDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPaymentDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDeclaredDate(): boolean;
  clearDeclaredDate(): void;
  getDeclaredDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeclaredDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastBuyDate(): boolean;
  clearLastBuyDate(): void;
  getLastBuyDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastBuyDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDividendType(): string;
  setDividendType(value: string): void;

  hasRecordDate(): boolean;
  clearRecordDate(): void;
  getRecordDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRecordDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRegularity(): string;
  setRegularity(value: string): void;

  hasClosePrice(): boolean;
  clearClosePrice(): void;
  getClosePrice(): common_pb.MoneyValue | undefined;
  setClosePrice(value?: common_pb.MoneyValue): void;

  hasYieldValue(): boolean;
  clearYieldValue(): void;
  getYieldValue(): common_pb.Quotation | undefined;
  setYieldValue(value?: common_pb.Quotation): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dividend.AsObject;
  static toObject(includeInstance: boolean, msg: Dividend): Dividend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dividend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dividend;
  static deserializeBinaryFromReader(message: Dividend, reader: jspb.BinaryReader): Dividend;
}

export namespace Dividend {
  export type AsObject = {
    dividendNet?: common_pb.MoneyValue.AsObject,
    paymentDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    declaredDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastBuyDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    dividendType: string,
    recordDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    regularity: string,
    closePrice?: common_pb.MoneyValue.AsObject,
    yieldValue?: common_pb.Quotation.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface InstrumentIdTypeMap {
  INSTRUMENT_ID_UNSPECIFIED: 0;
  INSTRUMENT_ID_TYPE_FIGI: 1;
  INSTRUMENT_ID_TYPE_TICKER: 2;
}

export const InstrumentIdType: InstrumentIdTypeMap;

export interface InstrumentStatusMap {
  INSTRUMENT_STATUS_UNSPECIFIED: 0;
  INSTRUMENT_STATUS_BASE: 1;
  INSTRUMENT_STATUS_ALL: 2;
}

export const InstrumentStatus: InstrumentStatusMap;

export interface ShareTypeMap {
  SHARE_TYPE_UNSPECIFIED: 0;
  SHARE_TYPE_COMMON: 1;
  SHARE_TYPE_PREFERRED: 2;
  SHARE_TYPE_ADR: 3;
  SHARE_TYPE_GDR: 4;
  SHARE_TYPE_MLP: 5;
  SHARE_TYPE_NY_REG_SHRS: 6;
  SHARE_TYPE_CLOSED_END_FUND: 7;
  SHARE_TYPE_REIT: 8;
}

export const ShareType: ShareTypeMap;

