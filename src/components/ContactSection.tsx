import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    contactNumber: "",
  });
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isValidPhoneNumber = (number: string) => {
    // Allows empty string, or international/local formats: 7 to 15 digits, optional '+' at the start
    return number === "" || /^\+?[0-9]{7,15}$/.test(number);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading

    if (!isValidPhoneNumber(form.contactNumber)) {
      alert("Please enter a valid contact number (digits only, 7–15 characters, optional leading '+').");
      setLoading(false); // Stop loading if validation fails
      return;
    }

    try {
      await addDoc(collection(db, "contactMessages"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      alert("Message sent successfully! ✅ We'll get back to you soon."); // Added emoji for warmth
      setForm({ name: "", email: "", message: "", contactNumber: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later. 📋"); // Added emoji for warmth
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <section className="py-20 bg-[#FAFAFA]" id="contact"> {/* Background Off-white */}
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-['DM_Sans'] text-4xl md:text-5xl font-bold text-center mb-4 text-[#333333]"> {/* Heading color Dark gray */}
          Get in Touch
        </h2>
        <p className="font-['Inter'] text-center text-[#666666] mb-10"> {/* Secondary text Medium gray */}
          Questions, feedback, or just want to say hi? Fill out the form below and let's connect!
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100" // Form background white with soft shadow/border
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="rounded-lg border-gray-300 focus:border-[#009688] focus:ring-[#009688]" // Rounded corners, teal focus
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="rounded-lg border-gray-300 focus:border-[#009688] focus:ring-[#009688]" // Rounded corners, teal focus
          />
          <Input
            type="tel"
            name="contactNumber"
            placeholder="Your Contact Number (optional)"
            value={form.contactNumber}
            onChange={handleChange}
            className="rounded-lg border-gray-300 focus:border-[#009688] focus:ring-[#009688]" // Rounded corners, teal focus
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="rounded-lg border-gray-300 focus:border-[#009688] focus:ring-[#009688]" // Rounded corners, teal focus
          />
          <Button
            type="submit"
            className="w-full rounded-lg bg-[#009688] text-white hover:bg-[#00796B] font-medium uppercase tracking-wide" // Teal button
            disabled={loading} // Disable button when loading
          >
            {loading ? "Sending..." : "Send Message"} {/* Loading text */}
          </Button>
        </form>
      </div>
    </section>
  );
}


