import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="text-white-smoke max-w-xl mx-auto">
      <div className="p-5">
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Privacy Policy for STHLM AID

Last Updated: May 13, 2024

1. Introduction
Welcome to the website of STHLM AID (https://sthlmaid.se). This Privacy Policy applies to all information that is not collected by our Site, as we do not collect personal or non-personal information from our users.

2. No Data Collection
STHLM AID does not collect any user data. We respect your privacy and are committed to protecting it.

3. No Data Sharing
Since no data is collected, we do not share any data with third parties.

4. Children's Privacy
Our Site does not collect any information from children under the age of 18, as we do not collect information from any users.

5. Contact Us
If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at sthlmaid@gmail.se.

6. Changes to This Privacy Policy
We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.

This policy is effective as of the date stated at the top of the document.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
