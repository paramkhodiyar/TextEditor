"use client";

import React from "react";
import { EditorProvider, EditorContent, useCurrentEditor } from '@tiptap/react';
import { FaBold, FaItalic, FaStrikethrough, FaCode, FaListUl, FaListOl, FaUndo, FaRedo, FaPalette } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";
import { LuHeading1, LuHeading2, LuHeading3, LuHeading4, LuHeading5, LuHeading6 } from "react-icons/lu";
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import "../styles/notetaker.css";

const MenuBar = () => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    function downloadfile() {
        const textsofar = editor.getText();
        const blob = new Blob([textsofar], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "note.txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function clearwritingarea() {
        editor.commands.setContent("");
    }

    return (
        <>
            <div className="doc-options">
                <div className="control-group">
                    <div className="button-group">
                        <button
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            disabled={!editor.can().chain().focus().toggleBold().run()}
                            className={editor.isActive('bold') ? 'is-active' : ''}
                        >
                            <FaBold />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            disabled={!editor.can().chain().focus().toggleItalic().run()}
                            className={editor.isActive('italic') ? 'is-active' : ''}
                        >
                            <FaItalic />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleStrike().run()}
                            disabled={!editor.can().chain().focus().toggleStrike().run()}
                            className={editor.isActive('strike') ? 'is-active' : ''}
                        >
                            <FaStrikethrough />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleCode().run()}
                            disabled={!editor.can().chain().focus().toggleCode().run()}
                            className={editor.isActive('code') ? 'is-active' : ''}
                        >
                            <FaCode />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
                        >
                            <LuHeading1 style={{ fontSize: "20px" }} />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                            className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
                        >
                            <LuHeading2 style={{ fontSize: "20px" }} />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                            className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
                        >
                            <LuHeading3 style={{ fontSize: "20px" }} />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                            className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
                        >
                            <LuHeading4 style={{ fontSize: "20px" }} />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                            className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
                        >
                            <LuHeading5 style={{ fontSize: "20px" }} />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                            className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
                        >
                            <LuHeading6 style={{ fontSize: "20px" }} />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleBulletList().run()}
                            className={editor.isActive('bulletList') ? 'is-active' : ''}
                        >
                            <FaListUl />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleOrderedList().run()}
                            className={editor.isActive('orderedList') ? 'is-active' : ''}
                        >
                            <FaListOl />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().undo().run()}
                            disabled={!editor.can().chain().focus().undo().run()}
                        >
                            <FaUndo />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().redo().run()}
                            disabled={!editor.can().chain().focus().redo().run()}
                        >
                            <FaRedo />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().setColor('#958DF1').run()}
                            className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
                        >
                            <FaPalette />
                        </button>
                    </div>
                </div>
                <div className="main">
                    <button
                        onClick={clearwritingarea}
                        className="clear-button"
                        style={{ backgroundColor: "#ed5e68", display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <RiDeleteBin7Fill style={{marginRight:"5px",fontSize:"15px"}}/>Clear
                    </button>
                    <button
                        onClick={downloadfile}
                        className="download-button"
                        style={{ backgroundColor: "#a6ff4d", color: "#578723", display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <IoMdDownload style={{marginRight:"5px",fontSize:"15px"}}/>Download
                    </button>
                </div>
            </div>
        </>
    );
};

const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false,
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false,
        },
    }),
];

function Notetaker() {
    return (
        <div className="notetaker-container">
            <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content="Welcome to Scribl, Happy Writing !!! (Click on the clear button to reset the page and write)">
                <EditorContent />
            </EditorProvider>
        </div>
    );
}

export default Notetaker;