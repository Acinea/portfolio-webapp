import React from 'react'
import './resume.css'
import file from './resume.pdf'

export function Resume() {

    return (
        <main className="resume-container">
            <iframe src={file} width="1000vw" height="800vh" type="<!DOCTYPE html>" />
        </main>
    )
}