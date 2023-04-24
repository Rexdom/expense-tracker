import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-violet-400">
            <div className="w-full max-w-screen-md rounded-md bg-slate-50 p-4">
                <div className="text-sm">Welcome, Tommy CLS!</div>
                <div className={`${inter.className} mt-1 text-xl font-bold`}>
                    Your Total Balance: $12,500
                </div>
                <div className="mt-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-center justify-center rounded-lg bg-violet-50 p-4 shadow-lg">
                        <div>
                            <div className="text-center font-bold">Expense</div>
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
                            <div className="text-center font-bold">Income</div>
                            <div className="text-center text-xl font-bold">
                                $2,000
                            </div>
                            <button className="mt-1 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-white hover:bg-violet-900 hover:bg-none">
                                Add Income
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative mt-4 flex gap-4 overflow-auto pb-2 pl-12">
                    <div className="group absolute left-1 top-2 flex h-4/5 cursor-pointer items-center justify-center rounded-xl bg-white p-2 shadow transition-colors hover:bg-violet-50">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-400 font-bold text-white transition-colors group-hover:bg-violet-500">
                            +
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 overflow-auto px-4 py-2">
                        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-2 shadow">
                            <div>Money Source</div>
                            <div>...</div>
                            <div>$ 10,000</div>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-2 shadow">
                            <div>Money Source</div>
                            <div>...</div>
                            <div>$ 10,000</div>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-2 shadow">
                            <div>Money Source</div>
                            <div>...</div>
                            <div>$ 10,000</div>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-2 shadow">
                            <div>Money Source</div>
                            <div>...</div>
                            <div>$ 10,000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
