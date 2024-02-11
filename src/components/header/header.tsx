import ButtonLink from "../buttonLink/buttonLink"

export default function Header() {
    return <header className="w-full">
        <div className="fixed bg-secondary border border-highlight h-14 w-full items-center shadow-xl">
            <div className="ml-3">
                <ButtonLink link="/" className="mx-10 my-2.5 text-2xl w-min inline font-bold text-nowrap float-left align-middle">
                    Scripting Wiki
                </ButtonLink>
                <ButtonLink link="/" className="mx-10 my-3 text-xl w-min inline font-bold text-nowrap float-right align-middle">
                    API Types
                </ButtonLink>
            </div>
        </div>
    </header>
}