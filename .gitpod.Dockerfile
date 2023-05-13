FROM gitpod/workspace-full

USER gitpod

# Setup dev env
RUN npm install --global npm pnpm && \
  SHELL=bash npx @teambit/bvm@latest install && \
  echo 'export PATH=node_modules/.bin:/home/gitpod/bin:$PATH' >> /home/gitpod/.bashrc