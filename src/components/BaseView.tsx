"use client";
import SideBar, { SideBarOptions } from "./aside/aside"
import Footer from "./footer"

export default function BaseView(data: { children: any[] | any, sideBarOptions: SideBarOptions }) {
  return <div className="w-full sm:flex">
    <SideBar options={data.sideBarOptions} />
    <div className="w-full overflow-y-auto">
      <main className="min-h-[calc(100vh-8.5rem)] p-[calc(1%+0.5rem)] w-full mt-[3.5rem] break-all">
        {data.children}
      </main>
      <Footer />
    </div>
  </div>
}

/*

          <div className="flex flex-col">
            <SideBar options={options}/>
            <div className="w-full">
              <main className="min-h-[calc(100vh-8.5rem)] p-[calc(1%+0.5rem)] w-full mt-[3.5rem] break-all">
                {children}
              </main>
            <Footer />
            </div>
          </div>*/