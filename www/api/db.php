<?php
  class PortfolioDB extends SQLite3 {
    function __construct() {}

    function open_prod() {
      $this->open('portfolio.db');
    }

    function open_test() {
      $this->open('test.db');
    }

    function insert($project_name, $token, $company_name, $project_year, $role, $platforms, $stack, $description, $thumb_static_url, $thumb_gif_url, $thumb_video_url, $behance_url, $video_url, $github_url, $live_url) {
      $sql = "INSERT INTO projects (project_name, token, company_name, project_year, role, platforms, stack, description, thumb_static_url, thumb_video_url, thumb_gif_url, behance_url, video_url, github_url, live_url)";
        $sql.= "VALUES (\"$project_name\", \"$token\", \"$company_name\", \"$project_year\", \"$role\", \"$platforms\", \"$stack\", \"$description\", \"$thumb_static_url\", \"$thumb_gif_url\", \"$thumb_video_url\", \"$behance_url\", \"$video_url\", \"$github_url\", \"$live_url\")";

      $this->exec($sql);
    }

    function fetch_all_projects() {
      $query = $this->query('SELECT * FROM projects');
      $data = array();

      while ($row = $query->fetchArray(SQLITE3_ASSOC)) {
        $data[] = $row;
      }

      return $data;
    }

    function fetch_project_by_token($token) {
      $query = $this->query('SELECT * FROM projects WHERE token = "' . $token . '"');

      return $query->fetchArray(SQLITE3_ASSOC);
    }
  }

  $db = new PortfolioDB();
  $db->open_prod();
?>
