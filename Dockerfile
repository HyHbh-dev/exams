# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx:alpine

# 将 Nginx 配置文件复制到镜像中
COPY ./nginx/default.conf /etc/nginx/nginx.conf

# 将构建好的 Vue 应用复制到镜像中
COPY dist /usr/share/nginx/html/

# 暴露 Nginx 的默认端口
EXPOSE 80

CMD [ "nginx","-g","daemon off;" ]