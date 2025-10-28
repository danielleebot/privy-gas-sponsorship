README.md

# USDT Approve with Privy Gas Sponsorship

简单的 Next.js 项目，演示如何使用 Privy 的 gas sponsorship 功能发送 USDT approve 交易。

## 核心功能

- ✅ 使用`useSendTransaction`发送 USDT approve 交易
- ✅ 启用`sponsor: true`进行 gas sponsorship
- ✅ 简洁的 UI 界面
- ✅ 完整的错误处理

## 安装依赖

```bash
npm install
```

## 运行项目

```bash
npm run dev
```

## 核心代码

```typescript
const { sendTransaction } = useSendTransaction();
const { wallets } = useWallets();

// Send USDT approve with gas sponsorship
const txHash = await sendTransaction(
  {
    to: USDT_ADDRESS,
    data: approveData,
    value: "0",
  },
  {
    sponsor: true, // Enable gas sponsorship
  }
);
```

## 配置

1. 替换`page.tsx`中的`appId`为你的 Privy App ID
2. 根据需要修改 USDT 地址和 spender 地址

## 注意事项

- 需要有效的 Privy App ID 才能正常运行
- Gas sponsorship 需要在 Privy dashboard 中配置相应策略
- 当前使用 BNB USDT 地址
