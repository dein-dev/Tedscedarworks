import "./scroll.dbab48cd.js";
let l = document.querySelectorAll(".js-click-hamburger");
l.length > 0 && Array.from(l).forEach(e => {
    e.addEventListener("click", t => {
        t.preventDefault(),
        document.querySelector(".js-menu-mobile").classList.add("active")
    }
    )
}
);
let n = document.querySelectorAll(".js-click-close-menu");
n.length > 0 && Array.from(n).forEach(e => {
    e.addEventListener("click", t => {
        t.preventDefault(),
        document.querySelector(".js-menu-mobile").classList.remove("active")
    }
    )
}
);
