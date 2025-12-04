# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## 项目概述

HaloLight AWS Amplify 部署版本，集成 Cognito、DynamoDB、S3、Lambda@Edge。

## 技术栈

- **框架**: Next.js 15 + React 19 + TypeScript
- **样式**: Tailwind CSS 4、shadcn/ui
- **部署**: AWS Amplify
- **认证**: Amazon Cognito
- **数据库**: DynamoDB
- **存储**: S3
- **边缘**: Lambda@Edge / CloudFront Functions

## 常用命令

```bash
pnpm dev              # 本地开发
pnpm build            # 生产构建
amplify push          # 推送后端变更
amplify publish       # 发布前后端
amplify status        # 查看状态
```

## AWS 服务配置

### Amplify 初始化

```bash
amplify init
amplify add auth      # 添加 Cognito
amplify add api       # 添加 API (GraphQL/REST)
amplify add storage   # 添加 S3
```

### amplify.yml

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - pnpm install
    build:
      commands:
        - pnpm build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## 目录结构

```
amplify/
├── backend/
│   ├── auth/           # Cognito 配置
│   ├── api/            # API Gateway + Lambda
│   ├── storage/        # S3 配置
│   └── function/       # Lambda 函数
└── team-provider-info.json
```
