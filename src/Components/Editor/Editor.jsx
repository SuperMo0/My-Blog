import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './../../../public/prism.css'

export default function MyEditor({ content, EditorRef }) {

    let editorFn = (evt, editor) => {
        EditorRef.current = editor;
    }
    return (
        <Editor
            initialValue={content}
            tinymceScriptSrc={'/tinymce/tinymce.min.js'}
            onInit={editorFn}
            init={{
                block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6',
                resize: false,
                highlight_on_focus: false,
                elementpath: false,
                branding: false,
                promotion: false,
                skin: 'oxide-dark',
                content_css: 'dark',
                license_key: 'gpl',
                height: 500,
                menubar: true,
                preview_styles: 'dark,prism.css',
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount', 'codesample'
                ],
                toolbar_mode: 'wrap',
                content_style: 'body {font - family:Helvetica,Arial,sans-serif; font-size:14px }',
                codesample_global_prismjs: true,
                autosave_interval: '10s',
            }}
        />
    );
}