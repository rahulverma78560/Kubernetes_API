import * as k8s from "@kubernetes/client-node";

const kc = new k8s.KubeConfig();
kc.loadFromFile("config.yml");
const k8sApi = kc.makeApiClient(k8s.AutoscalingV1Api);

export const getHpa = async () => {
  const hpa = await k8sApi.listNamespacedHorizontalPodAutoscaler("default");
  if (!hpa) {
    return Promise.reject("No HorizontalPodAutoscaler Found");
  } else {
    return Promise.resolve(hpa);
  }
};

export const createHpa = async () => {
  const hpaMetaData = {
    name: "hpa-test2",
  } as k8s.V1ObjectMeta;

  const scaleTraget = {
    kind: "deployment",
    name: "test",
  } as k8s.V1CrossVersionObjectReference;
  const hpaSpec = {
    maxReplicas: 10,
    minReplicas: 1,
    scaleTargetRef: scaleTraget,
    targetCPUUtilizationPercentage: 20,
  } as k8s.V1HorizontalPodAutoscalerSpec;
  const hpaConfig = {
    metadata: hpaMetaData,
    spec: hpaSpec,
  } as k8s.V1HorizontalPodAutoscaler;

  try {
    const hpa = await k8sApi.createNamespacedHorizontalPodAutoscaler(
      "default",
      hpaConfig
    );
    console.log("created");
    return hpa;
  } catch (err) {
    return err;
  }
};

export const deleteHpa = async () => {
  const hpa = await k8sApi.deleteNamespacedHorizontalPodAutoscaler(
    "hpa-test",
    "default"
  );
  if (!hpa) {
    return Promise.reject("No HorizontalPodAutoscaler Found");
  } else {
    return Promise.resolve(hpa);
  }
};
