import {
    HiAdjustmentsHorizontal, HiBars3,
    HiHome,
} from "react-icons/hi2";
import {GoDotFill} from "react-icons/go";
import {VerticalNavigationProps} from "@/lib/type/navigation";
import {PiArticleNyTimes} from "react-icons/pi";


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
                link:"/",
                icon:<HiHome className={"size-4"}/>,
            },
            {
                name:"About",
                link:"/about",
                icon:<HiAdjustmentsHorizontal className={"size-4"}/>,
            },
            {
                name:"Articles",
                link:"/articles",
                icon:<PiArticleNyTimes className={"size-4"}/>,
            },
            {
                name:"Level 1",
                link:"/menu",
                icon:<HiBars3 className={"size-4"}/>,
                navigation:[
                    {
                        name:"Level 2a",
                        link:"/menu/level-1/level-2a",
                        icon:<GoDotFill className={"size-2"}/>,
                        navigation:[
                            {
                                name:"Level 3a",
                                link:"/menu/level-1/level-2a/level-3a",
                                icon:<GoDotFill className={"size-2"}/>,
                                navigation:[
                                    {
                                        name:"Level 4a",
                                        link:"/menu/level-1/level-2a/level-3a/level-4a",
                                        icon:<GoDotFill className={"size-2"}/>,
                                    },
                                    {
                                        name:"Level 4b",
                                        link:"/menu/level-1/level-2a/level-3a/level-4b",
                                        icon:<GoDotFill className={"size-2"}/>,
                                    }
                                ]
                            },
                            {
                                name:"Level 3b",
                                link:"/menu/level-1/level-2a/level-3b",
                                icon:<GoDotFill className={"size-2"}/>,
                            }
                        ]
                    },
                    {
                        name:"Level 2b",
                        link:"/menu/level-1/level-2b",
                        icon:<GoDotFill className={"size-2"}/>,
                        navigation:[
                            {
                                name:"Level 3a",
                                link:"/menu/level-1/level-2a/level-3a",
                                icon:<GoDotFill className={"size-2"}/>,
                                navigation:[
                                    {
                                        name:"Level 4a",
                                        link:"/menu/level-1/level-2a/level-3a/level-4a",
                                        icon:<GoDotFill className={"size-2"}/>,
                                    },
                                    {
                                        name:"Level 4b",
                                        link:"/menu/level-1/level-2a/level-3a/level-4b",
                                        icon:<GoDotFill className={"size-2"}/>,
                                    }
                                ]
                            },
                            {
                                name:"Level 3b",
                                link:"/menu/level-1/level-2a/level-3b",
                                icon:<GoDotFill className={"size-2"}/>,
                            }
                        ]
                    },
                ]
            },
        ]
    },
    {
        id:2,
        locale:"id",
        navigation:[
            {
                name:"Beranda",
                link:"/",
                icon:<HiHome className={"size-4"}/>,
            },
            {
                name:"Tentang",
                link:"/about",
                icon:<HiAdjustmentsHorizontal className={"size-4"}/>,
            },
            {
                name:"Artikel",
                link:"/articles",
                icon:<PiArticleNyTimes className={"size-4"}/>,
            },
            {
                name:"Level 1",
                link:"/menu",
                icon:<HiBars3 className={"size-4"}/>,
                navigation:[
                    {
                        name:"Level 2a",
                        link:"/menu/level-1/level-2a",
                        icon:<GoDotFill className={"size-2"}/>,
                        navigation:[
                            {
                                name:"Level 3a",
                                link:"/menu/level-1/level-2a/level-3a",
                                icon:<GoDotFill className={"size-2"}/>,
                                navigation:[
                                    {
                                        name:"Level 4a",
                                        link:"/menu/level-1/level-2a/level-3a/level-4a",
                                        icon:<GoDotFill className={"size-2"}/>,
                                    },
                                    {
                                        name:"Level 4b",
                                        link:"/menu/level-1/level-2a/level-3a/level-4b",
                                        icon:<GoDotFill className={"size-2"}/>,
                                    }
                                ]
                            },
                            {
                                name:"Level 3b",
                                link:"/menu/level-1/level-2a/level-3b",
                                icon:<GoDotFill className={"size-2"}/>,
                            }
                        ]
                    },
                ]
            },
        ]
    },
]