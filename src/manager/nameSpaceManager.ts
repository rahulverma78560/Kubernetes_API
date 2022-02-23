import * as k8s from "@kubernetes/client-node";

const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

export const createNamespaceManager = async (data: any) => {
  var namespace = {
    metadata: {
      name: data.name,
    },
  };
  try {
    const create = await k8sApi.createNamespace(namespace);
    console.log(create);
    return "Created namespace";
  } catch (err) {
    console.log("Error!: " + err);
  }
};

export const getNameSpaces = async () => {
  var namespace = {
    metadata: {
      name: "",
    },
  };
  const getNameSpace = await k8sApi.readNamespace(namespace.metadata.name);
  if (!getNameSpace) {
    return Promise.reject("No Pods Found");
  } else {
    return Promise.resolve(getNameSpace);
  }
};

export const deleteNameSpaces = async (data: any) => {
  var namespace = {
    metadata: {
      name: data.name,
    },
  };
  const deleteNameSpace = await k8sApi.deleteNamespace(namespace.metadata.name);
  if (deleteNameSpace) {
    return Promise.resolve("NameSpace Deleted");
  } else {
    return Promise.reject("NameSpace not found");
  }
};
