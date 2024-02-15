
export default function NotFound() {
    return <div className="m-[1%] my-10 content-center">
        <div className="text-center flex items-center justify-center flex-col">
            <img width="256" height="256" src="https://raw.githubusercontent.com/bedrock-apis/wiki/main/public/404.webp"></img>
            <p style={{ fontSize: 60 }}>404 Not Found</p>
            <hr className="m-5" />
            <p className="text-xl">Not The Page You Were Looking For...</p>
        </div>
    </div>
}