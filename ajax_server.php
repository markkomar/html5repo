<?php
include("config.php");

if(isset($_POST)){
	extract($_POST);
	
 
	($option) ? $like = 1 : $dislike = 1;

 
	($like) ? $action = "likes" : $action = "dislikes";

 
	$exist = mysql_num_rows(mysql_query("select * from ".$dbtable." where `item-id` =".$item));
	
	if(!$exist){
		mysql_query("insert into ".$dbtable." values('','".$item."','".$like."','".$dislike."')");
	}else{
		mysql_query("update ".$dbtable." set ".$action." = ".$action." +1 where `item-id` = ".$item);
	}

 
	$count = mysql_fetch_assoc(mysql_query("select * from ".$dbtable." where `item-id` = ".$item));
	echo json_encode($count);
} 

?>