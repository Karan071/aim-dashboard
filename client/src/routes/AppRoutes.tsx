import { Routes, Route } from "react-router-dom";

// Platform Desk Components
import { Desk as PlatformDesk } from "@/pages/PlatformDesk/Desk";
import { RecentActivities as PlatformRecentActivities } from "@/pages/PlatformDesk/RecentActivities";
import { Sessions as PlatformSessions } from "@/pages/PlatformDesk/Sessions/Sessions";
import { SessionPool as PlatformSessionPool } from "@/pages/PlatformDesk/Sessions/SessionPool";
import { Masterclass as PlatformMasterclass } from "@/pages/PlatformDesk/Sessions/Masterclass";
import { Engage as PlatformEngage } from "@/pages/PlatformDesk/Engage";
import { Prepare as PlatformPrepare } from "@/pages/PlatformDesk/Prepare";
import { Contribute as PlatformContribute } from "@/pages/PlatformDesk/Contribute";
import { AccessCode as PlatformAccessCode } from "@/pages/PlatformDesk/Plans/AccessCode";
import { ConsultantPremium as PlatformConsultantPremium } from "@/pages/PlatformDesk/Plans/ConsultantPremium";
import { Forms as PlatformForms } from "@/pages/PlatformDesk/Forms";
import { DeskIAM as PlatformDeskIAM } from "@/pages/PlatformDesk/DeskIAM";

// Review Desk
import { Desk as ReviewDesk } from "@/pages/ReviewDesk/Desk";
import { Coaches as ReviewCoaches } from "@/pages/ReviewDesk/Coaches";
import { Organization as ReviewOrganization } from "@/pages/ReviewDesk/Organization";
import { ChannelPartners as ReviewChannelPartner } from "@/pages/ReviewDesk/ChannelPartners";
import { Libraries as ReviewLibraries } from "@/pages/ReviewDesk/Libraries";
import { MapListing as ReviewMapListing } from "@/pages/ReviewDesk/MapListing";
import { CustomInput as ReviewCustomInput } from "@/pages/ReviewDesk/CustomInput";

// Relations Desk
import { Desk as RelationDesk } from "@/pages/RelationDesk/Desk";
import { MyPipeline as RelationPipeline } from "@/pages/RelationDesk/MyPipeline";
import { Pool as RelationPool } from "@/pages/RelationDesk/Pool";
import { Explorers as RelationExplorers } from "@/pages/RelationDesk/Leads/Explorers";
import { Coaches as RelationCoaches } from "@/pages/RelationDesk/Leads/Coaches";
import { Organisation as RelationOrganisation } from "@/pages/RelationDesk/Leads/Organisation";
import { ChannelPartners as RelationChannelPartners } from "@/pages/RelationDesk/Leads/ChannelPartners";
import { Partnerships as RelationPartnerships } from "@/pages/RelationDesk/Leads/Partnerships";
import { Problems as RelationProblems } from "@/pages/RelationDesk/Cases/Problems";
import { Bugs as RelationBugs } from "@/pages/RelationDesk/Cases/Bugs";
import { Abuses as RelationAbuses } from "@/pages/RelationDesk/Cases/Abuses";
import { Explorers as RelationExplorersList } from "@/pages/RelationDesk/Explorers";
import { Coaches as RelationCoachesList } from "@/pages/RelationDesk/Coaches";
import { Institute } from "@/pages/RelationDesk/Organisation/Institute";
import { Schools } from "@/pages/RelationDesk/Organisation/Schools";
import { Colleges } from "@/pages/RelationDesk/Organisation/Colleges";
import { Companies } from "@/pages/RelationDesk/Organisation/Companies";
import { Universities } from "@/pages/RelationDesk/Organisation/Universities";
import { Ngo } from "@/pages/RelationDesk/Organisation/Ngo";
import { MyAccount } from "@/pages/RelationDesk/MyAccount";
import { Leaderboard as RelationLeaderboard } from "@/pages/RelationDesk/Leaderboard";

