import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Converge",
  description: "Terms of Use for Converge Financial Technology, Inc.",
};

const contents = [
  { name: "Changes to this Agreement", link: "#changes-to-agreement" },
  { name: "Accessing the Services", link: "#accessing-services" },
  { name: "Intellectual Property", link: "#intellectual-property" },
  { name: "Grant of Rights", link: "#grant-of-rights" },
  { name: "Restrictions on Use", link: "#restrictions" },
  {
    name: "Comments, Feedback, and Other Submissions",
    link: "#comments",
  },
  {
    name: "Third-Party Content and Links",
    link: "#third-party-content",
  },
  { name: "Privacy", link: "#privacy" },
  {
    name: "Disclaimer; Limitation of Liability; Indemnity",
    link: "#disclaimer",
  },
  {
    name: "Dispute Resolution (Including Arbitration Agreement; Class Action Waiver; Jury Trial Waiver)",
    link: "#dispute-resolution",
  },
  { name: "Applicable Law", link: "#applicable-law" },
  { name: "Miscellaneous Legal Terms", link: "#miscellaneous" },
  { name: "Contact Information", link: "#contact-info" },
];

const BackToTop = () => {
  return (
    <Link
      href="#terms-of-use"
      className="text-base underline underline-offset-4 transition-all text-verified"
    >
      Back to Top
    </Link>
  );
};

