tinymce.init({
    selector: 'textarea#default',
    width: 1000,
    height: 300,
    plugins:[
        'advist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
        'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media',
        'table', 'emoticons', 'template', 'codesample'
    ],
    toolbar: 'undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify |' +
    'bulllist numlist outdent indent | link image | print preview meida fullscreen|' +
    'forecolor backcolor emoticons',
    menubar: 'favs file edit view insert format tools table',
    content_style: 'body{font-family:Halvetica,Arial,sans-serif; font-size:16px}'
});