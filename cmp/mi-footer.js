class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `<p>
        &copy; 2021
        Nelson Antonio Ayala Perez.
      </p>`;
    }
}

customElements.define("mi-footer", MiFooter);