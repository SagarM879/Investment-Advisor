<?php 
    require_once 'initialize_inc.php';  
    if(!isset($_SESSION)) { 
        session_start(); 
    } 
    
    if (!isset($_SESSION['loggedIN'])) {
		header('location: login.php');
    }
    else {

    }
?>