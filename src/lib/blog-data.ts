/**
 * Data blog statis. Bentuknya sengaja dibuat seperti respons API/CMS
 * (slug, tanggal ISO, dll.) supaya nanti cukup mengganti isi fungsi
 * `getAllPosts` / `getPostBySlug` dengan fetch tanpa mengubah UI.
 */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  cover: string;
  category: string;
  tags: string[];
  author: string;
  /** ISO date, contoh "2026-10-12" */
  publishedAt: string;
  readTime: number;
  featured?: boolean;
}

const AUTHOR = "Tim Media HSIBS";
const img = (file: string) => `/assets/thumbnail/page_gallery/${file}`;

const posts: BlogPost[] = [
  {
    slug: "festival-mhq-hsibs",
    title: "HSIBS Festival MHQ: Ajang Unjuk Hafalan Santri",
    excerpt:
      "Musabaqah Hifdzil Qur'an tingkat sekolah menjadi panggung bagi santri untuk menguji hafalan dan kelancaran tilawah mereka.",
    content: [
      "HSIBS Festival menghadirkan Musabaqah Hifdzil Qur'an (MHQ) sebagai salah satu agenda utamanya. Santri tampil membawakan hafalan sesuai kategori juz, disimak langsung oleh para dewan juri.",
      "Lebih dari sekadar lomba, MHQ menjadi sarana evaluasi program tahfidz sekaligus motivasi bagi santri untuk terus menjaga dan menambah hafalannya.",
    ],
    cover: img("hsibs_festival_mhq.jpg"),
    category: "Festival",
    tags: ["Tahfidz", "Festival"],
    author: AUTHOR,
    publishedAt: "2026-10-28",
    readTime: 4,
    featured: true,
  },
  {
    slug: "tadabur-alam-belajar-dari-ciptaan-allah",
    title: "Tadabur Alam: Belajar dari Ciptaan Allah",
    excerpt:
      "Santri diajak keluar kelas untuk merenungi kebesaran Allah melalui alam, sekaligus melatih kebersamaan dan ketangguhan.",
    content: [
      "Kegiatan Tadabur Alam mengajak santri menjelajah alam terbuka. Di sela perjalanan, santri diajak merenungkan ayat-ayat kauniyah yang tersebar di sekitar mereka.",
      "Selain menguatkan keimanan, kegiatan ini juga melatih kerja sama tim, kemandirian, dan rasa tanggung jawab antar santri.",
    ],
    cover: img("tadabur_alam.JPG"),
    category: "Outdoor",
    tags: ["Outdoor", "Karakter"],
    author: AUTHOR,
    publishedAt: "2026-10-20",
    readTime: 3,
    featured: true,
  },
  {
    slug: "the-real-market-belajar-entrepreneurship",
    title: "The Real Market: Santri Belajar Berwirausaha",
    excerpt:
      "Pasar simulasi yang dikelola santri — mulai dari produksi, promosi, hingga transaksi — sebagai bekal jiwa entrepreneurship.",
    content: [
      "Melalui The Real Market, santri merancang produk, menghitung modal, hingga melayani pembeli secara langsung. Semua dikelola dalam kelompok.",
      "Kegiatan ini menumbuhkan keberanian, kreativitas, dan pemahaman tentang muamalah yang jujur sesuai tuntunan syariat.",
    ],
    cover: img("the_real_market.jpg"),
    category: "Entrepreneurship",
    tags: ["Entrepreneurship", "Project"],
    author: AUTHOR,
    publishedAt: "2026-10-12",
    readTime: 4,
    featured: true,
  },
  {
    slug: "campus-tour-stai-aisyah-dan-ui",
    title: "Campus Tour ke STAI Aisyah & Universitas Indonesia",
    excerpt:
      "Santri kelas 12 berkunjung ke kampus untuk mengenal pilihan jurusan dan suasana perkuliahan sebelum lulus.",
    content: [
      "Campus Tour menjadi agenda tahunan bagi santri kelas 12. Mereka mendapat gambaran langsung tentang dunia kampus, jurusan, dan proses seleksi masuk.",
      "Harapannya, santri dapat menentukan langkah setelah lulus dengan lebih mantap dan terarah.",
    ],
    cover: img("campus_tour.jpg"),
    category: "Edukasi",
    tags: ["Kelas 12", "Kampus"],
    author: AUTHOR,
    publishedAt: "2026-10-03",
    readTime: 3,
    featured: true,
  },
  {
    slug: "dauroh-quran-dan-mutun-ramadhan",
    title: "Dauroh Qur'an & Mutun di Bulan Ramadhan",
    excerpt:
      "Program intensif selama Ramadhan untuk memperkuat hafalan Al-Qur'an dan matan-matan ilmu dasar.",
    content: [
      "Selama Ramadhan, santri mengikuti dauroh intensif yang berfokus pada murajaah Al-Qur'an dan hafalan mutun.",
      "Suasana Ramadhan yang penuh berkah membuat santri lebih semangat mengejar target hafalannya.",
    ],
    cover: img("dauroh_quran_dan_mutun.jpg"),
    category: "Diniyyah",
    tags: ["Diniyyah", "Ramadhan"],
    author: AUTHOR,
    publishedAt: "2026-09-25",
    readTime: 4,
  },
  {
    slug: "sosialisasi-pemadam-kebakaran",
    title: "Sosialisasi Keselamatan Bersama Pemadam Kebakaran",
    excerpt:
      "Santri mendapat edukasi penanganan kebakaran langsung dari petugas profesional, termasuk praktik memakai APAR.",
    content: [
      "Petugas pemadam kebakaran memberikan materi tentang penyebab kebakaran, langkah pencegahan, dan cara evakuasi yang aman.",
      "Santri juga berkesempatan mempraktikkan penggunaan alat pemadam api ringan secara langsung.",
    ],
    cover: img("sosialisasi_pemadam_kebakaran.jpg"),
    category: "Edukasi",
    tags: ["Keselamatan", "Edukasi"],
    author: AUTHOR,
    publishedAt: "2026-09-18",
    readTime: 3,
  },
  {
    slug: "ramadhan-berkah-berbagi-takjil",
    title: "Ramadhan Berkah: Santri Berbagi Takjil",
    excerpt:
      "Santri turun ke jalan membagikan takjil kepada masyarakat sebagai wujud kepedulian di bulan suci.",
    content: [
      "Menjelang waktu berbuka, santri membagikan paket takjil kepada pengguna jalan dan warga sekitar.",
      "Kegiatan ini melatih kepekaan sosial dan semangat berbagi yang menjadi bagian dari pembinaan karakter.",
    ],
    cover: img("ramadhan_berkah.jpeg"),
    category: "Ramadhan",
    tags: ["Ramadhan", "Sosial"],
    author: AUTHOR,
    publishedAt: "2026-09-10",
    readTime: 2,
  },
  {
    slug: "festival-talkshow-remaja",
    title: "Talkshow Remaja: Berbagi Cerita dan Inspirasi",
    excerpt:
      "Forum diskusi yang mempertemukan santri dengan narasumber untuk membahas tantangan remaja masa kini.",
    content: [
      "Talkshow Remaja menjadi ruang bagi santri untuk bertanya dan berdiskusi tentang isu-isu yang dekat dengan kehidupan mereka.",
      "Narasumber berbagi pengalaman dan nasihat agar santri tumbuh menjadi remaja yang berprinsip.",
    ],
    cover: img("hsibs_festival_talkshow.jpg"),
    category: "Festival",
    tags: ["Festival", "Remaja"],
    author: AUTHOR,
    publishedAt: "2026-09-02",
    readTime: 3,
  },
  {
    slug: "project-event-organizer-kelas-11",
    title: "Project Event Organizer oleh Santri Kelas 11",
    excerpt:
      "Santri kelas 11 merancang dan menjalankan sebuah acara dari nol sebagai proyek pembelajaran manajemen.",
    content: [
      "Mulai dari konsep, susunan panitia, anggaran, hingga hari pelaksanaan — semua dikerjakan santri dengan bimbingan pengajar.",
      "Proyek ini melatih kepemimpinan, komunikasi, dan kemampuan menyelesaikan masalah secara nyata.",
    ],
    cover: img("project_event.jpg"),
    category: "Project",
    tags: ["Project", "Kelas 11"],
    author: AUTHOR,
    publishedAt: "2026-08-26",
    readTime: 4,
  },
  {
    slug: "lomba-17-agustus",
    title: "Semarak Lomba 17 Agustus di Asrama",
    excerpt:
      "Peringatan kemerdekaan dirayakan dengan beragam lomba yang menjunjung sportivitas dan kekompakan.",
    content: [
      "Berbagai lomba digelar untuk memeriahkan hari kemerdekaan, dari lomba ketangkasan hingga lomba kelompok.",
      "Santri belajar menang dan kalah dengan lapang dada, serta mempererat ukhuwah antar kamar.",
    ],
    cover: img("lomba17_agustus.jpeg"),
    category: "Kegiatan",
    tags: ["Kemerdekaan", "Lomba"],
    author: AUTHOR,
    publishedAt: "2026-08-18",
    readTime: 2,
  },
  {
    slug: "nusantara-spirit-day",
    title: "Nusantara Spirit Day: Merayakan Keberagaman Indonesia",
    excerpt:
      "Santri menampilkan kekayaan budaya Nusantara sebagai wujud cinta tanah air.",
    content: [
      "Nusantara Spirit Day diisi dengan penampilan dan pameran budaya dari berbagai daerah di Indonesia.",
      "Kegiatan ini menumbuhkan rasa bangga terhadap bangsa sekaligus menghargai keberagaman.",
    ],
    cover: img("nusantara_spirit_day.JPG"),
    category: "Kegiatan",
    tags: ["Budaya", "Nasionalisme"],
    author: AUTHOR,
    publishedAt: "2026-08-10",
    readTime: 3,
  },
  {
    slug: "pelantikan-osis-gen-2",
    title: "Pelantikan OSIS Generasi Kedua",
    excerpt:
      "Pengurus OSIS generasi kedua resmi dilantik dan siap menjalankan program kerja untuk santri.",
    content: [
      "Prosesi pelantikan berlangsung khidmat, diawali pembacaan ikrar oleh para pengurus baru.",
      "OSIS menjadi wadah santri belajar berorganisasi, memimpin, dan melayani sesama.",
    ],
    cover: img("pelantikan_osis_gen2.jpg"),
    category: "Organisasi",
    tags: ["OSIS", "Kepemimpinan"],
    author: AUTHOR,
    publishedAt: "2026-08-01",
    readTime: 2,
  },
  {
    slug: "kunjungan-panti-asuhan",
    title: "Kunjungan Panti Asuhan: Berbagi Kasih Sayang",
    excerpt:
      "Santri mengunjungi panti asuhan untuk bersilaturahmi, berbagi bingkisan, dan mengisi kegiatan bersama.",
    content: [
      "Dalam kunjungan ini santri berinteraksi langsung dengan adik-adik panti melalui permainan dan kajian singkat.",
      "Pengalaman ini mengajarkan rasa syukur dan kepedulian terhadap sesama.",
    ],
    cover: img("kunjungan_panti.jpg"),
    category: "Sosial",
    tags: ["Sosial", "Bakti"],
    author: AUTHOR,
    publishedAt: "2026-07-24",
    readTime: 3,
  },
  {
    slug: "hsibs-goes-to-masjid",
    title: "HSIBS Goes to Masjid",
    excerpt:
      "Santri berkunjung ke masjid-masjid sekitar untuk belajar sejarah, adab, dan memakmurkan rumah Allah.",
    content: [
      "Program ini mengenalkan santri pada peran masjid sebagai pusat ibadah dan pembinaan umat.",
      "Santri juga ikut serta dalam kegiatan bersih-bersih dan kajian bersama jamaah.",
    ],
    cover: img("hsi_goes_to_masjid.jpg"),
    category: "Diniyyah",
    tags: ["Masjid", "Adab"],
    author: AUTHOR,
    publishedAt: "2026-07-15",
    readTime: 3,
  },
  {
    slug: "hsibs-tree-climbing",
    title: "Tree Climbing: Menantang Diri di Alam Terbuka",
    excerpt:
      "Kegiatan panjat pohon yang aman dan terarah untuk melatih keberanian dan fokus santri.",
    content: [
      "Dengan pendampingan instruktur dan perlengkapan keamanan, santri mencoba memanjat pohon dengan berbagai tingkat kesulitan.",
      "Kegiatan ini melatih keberanian, konsentrasi, dan kepercayaan pada tim.",
    ],
    cover: img("tree_climbing.jpg"),
    category: "Outdoor",
    tags: ["Outdoor", "Petualangan"],
    author: AUTHOR,
    publishedAt: "2026-07-06",
    readTime: 2,
  },
  {
    slug: "ramadhan-connect",
    title: "Ramadhan Connect: Kebersamaan di Bulan Suci",
    excerpt:
      "Rangkaian acara Ramadhan yang mempererat hubungan santri, orang tua, dan para asatidzah.",
    content: [
      "Ramadhan Connect diisi dengan kajian, buka puasa bersama, dan berbagai kegiatan yang melibatkan seluruh warga sekolah.",
      "Momen ini menjadi ajang silaturahmi yang menguatkan ikatan keluarga besar HSIBS.",
    ],
    cover: img("ramadhan_conext.jpg"),
    category: "Ramadhan",
    tags: ["Ramadhan", "Kebersamaan"],
    author: AUTHOR,
    publishedAt: "2026-06-28",
    readTime: 3,
  },
  {
    slug: "farewell-party-global-english",
    title: "Farewell Party with Global English",
    excerpt:
      "Perpisahan bernuansa internasional yang sekaligus menjadi ajang praktik bahasa Inggris santri.",
    content: [
      "Santri menampilkan pidato, drama, dan presentasi dalam bahasa Inggris di hadapan para guru dan teman.",
      "Acara ini menutup program Global English dengan penuh kesan dan kepercayaan diri.",
    ],
    cover: img("farewell_party.jpg"),
    category: "Kegiatan",
    tags: ["Bahasa", "Event"],
    author: AUTHOR,
    publishedAt: "2026-06-19",
    readTime: 3,
  },
  {
    slug: "ekskul-dan-workshop",
    title: "Ekskul dan Workshop: Mengasah Minat dan Bakat",
    excerpt:
      "Beragam ekstrakurikuler dan workshop disiapkan untuk mengembangkan potensi santri di luar kelas.",
    content: [
      "Santri bebas memilih ekskul sesuai minat, mulai dari olahraga, seni, hingga teknologi.",
      "Workshop berkala menghadirkan praktisi untuk memberikan keterampilan yang aplikatif.",
    ],
    cover: img("eskul_dan_workshop.jpeg"),
    category: "Edukasi",
    tags: ["Ekskul", "Workshop"],
    author: AUTHOR,
    publishedAt: "2026-06-10",
    readTime: 3,
  },
  {
    slug: "morning-rise",
    title: "Morning Rise: Memulai Hari dengan Semangat",
    excerpt:
      "Rutinitas pagi santri yang diisi ibadah, olahraga ringan, dan persiapan belajar.",
    content: [
      "Hari santri dimulai sejak subuh dengan shalat berjamaah, dzikir pagi, lalu dilanjutkan olahraga ringan.",
      "Rutinitas yang teratur membantu santri disiplin dan siap menerima pelajaran.",
    ],
    cover: img("morning_rise.jpg"),
    category: "Kegiatan",
    tags: ["Asrama", "Rutinitas"],
    author: AUTHOR,
    publishedAt: "2026-06-01",
    readTime: 2,
  },
  {
    slug: "mpls-santri-baru",
    title: "MPLS: Langkah Awal Santri Baru",
    excerpt:
      "Masa pengenalan lingkungan sekolah membantu santri baru beradaptasi dengan kehidupan asrama.",
    content: [
      "Selama MPLS, santri baru dikenalkan dengan program, aturan, fasilitas, dan para pembimbing asrama.",
      "Rangkaian kegiatan dikemas menyenangkan agar santri cepat merasa nyaman dan betah.",
    ],
    cover: img("MPLS.jpg"),
    category: "Kegiatan",
    tags: ["Santri Baru", "Orientasi"],
    author: AUTHOR,
    publishedAt: "2026-05-22",
    readTime: 3,
  },
];

const byNewest = (a: BlogPost, b: BlogPost) => b.publishedAt.localeCompare(a.publishedAt);

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(byNewest);
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((p) => p.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  return Array.from(new Set(getAllPosts().map((p) => p.category)));
}

export function formatPostDate(iso: string): string {
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(`${iso}T00:00:00`)
  );
}
