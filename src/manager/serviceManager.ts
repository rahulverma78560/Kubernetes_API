const k8s = require("@kubernetes/client-node");

const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

export const getServices = async () => {
  const getPods = await k8sApi.listNamespacedService("default");

  if (getPods.length == 0) {
    return Promise.reject("No Pods Found");
  } else {
    return Promise.resolve(getPods);
  }
};
