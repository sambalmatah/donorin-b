import HOMECONTENT from "../../data/HOMECONTENT.json";
import { createHomeContentTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
        <div class="home-content-list"></div>
        <div class ="bottom-content-container">
          <div class ="bottom-content-1">
            <h2>Donorin</h2>
            <p>Hidup Sehat Dengan Memberi</p>
          </div>
          <div class ="bottom-content-2">
            <h2>Navigasi</h2>
            <a href="#/">Home</a>
            <a href="#/donorin">Donorin</a>
            <a href="#/profile">Profile</a>
            <a href="#/about">About Us</a>
          </div>
          <div class ="bottom-content-3">
            <h2>Kontak</h2>
            <a href="#/">Andreas Alex</a>
            <a href="#/">Yudi Ari Nugroho</a>
            <a href="#/">Mildan Falah</a>
          </div>
        </div>
        `;
  },

  async afterRender() {
    const contents = await HOMECONTENT.contents;
    const contentContainer = document.querySelector(".home-content-list");
    contents.forEach((content, index) => {
      const themeClass =
        index % 2 === 0 ? "home-content-item-red" : "home-content-item-white";
      const linkId = index % 2 === 0 ? "about" : "donorin";
      contentContainer.innerHTML += createHomeContentTemplate(
        content,
        themeClass,
        linkId
      );
    });
  },
};

export default Home;