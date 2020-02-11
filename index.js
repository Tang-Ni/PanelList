/**
 * 打印输出
 * @param {*} m 
 */
function log(m) {
    console.log(m)
}
$(function() {
    $("dd").hide();
    $("dt").click(function() {
        $(this).next().toggle();
        $(this).siblings("dt").next().hide();

    })
})