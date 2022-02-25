import * as k8s from "@kubernetes/client-node";

const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.AppsV1Api);

export const getDeployment = async () => {
  const getPods = await k8sApi.listNamespacedDeployment("", "default");
  if (!getPods) {
    return Promise.reject("No Deployment Found");
  } else {
    return Promise.resolve(getPods);
  }
};

export const createDeployment = async () => {
  const appPodContainer = {
    name: "nginx",
    image: "nginx:latest",
  } as k8s.V1Container;
  const deploysSpec = {
    containers: [appPodContainer],
  } as k8s.V1PodSpec;
  const deploysMetaData = {
    clusterName: "test",
    labels: {
      app: "test",
    },
    name: "test",
  } as k8s.V1ObjectMeta;

  const deployTemplate = {
    metadata: deploysMetaData,
    spec: deploysSpec,
  } as k8s.V1PodTemplateSpec;

  const deploySelector = {
    matchLabels: {
      app: "test",
    },
  } as k8s.V1LabelSelector;

  const deploySpec = {
    replicas: 2,
    selector: deploySelector,
    template: deployTemplate,
  } as k8s.V1DeploymentSpec;

  const deployMetaData = {
    name: "test",
    namespace: "default",
    labels: {
      app: "test",
    },
  } as k8s.V1ObjectMeta;

  const deployment = {
    metadata: deployMetaData,
    spec: deploySpec,
  } as k8s.V1Deployment;
  await k8sApi
    .createNamespacedDeployment("default", deployment)
    .catch((e) => console.error(e));
  console.log("created", name);
};

export const DeleteDeployment = async () => {
  const deleteDeployment = await k8sApi.deleteCollectionNamespacedDeployment(
    "default"
  );
  if (!deleteDeployment) {
    return Promise.reject("No deleteDeployment Found");
  } else {
    return Promise.resolve(deleteDeployment);
  }
};
