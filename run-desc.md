## 目录结果
<pre>
命令：
cd ~
tree gitbooks -L 2
目录如下：
gitbooks
├── gh-pages
│   └── gitbook-documentation
└── gitbook
    └── gitbook-documentation
</pre>

## 基础
<pre>
mkdir -p ~/gitbooks/gh-pages && mkdir ~/gitbooks/gitbook
cd ~/gitbooks/gh-pages
git clone git@github.com:1630425/gitbook-documentation.git

cd ~/gitbooks/gitbook
git clone git@gitee.com:codeserver/gitbook-documentation.git

#配置自动部署路径：
#cd gitbook-documentation/scripts
#vim *.js
</pre>

## 本地部署
<pre>
cd ~/gitbooks/gitbook/
cd gitbook-documentation

npm run s #启动

npm run i(npm install --save shelljs) #执行一次即可后面无效执行

npm run d #部署
</pre>

## docker 部署
<pre>
sudo docker login
chengt
...

docker run --name gitbook -itd -p 4000:4000 -v ~/gitbooks:/root/gitbooks chengt/gitbook-my:3-alpine
docker exec -it gitbook ash
cat ~/.ssh/id_rsa.pub

cd ~/gitbooks/gitbook/
cd gitbook-documentation

npm run s #启动
#浏览器输入http://localhost:4000/

npm run i #执行一次即可后面无效执行
npm run d #部署
</pre>

## 注意事项
<pre>
使用donate插件图片路径问题：

访问地址无项目名(根路径)例如：http://localhost:4000或https://1630425.github.io
            "wechat": "/imgs/wepay.png",
            "alipay": "/imgs/alipay.png",
访问地址带有项目名，例如：https://1630425.github.io/gitbook-documentation/ 
            "wechat": "./imgs/wepay.png",
            "alipay": "./imgs/alipay.png",
如果有更多层目录显示就会有问题，https://1630425.github.io/gitbook-documentation/imgs(这种路径下的图片可以访问),当出现https://1630425.github.io/gitbook-documentation/format/  这种多层目录就有问题了；

解决方案：
使用http地址(指向github或者cdn)
</pre>