// Digital Desk
import { Desk as DigitalDesk } from "@/pages/DigitalDesk/Desk";
import { Campaigns as DigitalCampaigns } from "@/pages/DigitalDesk/Campaigns";
import { Surveys as DigitalSurveys } from "@/pages/DigitalDesk/Surveys";
import { Insights as DigitalInsights } from "@/pages/DigitalDesk/CMS/Insights";
import { VideoLibraries as DigitalVideo } from "@/pages/DigitalDesk/CMS/Video";
import { Faq as DigitalFaq } from "@/pages/DigitalDesk/CMS/Faq";
import { HelpArticles as DigitalHelpArticles } from "@/pages/DigitalDesk/CMS/HelpArticles";
import { InTheNews as DigitalInTheNews } from "@/pages/DigitalDesk/CMS/InTheNews";
import { Testimonials as DigitalTestimonials } from "@/pages/DigitalDesk/CMS/Testimonials";
import { TeamDirectory as DigitalTeamDirectory } from "@/pages/DigitalDesk/CMS/TeamDirectory";
import { Exams as DigitalExams } from "@/pages/DigitalDesk/Libraries/Exams";
import { Careers as DigitalCareers } from "@/pages/DigitalDesk/Libraries/Careers";
import { Degrees as DigitalDegrees } from "@/pages/DigitalDesk/Libraries/Degrees";
import { Courses as DigitalCourses } from "@/pages/DigitalDesk/Libraries/Courses";
import { Scholarships as DigitalScholarships } from "@/pages/DigitalDesk/Libraries/Scholarships";
import { Skills as DigitalSkills } from "@/pages/DigitalDesk/Libraries/Skills";
import { Review as DigitalReview } from "@/pages/DigitalDesk/Engage/Review";
import { Comments as DigitalComments } from "@/pages/DigitalDesk/Engage/Comments";
import { Feedback as DigitalFeedback } from "@/pages/DigitalDesk/Engage/Feedback";
import { Helpful as DigitalHelpful } from "@/pages/DigitalDesk/Engage/Helpful";
import { FileManager as DigitalFileManager } from "@/pages/DigitalDesk/FileManager";
import { MetaInformation as DigitalMetaInformation } from "@/pages/DigitalDesk/MetaInformation";

// Finance Desk
import { Finance as FinanceDesk } from "@/pages/FinanceDesk/Finance";
import { Payments as FinancePayments } from "@/pages/FinanceDesk/Payments";
import { Commission as FinanceCommission } from "@/pages/FinanceDesk/Commission";
import { Payout as FinancePayout } from "@/pages/FinanceDesk/Payout";
import { Platform as FinancePlatform } from "@/pages/FinanceDesk/Platform";
import { Earning as FinanceEarning } from "@/pages/FinanceDesk/Earning";
import { Reports as FinanceReports } from "@/pages/FinanceDesk/Reports";

// DevOps Desk
import { DevopsDesk as DevopsDesk } from "@/pages/DevopsDesk/DevopsDesk";
import { Mycases as DevopsMycases } from "@/pages/DevopsDesk/Mycases";
import { Cases as DevopsCases } from "@/pages/DevopsDesk/Cases";
import { Leaderboard as DevopsLeaderboard } from "@/pages/DevopsDesk/Leaderboard";

