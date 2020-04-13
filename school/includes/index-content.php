<div class="scroller">
  <img class="mySlides" src="images/1.jpg" style="display:block">
  <img class="mySlides" src="images/2.jpg">
  <img class="mySlides" src="images/3.jpg">
  <img class="mySlides" src="images/4.jpg">
  <img class="mySlides" src="images/5.jpg">
  <img class="mySlides" src="images/6.jpg">
  <button class="button-left" onclick="plusDivs(-1)">&#10094;</button>
  <button class="button-right" onclick="plusDivs(+1)">&#10095;</button>
</div>

<script>
  var fudge = setInterval(plusDivs, 4000)
</script>

<div>
  <?php include("includes/vision.php"); ?>
</div>
