import { glob } from "glob"
import style from "./sidebar.module.css"
import DropdownMenu from "../dropdownMenu/dropdownMenu"
import { FileTree } from "./fileTree"

export default async function Sidebar() {
    return <aside className={style.container}>
        <FileTree rootPath={"./mdxPages"} />
    </aside>
}