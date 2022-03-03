import * as k8s from "@kubernetes/client-node";

const kc = new k8s.KubeConfig();
kc.loadFromFile("config.yml");
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
  try {
    const serviceSpec = {
      apiVersions: "networking.k8s.io/v1beta1",
      kind: "Service",
      ports: [
        {
          port: 80,
          targetPort: 80,
        },
      ],
    } as k8s.V1ServiceSpec;

    const service = {
      metadata: {
        name: "test2",
      },
      spec: serviceSpec,
    } as k8s.V1Service;
    await k8sApi
      .createNamespacedService("default", service)
      .catch((e) => console.error(e));
    console.log("created");
  } catch (err) {
    return "Error!: " + err;
  }
};

export const deleteService = async (name: any, namespace: any) => {
  await k8sApi.deleteNamespacedService(name, namespace);
  console.log("delete", name);
};
