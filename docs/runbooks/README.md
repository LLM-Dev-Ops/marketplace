# Operational Runbooks

This directory contains operational runbooks for the LLM Marketplace platform.

## Available Runbooks

### Deployment
- `deployment.md` - Deployment procedures for staging and production
- `rollback.md` - How to rollback a failed deployment
- `scaling.md` - Horizontal and vertical scaling procedures

### Incident Response
- `incident-response.md` - General incident response process
- `service-outage.md` - Handling service outages
- `database-issues.md` - Database troubleshooting
- `performance-degradation.md` - Performance issue investigation

### Maintenance
- `database-backup.md` - Database backup and restore procedures
- `security-updates.md` - Applying security patches
- `certificate-renewal.md` - SSL/TLS certificate management
- `log-rotation.md` - Log management and rotation

### Monitoring & Alerts
- `alert-handling.md` - How to respond to alerts
- `metrics-analysis.md` - Analyzing performance metrics
- `tracing-debugging.md` - Using distributed tracing for debugging

## Emergency Contacts

- **On-Call Engineer**: [PagerDuty rotation]
- **Technical Lead**: [Contact info]
- **DevOps Team**: [Slack channel]
- **Security Team**: security@llm-marketplace.com

## Common Commands

### Check Service Health
```bash
# All services
make docker-logs

# Specific service
docker-compose logs -f publishing-service
```

### Database Operations
```bash
# Backup database
make db-backup

# Restore database
make db-restore

# Run migrations
make db-migrate
```

### Scaling Services
```bash
# Scale horizontally
kubectl scale deployment publishing-service --replicas=5

# Check status
kubectl rollout status deployment/publishing-service
```

## Monitoring Dashboards

- **Grafana**: http://localhost:3000
- **Prometheus**: http://localhost:9090
- **Jaeger**: http://localhost:16686

## SLA Targets

- **Availability**: 99.95% uptime
- **Latency**: p95 < 200ms, p99 < 500ms
- **Error Rate**: < 0.1%
