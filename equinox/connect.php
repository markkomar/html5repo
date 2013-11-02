<?php
//Database connection
session_start();
$link = mysql_connect('localhost', 'root', '');
if (!$link) {
    die('Not connected : ' . mysql_error());
}

$db_selected = mysql_select_db('equinox', $link);
if (!$db_selected) {
    die ('Cant use the database : ' . mysql_error());
}
?>