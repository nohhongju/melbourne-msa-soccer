import Link from "next/link";
import style from "styles/Nav.module.css";

export default function Nav(){
    return(
        <nav className={style.nav}>
            <ul>
                <li className={style.li}> <Link href='/'>Home</Link></li>
                <li className={style.li}> <Link href='/basic/calc'>Calc</Link></li>
                <li className={style.li}> <Link href='/basic/counter'>Counter</Link></li>
                <li className={style.li}> <Link href='/basic/bmi'>BMI</Link></li>
            </ul>
        </nav>
    );
}