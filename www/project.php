<?php
	include 'api/fetch_project.php';

	if (!isset($project) || !$project) {
		header("HTTP/1.1 404 Not Found");
		header("Location: /404.php" );
	}
?>

<!DOCTYPE html>
<html>
	<head>
		<script>
			var project = <?= json_encode($project) ?>;
		</script>

		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title><?= $project['project_name'] ?></title>
		<link rel="shortcut icon" href="favicon.ico" />
		<meta name="description" content="<?= $project['description'] ?>"/>

		<meta property="og:title" content="<?= $project['project_name'] ?>"/>
		<meta property="og:url" content="http://jezzlucena.com/project.php?p=<?= $project['token'] ?>"/>
		<meta property="og:image" content="http://jezzlucena.com<?= $project['thumb_static_url'] ?>"/>
		<meta property="og:site_name" content="<?= $project['project_name'] ?>"/>
		<meta property="og:description" content="<?= $project['description'] ?>"/>

		<?php include 'head_imports.php'; ?>
	</head>
	<body data-page="project">
		<?php include 'topbar.php' ?>

		<div class="header"></div>
		<div class="headerContent">
			<div class="text">
				<span><?= $project['project_name'] ?></span>
			</div>
		</div>

		<div class="content">
			<div id="project" class="section project">
				<div class="textContainer">
					<? if ($project['thumb_video_url']) { ?>
						<video src="<?= $project['thumb_video_url'] ?>" class="projectPicture" autoplay="autoplay" muted playsinline loop></video>
					<? } else { ?>
						<img src="<?= $project['thumb_static_url'] ?>" class="projectPicture">
					<? } ?>

					<div class="description">
						<div class="projectName">
							<span class="label">Project</span>
							<?= $project['project_name'] ?>
						</div>
						<div class="projectCompany">
							<span class="label">Company</span>
							<?= $project['company_name'] ?>
						</div>
						<div class="projectYear">
							<span class="label">Shipped in</span>
							<?= $project['project_year'] ?>
						</div>
						<div class="projectRole">
							<span class="label">Role on this project</span>
							<?= $project['role'] ?>
						</div>

						<br>

						<span class="keywords">
							<span class="label big">Stack</span>

							<?php foreach(explode(',', $project['stack']) as $key=>$value): ?>
								<span class="keyword"><?php echo $value; ?></span>,
					    <?php endforeach; ?>
						</span>

						<br>

						<span class="keywords">
							<span class="label big">Platforms</span>

							<?php foreach(explode(',', $project['platforms']) as $key=>$value): ?>
								<span class="keyword"><?php echo $value; ?></span>,
					    <?php endforeach; ?>
						</span>

						<br>

						<div class="projectButtons">
							<span class="label">Related Links</span>

							<a href="<?= $project['behance_url'] ?>" target="_blank" class="button">View on Behance</a>
							<a href="<?= $project['github_url'] ?>" target="_blank" class="button">View on GitHub</a>
							<a href="<?= $project['live_url'] ?>" target="_blank" class="button">Try Live Demo</a>
							<a href="<?= $project['video_url'] ?>" target="_blank" class="button">Watch Full Video</a>
						</div>
					</div>
				</div>
				<div style="clear: both;"></div>
			</div>

			<?php include 'footer.php' ?>
		</div>
	</body>
</html>
