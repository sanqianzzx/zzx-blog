<?php
    $pdo = new PDO("mysql:host=localhost;dbname=blog","root","");
    $sql = "select * from type";
    $res = $pdo->query($sql);
    $arr = $res->fetchAll();
    var_dump($arr);
?>