// // ....................................................

// var namespace = {
//   metadata: {
//     name: "test",
//   },
// };

// k8sApi.createNamespace(namespace).then(
//   (response) => {
//     console.log("Created namespace");
//     console.log(response);
//     k8sApi.readNamespace(namespace.metadata.name).then((response) => {
//       console.log(response);
//       // k8sApi.deleteNamespace(namespace.metadata.name, {} /* delete options */);
//     });
//   },
//   (err) => {
//     console.log("Error!: " + err);
//   }
// );