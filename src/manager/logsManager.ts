const stream = require("stream");
const k8s = require("@kubernetes/client-node");

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const log = new k8s.Log(kc);

const logStream = new stream.PassThrough();

logStream.on("data", (chunk) => {
  process.stdout.write(chunk);
});

log
  .log("default", "pod1", "container1", logStream, {
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
      req.abort();
    }, 5000);
  });
