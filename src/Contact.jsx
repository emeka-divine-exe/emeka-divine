import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { TalkButton } from "./Hero";
import { site } from "./siteData.js";

export default function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-black px-5 py-32 text-center md:py-44">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 mx-auto h-full max-w-3xl opacity-80"
        style={{ background: "radial-gradient(ellipse 38% 85% at 50% 0%, rgba(198,240,77,.20), transparent 70%)", clipPath: "polygon(38% 0, 62% 0, 100% 100%, 0 100%)" }}
      />
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <p className="font-mono text-sm text-acid">Contact</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-mono text-[length:clamp(2.4rem,6vw,5rem)] leading-[1.15] font-bold">Let’s get in touch</h2>
        <p className="mx-auto mt-5 max-w-md text-base text-white/65 md:text-lg">
          Reach out on WhatsApp. We can talk it through there and schedule a call from the chat.
        </p>
        <div className="mt-10">
          <TalkButton href={site.whatsapp} icon={<Icon icon="ic:baseline-whatsapp" className="text-2xl" />}>
            Get in touch
          </TalkButton>
        </div>
      </motion.div>
    </section>
  );
}
