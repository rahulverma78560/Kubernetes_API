import * as k8s from "@kubernetes/client-node";

const kc = new k8s.KubeConfig();
kc.loadFromFile("config.yml");
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

export const getPods = async () => {
  const getPods = await k8sApi.listNamespacedPod("default");

  if (getPods.body.items.length == 0) {
    return Promise.reject("No Pods Found");
  } else {
    return Promise.resolve(getPods);
  }
};

export const createPod = async (name: any, app: any) => {
  const appPodContainer = {
    name: "nginx",
    image: "nginx:latest",
  } as k8s.V1Container;

  const appPod = {
    metadata: {
      name,
      labels: {
        app,
      },
    },
    spec: {
      containers: [appPodContainer],
    },
  } as k8s.V1Pod;
  try {
    const pod = await k8sApi.createNamespacedPod("default", appPod);
    console.log("created", name);
    return pod;
  } catch (err) {
    return err;
  }
};

export const deletePod = async (name: any, namespace: any) => {
  await k8sApi.deleteNamespacedPod(name, namespace);
  console.log("deleted", name);
};
