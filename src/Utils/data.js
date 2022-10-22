const groups = [
  {
    id: 1,
    name: "Web Development",
    description: "Diskusi mengenai web development",
    posts: [
      {
        id: 1,
        poster: "John Doe",
        timePosted: "2021-05-01 12:00:00",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies porttitor tortor ultrices porttitor. Sed cursus, justo non condimentum feugiat, arcu nisi ultricies dui, eget finibus elit nulla non felis. Etiam quis urna vel elit scelerisque ultricies. Ut a purus erat. Proin at scelerisque dolor. Praesent venenatis magna id urna finibus, vel congue turpis rutrum. Praesent justo lectus, egestas sed justo non, aliquam dignissim magna. Sed in lectus sit amet eros mollis finibus porttitor tempor nunc. Aliquam non vehicula est. Duis dolor mi, condimentum nec diam eget, pretium luctus metus. Nunc accumsan fringilla semper. Curabitur tincidunt tortor sed lacus ornare, sed finibus risus sollicitudin. Maecenas blandit ex neque, in aliquet lorem pretium sed. Etiam malesuada luctus ex at vehicula.",
        comment: [
          {
            id: 1,
            poster: "Jane Doe",
            timePosted: "2021-05-01 12:00:00",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
        likeCount: 10,
        dislikeCount: 2,
      },
      {
        id: 2,
        poster: "John Doe",
        timePosted: "2021-05-01 12:00:00",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies porttitor tortor ultrices porttitor.",
        comment: [
          {
            id: 1,
            poster: "Jane Doe",
            timePosted: "2021-05-01 12:00:00",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
        likeCount: 10,
        dislikeCount: 2,
      },
    ],
  },
  {
    id: 2,
    name: "Software Dev",
    description: "Diskusi mengenai software development",
    posts: [
      {
        id: 1,
        poster: "John Doe",
        timePosted: "2021-05-01 12:00:00",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        comment: [
          {
            id: 1,
            poster: "Jane Doe",
            timePosted: "2021-05-01 12:00:00",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
        likeCount: 10,
        dislikeCount: 2,
      },
    ],
  },
];

const categories = [
  {
    id: 1,
    name: "Front-End Development",
    duration: "1-2 Bulan",
  },
  {
    id: 2,
    name: "React Development",
    duration: "3 Bulan",
  },
];

const materials = [
  {
    id: 1,
    categoriId: 1,
    name: "Materi 1 | HTML",
    description:
      "HTML adalah singkatan dari HyperText Markup Language. Ini digunakan di frontend dan memberikan struktur ke halaman web yang dapat Anda gaya menggunakan CSS dan membuatnya interaktif menggunakan JavaScript.",
  },
  {
    id: 2,
    categoriId: 1,
    name: "Materi 2 | CSS",
    description:
      "CSS adalah singkatan dari Cascading Style Sheets. Ini digunakan untuk mengatur gaya elemen HTML. Ini dapat digunakan untuk mengatur warna, font, ukuran, posisi, dan banyak lagi.",
  },
  {
    id: 3,
    categoriId: 2,
    name: "React",
    description:
      "React adalah sebuah library JavaScript yang digunakan untuk membangun antarmuka pengguna (UI). React dibuat oleh Facebook dan pertama kali diperkenalkan pada tahun 2013.",
  },
  {
    id: 4,
    categoriId: 2,
    name: "React Router",
    description:
      "React Router adalah library yang digunakan untuk membuat routing di React. Routing adalah proses mengatur alur aplikasi web sehingga pengguna dapat berpindah antar halaman.",
  },
];

const subMaterials = [
  {
    id: 1,
    materialId: 1,
    categoryId: 1,
    name: "HTML Basics",
    link: "https://www.youtube.com/embed/NBZ9Ro6UKV8",
    desc: "HTML adalah singkatan dari HyperText Markup Language. Ini digunakan di frontend dan memberikan struktur ke halaman web yang dapat Anda gaya menggunakan CSS dan membuatnya interaktif menggunakan JavaScript",
  },
  {
    id: 2,
    materialId: 1,
    categoryId: 1,
    name: "Semantic HTML",
    link: "https://www.youtube.com/embed/o3m15BWi2HM",
    desc: "HTML semantik adalah penggunaan markup HTML untuk memperkuat semantik, atau makna, dari informasi di halaman web daripada hanya untuk mendefinisikan presentasi atau tampilannya.",
  },
  {
    id: 3,
    materialId: 1,
    categoryId: 1,
    name: "Forms and Validations",
    link: "https://www.youtube.com/embed/ZDxGMTO7O3g",
    desc: "Formulir adalah elemen HTML yang digunakan untuk mengumpulkan data pengguna dari inputan. Validasi adalah proses memeriksa apakah data yang dimasukkan pengguna sesuai dengan format yang diharapkan.",
  },
  {
    id: 4,
    materialId: 2,
    categoryId: 1,
    name: "CSS Basics",
    link: "https://www.youtube.com/embed/1Rs2ND1ryYc",
    desc: "CSS adalah singkatan dari Cascading Style Sheets. Ini digunakan untuk mengontrol gaya dari halaman web yang ditulis dalam markup bahasa seperti HTML.",
  },
  {
    id: 5,
    materialId: 2,
    categoryId: 1,
    name: "CSS Selectors",
    link: "https://www.youtube.com/embed/0KLwWyQyMQo",
    desc: "CSS adalah singkatan dari Cascading Style Sheets. Ini digunakan untuk mengontrol gaya dari halaman web yang ditulis dalam markup bahasa seperti HTML.",
  },
  {
    id: 6,
    materialId: 2,
    categoryId: 1,
    name: "CSS Box Model",
    link: "https://www.youtube.com/embed/s2BB3v3j5VA",
    desc: "CSS box model adalah konsep yang digunakan untuk mengatur tata letak dan ukuran elemen HTML. Setiap elemen HTML dapat dianggap sebagai kotak yang terdiri dari margin, border, padding, dan content.",
  },
  {
    id: 7,
    materialId: 3,
    categoryId: 2,
    name: "React Basics",
    link: "https://www.youtube.com/embed/Ke90Tje7VS0",
    desc: "React adalah sebuah library JavaScript yang digunakan untuk membangun antarmuka pengguna (UI). React dibuat oleh Facebook dan pertama kali diperkenalkan pada tahun 2013.",
  },
  {
    id: 8,
    materialId: 3,
    categoryId: 2,
    name: "React Components",
    link: "https://www.youtube.com/embed/4UZrsTqkcW4",
    desc: "Komponen adalah blok pembangun utama dari aplikasi React. Komponen dapat berupa fungsi atau kelas. Komponen dapat berupa fungsi atau kelas.",
  },
  {
    id: 9,
    materialId: 3,
    categoryId: 2,
    name: "React Hooks",
    link: "https://www.youtube.com/embed/9U3IhLAnSxM",
    desc: "Hooks adalah fitur baru dalam React 16.8 yang memungkinkan Anda menggunakan state dan fitur React lainnya tanpa menulis kelas.",
  },
  {
    id: 10,
    materialId: 4,
    categoryId: 2,
    name: "React Router Basics",
    link: "https://www.youtube.com/embed/Law7wfdg_ls",
    desc: "React Router adalah library yang digunakan untuk membuat routing di React. Routing adalah proses mengatur alur aplikasi web sehingga pengguna dapat berpindah antar halaman.",
  },
  {
    id: 11,
    materialId: 4,
    categoryId: 2,
    name: "React Router Nested Routes",
    link: "https://www.youtube.com/embed/5LrDIWkK_Bc",
    desc: "React Router adalah library yang digunakan untuk membuat routing di React. Routing adalah proses mengatur alur aplikasi web sehingga pengguna dapat berpindah antar halaman.",
  },
];

const getPosts = (id) => {
  const group = groups.find((group) => group.id === parseInt(id));
  return group.posts;
};

// getCommentCountByPostId
const getCommentCount = (id) => {
  const group = groups.find((group) => group.id === parseInt(id));
  const posts = group.posts;
  let commentCount = 0;
  posts.forEach((post) => {
    commentCount += post.comment.length;
  });
  return commentCount;
};

const showFormattedDate = (date) => {
  const dateObj = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return dateObj.toLocaleDateString("id-ID", options);
};

const getCategoryById = (id) => {
  return categories.find((category) => category.id === parseInt(id));
};

const getMaterialByCategoryId = (id) => {
  return materials.filter((material) => material.categoriId === parseInt(id));
};

const getSubMaterialByMaterialId = (id) => {
  return subMaterials.filter((subMaterial) => subMaterial.materialId === id);
};

export {
  getPosts,
  getCommentCount,
  showFormattedDate,
  getCategoryById,
  getMaterialByCategoryId,
  getSubMaterialByMaterialId,
};
