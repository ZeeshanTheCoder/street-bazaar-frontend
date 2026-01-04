import Image from "next/image";

const socialIcons = [
  {
    name: "Facebook",
    icon: "/assets/icons/facebook.png",
    href: "#",
  },
  {
    name: "Twitter",
    icon: "/assets/icons/twitter.png",
    href: "#",
  },
  {
    name: "Instagram",
    icon: "/assets/icons/instagram.png",
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: "/assets/icons/linkedin.png",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Exclusive / Subscribe */}
          <section>
            <h3 className="mb-4 text-lg font-semibold text-white">Exclusive</h3>
            <p className="mb-2 font-medium text-white">Subscribe</p>
            <p className="mb-4 text-sm">Get 10% off your first order</p>

            <form className="relative max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded border border-gray-700 bg-black px-4 py-2 pr-10 text-sm text-white placeholder-gray-400 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-white"
              >
                ➜
              </button>
            </form>
          </section>

          {/* Support */}
          <section>
            <h3 className="mb-4 text-lg font-semibold text-white">Support</h3>
            <div className="flex flex-col gap-2">
              <address className="not-italic text-sm leading-6">
                111 Bijoy sarani, Dhaka,
                <br />
                DH 1515, Bangladesh.
              </address>
              <p className="mt-3 text-sm">exclusive@gmail.com</p>
              <p className="mt-1 text-sm">+88015-88888-9999</p>
            </div>
          </section>

          {/* Account */}
          <nav>
            <h3 className="mb-4 text-lg font-semibold text-white">Account</h3>
            <ul className="space-y-2 text-sm flex flex-col gap-2">
              {[
                "My Account",
                "Login / Register",
                "Cart",
                "Wishlist",
                "Shop",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Link */}
          <nav>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Link
            </h3>
            <ul className="space-y-2 text-sm flex flex-col gap-2">
              {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-white">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-center text-sm text-gray-500">
            © Copyright 2022. All rights reserved
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="transition hover:opacity-80"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
