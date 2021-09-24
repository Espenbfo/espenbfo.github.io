let categoryActive = ""

function lower_opacity(name) {
    $(`.filter-item`).removeClass("active")
    $(".filter-item").removeClass("not_active")
    if (categoryActive === name) {
        $(".project-item").removeClass("lower-opacity")
        categoryActive = ""

    } else {
        categoryActive = name;
        $(`.${name}`).removeClass("lower-opacity")
        $(`.project-item:not(.${name})`).addClass("lower-opacity")
        $(`.${name}-toggle`).addClass("active")
        $(`.filter-item:not(.${name}-toggle)`).addClass("not_active")
    }
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