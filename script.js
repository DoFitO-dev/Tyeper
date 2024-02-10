const txt1 = document.getElementById('til');
const btn1 = document.getElementById('out');
const out1 = document.title;

function fun1() {
    out1.innerHTML = txt1.valueOf;
}

btn1.addEventListener('OnClick', fun1);








tinymce.init({
    selector: 'textarea#default',
    width: 1000,
    height: 900,
    content_css: 'writer',
    plugins:[
        'advist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
        'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media',
        'table', 'emoticons', 'template', 'codesample'
    ],
    toolbar: 'undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify |' +
    'bulllist numlist outdent indent | link image | print preview meida fullscreen|' +
    'forecolor backcolor emoticons',
    menu: {
        favs: {title: 'Menu', items: 'code visualaid | searchreplace | emoticons'}
    },
    menubar: 'favs file edit view insert format tools table',
    content_style: 'body{font-family:Halvetica,Arial,sans-serif; font-size:16px}'
});