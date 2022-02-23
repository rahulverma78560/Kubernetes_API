const k8s = require("@kubernetes/client-node");

const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

export const getPods = async () => {
  const getPods = await k8sApi.listNamespacedPod("default");

  if (getPods.length == 0) {
    return Promise.reject("No Pods Found");
  } else {
    return Promise.resolve(getPods);
  }
};

// // ....................................................

// var namespace = {
//   metadata: {
//     name: "test",
//   },
// };

// k8sApi.createNamespace(namespace).then(
//   (response) => {
//     console.log("Created namespace");
//     console.log(response);
//     k8sApi.readNamespace(namespace.metadata.name).then((response) => {
//       console.log(response);
//       // k8sApi.deleteNamespace(namespace.metadata.name, {} /* delete options */);
//     });
//   },
//   (err) => {
//     console.log("Error!: " + err);
//   }
// );
