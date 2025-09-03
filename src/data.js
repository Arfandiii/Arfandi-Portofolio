import HeroImage from "./assets/profile.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "./assets/tools/vscode.png";
import Tools2 from "./assets/tools/reactjs.png";
// import Tools3 from "./assets/tools/nextjs.png";
import Tools4 from "./assets/tools/tailwind.png";
import Tools5 from "./assets/tools/bootstrap.png";
import Tools6 from "./assets/tools/php.png";
import Tools7 from "./assets/tools/js.png";
import Tools8 from "./assets/tools/nodejs.png";
import Tools9 from "./assets/tools/laravel.png";
import Tools10 from "./assets/tools/mysql.png";
import Tools11 from "./assets/tools/laragon.png";
import Tools12 from "./assets/tools/github.png";
import Tools13 from "./assets/tools/canva.png";
import Tools14 from "./assets/tools/figma.png";
// import Tools9 from "./assets/tools/ai.png";
import Tools15 from "./assets/tools/gitbash.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  // {
  //   id: 3,
  //   gambar: Tools3,
  //   nama: "Next JS",
  //   ket: "Framework",
  //   dad: "300",
  // },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "PHP",
    ket: "Language",
    dad: "1100",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Laravel",
    ket: "Framework",
    dad: "1100",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "MySQL",
    ket: "Database",
    dad: "1100",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Laragon",
    ket: "Environment",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  // {
  //   id: 9,
  //   gambar: Tools9,
  //   nama: "Adobe Illustrator",
  //   ket: "Design App",
  //   dad: "900",
  // },
  {
    id: 13,
    gambar: Tools13,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Git Bash",
    ket: "Terminal",
    dad: "1100",
  },
];

import Proyek1 from "./assets/proyek/project1.png";
import Proyek2 from "./assets/proyek/project2.png";
import Proyek3 from "./assets/proyek/project3.png";
import Proyek4 from "./assets/proyek/project4.png";
import Proyek5 from "./assets/proyek/project5.png";
// import Proyek6 from "./assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Perpustakaan Sekolah",
    desk: "Aplikasi web untuk mengelola data buku dan pencarian buku menggunakan metode dice similarity.",
    tools: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "Javascript",
      "MySQL",
      "Laravel",
      "PHP",
    ],
    href: "https://github.com/Arfandiii/Perpustakaan",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Pencarian Pasal KUHP",
    desk: "Platform pencarian pasal-pasal KUHP dengan fitur pencarian menggunakan cosine similarity.",
    tools: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "Javascript",
      "MySQL",
      "Laravel",
      "PHP",
    ],
    href: "https://github.com/Arfandiii/STKI-KUHP",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Pencarian Hadist",
    desk: "Website untuk mencari hadist berdasarkan kata kunci menggunakan metode jaccard similarity.",
    tools: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "Javascript",
      "MySQL",
      "Laravel",
      "PHP",
    ],
    href: "https://github.com/Arfandiii/JaccardHadist",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Pemilihan Karir Siswa",
    desk: "Sistem pakar untuk rekomendasi jalur karir bagi siswa berdasarkan minat dan kepribadian menggunakan metode naive bayes.",
    tools: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "Javascript",
      "MySQL",
      "Laravel",
      "PHP",
    ],
    href: "https://github.com/Arfandiii/Sispak-Naive-Bayes",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Portfolio pribadi interaktif untuk menampilkan proyek, skill, dan pengalaman dengan animasi modern.",
    tools: ["Vite", "TailwindCSS", "React", "Framermotion", "GSAP"],
    href: "https://vercel.com/ari-arfandis-projects/arfandi-portofolio",
    dad: "600",
  },

  // {
  //   id: 6,
  //   gambar: Proyek6,
  //   nama: "Company Profile 2.0",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["NextJS", "TailwindCSS", "Framermotion"],
  //   dad: "700",
  // },
];
