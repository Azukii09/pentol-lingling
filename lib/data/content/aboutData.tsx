const monthsSinceStart = Math.round((new Date(2025, 8, 2).getTime() - new Date(2024, 1, 1).getTime()) / (1000 * 60 * 60 * 24 * 30.44));
export const aboutData = [
    {
        id:1,
        locale:"id",
        data:{
            aboutDescription:[`Pentol Ling Ling adalah brand kuliner yang lahir di Kepohbaru, Bojonegoro, Jawa Timur sejak Februari 2024. Selama ${monthsSinceStart} bulan perjalanan hingga kini, Pentol Ling Ling konsisten menghadirkan produk kuliner sehat tanpa bahan pengawet, dengan harga yang ramah dan cocok untuk segala usia. Berawal dari cita-cita sederhana untuk menjadi ikon kuliner Indonesia, Pentol Ling Ling membawa visi besar: menghadirkan usaha yang berkah dan barokah tanpa riba, sekaligus membuka peluang usaha bagi masyarakat luas melalui sistem agen dan reseller.`,"Dengan berbagai produk seperti pentol ayam, pentol sapi, dimsum siomay, tahu bakso, pangsit ayam, chili oil, hingga bumbu kuah bakso, Pentol Ling Ling telah dipercaya oleh café, resto, frozen food, sekolah, hingga berbagai event. Lebih dari sekadar produk kuliner, Pentol Ling Ling berkomitmen melahirkan pengusaha-pengusaha baru yang mampu bersaing di masa depan, menjaga inovasi, dan memberikan dampak positif bagi Indonesia."],
        }
    },
    {
        id:2,
        locale:"en",
        data:{
            aboutDescription:[`Pentol Ling Ling is a culinary brand founded in Kepohbaru, Bojonegoro, East Java, since February 2024. Over the past ${monthsSinceStart} months, Pentol Ling Ling has consistently delivered healthy and preservative-free culinary products at affordable prices, suitable for all ages. Starting with a simple dream to become an icon of Indonesian cuisine, Pentol Ling Ling carries a strong vision: building a blessed and riba-free business, while creating opportunities for communities through its agent and reseller system.`,"Offering a wide variety of products such as chicken pentol, beef pentol, dim sum siomay, tofu meatballs, chicken wontons, chili oil, and bakso soup seasoning, Pentol Ling Ling has been trusted by cafés, restaurants, frozen food outlets, schools, and even large events. More than just food, Pentol Ling Ling is committed to fostering new entrepreneurs, driving continuous innovation, and spreading positive impact across Indonesia."],
        }
    },
]

export const aboutImg = "/img/logo.png"