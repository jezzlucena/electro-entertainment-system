<?php
  include 'db.php';
  $project = $db->fetch_project_by_token($_GET['p']);
?>
