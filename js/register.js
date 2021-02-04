
  // 获取 账号 密码1 密码2 标签对象
  const oIptName = document.querySelector('[name="username"]');
  const oIptPwd1 = document.querySelector('[name="password"]');

  // 获取 form标签 对象
  const oForm = document.querySelector('form');

  //  数据提交事件
  // 如果只是 input 和 button标签 , 给 button标签 添加点击事件
  // 如果有 form标签 给 form标签添加 submit 事件 并且要 阻止默认事件执行
  // from标签 没有写 action属性属性值 没有阻止默认事件执行 是 跳转自己当前页面 
  // 也就是 刷新页面的效果

  oForm.addEventListener( 'submit' , e=>{
      // 必须要阻止 表单默认提交数据事件的执行
      e.preventDefault();

      // 获取 input 输入框数据
      let name = oIptName.value;
      let pwd1 = oIptPwd1.value;
    
      // 所有验证 都成功了 提交数据执行注册功能
      const xhrInsert = new XMLHttpRequest();
      xhrInsert.open('post' , './server/register.php');
      xhrInsert.setRequestHeader( 'Content-Type' , 'application/x-www-form-urlencoded' );
      // 发送的数据,就是 账号 密码 
      xhrInsert.send(`name=${name}&pwd=${pwd1}`);
      xhrInsert.onload = ()=>{
      const result = JSON.parse( xhrInsert.response );
        
          if( result.res === 1 ){
            
            window.confirm('注册成功,3秒以后跳转登录页面')
            let time = 3;
    
            setInterval( ()=>{
                time--;
                  if( time === 0 ){
                      // 跳转页面
                      window.location.href = './login.html';
                      return;
                  }
              } , 1000 )
          }else{
              window.confirm('注册失败,请您修改账号重新注册')
          }

      }

  })

