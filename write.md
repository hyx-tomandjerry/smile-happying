1.创建项目

      npm install -g @vue/cli
       
      vue init webpack 项目名称
      
      npm install 
      
      npm run dev
      
  
2.上传到github
  
    git init 
    
    git add .
    
    git commit -m 'first commit'
    
    git remote add origin  github地址
    
    git push origin master
    
3.引入vant
    
    npm install --save vant
    
    按需引入
    npm install --save-dev babel-plugin-import
    
    在.babelrc中配置plugins(插件)
    "plugins":[
      "transform-vue-jsx",
      "transform-runtime",
      ["import",{"libraryName":"vant","style":true}]
    ]
    
    在main.js中引入
     
     import {Button} from 'vant';
     Vue.use(Button)


移动端屏幕配置（Rem + JavaScript）并设置用户不能自己缩放页面大小（user-scalable=no）
  在index.html中
  <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
 ````
  <script>
      //得到手机屏幕的宽度
    
     let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
     if(htmlWidth>750){htmlWidth=750}
     //得到html的Dom元素
    
    let htmlDom = document.getElementsByTagName('html')[0];
    
     //设置根元素字体大小
    
     htmlDom.style.fontSize= htmlWidth/20 + 'px';(因为iphone最小是320，根元素的字体为16)
  </script>
````

配置路由
  






    
