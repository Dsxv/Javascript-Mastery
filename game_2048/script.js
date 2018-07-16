$(document).ready(function() {
  var arr = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  var i, j, k;




  $("body").keydown(function(event) {
    if (event.which == 37) { //for left: we start from left
      for (i = 0; i < 4; i++) {
        for (j = 0; j < 3; j++) {



          for (var m = 0; m < 2; m++) {
            for (k = 0; k < 3; k++)
              if (arr[i][k] == 0 && arr[i][k + 1] != 0) {
                arr[i][k] = arr[i][k + 1];
                arr[i][k + 1] = 0;
              }
          }

          for (k = j; k < 3; k++)
            if (arr[i][k] == arr[i][k + 1]) {
              arr[i][k] *= 2;
              arr[i][k + 1] = 0;
              break;
            }

          if (arr[i][1] == arr[i][2])
            break;
        }
      }
    }


    if (event.which == 38) { // for top : we start from top
      console.log("top");


      for (j = 0; j < 4; j++) {
        for (i = 0; i < 3; i++) {

          for (var m = 0; m < 2; m++) {
            for (k = 0; k < 3; k++)
              if (arr[k][j] == 0 && arr[k + 1][j] != 0) {
                arr[k][j] = arr[k + 1][j];
                arr[k + 1][j] = 0;
              }
          }


          for (k = i; k < 3; k++)
            if (arr[k][j] == arr[k + 1][j]) {
              arr[k][j] *= 2;
              arr[k + 1][j] = 0;
              break;
            }

          if (arr[1][j] == arr[2][j] && arr[1][j] != 0)
            break;

        }
      }

    }
    if (event.which == 39) { //for right: we start from right
      for (i = 0; i < 4; i++) {
        for (j = 3; j > 0; j--) {


          for (var m = 0; m < 2; m++) {
            for (k = 3; k > 0; k--)
              if (arr[i][k] == 0 && arr[i][k - 1] != 0) {
                arr[i][k] = arr[i][k - 1];
                arr[i][k - 1] = 0;
              }
          }

          for (k = j; k > 0; k--)
            if (arr[i][k] == arr[i][k - 1]) {
              arr[i][k] *= 2;
              arr[i][k - 1] = 0;
            }

          if (arr[i][1] == arr[i][2])
            break;
        }
      }

    }


    if (event.which == 40) { // for down : we start from down


      for (j = 0; j < 4; j++) {
        for (i = 3; i > 0; i--) {

          for (var m = 0; m < 2; m++) {
            for (k = 3; k > 0; k--)
              if (arr[k][j] == 0 && arr[k - 1][j] != 0) {
                arr[k][j] = arr[k - 1][j];
                arr[k - 1][j] = 0;
              }
          }


          for (k = i; k > 0; k--)
            if (arr[k][j] == arr[k - 1][j]) {
              arr[k][j] *= 2;
              arr[k - 1][j] = 0;
              break;
            }

          if (arr[1][j] == arr[2][j] && arr[1][j] != 0)
            break;

        }
      }
    }



    k = 1;
    for (i = 0; i < 4; i++)
      for (j = 0; j < 4; j++, k++) {
        var element = $("#" + k)

        switch (arr[i][j]) {
          case 0:
            element.html('');
            element.attr('class', 'c0');
            element.addClass("has_all");
            break;

          case 2:
            element.html('2');
            element.attr('class', 'c2');
            element.addClass("has_all");
            break;

          case 4:
            element.html('4');
            element.attr('class', 'c4');
            element.addClass("has_all");
            break;

          case 8:
            element.html('8');
            element.attr('class', 'c8');
            element.addClass("has_all");
            break;

          case 16:
            element.html('16');
            element.attr('class', 'c16');
            element.addClass("has_all");
            break;

          case 32:
            element.html('32');
            element.attr('class', 'c32');
            element.addClass("has_all");
            break;

          case 64:
            element.html('64');
            element.attr('class', 'c64');
            element.addClass("has_all");
            break;

          case 128:
            element.html('128');
            element.attr('class', 'c128');
            element.addClass("has_all");
            break;

          case 256:
            element.html('256');
            element.attr('class', 'c256');
            element.addClass("has_all");
            break;

          case 512:
            element.html('512');
            element.attr('class', 'c512');
            element.addClass("has_all");;
            break;

          case 1024:
            element.html('1024');
            element.attr('class', 'c1024');
            element.addClass("has_all");;
            break;

          case 2048:
            element.html('2048');
            element.attr('class', 'c2048');
            element.addClass("has_all");;
            break;

          default:
            continue;
        }

      }
      var index = [];
      k = 0;
      var change = false;
      for (i = 0; i < 4; i++)
        for (j = 0; j < 4; j++) {
          if (arr[i][j] == 0) {
            index.push(k);
            change = true;
          }
          k++;
        }
      var pos = index[Math.floor(Math.random() * (index.length))];
      k = 0;
      for (i = 0; i < 4; i++)
        for (j = 0; j < 4; j++) {
          if (pos == k)
        {    arr[i][j] = 2;

          var element = $("#" + (k+1))
          element.html('2')
          element.attr('class' , 'c2 has_all animated bounce');}

          k++;
        }

  });
});
