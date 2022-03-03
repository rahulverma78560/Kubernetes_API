import * as k8s from "@kubernetes/client-node";

const kc = new k8s.KubeConfig();
kc.loadFromFile("config.yml");
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

export const getNodes = async () => {
  const getPods = await k8sApi.listNode();
  if (!getPods) {
    return Promise.reject("No Nodes Found");
  } else {
    return Promise.resolve(getPods);
  }
};

export const createNodes = async () => {
  const nodeMetaData = {
    name: "test-nodes",
  } as k8s.V1ObjectMeta;
  const nodeSpec = {} as k8s.V1NodeSpec;

  const nodeConfig = {
    metadata: nodeMetaData,
    spec: nodeSpec,
  } as k8s.V1Node;
  try {
    const hpa = await k8sApi.createNode(nodeConfig);
    console.log("created");
    return hpa;
  } catch (err) {
    return err;
  }
};

export const deleteNodes = async () => {
  const nodes = await k8sApi.deleteNode("");
  if (!nodes) {
    return Promise.reject("No Nodes Found");
  } else {
    return Promise.resolve(nodes);
  }
};
