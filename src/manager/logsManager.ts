import stream from "stream";
import * as k8s from "@kubernetes/client-node";
const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const log = new k8s.Log(kc);

const logStream = new stream.PassThrough();

export const getLogs = async (nameSpace: any, podName: any) => {
  try {
    const logData = await log.log(nameSpace, podName, "", logStream, {
      follow: true,
      tailLines: 50,
      pretty: false,
      timestamps: false,
    });
    logStream.on("data", (chunk) => {
      process.stdout.write(chunk);
    });
    return logData;
  } catch (err) {
    console.log(err);
  }
};
