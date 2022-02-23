import * as k8s from "@kubernetes/client-node";

const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

export const getServices = async () => {
  const getPods = await k8sApi.listNamespacedService("default");

  if (getPods.body.items.length == 0) {
    return Promise.reject("No Pods Found");
  } else {
    return Promise.resolve(getPods);
  }
};

export const createServiceManager = async () => {
  //   var namespace = {
  //     apiVersions: "networking.k8s.io/v1beta1",
  //     kind: "Ingress",
  //     metadata: {
  //       name: "test1",
  //     },
  //     spec: {
  //       type: "LoadBalancer",
  //       app: "myapp",
  //       ports: {
  //         name: "http",
  //         port: 80,
  //         targetPort: 80,
  //       },
  //     },
  //   };
  try {
    const appPodContainer = {
      apiVersions: "networking.k8s.io/v1beta1",
      kind: "Ingress",
      ports: {
        name: "http",
        port: 80,
        targetPort: 80,
      },
    } as k8s.V1Service;

    const appPod = {
      metadata: {
        name: "test1",
      },
      spec: appPodContainer,
    } as k8s.V1Service;
    await k8sApi
      .createNamespacedService("default", appPod)
      .catch((e) => console.error(e));
    console.log("create");
  } catch (err) {
    return "Error!: " + err;
  }
};

export const deleteService = async (name: any, namespace: any) => {
  await k8sApi.deleteNamespacedService(name, namespace);
  console.log("delete", name);
};
