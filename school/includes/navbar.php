<div id="navbar">
	<a onmouseout="hoverstop()" onmouseover="hovered()" class="<?php echo ($_SERVER['PHP_SELF'] == "/school/index.php" ? "active" : "");?>" id="navbarhome" href="index.php">Home</a>
	<a class="<?php echo ($_SERVER['PHP_SELF'] == "/school/about.php" ? "active" : "");?>" href="about.php">About</a>
	<a class="<?php echo ($_SERVER['PHP_SELF'] == "/school/sp.php" ? "active" : "");?>" href="sp.php">School Policies</a>
	<a class="<?php echo ($_SERVER['PHP_SELF'] == "/school/news.php" ? "active" : "");?>" href="news.php">News</a>
	<a class="<?php echo ($_SERVER['PHP_SELF'] == "/school/contact.php" ? "active" : "");?>" href="contact.php">Contact</a>
	<a class="<?php echo ($_SERVER['PHP_SELF'] == "/school/pm.php" ? "active" : "");?>" href="pm.php">Principal's message</a>
</div>

<div id="mobilenav">
  <a onclick="myFunction()" class="mobileactive">
	<?php echo ($_SERVER['PHP_SELF'] == "/school/index.php" ? "Home" : "");?>
	<?php echo ($_SERVER['PHP_SELF'] == "/school/about.php" ? "About" : "");?>
	<?php echo ($_SERVER['PHP_SELF'] == "/school/contact.php" ? "Contact" : "");?>
	<?php echo ($_SERVER['PHP_SELF'] == "/school/news.php" ? "News" : "");?>
	<?php echo ($_SERVER['PHP_SELF'] == "/school/pm.php" ? "Principal's message" : "");?>
	<?php echo ($_SERVER['PHP_SELF'] == "/school/sp.php" ? "School Policies" : "");?>
  </a>
  <div id="myLinks">
  	<a class="<?php echo ($_SERVER['PHP_SELF'] == "/school/index.php" ? "mobileshow" : "mobilehide");?>" href="index.php">Home</a>
    <a class="<?php echo ($_SERVER['PHP_SELF'] == "/school/about.php" ? "mobileshow" : "mobilehide");?>" href="about.php">About</a>
	<a class="<?php echo ($_SERVER['PHP_SELF'] == "/school/contact.php" ? "mobileshow" : "mobilehide");?>" href="contact.php">Contact</a>
	<a class="<?php echo ($_SERVER['PHP_SELF'] == "/school/news.php" ? "mobileshow" : "mobilehide");?>" href="news.php">News</a>
	<a class="<?php echo ($_SERVER['PHP_SELF'] == "/school/pm.php" ? "mobileshow" : "mobilehide");?>" href="pm.php">Principal's message</a>
	<a class="<?php echo ($_SERVER['PHP_SELF'] == "/school/sp.php" ? "mobileshow" : "mobilehide");?>" href="sp.php">School Policies</a>
  </div>
</div>