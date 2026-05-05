import SharedHero from "@/components/ui/SharedHero";
import { Mail, MapPin } from "lucide-react";

const contactMails = [
  { type: "Commercial & Partnerships", email: "sales@convergefi.com" },
  { type: "Security & Compliance", email: "security@convergefi.com" },
  { type: "Media & Press", email: "press@convergefi.com" },
];

export default function ContactPage() {
  return (
    <div className="min-h-[90vh]">
      <SharedHero
        title="Contact Us"
        description="Direct lines of communication to our commercial team, security desk, and press office."
        breadcrumbLabel="Contact Us"
      />

      <section className="bg-parchment text-charcoal py-10 md:py-20">
        <div className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
            <div className="space-y-8">
              <div className="inline-flex space-x-2 items-center">
                <Mail className="text-verified" />

                <h2 className="text-xl md:text-2xl">Direct Inquiries</h2>
              </div>

              {contactMails.map((c) => (
                <div className="border border-steel py-4 px-6 max-w-full lg:max-w-7/10">
                  <p>{c.type}</p>
                  <a
                    href={`mailto:${c.email}`}
                    className="text-verified text-lg"
                  >
                    {c.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="inline-flex space-x-2 items-center">
                <MapPin className="text-verified" />

                <h2 className="text-xl md:text-2xl">Headquarters</h2>
              </div>

              <div className="border border-steel py-4 px-6 max-w-full lg:max-w-7/10">
                <h3 className="text-lg font-semibold mb-4">Converge Finance</h3>
                <address>
                  One World Trade Center
                  <br /> Suite 4500
                  <br /> New York, NY 10007
                  <br /> United States
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
