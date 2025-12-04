# HaloLight AWS

[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![AWS](https://img.shields.io/badge/AWS-Amplify-FF9900.svg?logo=amazonaws)](https://halolight-aws.h7ml.cn)
[![Next.js](https://img.shields.io/badge/Next.js-15-%23000000.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-%233178C6.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-%2361DAFB.svg)](https://react.dev/)

HaloLight 后台管理系统的 **AWS Amplify 部署版本**，集成 Amazon Cognito、DynamoDB、S3、Lambda@Edge 等 AWS 服务。

- 在线预览：<https://halolight-aws.h7ml.cn>
- GitHub：<https://github.com/halolight/halolight-aws>

## 功能亮点

- **AWS Amplify Hosting**：全球 CDN 分发
- **Amazon Cognito**：企业级身份认证
- **Lambda@Edge**：边缘计算
- **DynamoDB**：无服务器数据库
- **S3**：对象存储
- **CloudFront**：全球内容分发

## 快速开始

```bash
# 克隆仓库
git clone https://github.com/halolight/halolight-aws.git
cd halolight-aws

# 安装依赖
pnpm install

# 安装 Amplify CLI
pnpm add -g @aws-amplify/cli

# 配置 AWS
amplify configure

# 初始化 Amplify
amplify init

# 本地开发
pnpm dev
```

## 部署到 AWS

### 方式一：Amplify Console

1. 登录 [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. 连接 GitHub 仓库
3. 配置构建设置
4. 部署

### 方式二：Amplify CLI

```bash
amplify push
amplify publish
```

## AWS 服务集成

### Cognito 认证

```typescript
import { Amplify } from 'aws-amplify';
import { signIn, signOut, getCurrentUser } from 'aws-amplify/auth';

Amplify.configure(awsConfig);
```

### DynamoDB

```typescript
import { generateClient } from 'aws-amplify/api';
const client = generateClient();
```

### S3 存储

```typescript
import { uploadData, getUrl } from 'aws-amplify/storage';
```

## 环境变量

| 变量名 | 说明 |
|--------|------|
| `NEXT_PUBLIC_AWS_REGION` | AWS 区域 |
| `NEXT_PUBLIC_USER_POOL_ID` | Cognito 用户池 ID |
| `NEXT_PUBLIC_USER_POOL_CLIENT_ID` | Cognito 客户端 ID |

## 目录结构

```
halolight-aws/
├── amplify/                    # Amplify 配置
│   ├── backend/                # 后端资源定义
│   └── hooks/                  # 构建钩子
├── src/
│   ├── app/                    # Next.js 页面
│   └── lib/aws/                # AWS 服务封装
└── amplify.yml                 # 构建配置
```

## 相关链接

- [HaloLight 文档](https://halolight.docs.h7ml.cn)
- [AWS Amplify 文档](https://docs.amplify.aws/)
- [AWS Amplify Next.js](https://docs.amplify.aws/nextjs/)

## 许可证

[MIT](LICENSE)
