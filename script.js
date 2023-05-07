$(document).ready(function () {
    let box = $("#box");
    $("#btnSquare").click(function (e) { 
        e.preventDefault();
        box.animate({
            left: 500
        });
        box.animate({
            top: 500
        })
        box.animate({
            left: 0
        })
        box.animate({
            top: 0
        })
    }); 

    $("#btnTriangle").click(function (e) {
        e.preventDefault();
        let box = $("#box");
        let centerX = box.position().left + box.width() / 2;
        let centerY = box.position().top + box.height() / 2;
        let sideLength = 400;
        let height = (Math.sqrt(3) / 2) * sideLength;
        let x1 = centerX - sideLength / 2;
        let y1 = centerY + height / 2;
        let x2 = centerX + sideLength / 2;
        let y2 = y1;
        let x3 = centerX;
        let y3 = centerY - height / 2;
      
        let points = [
          { x: x1, y: y1 },
          { x: x2, y: y2 },
          { x: x3, y: y3 }
        ];
      
        let currentPointIndex = 0;
      
        animateTriangle(); 
      
        function animateTriangle() {
          if (currentPointIndex < points.length) {
            let currentPoint = points[currentPointIndex];
            box.animate(
              {
                left: currentPoint.x - box.width() / 2,
                top: currentPoint.y - box.height() / 2
              },
              function () {
                currentPointIndex++;
                animateTriangle(); 
              }
            );
          }
        }
      });

    $("#btn").click(function (e) {
        e.preventDefault();
        if (box.width() === 400) {
          box.animate({
            opacity: 0,
            width: 150,
            height: 150
          });
        } else {
          box.animate({
            opacity: 1,
            width: 400,
            height: 400
          });
        }
      });
});

