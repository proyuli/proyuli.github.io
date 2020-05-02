$(document).ready(function () {
  var duration = 25;
  $(".speed").on("click", "button", function (e) {
    let $button = $(e.currentTarget); // button
    let speed = $button.attr("data-speed");
    $button.addClass("active").siblings(".active").removeClass("active");
    switch (speed) {
      case "slow":
        duration = 50;
        break;
      case "medium":
        duration = 25;
        break;
      case "high":
        duration = 1;
        break;
    }
  });

  var code = `/*面试官您好！*/

  /*让我来给您画一个小黄人吧～*/
  /*首先来个小黄人色😄*/
  .minion-wrapper {
      background: #FFED43;
  }
  /*接下来是眼睛😝*/
  .eye {
    width: 140px;
    height: 140px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 48px;
    left: 50% 
  }
  .eye-left {
    margin-left:-150px
  }
  .eye-right {
    margin-left: 10px;
  }
  /*然后是眼珠👀*/
  .eyeball{
    width: 50px;
    height: 50px;
    background: #814E38;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    margin-top: -25px;
  }
  .eyeball-left {
    margin-left: 70px;
  }
  .eyeball-right {
    margin-left: 20px;
  }
  /*来点颜色吧😄*/
  .eyeball::before {
    content: '';
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50px;
    background: #2C130E;
    position: absolute;
    top: 12px;
    left: 12px;
  }
  .eyeball::after {
    content: '';
    display: block;
    width: 10px;
    height: 11px;
    border-radius: 50px;
    background: white;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  /*再来个酷酷的眼镜😎*/
  .glasses {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 20px solid #848685;
    position: absolute;
    top: 28px;
    left: 50%;
  }
  .glasses-right {
    margin-left: -10px
  }
  .glasses-left {
    margin-left: -170px
  }
  .glasses-left::after {
    content: '';
    display: block;
    width: 20px;
    height: 94px;
    background: #848685;
    position: absolute;
    top: 23px;
    right: -20px;
  }
  /*来个标志性的头带🤓*/
  .frame {
    width: 100%;
    height: 50px;
    border-top: solid 21px #504645; 
    border-bottom: solid 21px #504645; 
    background: #403D3C;
    margin-top: 90px;
    position: relative;
  }
  /*再多来点😬*/
  .frame::after,
  .frame::before{
    content: '';
    display: block;
    width: 40px;
    height: 80px;
    background: #686C6A;
    border-radius: 10px/12px;
    position: absolute;
    top: -35px;
    left: 50%;
  }
  .frame::after {
    margin-left: -174px;
  }
  .frame::before {
    margin-left: 134px;
  }
  /*嘴巴来啦～～～😉*/
  .mouth {
    width: 500px;
    height: 500px;
    border: 2px solid #000;
    border-radius: 50%;
    position: absolute;
    top:-220px;
    left: 50%;
    margin-left: -250px;
  }
  .mouth::after {
    content: '';
    display: block;
    width: 500px;
    height: 500px;
    margin: 0px -2px;
    background: #FFED43;
  }
  /*bingo！大功告成！☺️*/`;

  function writeCode(code, fn) {
    let n = 0;
    var cssCode = $("#cssCode");
    var codeContent = $("#codeContent");
    // debugger;
    let id = setTimeout(function run() {
      n += 1;
      cssCode.html(code.substring(0, n));
      codeContent.html(
        Prism.highlight(code.substring(0, n), Prism.languages.css, "css")
      );
      // console.log("success");

      codeWrapper.scrollTop = codeWrapper.scrollHeight;
      if (n < code.length) {
        id = setTimeout(run, duration);
      } else {
        fn && fn.call();
      }
    }, duration);
  }
  function blink() {
    //添加眨眼动画
    $(".eyelid")[0].classList.add("active");
    $(".eyelid")[1].classList.add("active");
  }
  function smile() {
    $(".mouth").addClass("smiling");
    setTimeout(() => {
      $(".mouth").addClass("active");
    }, 4000);
  }
  writeCode(code, function () {
    blink();
    smile();
  });
});
