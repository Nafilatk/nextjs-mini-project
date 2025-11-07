export default function Footer() {
  return (
    <footer className="bg-trunk bg-black text-gray-300 py-6 text-center mt-10">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} MiniShop. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-3 text-sm">
          <a href="#" className="hover:text-secondary">Privacy Policy</a>
          <a href="#" className="hover:text-secondary">Terms of Service</a>
          <a href="#" className="hover:text-secondary">Contact</a>
        </div>
      </div>
    </footer>
  );
}
