import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Fleet Service Requests",
  description:
    "Request local fleet maintenance, inspection reminders, and pickup scheduling in minutes.",
  keywords: [
    "local fleet service",
    "fleet maintenance request",
    "inspection reminders",
    "pickup scheduling",
  ],
};

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <h1>Local fleet care, on your schedule.</h1>
        <p>
          Book inspections, preventive maintenance, and local pickup windows for
          your vehicles with a single request.
        </p>
      </section>
      <section className="card">
        <h2>Request service</h2>
        <form className="form" aria-label="Fleet service request">
          <div className="field">
            <label htmlFor="fleet-name">Fleet name</label>
            <input
              id="fleet-name"
              name="fleetName"
              type="text"
              placeholder="Downtown Logistics"
              autoComplete="organization"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="service-need">Service need</label>
            <select id="service-need" name="serviceNeed" required>
              <option value="">Select a service</option>
              <option value="maintenance">Preventive maintenance</option>
              <option value="inspection">Inspection reminder</option>
              <option value="pickup">Local pickup scheduling</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="contact-email">Contact email</label>
            <input
              id="contact-email"
              name="contactEmail"
              type="email"
              placeholder="fleet@company.com"
              autoComplete="email"
              required
            />
          </div>
          <button type="submit" className="button">
            Send request
          </button>
        </form>
      </section>
    </main>
  );
}
