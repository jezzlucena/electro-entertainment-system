<?php
  include 'db.php';
  echo json_encode($db->fetch_all_projects());
?>
