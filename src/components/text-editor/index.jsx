import { Editor } from '@tinymce/tinymce-react';
import tinymce from 'tinymce/tinymce';
// Theme
import 'tinymce/themes/silver';
import 'tinymce/themes/mobile';
import 'tinymce/icons/default';
// import 'tinymce/skins/ui/oxide-dark/skin.min.css';
import 'tinymce/skins/ui/oxide/skin.min.css';
// importing the plugin js.
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/table';
import 'tinymce/plugins/help';
import 'tinymce/plugins/template';
import 'tinymce/plugins/print';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/toc';
import 'tinymce/plugins/textpattern';
import 'tinymce/plugins/noneditable';
import 'tinymce/plugins/noneditable';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/emoticons';

const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

const plugins =
  'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help quickbars emoticons';
const menubar = 'file edit view insert format tools table help';
const toolbar =
  'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl';

const TinyEditor = () => {
  const handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  };

  const filePickerHandler = (cb, value, meta) => {
    console.log('File  Picker!');
    let input = document.createElement('input');
    input.setAttribute('type', 'file');
    //   input.setAttribute('accept', 'image/*');
    input.onchange = function () {
      let file = this.files[0];
      let reader = new FileReader();
      reader.onload = function () {
        let id = 'blobid' + new Date().getTime();
        let blobCache = tinymce.activeEditor.editorUpload.blobCache;
        let base64 = reader.result.split(',')[1];
        let blobInfo = blobCache.create(id, file, base64);
        blobCache.add(blobInfo);
        cb(blobInfo.blobUri(), { title: file.name });
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  const editorOptions = {
    skin: useDarkMode ? 'oxide-dark' : 'oxide',
    content_css: useDarkMode ? 'dark' : 'default',
    // content_style: [contentCss, contentUiCss].join('\n'),
    width: 700,
    height: 300,
    menubar,
    plugins,
    toolbar,
    toolbar_sticky: true,
    autosave_ask_before_unload: true,
    autosave_interval: '30s',
    autosave_prefix: '{path}{query}-{id}-',
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    image_advtab: true,
    image_title: true,
    automatic_uploads: true,
    file_picker_types: 'file image media',
    file_picker_callback: filePickerHandler,
    link_list: [
      { title: 'My page 1', value: 'https://www.tiny.cloud' },
      { title: 'My page 2', value: 'http://www.moxiecode.com' },
    ],
    image_list: [
      { title: 'My page 1', value: 'https://www.tiny.cloud' },
      { title: 'My page 2', value: 'http://www.moxiecode.com' },
    ],
    image_class_list: [
      { title: 'None', value: '' },
      { title: 'Some class', value: 'class-name' },
    ],
    importcss_append: true,
    templates: [
      {
        title: 'New Table',
        description: 'creates a new table',
        content:
          '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
      },
      {
        title: 'Starting my story',
        description: 'A cure for writers block',
        content: 'Once upon a time...',
      },
      {
        title: 'New list with dates',
        description: 'New List with dates',
        content:
          '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
      },
    ],
    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
    image_caption: true,
    quickbars_selection_toolbar:
      'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    noneditable_noneditable_class: 'mceNonEditable',
    toolbar_mode: 'sliding',
    contextmenu: 'link image imagetools table',
  };

  return (
    <Editor
      initialValue="<p>Initial content</p>"
      apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
      init={editorOptions}
      onChange={handleEditorChange}
    />
  );
};

export default TinyEditor;
