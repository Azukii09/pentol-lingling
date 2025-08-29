export interface VerticalNavigationProps{
    name:string;
    link:string;
    icon?:React.ReactNode;
    navigation?:VerticalNavigationProps[];
}