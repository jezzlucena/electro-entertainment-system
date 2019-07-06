<?php
  include 'db.php';

  try {
    $db->exec("DROP TABLE projects");
  } catch (Exception $e) {}

  $sql = "CREATE TABLE projects";
    $sql.= "(id                INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,";
    $sql.= "project_name       TEXT    NOT NULL,";
    $sql.= "token              TEXT    NOT NULL,";
    $sql.= "company_name       TEXT    NOT NULL,";
    $sql.= "project_year       CHAR(4) NOT NULL,";
    $sql.= "role               TEXT    NOT NULL,";
    $sql.= "platforms        TEXT    NOT NULL,";
    $sql.= "stack        TEXT    NOT NULL,";
    $sql.= "description        TEXT    NOT NULL,";
    $sql.= "thumb_static_url   TEXT    NOT NULL,";
    $sql.= "thumb_gif_url      TEXT,";
    $sql.= "thumb_video_url    TEXT,";
    $sql.= "behance_url        TEXT,";
    $sql.= "video_url          TEXT,";
    $sql.= "github_url         TEXT,";
    $sql.= "live_url           TEXT)";

  $db->exec($sql);

  $db->insert(
    "Thermo Fisher - Precision Medicine",
    "thermofisher",
    "Kaon Interactive",
    "2018",
    "Lead Front End Engineer (Contract)",
    "iOS,Android,Desktop,Web",
    "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "Thermo Fisher Scientific's Precision Medicine technology showcase app.",
    "/img/portfolio/thermofisher/thermo_thumb.jpg",
    "/img/portfolio/thermofisher/thermo_thumb.mp4",
    "/img/portfolio/thermofisher/thermo_0.gif",
    "https://www.behance.net/gallery/74097771/Thermo-Fisher-Precision-Medicine",
    "https://youtu.be/JUgZ73YrFKs",
    NULL, NULL
  );

  $db->insert(
    "Abbott Transformation",
    "abbott",
    "Kaon Interactive",
    "2016",
    "Lead Engineer",
    "iOS,Android,Desktop,Web",
    "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n,Gather Content",
    "B2B sales showcase for Abbott Diagnostics' Transformation laboratory solutions.",
    "/img/portfolio/abbott/abbott_thumb.jpg",
    "/img/portfolio/abbott/abbott_thumb.mp4",
    "/img/portfolio/abbott/abbott_0.gif",
    "https://www.behance.net/gallery/74096955/Abbott-Transformation",
    "https://youtu.be/CLGU7GhBO0k",
    NULL, NULL
  );

  $db->insert(
    "Dell OME Training Game",
    "dell",
    "Kaon Interactive",
    "2018",
    "Lead Front End Engineer (Contract)",
    "iOS,Android,Desktop,Web",
    "WebSockets,SQLite,JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "Dell's gamified experience to showcase their cutting-edge corporate server deployment application",
    "/img/portfolio/dell/dell_thumb.jpg",
    "/img/portfolio/dell/dell_thumb.mp4",
    "/img/portfolio/dell/dell_0.gif",
    "https://www.behance.net/gallery/74097417/Dell-OME-Gamified-Experience",
    "https://youtu.be/McDy33GSPUM",
    NULL, NULL
  );

  $db->insert(
    "Kaon.com",
    "kaon",
    "Kaon Interactive",
    "2017",
    "Senior Full Stack Engineer",
    "iOS,Android,Desktop,Web",
    "Ruby on Rails,MongoDB,JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "Kaon creates advanced software technology and platforms to enable global companies to simplify their complex stories at every customer touch-point",
    "/img/portfolio/kaon/kaon_thumb.jpg",
    "/img/portfolio/kaon/kaon_thumb.mp4",
    "/img/portfolio/kaon/kaon_0.gif",
    "https://www.behance.net/gallery/74096433/Kaoncom",
    "https://youtu.be/2RX7FPld2lI",
    NULL,
    "http://www.kaon.com/"
  );

  $db->insert(
    "DxMA Awards 2016 Catalog",
    "dxma",
    "Kaon Interactive",
    "2016",
    "Front End Engineer",
    "iOS,Android,Desktop,Web",
    "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "The digital catalog for DxMA's best B2B apps award ceremony",
    "/img/portfolio/dxma/dxma_thumb.jpg",
    "/img/portfolio/dxma/dxma_thumb.mp4",
    "/img/portfolio/dxma/dxma_0.gif",
    "https://www.behance.net/gallery/74097473/DxMA-Awards-Catalog",
    "https://youtu.be/aQ6I_z8w9vo",
    NULL, NULL
  );

  $db->insert(
    "F5 Hybrid Cloud",
    "f5",
    "Kaon Interactive",
    "2016",
    "Front End Engineer",
    "iOS,Android,Desktop,Web",
    "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "A showcase app for F5 Networks' best practices on cloud computing and security",
    "/img/portfolio/f5/f5_thumb.jpg",
    "/img/portfolio/f5/f5_thumb.mp4",
    "/img/portfolio/f5/f5_0.gif",
    "https://www.behance.net/gallery/74097513/F5-Hybrid-Cloud",
    "https://youtu.be/Bp1X9JAe0VE",
    NULL,
    "http://m.kaon.com/c/f5"
  );

  $db->insert(
    "Hyundai HB20s Launch",
    "hyundai",
    "HXD Smart Solutions",
    "2013",
    "Front End Engineer",
    "Samsung SmartTV OS,LG SmartTV OS,Web",
    "JavaScript,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "Hyundai's marketing app for the launch of HB20 and HB20s new models in Brazil",
    "/img/portfolio/hyundai/hyundai_thumb.jpg",
    NULL,
    "/img/portfolio/hyundai/hyundai_0.gif",
    "https://www.behance.net/gallery/74097571/Hyundai-HB20s-Launch",
    NULL, NULL, NULL
  );

  $db->insert(
    "Climatempo Weather Forecast",
    "climatempo",
    "HXD Smart Solutions",
    "2012",
    "Front End Engineer (Intern)",
    "Samsung SmartTV OS,LG SmartTV OS,Web",
    "JavaScript,XML,JSON,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "The leading weather forecast cross-platform app in Brazil",
    "/img/portfolio/climatempo/climatempo_thumb.jpg",
    NULL,
    "/img/portfolio/climatempo/climatempo_0.gif",
    "https://www.behance.net/gallery/74097271/Climatempo-Weather-Forecast",
    NULL, NULL, NULL
  );

  $db->insert(
    "In a Haystack",
    "haystack",
    "Worcester Polytechnic Institute",
    "2016",
    "Lead Engineer and Game Designer",
    "Desktop,Web,iOS",
    "RPGMaker MV Script,Game Design,JavaScript,JSON,ES6,i18n",
    "A graduate thesis proof-of-concept video game project implementation",
    "/img/portfolio/in-a-haystack/haystack_thumb.jpg",
    NULL,
    "/img/portfolio/in-a-haystack/haystack_0.gif",
    "https://www.behance.net/gallery/74097641/In-a-Haystack",
    NULL, NULL,
    "http://www.jezzlucena.com/haystackgame/"
  );

  $db->insert(
    "Coca-Cola FM",
    "cocacola",
    "HXD Smart Solutions",
    "2012",
    "Generalist Software Engineer (Intern)",
    "LG SmartTV OS,Web",
    "ActionScript 3,XML,UX/UI Design,i18n",
    "Coca-Cola FM's official Smart TV app in Latin America",
    "/img/portfolio/coca-cola/coca_thumb.jpg",
    NULL,
    "/img/portfolio/coca-cola/coca_0.gif",
    "https://www.behance.net/gallery/74097365/Coca-Cola-FM",
    NULL, NULL, NULL
  );

  $db->insert(
    "Pong! 4X",
    "pong4x",
    "Independent Project",
    "2014",
    "Lead Engineer and Game Designer",
    "Desktop",
    "Processing 3,Game Design,UX/UI Design,i18n",
    "Proof-of-concept computer game that takes the classic Pong to a whole new hectic multiplayer experience",
    "/img/portfolio/pong-4x/pong4x_thumb.jpg",
    NULL,
    "/img/portfolio/pong-4x/pong4x_0.gif",
    "https://www.behance.net/gallery/74097689/Pong-4X",
    NULL,
    "https://github.com/jezzlucena/pong_4x",
    NULL
  );

  $db->insert(
    "Band IP",
    "bandip",
    "HXD Smart Solutions",
    "2013",
    "Front End Engineer",
    "Samsung SmartTV OS,LG SmartTV OS,Web",
    "JavaScript,XML,JSON,ES6,HTML5,CSS3,UX/UI Design,i18n",
    "Band TV's leading video-on-demand multiplatform app in Brazil",
    "/img/portfolio/band-ip/band_thumb.jpg",
    NULL,
    "/img/portfolio/band-ip/band_0.gif",
    "https://www.behance.net/gallery/74097179/Band-IP",
    NULL, NULL, NULL
  );
?>
