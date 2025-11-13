# DevSecOps CI/CD Pipeline with GitHub Actions, Terraform, EKS, ArgoCD, Prometheus & Grafana

This repository contains a complete **DevSecOps-driven CI/CD pipeline** that integrates automated testing, security scanning, infrastructure provisioning, Kubernetes deployment, and monitoring.  
It follows modern cloud-native best practices using **GitHub Actions**, **Terraform**, **Docker**, **ArgoCD**, **Prometheus**, and **Grafana**.

---

## 🚀 Features

### ✔️ CI/CD with GitHub Actions
- Automated build and test stages
- Security scanning (SAST, DAST, dependency scanning, container image scanning)
- Automated image build & push
- Optional automated Terraform apply

### ✔️ Infrastructure as Code (Terraform)
- AWS **EKS cluster** provisioning
- AWS **VPC**, subnets, routing, IAM, and networking components
- Modular and reusable IaC structure

### ✔️ Docker Containerization
- Dockerfile included for containerizing the application
- Optimized for Kubernetes deployment

### ✔️ GitOps Deployment with ArgoCD
- Kubernetes manifests stored in Git
- ArgoCD continuously syncs and deploys changes to EKS
- Rollbacks and version-controlled deployments

### ✔️ Monitoring & Observability
- **Prometheus** for metrics and alerting
- **Grafana** dashboards for visual monitoring
- Kubernetes cluster and application metrics included

---

## 📁 Project Structure
```text
.
├── .github/workflows/        # GitHub Actions CI/CD pipelines
├── terraform/                # Terraform scripts for EKS + VPC
├── k8s/                      # Kubernetes manifests for GitOps (ArgoCD)
├── monitoring/               # Prometheus & Grafana config
├── application/              # Application source code
└── docker                    # Docker image definition