export default function TermsOfUse() {
  return (
    <div className="bg-parchment min-h-screen pt-32 pb-24 text-charcoal">
      <article className="mx-auto max-w-95/100 md:max-w-5/6 px-4 md:px-6 lg:px-10">
        {/* Header */}
        <header className="mb-16 border-b border-steel/30 pb-8">
          <h1
            id="terms-of-use"
            className="font-display text-4xl md:text-5xl lg:text-6xl text-midnight font-bold mb-6 tracking-wider"
          >
            Terms of Use
          </h1>
          <p className="font-mono text-steel text-sm uppercase tracking-wider">
            Last Updated: April 14, 2026
          </p>
        </header>

        {/* Content */}
        <div className="font-serif text-lg md:text-xl leading-relaxed space-y-12">
          <section>
            <p>
              PLEASE CAREFULLY REVIEW THESE TERMS OF USE (THE{" "}
              <strong>&quot;AGREEMENT&quot;</strong>). BY ACCESSING OR USING THE
              SERVICES, OR BY CLICKING TO AGREE/ACCEPT OR OTHERWISE INDICATING
              YOUR AGREEMENT TO THIS AGREEMENT, YOU REPRESENT THAT YOU (1) ARE
              18 YEARS OF AGE OR OLDER, (2) HAVE THE LEGAL CAPACITY TO ENTER A
              CONTRACT, AND (3) AGREE TO COMPLY WITH AND BE BOUND BY THIS
              AGREEMENT.
            </p>
            <br />
            <p>
              This Agreement is a legally binding agreement between you and
              Converge Financial Technology, Inc. and its affiliates
              (collectively, <strong>&quot;Converge,&quot;</strong>
              <strong>&quot;we,&quot;</strong> <strong>&quot;us,&quot;</strong>
              or <strong>&quot;our&quot;</strong>) and governs your access to
              and use of our website and other online services or applications
              that link to this Agreement (each a{" "}
              <strong>&quot;Site&quot;</strong>
              and collectively the <strong>&quot;Sites&quot;</strong>) and any
              content, functionality, products and services we may offer on or
              through the Sites (collectively, the
              <strong>&quot;Services&quot;</strong>). By continuing to access
              and use the Services, you agree that such use is legally
              sufficient consideration under this Agreement.
            </p>
            <br />
            <p className="font-semibold">
              IMPORTANT: THIS AGREEMENT INCLUDES A{" "}
              <Link
                href="#dispute-resolution"
                className="text-verified underline underline-offset-2"
              >
                DISPUTE RESOLUTION
              </Link>{" "}
              SECTION THAT INCLUDES AN ARBITRATION AGREEMENT, CLASS ACTION
              WAIVER, AND JURY TRIAL WAIVER THAT AFFECT YOUR RIGHTS. IT ALSO
              INCLUDES PROVISIONS THAT{" "}
              <Link
                href="#disclaimer"
                className="text-verified underline underline-offset-2"
              >
                LIMIT OUR LIABILITY
              </Link>{" "}
              TO YOU. PLEASE REVIEW CAREFULLY. IF YOU DO NOT AGREE TO ALL OF THE
              TERMS OF THIS AGREEMENT, YOU ARE NOT AUTHORIZED TO USE THE
              SERVICES.
            </p>
            <br />
            <p>
              We may revise and update this Agreement from time to time in our
              sole discretion. All changes are effective immediately when we
              post them unless some other effective date is expressly stated.
              Your continued access to and use of the Services following the
              posting of the revised Agreement means that you accept and agree
              to the changes. We encourage you to review this page periodically
              so you are aware of any changes, as they are binding on you.
            </p>
            <br />
            <p>
              If you are an individual accessing or using the Services on behalf
              of, or for the benefit of, any corporation, partnership, or other
              legal entity with which you are associated (
              <strong>&quot;Organization&quot;</strong>), then you are agreeing
              to this Agreement on behalf of yourself and such Organization, and
              you represent and warrant that you have the legal authority to
              bind such Organization to this Agreement. References to
              &quot;you&quot; and &quot;your&quot; in this Agreement will refer
              to both the individual using the Services and to any such
              Organization.
            </p>
          </section>

          {/* Contents Index */}
          <section className="bg-white/40 p-8 rounded-2xl border border-steel/20 shadow-sm">
            <p className="font-display text-2xl text-midnight font-medium mb-6 tracking-wide">
              Click on the links below to jump to that section of the Agreement:
            </p>
            <ol className="font-sans text-base space-y-3">
              {contents.map((c, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono text-steel shrink-0 min-w-7 text-right">
                    {i + 1}.
                  </span>
                  <Link
                    href={c.link}
                    className="text-verified hover:underline transition-all"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          <section id="changes-to-agreement" className="scroll-mt-32">
            <h2 className="font-display text-3xl text-midnight font-medium mb-6 tracking-wide">
              1. Changes to this Agreement
            </h2>
            <p className="mb-6">
              We may revise or otherwise change or update this Agreement from
              time to time. We will use reasonable efforts to notify you of such
              changes, such as by posting a banner on the Services indicating
              that the terms have changed or by sending an email to you.
              However, please check the “Last Updated” legend at the top of this
              page to see when this Agreement was last revised. When changes are
              made to this Agreement, they will become immediately effective
              when published on this page unless otherwise noted. We encourage
              you to periodically review this Agreement―there may have been
              changes to our policies that may affect you. If you do not agree
              to the Agreement as modified, then you must discontinue your use
              of the Services. CONTINUED ACCESS AND USE OF THE SERVICES AFTER
              CHANGES HAVE BEEN MADE TO THIS AGREEMENT CONSTITUTES YOUR
              ACCEPTANCE OF THE REVISED AGREEMENT THEN IN EFFECT. YOU AGREE THAT
              YOU WILL REVIEW THIS AGREEMENT PERIODICALLY AND THAT YOU SHALL BE
              BOUND BY THIS AGREEMENT AND ANY MODIFICATIONS TO IT.
            </p>
            <BackToTop />
          </section>

          <section id="accessing-services" className="scroll-mt-32">
            <h2 className="font-display text-3xl text-midnight font-medium mb-6 tracking-wide">
              2. Accessing the Services
            </h2>
            <p className="mb-6">
              In general, you are not obligated to register for an account in
              order to access the Services. However, certain sections and
              features of the Services are available only to users who have
              registered for an account. It is a condition of your use of the
              Services that all the information you provide to us is correct,
              current, and complete. If you choose, or are provided with, a
              username, password, or any other piece of information as part of
              our security procedures, you must treat such information as
              confidential, and you must not disclose it to any other person or
              entity. You agree that you are responsible for all activities that
              occur under your account. You also agree to ensure that you exit
              from your account at the end of each session. You also acknowledge
              that your account is personal to you and agree not to provide any
              other person with access to the Services or portions of it using
              your username, password, or other security information. You agree
              to notify us immediately of any unauthorized access to or use of
              your username or password or any other breach of security that you
              become aware of involving or relating to the Services by
              contacting us as soon as possible using the information in the{" "}
              <Link
                href="#contact-info"
                className="text-verified underline underline-offset-1"
              >
                Contact Information
              </Link>{" "}
              section below. We reserve the right to take any and all actions we
              deem necessary or reasonable to maintain the security of the
              Services and your account, including without limitation, disabling
              or terminating your account, changing your username, password, or
              other identifier, or requesting information to authorize
              transactions on your account. WE EXPLICITLY DISCLAIM LIABILITY FOR
              ANY AND ALL LOSSES AND DAMAGES ARISING FROM YOUR FAILURE TO COMPLY
              WITH THIS SECTION.
            </p>
            <BackToTop />
          </section>

          <section id="intellectual-property" className="scroll-mt-32">
            <h2 className="font-display text-3xl text-midnight font-medium mb-6 tracking-wide">
              3. Intellectual Property
            </h2>
            <p className="mb-6">
              All content on the Services, including without limitation names,
              logos, text, designs, graphics, trademarks, trade dress, images,
              interfaces, code, software, and any other content appearing in or
              on the Services (collectively,{" "}
              <strong>&quot;Content&quot;</strong>) are protected intellectual
              property of, or used with permission or under license by,
              Converge. Content may be protected under applicable copyright,
              trademark, patent, and other intellectual property rights. This
              includes the entire Content of the Services, copyrighted and
              protected as a collective work. All intellectual property rights
              associated with the Services and Content, and related goodwill,
              are proprietary to Converge and/or its licensors. You do not
              acquire any rights, title, or interest in any Content by accessing
              or using the Services. Converge reserves all rights to the
              Services and Content not granted expressly in these Terms. Except
              as expressly permitted by this Agreement, any copying,
              redistribution, use or publication by you of any Content or any
              part of the Services is strictly prohibited. We make no
              representations, warranties or guarantees, whether express or
              implied, that any Content is accurate, complete, or up to date.
            </p>
            <BackToTop />
          </section>

          <section id="grant-of-rights" className="scroll-mt-32">
            <h2 className="font-display text-3xl text-midnight font-medium mb-6 tracking-wide">
              4. Grant of Rights
            </h2>
            <p className="mb-6">
              Subject to your compliance with the terms and conditions set forth
              in this Agreement, Converge grants you a limited, revocable,
              non-transferable, nonexclusive right to access and use the
              Services and Content only for internal business purposes. Your
              access to and use of the Services is at the sole discretion of
              Converge who may terminate your access and use at any time.
            </p>
            <p className="mb-6">
              You may download or print one (1) copy of specific Content made
              available for downloading or printing for your personal,
              non-commercial use, subject to your compliance with this
              Agreement, and may retain the same solely for as long as you
              continue to be permitted to access the Services. To use Content
              under this exception, you must (i) keep any copyright, trademark,
              or other proprietary notices intact; (ii) use such Content
              pursuant to any licenses associated with such Content; (iii) not
              copy or post such Content on any networked computer or broadcast
              it in any media; (iv) make no modifications to any such Content;
              and (v) make no additional representations or warranties relating
              to such Content. No right, title, or interest in any Content is
              granted or transferred to you as a result of any such copying.
              Except as otherwise expressly authorized herein or in writing by
              us, you agree not to copy, reproduce, publish, transmit,
              distribute, perform, display, modify, create derivative works from
              (in whole or in part), rent, lease, loan, sell or participate in
              any sale of, or exploit in any way, any of the Content or the
              Services.
            </p>
            <p className="mb-6">
              You are granted a limited, non-exclusive right to create text
              hyperlinks to the Services for informational purposes, provided
              such links do not portray us in a false, misleading, derogatory or
              otherwise defamatory manner and provided that the linking website
              or service does not contain any material that is unlawful,
              harmful, harassing, defamatory, threatening, intimidating,
              fraudulent, tortious, vulgar, obscene, hateful, pornographic,
              spam, discriminatory, violative of privacy or publicity rights,
              infringing of intellectual property or other proprietary rights,
              or otherwise objectionable in our sole discretion, including
              unauthorized or unsolicited advertising. Additionally,
              notwithstanding the foregoing, and subject to compliance with any
              instructions posted in the robots.txt file located in a website’s
              root directory, we grant to the operators of public search engines
              permission to use spiders to copy Content from the Services for
              the sole purpose of (and solely to the extent necessary for)
              creating publicly available, searchable indices of such Content,
              but not caches or archives of such Content, or for any
              machine-learning or training data purposes. We may revoke these
              permissions at any time.
            </p>
            <BackToTop />
          </section>

          <section id="restrictions" className="scroll-mt-32">
            <h2 className="font-display text-3xl text-midnight font-medium mb-6 tracking-wide">
              5. Restrictions on Use
            </h2>
            <p className="mb-6">
              While using the Services, you are required to comply with all
              applicable statutes, orders, regulations, rules, and other laws.
              You may not use the Services for any fraudulent or unlawful
              purpose, and you may not take any action to interfere with the
              Services or any other party’s use of the Services. In addition, we
              expect users of the Services to respect the rights and dignity of
              others. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                post, upload, share, transmit, distribute, facilitate
                distribution of, or otherwise make available to or through the
                Services (i) any data, information, messages or other materials
                that you do not have the right to distribute or the provision of
                which violates the proprietary rights of others; or (ii) any
                data, information, messages or other material that is unlawful,
                fraudulent, tortious, defamatory, vulgar, obscene, hateful,
                pornographic, discriminatory, harassing, threatening, offensive,
                or otherwise objectionable in our sole discretion;
              </li>

              <li>
                submit, send, post, upload, or otherwise make available
                unsolicited or unauthorized advertising or commercial
                communications, such as advertising, promotional materials,
                spam, junk mail, chain letters, or any other similar
                solicitation;
              </li>

              <li>
                violate, infringe, or misappropriate another person&rsquo;s or
                entity&rsquo;s intellectual property, privacy, publicity, or
                other legal rights;
              </li>

              <li>
                use the trademarks, service marks or logos of Converge, its
                affiliates or third-party licensors without express prior
                written consent;
              </li>

              <li>
                reproduce, duplicate, copy, publicly display, distribute, frame,
                mirror, sell, resell, prepare derivative works, or otherwise
                exploit for any commercial purposes, any portion of, use of, or
                access to the Services and Content without our express prior
                written permission;
              </li>

              <li>
                impersonate or attempt to impersonate Converge, a Converge
                employee, another user, or any other person or entity or falsely
                state or otherwise misrepresent your affiliation with any person
                or entity in connection with the Services, or express or imply
                that we endorse any statement you make;
              </li>

              <li>
                access or use the Services via mechanical, programmatic,
                robotic, scripted or any other automated means without our
                express prior written permission.
              </li>

              <li>
                violate, or attempt to violate, the security of the Services,
                including without limitation attempting to circumvent any
                technological measure implemented by us or any of our providers
                or any other third party (including another user) to protect or
                restrict access to the Services;
              </li>

              <li>
                introduce or disseminate on the Services any viruses, Trojan
                horses, worms, or other harmful, disruptive or destructive
                components, such as spyware, adware, or other malicious computer
                code, file, or program that is harmful or invasive or is
                intended to disrupt, damage, interfere, or hijack the operation
                of, or monitor the use of, any hardware, software, or equipment;
              </li>

              <li>
                reverse engineer, decompile or disassemble, or otherwise attempt
                to derive any of the computer programs, software, source code,
                or methodology related to the Services or assist someone in
                performing such prohibited acts;
              </li>

              <li>
                build a competitive product or service using the Services, build
                a product or service using similar ideas, features, functions,
                or graphics as the Services or determine whether the Services,
                in whole or in part, is within the scope of any patent;
              </li>

              <li>
                impede or interfere in any manner with the operation or hosting
                of the Services or monitor the availability, performance, or
                functionality of the Services;
              </li>

              <li>
                use any data mining, bots, spiders, scrapers, automated tools,
                or other similar data gathering and extraction methods, directly
                or indirectly, on the Services or to collect any information
                from the Services or any other user of the Services; or
              </li>

              <li>
                advocate, encourage, or assist any third party in doing any of
                the foregoing.
              </li>
            </ul>
            <BackToTop />
          </section>

          <section id="comments" className="scroll-mt-32">
            <h2 className="font-display text-3xl text-midnight font-medium mb-6 tracking-wide">
              6. Comments, Feedback, and Other Submissions
            </h2>
            <p className="mb-6">
              We welcome your comments and feedback regarding our products and
              our services. We do not, however, accept confidential or
              proprietary information absent another agreement with us where the
              same is discussed. Accordingly, all comments, feedback, ideas,
              suggestions, materials, information, and other submissions
              disclosed, submitted or offered to Converge using the Services or
              otherwise (collectively,<strong> &ldquo;Comments&rdquo;</strong>)
              are not confidential. UNLESS OTHERWISE STATED, PLEASE DO NOT POST,
              SUBMIT, OR SEND US ANY COMMENTS THAT YOU WISH TO KEEP PRIVATE OR
              PROPRIETARY OR FOR WHICH YOU EXPECT TO RECEIVE COMPENSATION. By
              submitting any Comments to us, you agree that: (i) we are free to
              use such Comments for any purpose; (ii) such Comments will be
              deemed not to be confidential or proprietary; (iii) we may have
              something similar already under consideration or in development;
              and (iv) you are not entitled to any compensation or reimbursement
              of any kind from us under any circumstances unless otherwise
              expressly agreed in writing by us.
            </p>
            <BackToTop />
          </section>

          <section id="third-party-content" className="scroll-mt-32">
            <h2 className="font-display text-3xl text-midnight font-medium mb-6 tracking-wide">
              7. Third-Party Content and Links
            </h2>
            <p className="mb-6">
              Any information, statements, opinions, or other information
              provided by third parties and made available on the Services are
              those of the respective author(s) and not us. We do not guarantee
              the validity, accuracy, completeness or reliability of any
              opinion, advice, service, offer, statement, or other third-party
              content on the Services.
            </p>
            <p className="mb-6">
              We may provide on the Services, solely as a convenience to users,
              links to websites, social media pages, or other services operated
              by other entities. If you click these links, you will leave the
              Services. If you decide to visit any external link, you do so at
              your own risk, and it is your responsibility to take all
              protective measures to guard against viruses or other destructive
              elements. We do not make any warranty or representation regarding,
              or endorse or otherwise sponsor, any linked websites, services,
              platforms, or the information appearing thereon or any of the
              products or services described thereon. Links do not imply that we
              are legally authorized to use any trademark, trade name, logo, or
              copyright symbol displayed in or accessible through the links; or
              that any linked website, platform, or service is authorized to use
              any of our trademarks, logos, or copyright symbols.
            </p>
            <p className="mb-6">
              YOU AGREE THAT YOUR USE OF THIRD-PARTY WEBSITES, SERVICES, AND
              RESOURCES, INCLUDING WITHOUT LIMITATION YOUR USE OF ANY CONTENT,
              INFORMATION, DATA, ADVERTISING, PRODUCTS, OR OTHER MATERIALS ON OR
              AVAILABLE THROUGH SUCH THIRD PARTIES, IS AT YOUR OWN RISK AND IS
              SUBJECT TO THE TERMS AND CONDITIONS OF USE APPLICABLE TO SUCH
              WEBSITES, SERVICES, AND RESOURCES.
            </p>
            <BackToTop />
          </section>

          <section id="privacy" className="scroll-mt-32">
            <h2 className="font-display text-3xl text-midnight font-medium mb-6 tracking-wide">
              8. Privacy
            </h2>
            <p className="mb-6">
              Any personal information that you provide to us is subject to our
              Privacy Policy. Please review the{" "}
              <Link
                href="/privacy-policy"
                className="text-verified underline underline-offset-2"
              >
                {" "}
                Privacy Policy
              </Link>{" "}
              for more information about how we collect and use personal
              information.
            </p>
            <BackToTop />
          </section>

          <section id="disclaimer" className="scroll-mt-32">
            <h2 className="font-display text-3xl text-midnight font-medium mb-6 tracking-wide">
              9. Disclaimer; Limitation of Liability; Indemnity
            </h2>
            <div className="pl-6 [&>p]:text-base mb-4">
              <h3 className="text-xl font-bold mb-3 text-midnight">
                1. Disclaimer of Warranties
              </h3>
              <p>
                THE SERVICES AND ALL CONTENT MADE AVAILABLE ON OR THROUGH THE
                SERVICES ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS,
                WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. TO THE
                FULLEST EXTENT POSSIBLE UNDER APPLICABLE LAW, WE DISCLAIM ALL
                WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
                IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, AND NONINFRINGEMENT. WE DO NOT WARRANT THAT YOUR USE OF
                THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT THE
                SERVICES OR ITS SERVER ARE FREE OF VIRUSES OR OTHER HARMFUL
                ELEMENTS. WE DO NOT WARRANT OR MAKE ANY REPRESENTATIONS
                REGARDING THE USE, VALIDITY, ACCURACY, OR RELIABILITY OF THE
                CONTENT AVAILABLE ON THE SERVICES OR ANY OTHER WEBSITES LINKED
                TO OR FROM THE SERVICES. DOWNLOADING OR OTHERWISE OBTAINING ANY
                CONTENT THROUGH THE SERVICES IS DONE AT YOUR OWN RISK.
              </p>
              <br />
              <p>
                Some jurisdictions do not allow the exclusion of certain types
                of warranties or limitations, so some or all of the above
                exclusions and limitations may not apply to you. But in such a
                case the exclusions and limitations set forth in this Section
                shall be applied to the greatest extent enforceable under
                applicable law.
              </p>
            </div>

            <div className="pl-6 [&>p]:text-base mb-4">
              <h3 className="text-xl font-bold mb-3 text-midnight">
                2. Limitation of Liability
              </h3>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                WILL CONVERGE, ITS AFFILIATES OR RELATED ENTITIES, OR ANY OF
                THEIR RESPECTIVE SHAREHOLDERS, OFFICERS, DIRECTORS, EMPLOYEES,
                AGENTS, CONTRACTORS, VENDORS, LICENSORS, SUPPLIERS, SUCCESSORS,
                OR ASSIGNS (COLLECTIVELY,{" "}
                <strong>&quot;COVERED PARTIES&quot;</strong>) BE LIABLE FOR
                DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR
                RELATING IN ANY WAY TO THIS AGREEMENT OR THE USE OR THE
                INABILITY TO USE THE SERVICES, CONTENT OR EXTERNAL LINKS,
                INCLUDING BUT NOT LIMITED TO DAMAGES CAUSED BY OR RELATED TO
                ERRORS, OMISSIONS, INTERRUPTIONS, DEFECTS, DELAY IN OPERATION OR
                TRANSMISSION, OR ANY COMPUTER VIRUS OR FAILURE.
              </p>
              <br />
              <p>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, UNDER NO
                CIRCUMSTANCES SHALL CONVERGE OR THE COVERED PARTIES BE LIABLE
                FOR ANY INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY, PUNITIVE, OR
                CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER (INCLUDING, BUT NOT
                LIMITED TO, DAMAGES FOR LOSS OF BUSINESS, LOSS OF PROFITS, LOSS
                OF GOODWILL, LOSS OF USE, LOSS OR CORRUPTION OF DATA, INABILITY
                TO ACCESS OR USE EQUIPMENT, SOFTWARE OR DATA, PROCUREMENT OF
                SUBSTITUTE GOODS OR SERVICES, BUSINESS INTERRUPTION OR THE LIKE)
                ARISING OUT OF OR IN ANY WAY RELATED TO THIS AGREEMENT OR THE
                USE OF, OR INABILITY TO USE, THE SERVICES OR THE CONTENT, OR
                BASED ON ANY THEORY OF LIABILITY INCLUDING WITHOUT LIMITATION
                BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING
                NEGLIGENCE), PRODUCT LIABILITY OR OTHERWISE, EVEN IF CONVERGE OR
                ANY OF THE COVERED PARTIES HAS BEEN ADVISED OF THE POSSIBILITY
                OF SUCH DAMAGES AND EVEN IF THE REMEDY FAILS OF ITS ESSENTIAL
                PURPOSE. ADDITIONALLY, NEITHER CONVERGE NOR THE COVERED PARTIES
                SHALL HAVE ANY LIABILITY OR RESPONSIBILITY FOR ANY ACTS,
                OMISSIONS OR CONDUCT OF ANY USER OR OTHER THIRD PARTY.
              </p>
              <br />
              <p>
                Some jurisdictions do not allow the exclusion or limitation of
                certain damages, so the above limitations may not apply to you.
              </p>
              <br />
              <p>
                IF ANY PART OF THESE LIMITATIONS OF LIABILITY IS FOUND TO BE
                INVALID OR UNENFORCEABLE FOR ANY REASON, OR IF WE ARE OTHERWISE
                FOUND TO BE LIABLE TO YOU OR TO ANY THIRD PARTY IN ANY MANNER,
                THEN TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, UNDER NO
                CIRCUMSTANCES WILL THE AGGREGATE LIABILITY OF CONVERGE OR THE
                COVERED PARTIES EXCEED THE GREATER OF THE ACTUAL TOTAL AMOUNTS
                YOU PAID TO CONVERGE IN THE SIX (6) MONTH PERIOD IMMEDIATELY
                PRECEDING THE DATE THE CLAIM AROSE, OR THE LOWEST LIABILITY
                LIMITATION ALLOWED BY APPLICABLE LAW.
              </p>
            </div>

            <div className="pl-6 [&>p]:text-base mb-4">
              <h3 className="text-xl font-bold mb-3 text-midnight">
                3. Indemnity
              </h3>
              <p>
                You agree to indemnify, defend, and hold harmless Converge and
                the Covered Parties from and against any and all claims,
                damages, suits, actions, liabilities, judgments, losses, costs,
                or other expenses (including without limitation reasonable
                attorneys’ fees) arising directly or indirectly from your use of
                the Services or Content, violation of any provision of this
                Agreement; or violation of any law or regulation. We reserve the
                right, at your expense, to assume the exclusive defense and
                control of any matter for which you are required to indemnify
                us, and you agree to cooperate with our defense of these claims.
                We will use reasonable efforts to notify you of any such claim,
                action, or proceeding upon becoming aware of it.
              </p>
            </div>

            <div className="pl-6 [&>p]:text-base mb-4">
              <h3 className="text-xl font-bold mb-3 text-midnight">
                4. Exceptions
              </h3>
              <p>
                Some jurisdictions do not allow the exclusion of certain
                warranties or the limitation or exclusion of liability for
                damages. Accordingly, some of the above disclaimers,
                limitations, and indemnities may not apply to you. To the extent
                we may not, as a matter of applicable law, disclaim any warranty
                or limit our liability, the scope and duration of such warranty
                and the extent of our liability will be the minimum permitted
                under such law.
              </p>
            </div>
            <BackToTop />
          </section>

          <section id="dispute-resolution" className="scroll-mt-32">
            <h2 className="font-display text-3xl text-midnight font-medium mb-6 tracking-wide">
              10. Dispute Resolution (Including Arbitration Agreement; Class
              Action Waiver; Jury Trial Waiver)
            </h2>
            <p className="mb-6">
              PLEASE READ THIS SECTION CAREFULLY – IT MAY SIGNIFICANTLY AFFECT
              YOUR LEGAL RIGHTS, INCLUDING THE RIGHT TO MAINTAIN A COURT ACTION,
              THE RIGHT TO A JURY TRIAL, THE RIGHT TO PARTICIPATE IN ANY FORM OF
              CLASS, COLLECTIVE, OR REPRESENTATIVE CLAIM OR ACTION IN
              ARBITRATION AND LITIGATION, AND THE RIGHT TO CERTAIN REMEDIES AND
              FORMS OF RELIEF.
            </p>
            <p>
              For purposes of this Section 10 (Dispute Resolution), “Converge,”
              “we,” and “our” shall include Converge and its past, present, and
              future subsidiaries, parents, affiliates, agents, employees,
              officers, directors, predecessors in interest, successors,
              representatives, and assigns.
            </p>
            <br />
            <p>
              Arbitration uses a neutral arbitrator instead of a judge or jury,
              allows for more limited discovery than in court, and is subject to
              very limited review by courts. You may choose to be represented by
              a lawyer in arbitration or proceed without one. This Section 10
              shall survive termination of this Agreement.
            </p>
            <div className="pl-3 mt-2">
              <h3 className="text-xl font-bold mb-3 text-midnight">
                1. Arbitration Agreement
              </h3>
              <div className="pl-3 text-base">
                <p>
                  i. <strong>Binding Arbitration.</strong> Except as may be
                  otherwise described herein, any dispute, claim, or controversy
                  arising out of or relating to (i) your access or use of the
                  Services; (ii) this Agreement and the breach, termination,
                  enforcement, interpretation, or validity thereof, including
                  the determination of the scope or applicability of this
                  agreement to arbitrate; (iii) our Privacy Policy; or (iv) any
                  aspect of your relationship with Converge, whether based in
                  contract, tort, statute, fraud, misrepresentation, or any
                  other legal theory, (<strong> &quot;Dispute&quot;</strong>)
                  will be resolved through binding individual arbitration as set
                  forth in this Section 10, except that either you or Converge
                  may initiate a Dispute in or take a Dispute to small claims
                  court. Whether a Dispute falls within the jurisdictional
                  limits of small claims court is for the small claims court to
                  decide in the first instance and otherwise for a court of
                  competent jurisdiction to decide. “Dispute” will be given the
                  broadest possible meaning permitted by law, including but not
                  limited to any dispute or claim that arose before the
                  existence of these or any prior Agreement and any dispute or
                  claim that may arise after termination of this Agreement and
                  our relationship with you.
                </p>
                <br />
                <p>
                  <strong>
                    ii. Mandatory Informal Dispute Resolution Process.{" "}
                  </strong>
                  If you and Converge have a Dispute, you and Converge agree to
                  make a good faith effort to informally resolve it. The party
                  initiating the Dispute must send a written notice to the other
                  party that describes the Dispute (“Notice”). The Notice must
                  include the following information: (i) the initiating
                  party&apos;s contact information (including name, address,
                  telephone number, and email address) (with their
                  counsel&apos;s contact information, if represented); and (ii)
                  a detailed description of (a) the Dispute, (b) the nature and
                  basis of the claims, and (c) the nature and basis of the
                  relief sought (“Demand”).
                </p>
                <br />
                <p>
                  If you have a Dispute with us, you must send your Notice,
                  including all of the information referenced above, by email or
                  post using the information in the{" "}
                  <Link
                    href="#contact-info"
                    className="text-verified underline underline-offset-2"
                  >
                    Contact Information
                  </Link>{" "}
                  section below. If we have a Dispute with you, we will send our
                  Notice, including all of the information referenced above, to
                  you at the most recent contact information we have on file for
                  you.
                </p>
                <br />
                <p>
                  For a period of thirty (30) days from receipt of a completed
                  Notice (which can be extended by agreement of the parties),
                  you and we agree to negotiate in good faith in an effort to
                  informally resolve the Dispute. If you and we do not reach an
                  agreement to resolve the Dispute within thirty (30) days after
                  the Notice is received, you or we may commence an arbitration
                  proceeding or file a claim in small claims court. Arbitration
                  forms can be downloaded from www.jamsadr.com. Except in the
                  event of a Coordinated Claim (as defined below), if you are
                  required to pay a filing fee, after we receive Notice that you
                  have commenced arbitration, we will promptly reimburse you for
                  your payment of the filing fee, unless your claim is for
                  greater than US $10,000 (or equivalent in your local
                  jurisdiction’s currency at time of filing) or the arbitrator
                  determines the claims are frivolous, in which event you will
                  be responsible for filing fees.
                </p>
                <br />

                <p>
                  <strong>iii. Arbitration Procedures.</strong> You and Converge
                  agree that any arbitration arising out of or related to this
                  Agreement will be administered by JAMS pursuant to its
                  Comprehensive Arbitration Rules and Procedures and in
                  accordance with the Expedited Procedures in those Rules (as
                  those Rules exist on the effective date of this Agreement,
                  including Rules 16.1 and 16.2 of those Rules) (“JAMS Rules”)
                  as modified by this arbitration agreement. The arbitration
                  shall be heard by a single, neutral arbitrator. The JAMS Rules
                  are available at www.jamsadr.com or by emailing JAMS at
                  globalteam@jamsadr.com.
                </p>
                <br />
                <p>
                  If you are seeking US $10,000 (or equivalent in your local
                  jurisdiction’s currency at time of filing) or less, we agree
                  that you may choose whether the arbitration will be conducted
                  solely on the basis of documents submitted to the arbitrator,
                  through a telephonic or video hearing, or by an in-person
                  hearing as established by the JAMS Rules. If you are seeking
                  more than US $10,000 (or equivalent in your local
                  jurisdiction’s currency at time of filing), the right to a
                  hearing will be determined by the JAMS Rules. Any in-person
                  hearing will be held in Miami, Florida, whether submitted to
                  arbitration or small claims court. If the arbitrator finds
                  this location to be unreasonably burdensome to you, a new
                  location may be selected or arbitration may be conducted over
                  the phone, using video conferencing, or similar. You may be
                  entitled to an in-person hearing near your place of residence.
                  In the event that the arbitration will be conducted solely on
                  the basis of submitted documents, the arbitrator&apos;s
                  decision and award will be made and delivered within six (6)
                  months of the selection of the arbitrator, unless extended by
                  the arbitrator. Reasonable discovery will be allowed during
                  arbitration in accordance with these rules. Judgment on any
                  arbitration award may be entered in any court having
                  appropriate jurisdiction. This clause shall not preclude
                  parties from seeking provisional remedies in aid of
                  arbitration from a court of appropriate jurisdiction.
                </p>
                <br />
                <p>
                  In any arbitration arising out of or related to this
                  Agreement, the arbitrator is not empowered to award punitive
                  or exemplary damages, except where permitted by statute, and
                  the parties waive any right to recover any such damages. In
                  any arbitration arising out of or related to this Agreement,
                  the arbitrator may not award any incidental, indirect, or
                  consequential damages, damages for lost profits, or other
                  equivalent damages that may be present in your local
                  jurisdiction.
                </p>
                <br />
                <p>
                  <strong>iv. Arbitration Costs.</strong> Except as expressly
                  set forth herein, the payment of all filing, administration
                  and arbitrator fees will be governed by the JAMS Rules.
                </p>
                <br />
                <p>
                  <strong>v. Award. </strong>
                  In the event arbitration awards you damages of an amount at
                  least US $100 greater than our last documented settlement
                  offer, we will pay your awarded damages or US $2,500,
                  whichever is greater.
                </p>
                <br />
                <p>
                  <strong>vi. Coordinated Proceedings.</strong> If twenty-five
                  (25) or more similar Disputes (including yours) are asserted
                  against Converge by the same or coordinated counsel or are
                  otherwise coordinated (
                  <strong>&quot;Coordinated Claims&quot;</strong>), the Disputes
                  shall proceed in arbitration in a coordinated proceeding and
                  governed by JAMS Mass Arbitration Rules. If there is a
                  conflict by the JAMS Mass Arbitration Rules and this
                  Agreement, then the JAMS Mass Arbitration Rules shall prevail.
                  Counsel for the individuals and counsel for Converge shall
                  each select five (5) Disputes to proceed first in arbitration
                  in a bellwether proceeding (
                  <strong>&quot;Test Cases&quot;</strong>). The remaining
                  Disputes shall not be filed in arbitration until the first ten
                  (10) have been resolved. If the parties are unable to resolve
                  the remaining Disputes after the conclusion of the Test Cases,
                  each side may select another five (5) Disputes to proceed to
                  arbitration for a second bellwether proceeding. This process
                  may continue until the parties have determined an objective
                  methodology to make an offer to resolve each and every
                  outstanding Dispute. A court will have authority to enforce
                  this clause and, if necessary, to enjoin the mass filing of
                  arbitration demands against Converge. Individuals bringing
                  Coordinated Claims shall be responsible for up to US $250 (or
                  equivalent in your local jurisdiction’s currency at time of
                  filing) of their filing fees or the maximum permissible under
                  the applicable arbitration rules. All applicable statutes of
                  limitations and defenses based upon the passage of time will
                  be tolled while the Coordinated Proceedings specified in this
                  Section are pending. We will take such action, if any,
                  required to effectuate such tolling.
                </p>
                <br />
                <p>
                  <strong>vii. Injunctive Relief. </strong> Notwithstanding any
                  of the foregoing, and if applicable in your jurisdiction, you
                  and we both agree that you or we may sue in court of
                  jurisdiction to enjoin infringement or other misuse of
                  intellectual property rights or in other scenarios where
                  injunctive relief is appropriate.
                </p>
                <br />
                <p>
                  <strong>viii. Confidentiality. </strong> The parties shall
                  maintain the confidential nature of the arbitration proceeding
                  and the award, including the hearing, except as may be
                  necessary to prepare for or conduct the arbitration hearing on
                  the merits, or except as may be necessary in connection with a
                  court application for a preliminary remedy, a judicial
                  challenge to an award or its enforcement, or unless otherwise
                  required by law or judicial decision.
                </p>
              </div>
            </div>
            <br />
            <div className="pl-3 mt-2">
              <h3 className="text-xl font-bold mb-3 text-midnight">
                2. Class Action Waiver
              </h3>
              <p>
                EXCEPT FOR COORDINATED CLAIMS, TO THE FULLEST EXTENT PERMITTED
                BY APPLICABLE LAW, YOU AND WE AGREE THAT EACH MAY BRING CLAIMS
                AGAINST THE OTHER ONLY IN YOUR OR OUR INDIVIDUAL CAPACITY AND
                NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS,
                COLLECTIVE, CONSOLIDATED, PRIVATE ATTORNEY GENERAL, OR
                REPRESENTATIVE PROCEEDING. Further, except for Coordinated
                Claims, unless both you and we agree otherwise, an arbitrator
                may not consolidate more than one person&apos;s claims and may
                not otherwise preside over any form of class, collective,
                consolidated, private attorney general, or representative
                proceeding.
              </p>
            </div>
            <br />
            <div className="pl-3 mt-2">
              <h3 className="text-xl font-bold mb-3 text-midnight">
                3. Jury Trial Waiver
              </h3>
              <p>
                YOU AND CONVERGE HEREBY UNCONDITIONALLY, KNOWINGLY, EXPRESSLY,
                VOLUNTARILY, IRREVOCABLY AND INTENTIONALLY WAIVE ITS RIGHT TO A
                JURY TRIAL TO THE FULLEST EXTENT PERMITTED BY LAW IN ANY SUIT,
                ACTION, DISPUTE OR PROCEEDING, WHETHER BY CLAIM OR COUNTERCLAIM,
                BROUGHT OR INSTITUTED BY OR AGAINST SUCH PARTY OR IN A
                REPRESENTATIVE CAPACITY, ARISING OUT OF, CONCERNING OR IN ANY
                WAY RELATING TO THE USE OF THE SERVICES OR THE AGREEMENT.
              </p>
            </div>
            <br />
            <div className="pl-3 mt-2">
              <h3 className="text-xl font-bold mb-3 text-midnight">
                4. Severance of Arbitration Agreement
              </h3>
              <p>
                If any of the arbitration provisions above, including without
                limitation those clauses concerning the procedures and
                obligations related to the agreement to arbitrate Disputes,
                Coordinated Claims, or Test Case procedures, the class action
                waiver, or the jury trial waiver are found invalid, then the
                specific invalid provision will be unenforceable and will be
                severed, and the remainder of the arbitration provisions will
                remain in full force. However, any duty of confidentiality
                whether or not such duty is connected with arbitration shall
                survive such severance.
              </p>
            </div>
            <BackToTop />
          </section>

          <section id="applicable-law" className="scroll-mt-32">
            <h2 className="font-display text-3xl text-midnight font-medium mb-6 tracking-wide">
              11. Applicable Law
            </h2>
            <p className="mb-6">
              The law applicable to the interpretation and construction of this
              Agreement and any transaction using or related to the Services,
              shall be the Federal Arbitration Act, applicable federal laws, and
              the laws of the State of California, without regard to principles
              of conflict of laws, but subject to the Federal Arbitration Act
              and other federal arbitration law as set forth above. The parties
              adopt and agree to implement the JAMS Optional Arbitration Appeal
              Procedure (as it exists on the effective date of this Agreement)
              with respect to any final award in an arbitration arising out of
              or related to this Agreement.
            </p>
            <p className="mb-6">
              Unless you and Converge agree otherwise, to the fullest extent
              permitted by law, the federal and state courts located in San
              Francisco, CA will have exclusive jurisdiction over any disputes
              and claims (except for those brought in small claims court) that
              are not subject to arbitration or over any action involving the
              applicability or enforceability of the Agreement, including
              Section 10 (Dispute Resolution) or any of its provisions. You and
              Converge consent to the jurisdiction of those courts and waive any
              objections as to personal jurisdiction or as to the laying of
              venue in such courts due to inconvenient forum or any other basis
              or any right to seek to transfer or change venue of any such
              action to another court.
            </p>
            <BackToTop />
          </section>

          <section id="miscellaneous" className="scroll-mt-32">
            <h2 className="font-display text-3xl text-midnight font-medium mb-6 tracking-wide">
              12. Miscellaneous Legal Terms
            </h2>
            <div className="mb-6 pl-6">
              <h3 className="font-display text-xl text-midnight font-medium mb-4 tracking-wide">
                1. Consent to Communication
              </h3>
              <p className="mb-4">
                When you use the Services or send communications to us, you are
                communicating with us electronically. You consent to receive
                electronically any communications related to your use of the
                Services. We may communicate with you by email or by posting
                notices on the Services. You agree that all agreements, notices,
                disclosures, and other communications that are provided to you
                electronically satisfy any legal requirement that such
                communications be in writing. All notices from us intended for
                receipt by you shall be deemed delivered and effective when sent
                to the email address you provide to us. Please note that by
                providing us with your email address, postal address, or phone
                number, you are agreeing that we or our agents may contact you
                at that address or number in a manner consistent with our
                Privacy Policy.
              </p>

              <h3 className="font-display text-xl text-midnight font-medium mb-4 tracking-wide">
                2. Modifications to the Services
              </h3>
              <p className="mb-4">
                We reserve the right to enhance, upgrade, improve, modify,
                suspend or discontinue features of the Services (including any
                content, products, or services offered on or through the
                Services) as we deem appropriate and in our discretion. We will
                have no liability to you or any third party for modification,
                suspension, or discontinuance of the Services or any Content,
                products, or services offered on or through the Services.
              </p>

              <h3 className="font-display text-xl text-midnight font-medium mb-4 tracking-wide">
                3. Other Terms, Conditions, and Policies
              </h3>
              <p className="mb-4">
                This Agreement applies exclusively to your access to, and use
                of, the Services and does not alter in any way the terms or
                conditions of any other agreement you may have with us for
                products, services, programs, or otherwise. Additional terms,
                conditions, and/or policies may apply to use of specific
                portions of the Services and are included as part of this
                Agreement, whether they reference this Agreement or not.
              </p>

              <h3 className="font-display text-xl text-midnight font-medium mb-4 tracking-wide">
                4. Term and Termination
              </h3>
              <p className="mb-4">
                This Agreement is in effect from the date that you first access
                the Services until terminated by you or us. We may terminate
                this Agreement at any time by notifying you using any contact
                information we have about you or by posting such notice on the
                Services. You may terminate this Agreement by giving us written
                notice using the information in the{" "}
                <Link
                  href="#contact-info"
                  className="text-verified underline underline-offset-2"
                >
                  Contact Information
                </Link>{" "}
                section. Such notice must include your detailed contact
                information and any account information or other credentials.
                Upon any such termination, you must immediately cease all use of
                and access to the Services and destroy all Content obtained from
                the Services and all copies thereof. You agree that if your use
                of the Services is terminated pursuant to this Agreement, you
                will not attempt to use the Services under any name, real or
                assumed, and further agree that if you violate this restriction
                after being terminated, you will indemnify and hold us harmless
                from any and all liability that we may incur therefore. Your use
                of the Services after termination will be a violation of this
                Section, which survives any termination.
              </p>
              <p className="mb-4">
                In addition to any right or remedy that may be available to us
                under applicable law, we may suspend, limit, or terminate all or
                a portion of your access to the Services or any of their
                features at any time with or without notice and with or without
                cause, including without limitation, if we believe that you have
                violated or acted inconsistently with the letter or spirit of
                this Agreement. We may be protected for liability from these
                actions under the Communications Decency Act, 47 U.S.C. § 230.
              </p>
              <p className="mb-4">
                The provisions of this Agreement concerning protection of
                intellectual property rights, acceptable use, disclaimers,
                limitations of liability, indemnity, and disputes, as well as
                any other provisions that by their nature should survive, shall
                survive any termination of this Agreement.
              </p>
              <h3 className="font-display text-xl text-midnight font-medium mb-4 tracking-wide">
                5. Children
              </h3>
              <p className="mb-4">
                The Services are not designed to appeal to minors, and we do not
                knowingly attempt to solicit or receive any information from
                children under thirteen (13) years of age. YOU MUST BE AT LEAST
                THE AGE OF MAJORITY IN YOUR LOCAL JURISDICTION, WHICH IS
                EIGHTEEN (18) YEARS IN MOST JURISDICTIONS, TO ACCESS AND USE THE
                SERVICES.
              </p>

              <h3 className="font-display text-xl text-midnight font-medium mb-4 tracking-wide">
                6. Waiver; Severability
              </h3>
              <p className="mb-4">
                The failure of Converge to enforce any provisions of this
                Agreement or respond to a breach by you or other parties shall
                not in any way waive its right to enforce subsequently any terms
                or conditions of this Agreement or to act with respect to
                similar breaches. This Agreement will be enforced to the fullest
                extent permitted by applicable law. If any provision of this
                Agreement is held to be invalid or unenforceable to any extent,
                then (i) such provision will be interpreted, construed, and
                reformed to the extent reasonably required to render it valid,
                enforceable and consistent with its original intent; and (ii)
                such invalidity or unenforceability will not affect any other
                provision of this Agreement.
              </p>

              <h3 className="font-display text-xl text-midnight font-medium mb-4 tracking-wide">
                7. Assignment
              </h3>
              <p className="mb-4">
                We may assign this Agreement at any time with or without notice
                to you. You may not assign or sublicense this Agreement or any
                of your rights or obligations under this Agreement without our
                prior written consent. The Agreement and any amendment thereto
                shall be binding on and will inure to the benefit of the parties
                and their respective successors and permitted assigns.
              </p>
              <h3 className="font-display text-xl text-midnight font-medium mb-4 tracking-wide">
                8. Force Majeure
              </h3>
              <p className="mb-4">
                No party will be liable for any damage, delay, or failure of
                performance (with the exception of any payment obligations)
                resulting directly or indirectly from a Force Majeure Event. If
                a Force Majeure Event occurs, the affected party will notify the
                other party and take commercially reasonable efforts to mitigate
                the adverse effects of the Force Majeure Event on its
                obligations under your Agreement. For purposes of this
                Agreement, <strong>&quot;Force Majeure Event&quot;</strong>{" "}
                means: a cause which is beyond a party’s reasonable control,
                including without limitation, fire, riot, civil disturbance,
                strike (other than a strike by that party’s employees), embargo,
                explosion, natural disaster, epidemic, pandemic, act of military
                authority, act of terrorism, act of God, government requirement
                or delay, change in law or regulation, disruption or outage of
                communications, power or Internet infrastructure.
              </p>

              <h3 className="font-display text-xl text-midnight font-medium mb-4 tracking-wide">
                9.Information for New Jersey Users
              </h3>
              <p className="mb-4">
                If you are a consumer residing in New Jersey, the following
                provisions of this Agreement do not apply to you (and do not
                limit any rights that you may have) to the extent that they are
                unenforceable under New Jersey law: (i) Section 9 (Disclaimer;
                Limitation of Liability; and Indemnity); (ii) Section 10
                (Dispute Resolution); and (iii) Section 11 (Applicable Law)
                (solely to the extent that your rights as a consumer residing in
                New Jersey are required to be governed by New Jersey law).
                According to N.J.S.A. 56:12-16, you may have additional rights
                if you are a New Jersey resident and other provisions of this
                Agreement are found to violate an established legal right.
              </p>

              <h3 className="font-display text-xl text-midnight font-medium mb-4 tracking-wide">
                10. Information for California Users
              </h3>
              <p className="mb-4">
                Under California Civil Code § 1789.3, California users are
                entitled to the following consumer rights notice: California
                residents may reach the Complaint Assistance Unit of the
                Division of Consumer Services of the California Department of
                Consumer Affairs by mail at 1625 North Market Blvd., Sacramento,
                CA 95834, or by telephone at (916) 445-1254 or (800) 951-5210.
              </p>
              <p className="mb-4">
                If you are a California resident, you agree to consciously waive
                all claims, both known and unknown that may be later discovered
                and expressly forgo and waive all protections as by California
                Civil Code § 1542, which states, “[a] general release does not
                extend to claims that the creditor or releasing party does not
                know or suspect to exist in his or her favor at the time of
                executing the release and that, if known by him or her, would
                have materially affected his or her settlement with the debtor
                or released party.” By using the Services, you agree that these
                California Civil Code § 1542 protections no longer apply to you.
              </p>
            </div>
            <BackToTop />
          </section>

          <section id="contact-info" className="scroll-mt-32">
            <h2 className="font-display text-3xl text-midnight font-medium mb-6 tracking-wide">
              13. Contact Information
            </h2>
            <p className="mb-6">
              If you have questions about this Agreement, or if you have
              technical questions about the operation of the Services, please
              contact us at:
            </p>
            <p className="mb-6">
              Email:{" "}
              <Link
                className="text-verified underline underline-offset-2"
                href="mailto:contactus@convergefi.com"
              >
                contactus@convergefi.com
              </Link>
            </p>
            <p className="mb-6">Phone Number: (786) 699-2285</p>
            <p className="mb-6">
              Legal notices to Converge must be sent by [mail or email] to:{" "}
            </p>
            <p className="mb-6">
              <strong>Converge Financial Technology, Inc.</strong> <br /> Attn:
              Amy Wolff <br />
              Address: 131 Continental Drive, Suite 305, Newark, DE 19714 <br />{" "}
              Email:{" "}
              <Link
                className="text-verified underline underline-offset-2"
                href="mailto:legal@convergefi.com"
              >
                legal@convergefi.com
              </Link>
            </p>
            <BackToTop />
          </section>
        </div>
      </article>
    </div>
  );
}
