import saveAs from "file-saver";
import { Configuration } from "../assets/proto/configuration";
import { ProtoBufferFormData } from "../forms/ProtoBufferForm/types";

export const fileSaver = {
  saveProtoObjectAsBinaries: (data: ProtoBufferFormData) => {
    const bytes = Configuration.encode(data).finish();
    const blob = new Blob([bytes], { type: "application/protobuf" });
    saveAs(blob, "protobufConfiguration.config");
  },
  verifyObject: (data: ProtoBufferFormData) => {
    return Configuration.verify(data);
  },
};
