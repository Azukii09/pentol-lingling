import {MdPointOfSale} from "react-icons/md";
import {CiDeliveryTruck} from "react-icons/ci";
import {FaHouseUser, FaUsers} from "react-icons/fa";

export const BusinessSchemeData = [
    {
        id:1,
        locale:"id",
        data:[
            {
                icon:<MdPointOfSale className={"size-12"}/>,
                title:"Penjualan",
                description:"Penjualan kami banyak melalui Agen & Reseller , Frozen Food , Bakso , Pentol Rombong, Dapur Gizi, Ivent, dll.",
            },
            {
                icon:<CiDeliveryTruck className={"size-12"}/>,
                title:"Pengiriman",
                description:"Pengiriman dilakukan menggunakan: Kalog, Bus, Ekspedisi, Kurir atau Kami kirim sendiri.",
            },
            {
                icon:<FaHouseUser className={"size-12"}/>,
                title:"Agen",
                description:"Agen adalah mitra utama di daerah yg bertugas mendistribusikan & memasarkan produk kami.",
            },
            {
                icon:<FaUsers className={"size-12"}/>,
                title:"Reseller",
                description:"Reseller bisa mengambil produk dari agen atau pusat, dan menjual ulang secara fleksibel dan bisa dijual secara matang atau frozen",
            },

        ]
    },
    {
        id:2,
        locale:"en",
        data: [
            {
                icon: <MdPointOfSale className={"size-12"}/>,
                title: "Sales",
                description: "Our sales are primarily through Agents & Resellers, Frozen Food, Meatballs, Street Food Carts, Nutrition Kitchen, Events, etc.",
            },
            {
                icon: <CiDeliveryTruck className={"size-12"}/>,
                title: "Delivery",
                description: "Deliveries are made using: Kalog, Bus, Expedition, Courier or Direct delivery from us.",
            },
            {
                icon: <FaHouseUser className={"size-12"}/>,
                title: "Agent",
                description: "Agents are our main partners in regional areas responsible for distributing & marketing our products.",
            },
            {
                icon: <FaUsers className={"size-12"}/>,
                title: "Reseller",
                description: "Resellers can obtain products from agents or center, and flexibly resell them either cooked or frozen",
            },
        ]
    }
]

export const DeliverySchedule = [
    {
        id:1,
        locale:"id",
        data:[
            {
                city:"Tuban, Lamongan, dan gresik",
                day:"Hari Senin dan Jumat, (jadwal dapat berubah sewaktu-waktu).",
            },
            {
                city:"Bojonegoro dan Cepu",
                day:"Hari Kamis, (jadwal dapat berubah sewaktu-waktu).",
            },
            {
                city:"Surabaya, Sidoarjo, dan Madura",
                day:"Hari Selasa dan Sabtu, (jadwal dapat berubah sewaktu-waktu).",
            },
            {
                city:"Jember dan Pasuruan",
                day:"Hari Rabu, (jadwal dapat berubah sewaktu-waktu)",
            },
            {
                city:"Kalimantan",
                day:"Menyesuaikan Jadwal Kapal Laut.",
            },
            {
                city:"Jawa Barat",
                day:"Setiap Hari Kecuali tangal merah dan hari libur.",
            },
        ]
    },
    {
        id:2,
        locale:"en",
        data: [
            {
                city: "Tuban, Lamongan, and Gresik",
                day: "Monday and Friday, (schedule subject to change).",
            },
            {
                city: "Bojonegoro and Cepu",
                day: "Thursday, (schedule subject to change).",
            },
            {
                city: "Surabaya, Sidoarjo, and Madura",
                day: "Tuesday and Saturday, (schedule subject to change).",
            },
            {
                city: "Jember and Pasuruan",
                day: "Wednesday, (schedule subject to change)",
            },
            {
                city: "Kalimantan",
                day: "According to Ship Schedule.",
            },
            {
                city: "West Java",
                day: "Every Day Except public holidays.",
            },
        ]
    }
]