import Card from "@/components/card/card";
import { MainView } from "@/features/MainView";

export default function Home() {
    return <MainView>
        {/*         <div className="flex gap-8 flex-row flex-wrap justify-center items-center h-[calc(100vh-40px)]">
            {
                [0, 1, 2, 3, 4, 5].map((x) => {
                    return <Card key={x} />
                })
            }
        </div> */}
        <h1>{"Some Text".repeat(1e4)}</h1>
    </MainView>
}