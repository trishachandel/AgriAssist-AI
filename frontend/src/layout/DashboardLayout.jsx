import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">

        <Sidebar />

        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

      <Footer />
    </>
  );
}

export default DashboardLayout;