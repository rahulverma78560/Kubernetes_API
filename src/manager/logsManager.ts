import stream from "stream";
import * as k8s from "@kubernetes/client-node";

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const log = new k8s.Log(kc);

const logStream = new stream.PassThrough();

export const getLogs = async () => {
  logStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  const logs = await log
    .log("default", "test", "", logStream, {
      follow: true,
      tailLines: 50,
      pretty: false,
      timestamps: false,
    })
    .catch((err) => {
      console.log(err);
    })
    .then((req) => {
      setTimeout(function () {
        req;
      }, 5000);
    });
  return logs;
};
