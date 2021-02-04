<?php

$name = $_POST['name'];

$pwd = $_POST['pwd'];

$link = mysqli_connect('127.0.0.1' , 'root' , 'root' , 'server');

$sql = "INSERT INTO `login`( `username` , `password` ) VALUES ( '{$name}' , '{$pwd}' ) ";

// 查询语句执行的结果是 结果集对象 需要转化为 数组
// 非查询语句执行结果是 布尔值
$result = mysqli_query( $link , $sql );

if($result){
    echo json_encode([ 'res' => 1 , 'msg' => '注册成功' ]);
}else{
    echo json_encode([ 'res' => 0 , 'msg' => '注册失败' ]);
}