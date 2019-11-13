<?php

$supported_langs = array("en", "cs", "sk", "de");
$default_lang = "cs";

$accept_lang = $_SERVER["HTTP_ACCEPT_LANGUAGE"];
$lang = substr($accept_lang, 0, 2);

if (!in_array($lang , $supported_langs)) {
    $lang = $default_lang;
} 

header("location: index-$lang.html");
?>
