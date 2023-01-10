<!DOCTYPE html>
<html>

<head>
  <link rel="canonical" href="https://dragonfruitobsession.github.io">
  <title>Home Page - Dragon Fruit Obsession</title>
  <link href="dfindexstyle.css" type="text/css" rel="stylesheet">
  <meta name="description" content="A dragon fruit website describing different varieties, everything you need to know to grow them, and more.">
  <meta name="google-site-verification" content="lVZXIHXAGd22ixEFNJ3prUAIITYPMrXyjwdm47ble48">
  <?php include "dfnavigation.php";?>
</head>

<body>
  <div class="content-stuff">
    <div class="surround mobileonly"><input id="searchbar2" onkeyup="myFunction2()" type="text" name="search" class="search" type="text" placeholder="&#xF002; SEARCH VARIETIES..." style="font-family:Arial, FontAwesome" /></div>

    <div class="fancy-pants">
      <h2 class="forward">Forward</h2>
      <div class="surround notmobile"><input id="searchbar1" onkeyup="myFunction1()" type="text" name="search" class="search" type="text" placeholder="&#xF002; SEARCH VARIETIES..." style="font-family:Arial, FontAwesome" /></div>

      <div class="dropdown2">
        <button class="dropbtn2" id="righty">Filter by <i class="fa fa-caret-down"></i></button>
        <div class="dropdown-content2  big-boy" id="droppy2">
          <button class="sick-dropdown btn2 active2 a" onclick="filterSelection('all')">All (default)</button>
          <button class="sick-dropdown btn2 a" onclick="filterSelection('White-Flesh')">White Flesh</button>
          <button class="sick-dropdown btn2 a" onclick="filterSelection('Red-Flesh')">Red Flesh</button>
          <button class="sick-dropdown btn2 a" onclick="filterSelection('Pink-Flesh')">Pink Flesh</button>
          <button class="sick-dropdown btn2 a" onclick="filterSelection('Purple-Flesh')">Purple Flesh</button>
          <button class="sick-dropdown btn2 b" onclick="filterSelection('Pink-Skin')">Pink Skin</button>
          <button class="sick-dropdown btn2 b" onclick="filterSelection('Yellow-Skin')">Yellow Skin</button>
          <button class="sick-dropdown btn2 a" onclick="filterSelection('White-Flower')">White Flower</button>
          <button class="sick-dropdown btn2 a" onclick="filterSelection('Coloured-Flower')">Coloured Flower</button>
          <button class="sick-dropdown btn2 b" onclick="filterSelection('Self-Fertile')">Self-Fertile</button>
          <button class="sick-dropdown btn2 b" onclick="filterSelection('Self-Sterile')">Self-Sterile</button>
          <button class="sick-dropdown btn2 a" onclick="filterSelection('Paul-Thomson')">Paul Thomson</button>
        </div>
      </div>

      <div class="dropdown2">
        <button class="dropbtn2" onclick="myFunction1()" id="lefty">Display by <i class="fa fa-caret-down"></i></button>
        <div class="dropdown-content2" id="droppy1">
          <button class="sick-dropdown btn1 openclose1 active1" onclick="fruitInside()">Flesh (default)</button>
          <button class="sick-dropdown btn1 openclose1" onclick="fruitOutside()">Skin</button>
          <button class="sick-dropdown btn1 openclose1" onclick="fruitFlowers()">Flowers</button>
        </div>
      </div>
    </div>


    <div class="forward2">
      <h2 class="forwardmobile">Forward</h2>
      <p>This website was hard coded with the purpose of a fun side project where I could learn the basics of web development whilst documenting my progress in growing dragon fruit in Perth, Western Australia. However, after innumerable revisions and
        additions, I have a new goal for my website in creating the most reliable and organised collection of dragon fruit growing information. Dragon fruit are rapidly growing in popularity, both as a fruit and garden staple, and with this
        surge of popularity comes a wave of misinformation about the different varieties and how to grow them. Many named varieties are sold incorrectly, or have a multitude of names, which leads to great confusion in the dragon fruit community,
        whilst
        new varieties are constantly being created, complicating matters further. I hope to alleviate this confusion at least in the varieties I grow by giving a detailed analysis of how each variety grows, buds, flowers, fruits, and tastes,
        including
        all alternate names I am aware of. My growing collection currently consists of seventeen named varieties which can be viewed below, one unnamed red-fleshed variety (unlisted), and one potential hybrid (unlisted for now).
        I have also included a detailed explanation of how to grow dragon fruit, organised into logical pages, which can be found under the respective drop-down menu
        above.
        The analysis section addresses some of the environmental factors which affect dragon fruit flowering, which may be of interest if you are looking to maximise production in your specific location. I have many other plans to expand and improve
        this
        website, including extending it to other fruits, though dragon fruit will remain the most important part of the website of course. In any case, I hope you find my website useful!</p>

    </div>

    <!-- database of dragon fruit varieties -->
    <div class="variety-database" id="myUL">
      <ul class="gallery">
        <li class="column filterDiv White-Flesh Pink-Skin White-Flower Self-Fertile">
          <div class="content">
            <a href="varieties/vietnam-white.php">
              <img id="theImage1" src="varieties/Variety Photos/Vietnam White/Vietnam White - Fruit 4.jpg" alt="Vietnam White dragon fruit halved">
            </a>
            <p>Vietnam White<br><i>Hylocereus undatus</i></p>
          </div>
        </li>

        <li class="column filterDiv Red-Flesh Pink-Skin White-Flower Self-Fertile">
          <div class="content">
            <a href="varieties/common-red.php">
              <img id="theImage2" src="varieties/Variety Photos/Common Red/Common Red - Fruit 4.jpg" alt="Common Red dragon fruit halved">
            </a>
            <p>Common Red<br><i>Hylocereus polyrhizus</i></p>
          </div>
        </li>

        <li class="column filterDiv Purple-Flesh Pink-Skin Coloured-Flower Self-Sterile">
          <div class="content">
            <a href="varieties/jade-red.php">
              <img id="theImage3" src="varieties/Variety Photos/Jade Red/Jade Red - Fruit 4.jpg" alt="Common Red dragon fruit halved">
            </a>
            <p>Jade Red<br><i>H. costaricensis X Epiphylum cv.</i></p>
          </div>
        </li>

        <li class="column filterDiv White-Flesh Yellow-Skin White-Flower Self-Fertile">
          <div class="content">
            <div class="coming">
              <div class="inside">Picture coming soon (hopefully)</div>
            </div>
            <p>Yellow Dragon<br><i>Selenicereus megalanthus</i></p>
          </div>
        </li>

        <li class="column filterDiv Pink-Flesh Pink-Skin White-Flower Self-Sterile Paul-Thomson">
          <div class="content">
            <div class="coming">
              <div class="inside">Picture coming soon (hopefully)</div>
            </div>
            <p>Delight<br><i>H. undatus X H. guatemalensis</i></p>
          </div>
        </li>

        <li class="column filterDiv Pink-Flesh Pink-Skin White-Flower Self-Fertile">
          <div class="content">
            <div class="coming">
              <div class="inside">Picture coming soon (hopefully)</div>
            </div>
            <p>Pink Lemonade<br><i>Hylocereus undatus X</i></p>
          </div>
        </li>

        <li class="column filterDiv Pink-Flesh Pink-Skin White-Flower Self-Fertile">
          <div class="content">
            <div class="coming">
              <div class="inside">Picture coming soon (hopefully)</div>
            </div>
            <p>Pink Panther<br><i>Hylocereus setaceus X</i></p>
          </div>
        </li>

        <li class="column filterDiv Pink-Flesh Pink-Skin White-Flower Self-Fertile">
          <div class="content">
            <div class="coming">
              <div class="inside">Picture coming soon (hopefully)</div>
            </div>
            <p>American Beauty<br><i>Hylocereus guatemalensis</i></p>
          </div>
        </li>

        <li class="column filterDiv Purple-Flesh Pink-Skin White-Flower Self-Fertile">
          <div class="content">
            <div class="coming">
              <div class="inside">Picture coming soon (hopefully)</div>
            </div>
            <p>Malaysian Purple<br><i>Hylocereus setaceus X?</i></p>
          </div>
        </li>


        <li class="column filterDiv Purple-Flesh Pink-Skin White-Flower Self-Sterile Paul-Thomson">
          <div class="content">
            <div class="coming">
              <div class="inside">Picture coming soon (hopefully)</div>
            </div>
            <p>Purple Haze<br><i>H. guatamalensis X H. undatus</i></p>
          </div>
        </li>

        <li class="column filterDiv Red-Flesh Pink-Skin  White-Flower Self-Fertile Paul-Thomson">
          <div class="content">
            <div class="coming">
              <div class="inside">Picture coming soon (hopefully)</div>
            </div>
            <p>Sugar Dragon<br><i>Hylocereus guatamalensis X</i></p>
          </div>
        </li>

        <li class="column filterDiv White-Flesh Pink-Skin Coloured-Flower Self-Sterile">
          <div class="content">
            <div class="coming">
              <div class="inside">Picture coming soon (hopefully)</div>
            </div>
            <p>Connie Mayer<br><i>H. stenopterus X H. guatamalensis</i></p>
          </div>
        </li>

        <li class="column filterDiv Purple-Flesh Pink-Skin White-Flower Self-Sterile Paul-Thomson">
          <div class="content">
            <div class="coming">
              <div class="inside">Picture coming soon (hopefully)</div>
            </div>
            <p>Thomson G2<br><i>Hylocereus guatamalensis</i></p>
          </div>
        </li>

        <li class="column filterDiv White-Flesh Yellow-Skin White-Flower Self-Sterile">
          <div class="content">
            <div class="coming">
              <div class="inside">Picture coming soon (hopefully)</div>
            </div>
            <p>Isis Gold<br><i>Hylocereus undatus</i></p>
          </div>
        </li>

        <li class="column filterDiv Purple-Flesh Pink-Skin White-Flower Self-Sterile Paul-Thomson">
          <div class="content">
            <div class="coming">
              <div class="inside">Picture coming soon (hopefully)</div>
            </div>
            <p>Physical Graffiti<br><i>H. guatamalensis X H. undatus</i></p>
          </div>
        </li>

        <li class="column filterDiv White-Flesh Yellow-Skin White-Flower Self-Fertile">
          <div class="content">
            <div class="coming">
              <div class="inside">Picture coming soon (hopefully)</div>
            </div>
            <p>Palora<br><i>Hylocereus megalanthus</i></p>
          </div>
        </li>

        <li class="column filterDiv Red-Flesh Pink-Skin White-Flower Self-Sterile">
          <div class="content">
            <div class="coming">
              <div class="inside">Picture coming soon (hopefully)</div>
            </div>
            <p>Scott's Purple<br><i>Hylocereus polyrhizus X</i></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <?php include "footer.php";?>
</body>
<script src="search.js"></script>

</html>
