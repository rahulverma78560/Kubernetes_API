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

export const createServiceManager = async () => {
  var namespace = {
    apiVersions: "networking.k8s.io/v1beta1",
    kind: "Ingress",
    metadata: {
      name: "test1",
    },
    spec: {
      type: "LoadBalancer",
      app: "myapp",
      ports: {
        name: "http",
        port: 80,
        targetPort: 80,
      },
    },
  };
  try {
    const service = await k8sApi.createNamespacedIngress("default", namespace);
    console.log(service);
    return "Created Service";
  } catch (err) {
    return "Error!: " + err;
  }
};
// const clientIdentifier = "my-subdomain";

// export const createServiceManager = async () => {
//   try {
//     const service = await k8sApi.createNamespacedIngress("default", {
//       apiVersions: "networking.k8s.io/v1beta1",
//       kind: "Ingress",
//       metadata: { name: `production-custom-${clientIdentifier}` },
//       spec: {
//         rules: [
//           {
//             host: `${clientIdentifier}.example.com`,
//             http: {
//               paths: [
//                 {
//                   backend: {
//                     serviceName: "production-auto-deploy",
//                     servicePort: 5000,
//                   },
//                   path: "/",
//                 },
//               ],
//             },
//           },
//         ],
//         tls: [{ hosts: [`${clientIdentifier}.example.com`] }],
//       },
//     });
//     return Promise.resolve(service);
//   } catch (err) {
//     return err;
//   }
// };
