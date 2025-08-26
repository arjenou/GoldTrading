# Sections Components

这个目录包含了重构后的页面组件，每个组件负责页面的一个特定部分。

## 组件列表

- **Navigation.tsx** - 导航栏组件
- **HeroSection.tsx** - 主页头部部分 
- **CompanyOverview.tsx** - 公司概述部分
- **PhilosophySection.tsx** - 企业理念和愿景部分
- **ServicesSection.tsx** - 业务服务部分
- **ClientsSection.tsx** - 客户和合作伙伴部分
- **ContactSection.tsx** - 联系我们部分
- **Footer.tsx** - 页脚组件

## 使用方式

可以通过index.ts文件方便地引入所有组件：

```tsx
import {
  Navigation,
  HeroSection,
  CompanyOverview,
  PhilosophySection,
  ServicesSection,
  ClientsSection,
  ContactSection,
  Footer,
} from "@/components/sections"
```

## 重构目的

将原来的900多行page.tsx文件拆分成更小的、可维护的组件：

1. **模块化** - 每个组件专注于单一职责
2. **可维护性** - 更容易定位和修改特定功能
3. **可重用性** - 组件可以在其他页面中重用
4. **团队协作** - 不同开发者可以并行开发不同的组件
5. **测试友好** - 每个组件可以独立测试
