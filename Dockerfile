# 使用官方的 Node.js 镜像
FROM node:22.5.1 AS build

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml 到容器中
COPY package*.json ./

# 安装依赖
RUN pnpm install

# 复制项目文件到容器中
COPY . .

# 构建 Vite 项目
RUN pnpm run build

# 使用一个轻量级的 Node.js 镜像来运行预览
FROM node:22.5.1

# 安装 pnpm
RUN npm install -g pnpm
RUN npm install -g typescript

# 设置工作目录
WORKDIR /app

# 复制构建的文件到新的容器中
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package.json /app/package.json

# 安装 pnpm 依赖（如果需要）
RUN pnpm install --prod

# 暴露容器的 4173 端口
EXPOSE 4173

# 启动 Vite 预览服务器
CMD ["pnpm", "run", "preview"]
