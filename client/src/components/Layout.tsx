import Header from "./Header";
import Footer from "./Footer";


export default function Layout({ children }: { children: React.ReactNode }) {
return (
<div className="">
<Header />
<main className="flex-1 pt-24 p-6"> {/* pt-24 for fixed header */}
{children}
</main>
<Footer />
</div>
);
}