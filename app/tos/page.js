import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto ">
      <div className="p-5 text-white-smoke">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6 text-white-smoke">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed text-white-smoke whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Terms of Service for STHLM AID

Last Updated: May 13, 2024

1. Acceptance of Terms
By accessing and using the website https://sthlmaid.se (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree with any part of these Terms, you must not use the Site.

2. Site Description
STHLM AID is a charity concert where all proceeds are donated to World Food Programme and Plan International. The Site provides information about the event and facilitates the support of these causes.

3. Use of the Site
The Site is available for personal, non-commercial use. You may not use the Site for any illegal or unauthorized purpose.

4. Intellectual Property
All content on the Site, including text, graphics, logos, and images, is the property of STHLM AID or its content suppliers and is protected by international copyright laws.

5. Links to Other Websites
The Site may contain links to third-party websites. These links are provided for your convenience only. STHLM AID has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites.

6. Governing Law
These Terms shall be governed by and construed in accordance with the laws of Sweden, without giving effect to any principles of conflicts of law.

7. Changes to Terms
STHLM AID reserves the right to modify or replace these Terms at any time. We will provide notice of such changes by updating the date at the top of these Terms.

8. Contact Us
If you have any questions about these Terms, please contact us at sthlmaid@gmail.com.

9. Privacy Policy
Please visit https://sthlmaid.se/privacy-policy to view our privacy policy.

By continuing to use the Site, you agree to be bound by these updated Terms. If you do not agree to the new terms, please stop using the Site.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
