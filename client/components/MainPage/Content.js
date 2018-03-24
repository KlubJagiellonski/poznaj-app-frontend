import React from 'react';


export default function Content() {
    return (
        <main className="main-content">
            <h2>PoznajApp</h2>
            <div className="main-content-invitation-text">
                <p>Aplikacja PoznajApp została stworzona by pomóc Ci poznać miejsce w którym mieszkasz.</p>
                <p>Zabierając PoznajApp na spacer możesz odkryć jak niezwykłe historie kryją zakątki Twojego miasta.</p>
            </div>
            <div className="main-content-action-buttons">
                <button>Andoid</button>
                <button>iOS</button>
                <button>Web</button>
            </div>
        </main>
    );
}
