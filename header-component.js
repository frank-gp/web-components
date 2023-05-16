/*
    <script src="header-component.js"></script>
    <header-component></header-component>
*/

let css = /*css */ `/* css... */
@import url(https://frank-gp.github.io/icon/icomoon/style.css);

:host {
  display: block;
  color: var(--color1);
  background: indigo;
  padding: 1em;
  /* font: inherit; */
}
* {
  /* border: 1px dashed #0808; */
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: var(--hover);
}
ul {
  padding: 1em 0;
}
ul li {
  list-style: none;
  padding: 0.3em;
}
.btn_navbar {
  position: absolute;
  top: 50%;
  /* left: 1em; */
  right: 1em;
  /* transform: translate(-50%, -50%); */
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.5em;
}
.display_none {
  display: none;
}
.btn_container {
  position: relative;
}
/* css. */
`;

class headerComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    const header = document.createElement("header");

    style.append(css);
    header.innerHTML = html;

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(header);
    //   shadowRoot.innerHTML = html
    //   shadowRoot.insertAdjacentElement("afterbegin", style)

    const btn_navbar = shadowRoot.querySelector(".btn_navbar");
    btn_navbar.addEventListener("click", () => {
      btn_navbar.classList.toggle("icon-bars");
      btn_navbar.classList.toggle("icon-times");

      const navbar = shadowRoot.querySelector("#navbar")
      navbar.classList.toggle("display_none")
    });
  }
}
customElements.define("header-component", headerComponent);

let html = /*html */ `<!-- html... -->
<section>
    <div class="btn_container">
        <h2><a href="https://frank-gp.github.io/">Frank GP</a></h2>
        <i class="btn_navbar icon-bars"></i>
    </div>
    <nav>
        <ul id="navbar" class="display_none">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Assets</a></li>
            <li><a href="#">Apps</a></li>
            <li><a href="#">Libs</a></li>
            <li><a href="#">Doc</a></li>
        </ul>
    </nav>


</section>
<!-- html. -->`;
