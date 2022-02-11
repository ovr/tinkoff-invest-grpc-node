// package: tinkoff.public.invest.api.contract.v1
// file: sandbox.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as orders_pb from "./orders_pb";
import * as operations_pb from "./operations_pb";
import * as users_pb from "./users_pb";

export class OpenSandboxAccountRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenSandboxAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenSandboxAccountRequest): OpenSandboxAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenSandboxAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenSandboxAccountRequest;
  static deserializeBinaryFromReader(message: OpenSandboxAccountRequest, reader: jspb.BinaryReader): OpenSandboxAccountRequest;
}

export namespace OpenSandboxAccountRequest {
  export type AsObject = {
  }
}

export class OpenSandboxAccountResponse extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenSandboxAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenSandboxAccountResponse): OpenSandboxAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenSandboxAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenSandboxAccountResponse;
  static deserializeBinaryFromReader(message: OpenSandboxAccountResponse, reader: jspb.BinaryReader): OpenSandboxAccountResponse;
}

export namespace OpenSandboxAccountResponse {
  export type AsObject = {
    accountId: string,
  }
}

export class CloseSandboxAccountRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseSandboxAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CloseSandboxAccountRequest): CloseSandboxAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseSandboxAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseSandboxAccountRequest;
  static deserializeBinaryFromReader(message: CloseSandboxAccountRequest, reader: jspb.BinaryReader): CloseSandboxAccountRequest;
}

export namespace CloseSandboxAccountRequest {
  export type AsObject = {
    accountId: string,
  }
}

export class CloseSandboxAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloseSandboxAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CloseSandboxAccountResponse): CloseSandboxAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CloseSandboxAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloseSandboxAccountResponse;
  static deserializeBinaryFromReader(message: CloseSandboxAccountResponse, reader: jspb.BinaryReader): CloseSandboxAccountResponse;
}

export namespace CloseSandboxAccountResponse {
  export type AsObject = {
  }
}

export class SandboxPayInRequest extends jspb.Message {
  getAccountId(): string;
  setAccountId(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): common_pb.MoneyValue | undefined;
  setAmount(value?: common_pb.MoneyValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SandboxPayInRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SandboxPayInRequest): SandboxPayInRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SandboxPayInRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SandboxPayInRequest;
  static deserializeBinaryFromReader(message: SandboxPayInRequest, reader: jspb.BinaryReader): SandboxPayInRequest;
}

export namespace SandboxPayInRequest {
  export type AsObject = {
    accountId: string,
    amount?: common_pb.MoneyValue.AsObject,
  }
}

export class SandboxPayInResponse extends jspb.Message {
  hasBalance(): boolean;
  clearBalance(): void;
  getBalance(): common_pb.MoneyValue | undefined;
  setBalance(value?: common_pb.MoneyValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SandboxPayInResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SandboxPayInResponse): SandboxPayInResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SandboxPayInResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SandboxPayInResponse;
  static deserializeBinaryFromReader(message: SandboxPayInResponse, reader: jspb.BinaryReader): SandboxPayInResponse;
}

export namespace SandboxPayInResponse {
  export type AsObject = {
    balance?: common_pb.MoneyValue.AsObject,
  }
}

