import React from 'react';
import ReactTooltip from 'react-tooltip';


export default function Content() {
    return (
        <main className="main-content">
            <h2>PoznajApp</h2>

            <div className="main-content-invitation-text">
                <p>Aplikacja PoznajApp została stworzona by pomóc Ci poznać miejsce w którym mieszkasz.</p>
                <p>Zabierając PoznajApp na spacer możesz odkryć jak niezwykłe historie kryją zakątki Twojego miasta.</p>
            </div>
            
            <div className="main-content-action-buttons">
                <a
                    className="main-content-button main-content-button-android"
                    href="https://play.google.com/store/apps/details?id=pl.poznajapp"
                    target="_blank"
                >
                    Android
                </a>
                <a
                    className="main-content-button main-content-button-ios"
                    href="/"
                    // target="_blank"
                    data-tip="Opcja dostępna wkrótce."
                >
                    iOS
                </a>
                <ReactTooltip />
            </div>
        </main>
    );
}
