import Nav from "./Nav";
import style from "styles/Layout.module.css";

export default function Layout({ children }){
    return(
        <>
        <Nav/>
        <div className={style.container}>
        <main className={style.main}>{children}</main>
        </div>
        </>
    );
}

