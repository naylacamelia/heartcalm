export const navLinks = [
  { id: "bahan", label: "Bahan" },
  { id: "manfaat", label: "Manfaat" },
  { id: "permasalahan", label: "Permasalahan" },
  { id: "hasil-penggunaan", label: "Hasil Penggunaan" },
  { id: "testimoni", label: "Testimoni" },
];

export const heroIngredients = [
  {
    name: "10% Panthenol",
    tag: "Pro-Vitamin B5",
    desc: ["Menenangkan kulit berjerawat", "Merawat kulit kemerahan & sensitif"],
    benefit: "Menenangkan inflamasi dan mempercepat proses regenerasi skin barrier yang rusak.",
  },
  {
    name: "5X Ceramide",
    tag: "Skin Barrier Shield",
    desc: ["Merawat skin barrier", "Mengunci kelembapan optimal"],
    benefit: "Kombinasi 5 jenis ceramide esensial untuk memperkuat pertahanan alami lapisan kulit terluar.",
  },
  {
    name: "Compound Ection",
    tag: "Deep Hydration Factor",
    desc: ["Merawat dan menghidrasi kulit", "Mencegah hilangnya air transepidermal"],
    benefit: "Molekul pelindung stres osmotik yang menjaga kelembapan kulit bertahan hingga 24 jam.",
  },
  {
    name: "Pure Centella",
    tag: "Cica Soothing Complex",
    desc: ["Meredakan jerawat meradang", "Meningkatkan hidrasi pada kulit"],
    benefit: "Ekstrak Centella Asiatica murni dengan Madecassoside untuk meredakan kemerahan aktif.",
  },
];

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const slides = [
  {
    id: 1,
    img: `${base}/asset/background/bg-permasalahan-3.svg`,
    card: {
      kicker: "Panggilan untuk...",
      lines: ["Pejuang Acne-Prone Skin,", "Merapat!"],
      cls: "uppercase",
    },
  },
  {
    id: 2,
    img: `${base}/asset/background/permasalahan-jerawat.svg`,
    label: "Jerawat Meradang",
    desc: "Jerawat kemerahan dan bruntusan yang terus berulang.",
  },
  {
    id: 3,
    img: `${base}/asset/background/permasalahan-gatal.svg`,
    label: "Gatal & Iritasi",
    desc: "Sensasi perih dan gatal akibat barrier kulit melemah.",
  },
  {
    id: 4,
    img: `${base}/asset/background/permasalahan-kemerahan.svg`,
    label: "Kemerahan Ekstrem",
    desc: "Kulit reaktif yang memerah terpapar matahari atau polusi.",
  },
  {
    id: 5,
    img: `${base}/asset/background/permasalahan-sensitif.svg`,
    label: "Sensitif & Dehidrasi",
    desc: "Berminyak di luar namun terasa kering dan ketarik di dalam.",
  },
  {
    id: 6,
    img: `${base}/asset/background/bg-permasalahan-3.svg`,
    card: {
      kicker: "Dapat diatasi dengan...",
      lines: ["10% Panthenol", "Barrier Repair Water Gel", "Moisturizer"],
      cls: "capitalize",
    },
  },
];

export const benefits = [
  {
    title: "Instant Cooling Sensation",
    desc: "Sensasi sejuk yang langsung menenangkan kulit memerah dan memberikan rasa nyaman saat diaplikasikan.",
  },
  {
    title: "Memperkuat Skin Barrier",
    desc: "Kombinasi 10% Panthenol & 5X Ceramide memperbaiki struktur pelindung kulit dari agresi lingkungan.",
  },
  {
    title: "Mengontrol Minyak Berlebih",
    desc: "Menyeimbangkan produksi sebum tanpa menghilangkan hidrasi esensial kulit acne-prone.",
  },
  {
    title: "Tekstur Ringan Tanpa Lengket",
    desc: "Water gel berdaya serap tinggi yang langsung menyatu dengan kulit tanpa rasa greasy atau gerah.",
  },
];

export const clinicalResults = [
  {
    value: "95%",
    label: "Kemerahan Berkurang",
    desc: "Responden merasakan kulit tampak lebih tenang dan kemerahan mereda.",
  },
  {
    value: "92%",
    label: "Jerawat Terasa Mereda",
    desc: "Jerawat aktif dan bruntusan tampak lebih terkontrol dalam 7 hari.",
  },
  {
    value: "92%",
    label: "Kelembapan Meningkat",
    desc: "Kadar air dan hidrasi kulit bertahan sepanjang hari tanpa rasa berminyak.",
  },
];

export const testimonials = [
  {
    name: "Nadya",
    role: "Mahasiswa • Acne-Prone",
    img: `${base}/asset/profile-user/nadya.svg`,
    text: "Teksturnya ringan dan cepat menyerap. Setelah sekitar seminggu pemakaian, kulit terasa lebih lembap dan kelihatan lebih tenang. Gak bikin jerawatan baru!",
    rating: 5,
  },
  {
    name: "Mia",
    role: "Content Creator • Kulit Sensitif",
    img: `${base}/asset/profile-user/mia.svg`,
    text: "Biasanya pakai moisturizer takut lengket, tapi yang ini nyaman banget dengan cooling effect-nya. Kemerahan di area pipi juga tampak berkurang signifikan.",
    rating: 5,
  },
  {
    name: "Alya",
    role: "Beauty Enthusiast • Oily Skin",
    img: `${base}/asset/profile-user/alya.svg`,
    text: "Cocok untuk kulitku yang mudah berjerawat. Setelah rutin dipakai, kulit terasa lebih lembap dan jerawat aktif terlihat lebih kalem tanpa bikin greasy di siang hari.",
    rating: 5,
  },
  {
    name: "Luna",
    role: "Freelancer • Barrier Damaged",
    img: `${base}/asset/profile-user/luna.svg`,
    text: "Tekstur gel-nya ringan tapi ampuh menenangkan kulit sensitifku. Membuat wajah tampak sehat dan segar tanpa rasa lengket sama sekali. Definisi penyelamat barrier!",
    rating: 5,
  },
];

export const fullIngredientsList =
  "Water, Panthenol (10%), Centella Asiatica Extract, Glycerin, Butylene Glycol, Ceramide NP, Ceramide AP, Ceramide EOP, Ceramide NS, Ceramide AS, Madecassoside, Asiaticoside, Compound Ection, Sodium Hyaluronate, Allantoin, Betaine, Cholesterol, Phytosphingosine, Dipotassium Glycyrrhizate, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, 1,2-Hexanediol, Ethylhexylglycerin, Disodium EDTA.";

export const ingredients = [
  { name: "Panthenol (Pro-Vitamin B5)", desc: "Menenangkan kulit, mengurangi kemerahan, dan membantu memperkuat skin barrier." },
  { name: "Ceramide", desc: "Membantu menjaga lapisan pelindung kulit agar tetap terjaga dan tidak mudah kehilangan kelembapan." },
  { name: "Centella Asiatica (Pure Centella)", desc: "Menenangkan iritasi, meredakan kemerahan, dan mendukung pemulihan kulit acne-prone." },
  { name: "Compound Ection", desc: "Membantu menjaga hidrasi kulit sehingga terasa lembut dan nyaman sepanjang hari." },
];
