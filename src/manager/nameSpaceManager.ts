const k8s = require("@kubernetes/client-node");

const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

export const createNamespaceManager = async () => {
  var namespace = {
    metadata: {
      name: "test1",
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

  if (getNameSpace.length == 0) {
    return Promise.reject("No Pods Found");
  } else {
    return Promise.resolve(getNameSpace);
  }
};

export const deleteNameSpaces = async () => {
  var namespace = {
    metadata: {
      name: "test",
    },
  };
  const deleteNameSpace = await k8sApi.deleteNamespace(
    namespace.metadata.name,
    {}
  );
  if (deleteNameSpace) {
    return Promise.resolve("NameSpace Deleted ");
  } else {
    return Promise.reject("NameSpace not found");
  }
};
