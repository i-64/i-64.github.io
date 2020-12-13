function script () {
    for (var i = 1; i <= 10; i++) {
        // console.log(i)
        const _i = i
        document.getElementById('' + _i).onmouseover = function () {
            document.getElementById('preview' + _i).style.display = 'block'
            document.getElementById('preview-default').style.display = 'none'
            // $('#preview-default').hide();
            // $('#preview' + _i).show(200);
        }
        document.getElementById('' + _i).onmouseout = function () {
            document.getElementById('preview' + _i).style.display = 'none'
            document.getElementById('preview-default').style.display = 'block'
            // $('#preview' + _i).hide()
            // $('#preview-default').show(200)
        }
    }
}
