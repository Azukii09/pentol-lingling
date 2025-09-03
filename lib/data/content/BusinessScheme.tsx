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
                description:"Penjualan kami banyak melalui: Café & Resto, Frozen Food, Bakso, Sekolah, Ivent, dll.",
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
                description:"Reseller bisa mengambil produk dari agen atau pusat, dan menjual ulang secara fleksibel serta tdk ada min pembelian untuk reseller",
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
                description: "Our sales channels include: Cafés & Restaurants, Frozen Food, Meatballs, Schools, Events, etc.",
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
                description: "Resellers can obtain products from agents or center, and resell flexibly with no minimum purchase requirement.",
            },
        ]
    }
]