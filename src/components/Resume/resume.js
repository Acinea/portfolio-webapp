import React from 'react';

export function Resume() {
    return (
        <main>
            <object data="../../resources/images/resume.pdf" type="application/pdf" width="100%" height="100%">
                <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
            </object>
        </main>
    )
}