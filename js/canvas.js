function draw() {
    var c = document.getElementById("logoCanvas");
    var ctx = c.getContext("2d");

    ctx.strokeStyle = "rgba(0,0,0,0)";
    //ctx.miterLimit=4;
    ctx.fillStyle = "#0070d1";
    ctx.save();
    ctx.beginPath();
    
    // Prvi del (Spodnji del S-ja)
    ctx.moveTo(6, 32);  // 5.8 -> 6, 32.1 -> 32
    ctx.bezierCurveTo(4, 33, 5, 35, 8, 36); 
    ctx.bezierCurveTo(11, 37, 15, 37, 18, 37); 
    ctx.bezierCurveTo(19, 37, 19, 37, 19, 37); 
    ctx.lineTo(19, 33); 
    ctx.lineTo(16, 34); // 15.5 -> 16
    ctx.bezierCurveTo(14, 35, 13, 35, 12, 35); 
    ctx.bezierCurveTo(11, 34, 11, 34, 12, 33); 
    ctx.lineTo(19, 31); 
    ctx.lineTo(19, 27); 
    ctx.lineTo(9, 30); 
    ctx.bezierCurveTo(8, 31, 7, 31, 6, 32); 
    ctx.closePath();

    // Drugi del (Črka P)
    ctx.moveTo(29, 17); 
    ctx.lineTo(29, 27); 
    ctx.bezierCurveTo(33, 29, 36, 27, 36, 22); 
    ctx.bezierCurveTo(36, 16, 34, 14, 29, 12); 
    ctx.bezierCurveTo(26, 11, 23, 10, 20, 10); // 9.5 -> 10
    ctx.lineTo(20, 38); 
    ctx.lineTo(27, 41); // 40.5 -> 41
    ctx.lineTo(27, 16); 
    ctx.bezierCurveTo(27, 15, 27, 14, 28, 15); 
    ctx.bezierCurveTo(29, 15, 29, 16, 29, 17); 
    ctx.closePath();

    // Tretji del (Zgornji del S-ja)
    ctx.moveTo(42, 30); 
    ctx.bezierCurveTo(39, 29, 36, 28, 33, 29); 
    ctx.bezierCurveTo(31, 29, 30, 29, 29, 30); // 28.5 -> 29 (ponavadi round up)
    ctx.lineTo(28, 30); 
    ctx.lineTo(28, 34); 
    ctx.lineTo(35, 31); 
    ctx.bezierCurveTo(36, 31, 37, 31, 39, 31); 
    ctx.bezierCurveTo(40, 31, 39, 32, 38, 33); // 38.2 -> 38, 32.5 -> 33
    ctx.lineTo(28, 36); 
    ctx.lineTo(28, 40); 
    ctx.lineTo(42, 35); 
    ctx.bezierCurveTo(43, 35, 44, 34, 45, 33); 
    ctx.bezierCurveTo(45, 32, 45, 31, 42, 30); 
    ctx.closePath();

    ctx.fill();
    ctx.stroke();
}

draw();