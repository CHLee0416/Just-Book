const star1 = document.querySelector(".star1");
const star2 = document.querySelector(".star2");
const star3 = document.querySelector(".star3");
const star4 = document.querySelector(".star4");
const star5 = document.querySelector(".star5");
const p1 = document.querySelector(".p1");
            const p2 = document.querySelector(".p2");
            const p3 = document.querySelector(".p3");
            const p4 = document.querySelector(".p4");
            const p5 = document.querySelector(".p5");

            function stars1(){
                star1.style.color = "#ffe400";
                star2.style.color = "#b6b6b6";
                star3.style.color = "#b6b6b6";
                star4.style.color = "#b6b6b6";
                star5.style.color = "#b6b6b6";
                p1.style.display = "block";
                p1.style.color = "red";
                p2.style.display = "none";
                p3.style.display = "none";
                p4.style.display = "none";
                p5.style.display = "none";
            }

            function stars2(){
                star1.style.color = "#ffe400";
                star2.style.color = "#ffe400";
                star3.style.color = "#b6b6b6";
                star4.style.color = "#b6b6b6";
                star5.style.color = "#b6b6b6";
                p2.style.display = "block";
                p2.style.color = "orange";
                p1.style.display = "none";
                p3.style.display = "none";
                p4.style.display = "none";
                p5.style.display = "none";
            }

            function stars3(){
                star1.style.color = "#ffe400";
                star2.style.color = "#ffe400";
                star3.style.color = "#ffe400";
                star4.style.color = "#b6b6b6";
                star5.style.color = "#b6b6b6";
                p3.style.display = "block";
                p3.style.color = "yellow";
                p1.style.display = "none";
                p2.style.display = "none";
                p4.style.display = "none";
                p5.style.display = "none";
            }

            function stars4(){
                star1.style.color = "#ffe400";
                star2.style.color = "#ffe400";
                star3.style.color = "#ffe400";
                star4.style.color = "#ffe400";
                star5.style.color = "#b6b6b6";
                p4.style.display = "block";
                p4.style.color = "#c0ff00";
                p1.style.display = "none";
                p2.style.display = "none";
                p3.style.display = "none";
                p5.style.display = "none";
            }

            function stars5(){
                star1.style.color = "#ffe400";
                star2.style.color = "#ffe400";
                star3.style.color = "#ffe400";
                star4.style.color = "#ffe400";
                star5.style.color = "#ffe400";
                p5.style.display = "block";
                p5.style.color = "#0cfc1c";
                p1.style.display = "none";
                p2.style.display = "none";
                p3.style.display = "none";
                p4.style.display = "none";
            }