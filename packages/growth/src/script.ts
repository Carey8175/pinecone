// Modified for pinecone; see NOTICE.
export const builtWithScript = `
(function () {
    if (typeof window !== 'undefined') {
        // Define custom element
        class BuiltWithPinecone extends HTMLElement {
            constructor() {
                super();
                const shadow = this.attachShadow({ mode: 'open' });

                // Create styles
                const style = document.createElement('style');
                style.textContent = \`
                    :host {
                        position: fixed;
                        bottom: 10px;
                        right: 10px;
                        z-index: 9999;
                        display: block;
                    }
                    .badge {
                        background-color: #000;
                        color: #fff;
                        padding: 4px 10px;
                        border-radius: 4px;
                        font-family: Inter, sans-serif;
                        font-size: 12px;
                        font-weight: 400;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        gap: 4px;
                    }
                    .logo {
                        width: 22px;
                        height: 22px;
                        fill: currentColor;
                    }
                \`;

                const badge = document.createElement('div');
                badge.className = 'badge';

                // Create SVG element
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('viewBox', '0 0 24 24');
                svg.setAttribute('fill', 'none');
                svg.classList.add('logo');

                // Add SVG path for the pinecone logo
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('fill', 'currentColor');
                path.setAttribute(
                    'd',
                    'M12 2 8 6l4 3 4-3-4-4ZM7 7l-3 4 5 4 3-5-5-3Zm10 0-5 3 3 5 5-4-3-4ZM4 13l1 5 6 3-2-5-5-3Zm16 0-5 3-2 5 6-3 1-5ZM10 15l2-3 2 3-2 5-2-5Z',
                );

                svg.appendChild(path);

                const text = document.createElement('span');
                text.textContent = 'Built with pinecone';

                badge.appendChild(svg);
                badge.appendChild(text);

                badge.addEventListener('click', () => {
                    window.open('https://github.com/Carey8175/pinecone', '_blank');
                });

                badge.addEventListener('mouseenter', () => {
                    badge.style.backgroundColor = '#333';
                });

                badge.addEventListener('mouseleave', () => {
                    badge.style.backgroundColor = '#000';
                });

                shadow.appendChild(style);
                shadow.appendChild(badge);
            }
        }

        // Register custom element
        customElements.define('built-with-pinecone', BuiltWithPinecone);

        // Run after page load
        window.addEventListener('load', function () {
            // Create and append the custom element
            const badge = document.createElement('built-with-pinecone');
            document.body.appendChild(badge);
        });
    }
})();
`;
