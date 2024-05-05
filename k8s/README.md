It seems you have Kubernetes deployment manifests for deploying an application along with an Ingress resource to expose it externally and a Service to internally expose it within the cluster. Here's a README draft to help understand these manifests:

---

# Kubernetes Deployment Guide

This guide provides instructions for deploying your application on a Kubernetes cluster using the provided manifests.

## Prerequisites

Before you begin, ensure you have the following:

- Access to a Kubernetes cluster.
- `kubectl` command-line tool installed and configured to connect to your cluster.

## Deployment

1. **Deploy the Application**:

   Apply the `deployment.yaml` manifest to deploy your application with the desired number of replicas:

   ```bash
   kubectl apply -f deployment.yaml
   ```

   This will create a Deployment named `app-deployment` with the specified number of replicas.

2. **Expose the Application internally**:

   Apply the `service.yaml` manifest to create a Service to internally expose your application within the cluster:

   ```bash
   kubectl apply -f service.yaml
   ```

   This will create a Service named `app-service` of type ClusterIP, which allows other components within the cluster to access your application.

3. **Expose the Application externally**:

   Apply the `ingress.yaml` manifest to create an Ingress resource to expose your application externally:

   ```bash
   kubectl apply -f ingress.yaml
   ```

   This will create an Ingress named `ingress-app` with annotations for Nginx Ingress controller. Ensure that your DNS is configured to point to the IP address of your Ingress controller.

## Accessing the Application

Once the deployment is successful and the Ingress controller is configured properly, you can access your application using the assigned domain or IP address.

## Cleaning Up

To delete the deployed resources, run the following commands:

```bash
kubectl delete deployment app-deployment
kubectl delete service app-service
kubectl delete ingress ingress-app
```

## Troubleshooting

If you encounter any issues during deployment or while accessing the application, refer to Kubernetes logs and events for troubleshooting.

---

Feel free to customize this guide according to your specific deployment environment and requirements!