// HRMS Desk
import { Desk as HRMSDesk } from "@/pages/HRMS/Desk";
import { FollowUp as HRMSFollowUp } from "@/pages/HRMS/FollowUp";
import { Application as HRMSApplication } from "@/pages/HRMS/Application";
import { Opening as HRMSOpening } from "@/pages/HRMS/Opening";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Platform Desk Routes */}
      <Route path="platform/desk" element={<PlatformDesk />} />
      <Route path="platform/activities" element={<PlatformRecentActivities />} />
      <Route path="platform/products/sessions" element={<PlatformSessions />} />
      <Route
        path="platform/products/session-pool"
        element={<PlatformSessionPool />}
      />
      <Route
        path="platform/products/masterclasses"
        element={<PlatformMasterclass />}
      />
      <Route path="platform/engage" element={<PlatformEngage />} />
      <Route path="platform/prepare" element={<PlatformPrepare />} />
      <Route path="platform/contribute" element={<PlatformContribute />} />
      <Route path="platform/plans/access-code" element={<PlatformAccessCode />} />
      <Route
        path="platform/plans/consultants-premium"
        element={<PlatformConsultantPremium />}
      />
      <Route path="platform/forms" element={<PlatformForms />} />
      <Route path="platform/desk-iam" element={<PlatformDeskIAM />} />

      {/* Review Desk Routes */}
      <Route path="review/desk" element={<ReviewDesk />} />
      <Route path="review/coaches" element={<ReviewCoaches />} />
      <Route
        path="review/organisations"
        element={<ReviewOrganization />}
      />
      <Route
        path="review/channel-partners"
        element={<ReviewChannelPartner />}
      />
      <Route path="review/libraries" element={<ReviewLibraries />} />
      <Route path="review/map-listing" element={<ReviewMapListing />} />
      <Route
        path="review/custom-inputs"
        element={<ReviewCustomInput />}
      />

      {/* Relations Desk Routes */}
      <Route path="relation/desk" element={<RelationDesk />} />
      <Route path="relation/pipeline" element={<RelationPipeline />} />
      <Route path="relation/pool" element={<RelationPool />} />
      <Route
        path="relation/leads/explorers"
        element={<RelationExplorers />}
      />
      <Route
        path="relation/leads/coaches"
        element={<RelationCoaches />}
      />
      <Route
        path="relation/leads/organisations"
        element={<RelationOrganisation />}
      />
      <Route
        path="relation/leads/channel-partner"
        element={<RelationChannelPartners />}
      />
      <Route
        path="relation/leads/partnerships-requests"
        element={<RelationPartnerships />}
      />
      <Route
        path="relation/cases/problems"
        element={<RelationProblems />}
      />
      <Route path="relation/cases/bugs" element={<RelationBugs />} />
      <Route path="relation/cases/abuses" element={<RelationAbuses />} />
      <Route
        path="relation/explorers"
        element={<RelationExplorersList />}
      />
      <Route path="relation/coaches" element={<RelationCoachesList />} />
      <Route
        path="relation/organisations/institutes"
        element={<Institute />}
      />
      <Route
        path="relation/organisations/schools"
        element={<Schools />}
      />
      <Route
        path="relation/organisations/colleges"
        element={<Colleges />}
      />
      <Route
        path="relation/organisations/companies"
        element={<Companies />}
      />
      <Route
        path="relation/organisations/universities"
        element={<Universities />}
      />
      <Route path="relation/organisations/ngos" element={<Ngo />} />
      <Route path="relation/my-accounts" element={<MyAccount />} />
      <Route
        path="relation/leaderboard"
        element={<RelationLeaderboard />}
      />

      {/* Digital Desk Routes */}
      <Route path="digital/desk" element={<DigitalDesk />} />
      <Route path="digital/campaigns" element={<DigitalCampaigns />} />
      <Route path="digital/surveys" element={<DigitalSurveys />} />
      <Route path="digital/cms/insights" element={<DigitalInsights />} />
      <Route path="digital/cms/video" element={<DigitalVideo />} />
      <Route path="digital/cms/faqs" element={<DigitalFaq />} />
      <Route
        path="digital/cms/help-articles"
        element={<DigitalHelpArticles />}
      />
      <Route path="digital/cms/in-the-news" element={<DigitalInTheNews />} />
      <Route path="digital/cms/testimonials" element={<DigitalTestimonials />} />
      <Route
        path="digital/cms/teams-directory"
        element={<DigitalTeamDirectory />}
      />
      <Route path="digital/libraries/exams" element={<DigitalExams />} />
      <Route path="digital/libraries/careers" element={<DigitalCareers />} />
      <Route path="digital/libraries/degrees" element={<DigitalDegrees />} />
      <Route path="digital/libraries/courses" element={<DigitalCourses />} />
      <Route
        path="digital/libraries/scholarships"
        element={<DigitalScholarships />}
      />
      <Route path="digital/libraries/skills" element={<DigitalSkills />} />
      <Route path="digital/engage/review" element={<DigitalReview />} />
      <Route path="digital/engage/comments" element={<DigitalComments />} />
      <Route path="digital/engage/feedback" element={<DigitalFeedback />} />
      <Route path="digital/engage/helpful" element={<DigitalHelpful />} />
      <Route path="digital/file-manager" element={<DigitalFileManager />} />
      <Route
        path="digital/meta-information"
        element={<DigitalMetaInformation />}
      />

      {/* Finance Desk Routes */}
      <Route path="finance/desk" element={<FinanceDesk />} />
      <Route path="finance/payments" element={<FinancePayments />} />
      <Route path="finance/commissions" element={<FinanceCommission />} />
      <Route path="finance/payouts" element={<FinancePayout />} />
      <Route path="finance/platform" element={<FinancePlatform />} />
      <Route path="finance/earnings" element={<FinanceEarning />} />
      <Route path="finance/reports" element={<FinanceReports />} />

      {/* DevOps Desk Routes */}
      <Route path="devops/desk" element={<DevopsDesk />} />
      <Route path="devops/my-cases" element={<DevopsMycases />} />
      <Route path="devops/cases" element={<DevopsCases />} />
      <Route path="devops/leaderboard" element={<DevopsLeaderboard />} />

      {/* HRMS Routes */}
      <Route path="hr/desk" element={<HRMSDesk />} />
      <Route path="hr/follow-ups" element={<HRMSFollowUp />} />
      <Route path="hr/applications" element={<HRMSApplication />} />
      <Route path="hr/opening" element={<HRMSOpening />} />
    </Routes>
  );
}
