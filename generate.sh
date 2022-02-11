# Path to this plugin
PROTOC="$(npm bin)/grpc_tools_node_protoc"
PROTOC_GEN_TS_PATH="$(npm bin)/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="$(npm bin)/grpc_tools_node_protoc_plugin"

OUT_DIR="./src/generated"
TS_OUT_DIR="./src/generated"
IN_DIR="./contracts"

protoc \
    -I="./contracts" \
    --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH \
    --plugin=protoc-gen-grpc=$PROTOC_GEN_GRPC_PATH \
    --js_out=import_style=commonjs,binary:$OUT_DIR \
    --ts_out=service=grpc-node,mode=grpc-js:$TS_OUT_DIR \
    "$IN_DIR"/*.proto
