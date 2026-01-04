// app/components/TrustBadges.js
import Image from "next/image";

const features = [
  {
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    icon: "/assets/icons/delivery.png",
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: "/assets/icons/customer-service.png",
  },
  {
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: "/assets/icons/secure.png",
  },
];

export default function TrustBadges() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-300 transition-colors duration-300 group-hover:bg-gray-900">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 transition-colors duration-300 group-hover:bg-gray-200">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="object-contain group-hover:invert"
                  />
                </div>
              </div>

              {/* Heading */}
              <h3 className="mb-2 text-sm font-bold tracking-wide">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
