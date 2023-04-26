import { Inter } from 'next/font/google'
import Hamburger from 'src/components/icon/hamburger'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
    return (
        <div className="flex w-screen">
            <aside className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full bg-violet-100 transition-transform lg:translate-x-0"></aside>
            <div className="flex w-full items-start justify-center bg-violet-400 lg:ml-64 lg:w-[calc(100%_-_256px)]">
                <div className="relative min-h-screen w-full max-w-screen-md bg-slate-50 p-4">
                    <div className="text-sm">Welcome, Tommy CLS!</div>
                    <div
                        className={`${inter.className} mt-1 text-xl font-bold`}
                    >
                        Your Total Balance: $12,500
                    </div>
                    <div className="mt-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex items-center justify-center rounded-lg bg-violet-50 p-4 shadow-lg">
                            <div>
                                <div className="text-center font-bold">
                                    Expense
                                </div>
                                <div className="text-center text-xl font-bold">
                                    $1,000
                                </div>
                                <button className="mt-1 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-white hover:bg-violet-900 hover:bg-none">
                                    Add Expense
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center rounded-lg bg-violet-50 p-4 shadow-lg">
                            <div>
                                <div className="text-center font-bold">
                                    Income
                                </div>
                                <div className="text-center text-xl font-bold">
                                    $2,000
                                </div>
                                <button className="mt-1 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-white hover:bg-violet-900 hover:bg-none">
                                    Add Income
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-4 flex gap-4 overflow-auto bg-slate-200 pb-2 pl-12">
                        <div className="group absolute left-2 top-2 flex h-4/5 cursor-pointer items-center justify-center rounded-xl bg-white p-2 shadow transition-colors hover:bg-violet-50">
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-400 font-bold text-white transition-colors group-hover:bg-violet-500">
                                +
                            </div>
                        </div>
                        <div className="flex items-center gap-4 overflow-auto px-4 py-2">
                            <div className="flex max-w-[120px] flex-none flex-col justify-center rounded-xl bg-white p-2 shadow md:max-w-[200px]">
                                <div className="truncate">
                                    Money Source Very Long And It is never
                                    ending
                                </div>
                                <div className="truncate text-gray-300">
                                    5134***
                                </div>
                                <div className="truncate">$ 10,000,000,000</div>
                            </div>
                            <div className="flex max-w-[120px] flex-none flex-col justify-center rounded-xl bg-white p-2 shadow md:max-w-[200px]">
                                <div className="truncate">Money Source A</div>
                                <div className="truncate text-gray-300">
                                    &nbsp;
                                </div>
                                <div className="truncate">$ 10,000</div>
                            </div>
                            <div className="flex max-w-[120px] flex-none flex-col justify-center rounded-xl bg-white p-2 shadow md:max-w-[200px]">
                                <div className="truncate">Money Source B</div>
                                <div className="truncate text-gray-300">
                                    2368***
                                </div>
                                <div className="truncate">$ 10,000</div>
                            </div>
                            <div className="flex max-w-[120px] flex-none flex-col justify-center rounded-xl bg-white p-2 shadow md:max-w-[200px]">
                                <div className="truncate">Money Source C</div>
                                <div className="truncate text-gray-300">
                                    &nbsp;
                                </div>
                                <div className="truncate">$ 10,000</div>
                            </div>
                            <div className="flex max-w-[120px] flex-none flex-col justify-center rounded-xl bg-white p-2 shadow md:max-w-[200px]">
                                <div className="truncate">Money Source D</div>
                                <div className="truncate text-gray-300">
                                    &nbsp;
                                </div>
                                <div className="truncate">$ 10,000</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex items-end justify-between">
                        <div className="text-lg font-bold">
                            Recent Transaction
                        </div>
                        <div className="cursor-pointer text-sm text-gray-400 hover:text-black">
                            See all
                        </div>
                    </div>
                    <div className="mt-2 grid grid-cols-1 divide-y">
                        <div className="mt-2 flex justify-between">
                            <div className="flex-shrink">
                                <div className="truncate">Google Play</div>
                                <div className="truncate text-sm text-gray-300">
                                    Jan 26, 12:15 PM
                                </div>
                            </div>
                            <div className="flex-shrink-0">+$2,000</div>
                        </div>
                        <div className="mt-2 flex justify-between">
                            <div className="flex-shrink">
                                <div className="truncate">Food</div>
                                <div className="truncate text-sm text-gray-300">
                                    Jan 23, 2:15 PM
                                </div>
                            </div>
                            <div className="flex-shrink-0">-$500</div>
                        </div>
                    </div>
                    <Hamburger className="absolute right-2 top-2 h-6 w-6 cursor-pointer hover:stroke-2 lg:invisible" />
                </div>
            </div>
        </div>
    )
}
