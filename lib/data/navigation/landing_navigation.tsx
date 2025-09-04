import {
    HiHome,
} from "react-icons/hi2";
import {VerticalNavigationProps} from "@/lib/type/navigation";
import {BsFillExclamationCircleFill} from "react-icons/bs";
import {AiOutlineProduct} from "react-icons/ai";
import {MdSchema} from "react-icons/md";
import {FaPhone} from "react-icons/fa";


export const landingNavigationData :{
    id:number;
    locale:string;
    navigation:VerticalNavigationProps[];
}[]  = [
    {
        id:1,
        locale:"en",
        navigation:[
            {
                name:"Home",
                link:"#home",
                icon:<HiHome className={"size-4"}/>,
            },
            {
                name:"About Us",
                link:"#about",
                icon:<BsFillExclamationCircleFill className={"size-4"}/>,
            },
            {
                name:"Products",
                link:"#product",
                icon:<AiOutlineProduct className={"size-4"}/>,
            },
            {
                name:"Business Scheme",
                link:"#scheme",
                icon:<MdSchema className={"size-4"}/>,
            },
            // {
            //     name:"Our Teams",
            //     link:"#teams",
            //     icon:<FaUsers className={"size-4"}/>,
            // },
            {
                name:"Contact Us",
                link:"#contact",
                icon:<FaPhone className={"size-4"}/>,
            },
        ]
    },
    {
        id:2,
        locale:"id",
        navigation:[
            {
                name: "Beranda",
                link: "#home",
                icon: <HiHome className={"size-4"}/>,
            },
            {
                name: "Tentang Kami",
                link: "#about",
                icon: <BsFillExclamationCircleFill className={"size-4"}/>,
            },
            {
                name: "Produk",
                link: "#product",
                icon: <AiOutlineProduct className={"size-4"}/>,
            },
            {
                name: "Skema Bisnis",
                link: "#scheme",
                icon: <MdSchema className={"size-4"}/>,
            },
            // {
            //     name: "Tim Kami",
            //     link: "#teams",
            //     icon: <FaUsers className={"size-4"}/>,
            // },
            {
                name: "Hubungi Kami",
                link: "#contact",
                icon: <FaPhone className={"size-4"}/>,
            },
        ]
    },
]