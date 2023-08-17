let categoryActive = "all"

function lower_opacity(name) {
    $(`.filter-item`).removeClass("active")
    $(".filter-item").removeClass("not-active")

    if (categoryActive === name) {
        $(".project-item").removeClass("lower-opacity")
        categoryActive = "all"

    } else {
        categoryActive = name;
    }

    $(`.${name}`).removeClass("lower-opacity")
    if (name != "all") {
        $(`.project-item:not(.${name})`).addClass("lower-opacity")
    }
    else {
        $(".project-item").removeClass("lower-opacity")
    }
    $(`.${name}-toggle`).addClass("active")
    $(`.filter-item:not(.${name}-toggle)`).addClass("not-active")
}

$(".ai-toggle").click(function () {
    lower_opacity("ai")
})

$(".website-toggle").click(function () {

    lower_opacity("website")
})

$(".misc-toggle").click(function () {
    lower_opacity("misc")
})
$(".all-toggle").click(function () {
    lower_opacity("all")
})