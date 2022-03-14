//这是Box3的常用代码，作者：鸭子出版社
//请勿商用
//Box3代码的API文档可在 https://docs.box3.codemao.cn/box3voxelcontact.html 找到

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~分割线~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~··

//1、世界广播：<
  world.say('要广播的语句')
//例如：

//当玩家进入时
world.onPlayerJoin(async ({entity})=>{
  //世界广播（玩家 （玩家名） 进入了游戏）
  world.say(['玩家 ',entity.player.name,' 进入了游戏'].join(''));
});//万能框框
// >

//————————————————

//2、如果，否则如果，否则：<

if () {//如果
  //...
} else if () { //否则如果
  //...
} else { //否则
  //...
}

//例如：

world.onPlayerJoin(async ({entity})=>{// 当玩家进入时
  if (entity.player.name == 'xxx') { //如果玩家名为"xxx"
    entity.player.canFly=true; //设置玩家可以飞行
  } else { //否则
    entity.player.canFly=false; //设置玩家不能飞行
  }
});//万能框框
//>

//3、给玩家发送私信：<

  entity.player.directMessage('要发送的语句');

//例如：
world.onPlayerJoin(async ({entity})=>{// 当玩家进入时
  entity.player.directMessage(['欢迎 ',entity.player.name,' 来到xxx'].join(''));// 给进入的玩家发送私信（欢迎 ${玩家名} 来到xxx）
});
//>

//4、取消碰撞：<

world.addCollisionFilter('xxx', 'xxx')

//例如：
world.addCollisionFilter('player', 'player')//关闭玩家间的碰撞
//>
