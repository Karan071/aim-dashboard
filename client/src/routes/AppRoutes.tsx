import { Routes, Route } from "react-router-dom";

// Platform Desk Components
import { PlatformDesk } from "@/pages/PlatformDesk/Desk";
import { Activities as PlatformActivities } from "@/pages/PlatformDesk/Activities";
import { LeadExplorers as PlatformLeadExplorers } from "@/pages/PlatformDesk/Leads/Explorers";
import { LeadCoaches as PlatformLeadCoaches } from "@/pages/PlatformDesk/Leads/Coaches";
import { LeadOrganisations as PlatformLeadOrganisations } from "@/pages/PlatformDesk/Leads/Organisations";
import { LeadPartnership as PlatformLeadPartnership } from "@/pages/PlatformDesk/Leads/Partnership";
import { LeadChannelPartners as PlatformLeadChannelPartners } from "@/pages/PlatformDesk/Leads/ChannelPartner";
import { CasesAbuses as PlatformAbuses } from "@/pages/PlatformDesk/Cases/Abuses";
import { CasesBugs as PlatformBugs } from "@/pages/PlatformDesk/Cases/Bugs";
import { CasesProblems as PlatformProblems } from "@/pages/PlatformDesk/Cases/Problems";
import { AccessCodes as PlatformAccessCodes } from "@/pages/PlatformDesk/Plans/AccessCodes";
import { ConsultantPremium as PlatformConsultantPremium } from "@/pages/PlatformDesk/Plans/ConsultantPremium";
import { Feedback as PlatformFeedback } from "@/pages/PlatformDesk/Feedback";
import { Review as PlatformReview } from "@/pages/PlatformDesk/Review";
import { Explorer as PlatformExplorer } from "@/pages/PlatformDesk/Explorers";
import { Coaches as PlatformCoaches } from "@/pages/PlatformDesk/Coaches";
import { Organisation as PlatformOrganisations } from "@/pages/PlatformDesk/Organisations";
import { Assessments as PlatformAssessments } from "@/pages/PlatformDesk/Products/Assessments";
import { Session as PlatformSessions } from "@/pages/PlatformDesk/Products/Sessions";
import { SessionPool as PlatformSessionPool } from "@/pages/PlatformDesk/Products/SessionPool";
import { Masterclass as PlatformMasterclasses } from "@/pages/PlatformDesk/Products/Masterclasses";
import { Courses as PlatformCourses } from "@/pages/PlatformDesk/Products/Courses"
import { DeskIAM as PlatformDeskIAM } from "@/pages/PlatformDesk/DeskIAM";

// Relation Desk
import { Desk as RelationDesk } from "@/pages/RelationDesk/Desk";
import { Leaderboard as RelationLeaderboard } from "@/pages/RelationDesk/Leaderboard";
import { MyAccount as RelationMyAccount } from "@/pages/RelationDesk/MyAccount";
import { Pool as RelationPool } from "@/pages/RelationDesk/Pool";
import { Pipeline as RelationPipeline } from "@/pages/RelationDesk/Pipeline";

// Review Desk
import { Desk as ReviewDesk } from "@/pages/ReviewDesk/Desk";
import { CoachProfile as ReviewCoachProfile } from "@/pages/ReviewDesk/CoachProfile";
import { ChannelPartner as ReviewChannelPartner } from "@/pages/ReviewDesk/ChannelPartner";
import { CurrentOpening as ReviewCurrentOpening } from "@/pages/ReviewDesk/CurrentOpening";
import { Forms as ReviewForms } from "@/pages/ReviewDesk/Forms";
import { JobApplication as ReviewJobApplication } from "@/pages/ReviewDesk/JobApplication";
import { Libraries as ReviewLibraries } from "@/pages/ReviewDesk/Libraries";
import { MapListing as ReviewMapListing } from "@/pages/ReviewDesk/MapListing";
import { Organisation as ReviewOrganisation } from "@/pages/ReviewDesk/Organisation";
import { Partners as ReviewPartners } from "@/pages/ReviewDesk/Partners";

//Digital Desk
import { Desk as DigitalDesk } from "@/pages/DigitalDesk/Desk";
import { Campaigns as DigitalCampaigns } from "@/pages/DigitalDesk/Campaigns";
import { Comments as DigitalComments } from "@/pages/DigitalDesk/Comments";
import { Insights as DigitalInsights  } from "@/pages/DigitalDesk/Insights";
import { Video as DigitalVideo} from "@/pages/DigitalDesk/Video";
import { InTheNews as DigitalNews } from "@/pages/DigitalDesk/InTheNews";
import { Testimonials as DigitalTestimonials } from "@/pages/DigitalDesk/Testimonial";
import { Surveys as DigitalSurveys } from "@/pages/DigitalDesk/Surveys";
import { Institutes as DigitalInstitutes } from "@/pages/DigitalDesk/Organisation/Institutes";
import { Schools as DigitalSchools } from "@/pages/DigitalDesk/Organisation/Schools";
import { Colleges as DigitalColleges } from "@/pages/DigitalDesk/Organisation/Colleges";
import { Companies as DigitalCompanies } from "@/pages/DigitalDesk/Organisation/Companies";
import { Universities as DigitalUniversity } from "@/pages/DigitalDesk/Organisation/Universities";
import { Ngos as DigitalNgos } from "@/pages/DigitalDesk/Organisation/Ngos";
import { Exams as DigitalExams } from "@/pages/DigitalDesk/Libraries/Exams";
import { Careers as DigitalCareers } from "@/pages/DigitalDesk/Libraries/Careers";
import { Degrees as DigitalDegrees} from "@/pages/DigitalDesk/Libraries/Degrees";
import { Courses as DigitalCourses } from "@/pages/DigitalDesk/Libraries/Courses";
import { Scholarships as DigitalScholarships } from "@/pages/DigitalDesk/Libraries/Scholarship";
import { Skills as DigitalSkills } from "@/pages/DigitalDesk/Libraries/Skills";
import { HelpArticles as DigitalHelp } from "@/pages/DigitalDesk/HelpArticles";
import { Faqs as DigitalFaqs } from "@/pages/DigitalDesk/Faqs";
import { TeamDirectory as DigitalTeam } from "@/pages/DigitalDesk/TeamsDirectory";

// Finance Desk
import { Finance as FinanceDesk } from "@/pages/FinanceDesk/Finance";
import { Payments as FinancePayments } from "@/pages/FinanceDesk/Payments";
import { Payout as FinancePayout } from "@/pages/FinanceDesk/Payout";
import { Reports as FinanceReports } from "@/pages/FinanceDesk/Reports";
import { Commission as FinanceCommission } from "@/pages/FinanceDesk/Commission";
import { Earning as FinanceEarning } from "@/pages/FinanceDesk/Earning";
import { Platform as FinancePlatform } from "@/pages/FinanceDesk/Platform";

// DevOps Desk
import { DevopsDesk } from "@/pages/DevopsDesk/DevopsDesk";
import { Pipeline as DevopsPipeline } from "@/pages/DevopsDesk/Pipeline";
import { Cases as DevopsCases } from "@/pages/DevopsDesk/Cases";
import { Leaderboard as DevopsLeaderboard } from "@/pages/DevopsDesk/Leaderboard";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Platform Desk Routes */}
      <Route path="platform/desk" element={<PlatformDesk />} />
      <Route path="platform/activities" element={<PlatformActivities />} />
      <Route path="platform/leads/explorers" element={<PlatformLeadExplorers />} />
      <Route path="platform/leads/coaches" element={<PlatformLeadCoaches />} />
      <Route path="platform/leads/organisations" element={<PlatformLeadOrganisations />} />
      <Route path="platform/leads/requests" element={<PlatformLeadPartnership />} />
      <Route path="platform/leads/channels" element={<PlatformLeadChannelPartners />} />
      <Route path="platform/cases/problems" element={<PlatformProblems />} />
      <Route path="platform/cases/bugs" element={<PlatformBugs />} />
      <Route path="platform/cases/abuses" element={<PlatformAbuses />} />
      <Route path="platform/feedback" element={<PlatformFeedback />} />
      <Route path="platform/reviews" element={<PlatformReview />} />
      <Route path="platform/explorers" element={<PlatformExplorer />} />
      <Route path="platform/coaches" element={<PlatformCoaches />} />
      <Route path="platform/organisations" element={<PlatformOrganisations />} />
      <Route path="platform/products/assessments" element={<PlatformAssessments />} />
      <Route path="platform/products/sessions" element={<PlatformSessions />} />
      <Route path="platform/products/session-pool" element={<PlatformSessionPool />} />
      <Route path="platform/products/masterclasses" element={<PlatformMasterclasses />} />
      <Route path="platform/products/courses" element={<PlatformCourses />} />
      <Route path="platform/plans/access-codes" element={<PlatformAccessCodes />} />
      <Route path="platform/plans/consultant-premium" element={<PlatformConsultantPremium />} />
      <Route path="platform/desk-iam" element={<PlatformDeskIAM />} />

      {/* Relation Desk Routes */}
      <Route path="relation/desk" element={<RelationDesk />} />
      <Route path="relation/leaderboard" element={<RelationLeaderboard />} />
      <Route path="relation/my-accounts" element={<RelationMyAccount />} />
      <Route path="relation/pool" element={<RelationPool />} />
      <Route path="relation/pipeline" element={<RelationPipeline />} />

      {/* Review  routes */}
      <Route path="review/desk" element={<ReviewDesk />} />
      <Route path="review/coach-profiles" element={<ReviewCoachProfile />} />
      <Route path="review/channel-partners" element={<ReviewChannelPartner />} />
      <Route path="review/current-opening" element={<ReviewCurrentOpening />} />
      <Route path="review/forms" element={<ReviewForms />} />
      <Route path="review/job-application" element={<ReviewJobApplication />} />
      <Route path="review/libraries" element={<ReviewLibraries />} />
      <Route path="review/google-maps" element={<ReviewMapListing />} />
      <Route path="review/organisation" element={<ReviewOrganisation />} />
      <Route path="review/partners" element={<ReviewPartners />} />

      {/* Digital Desk Routes */}
      <Route path="digital/desk" element={<DigitalDesk />} />
      <Route path="digital/campaigns" element={<DigitalCampaigns />} />
      <Route path="digital/comments" element={<DigitalComments />} />
      <Route path="digital/insights" element={<DigitalInsights />} />
      <Route path="digital/videolibraries" element={<DigitalVideo />} />
      <Route path="digital/in-the-news" element={<DigitalNews />} />
      <Route path="digital/testimonials" element={<DigitalTestimonials />} />
      <Route path="digital/surveys" element={<DigitalSurveys />} />
      <Route path="digital/organisation/institutes" element={<DigitalInstitutes />} />
      <Route path="digital/organisation/schools" element={<DigitalSchools />} />
      <Route path="digital/organisation/colleges" element={<DigitalColleges />} />
      <Route path="digital/organisation/companies" element={<DigitalCompanies />} />
      <Route path="digital/organisation/university" element={<DigitalUniversity />} />
      <Route path="digital/organisation/ngos" element={<DigitalNgos />} />
      <Route path="digital/library/exams" element={<DigitalExams />} />
      <Route path="digital/library/careers" element={<DigitalCareers />} />
      <Route path="digital/library/degrees" element={<DigitalDegrees />} />
      <Route path="digital/library/courses" element={<DigitalCourses />} />
      <Route path="digital/scholarships" element={<DigitalScholarships />} />
      <Route path="digital/skills" element={<DigitalSkills />} />
      <Route path="digital/help-articles" element={<DigitalHelp />} />
      <Route path="digital/faqs" element={<DigitalFaqs />} />
      <Route path="digital/teams" element={<DigitalTeam />} />

      {/* Devops routes */}
      <Route path="/devops/desk" element={<DevopsDesk />} />
      <Route path="/devops/pipeline" element={<DevopsPipeline />} />
      <Route path="/devops/cases" element={<DevopsCases />} />
      <Route path="/devops/leaderboard" element={<DevopsLeaderboard />} />

      {/* Finance Desk Routes */}
      <Route path="finance/desk" element={<FinanceDesk />} />
      <Route path="finance/payments" element={<FinancePayments />} />
      <Route path="finance/payouts" element={<FinancePayout />} />
      <Route path="finance/earnings" element={<FinanceEarning />} />
      <Route path="finance/reports" element={<FinanceReports />} />
      <Route path="finance/platform" element={<FinancePlatform />} />
      <Route path="finance/commission" element={<FinanceCommission />} />


      {/* Legacy Routes for backward compatibility */}
      {/* <Route path="admin/users" element={<DeskUsers />} />
      <Route path="relation/dashboard" element={<Relations />} />
      <Route path="relation/followups" element={<RelationFollowup />} />
      <Route path="relation/account" element={<RelationAccount />} />
      <Route path="relation/active-users" element={<RelationActiveusers />} />
      <Route path="relation/explorers" element={<RelationExplorer />} />
      <Route path="relation/coaches" element={<RelationCoach />} />
      <Route path="relation/partners" element={<RelationPartner />} />
      <Route path="relation/problems" element={<RelationProblem />} />
      <Route path="relation/bugs" element={<RelationBug />} />
      <Route path="relation/abuses" element={<RelationAbuses />} />
      <Route path="relation/feedback" element={<RelationFeedback />} />
      <Route path="relation/review" element={<RelationReviews />} /> */}
      {/* Digital Desk Routes */}
      {/* <Route path="digital/insights" element={<DigitalInsights />} />
      <Route path="digital/campaigns" element={<DigitalCampaigns />} />
      <Route path="digital/comments" element={<DigitalComments />} />
      <Route path="digital/helpful" element={<DigitalHelpful />} />
      <Route path="digital/surveys" element={<DigitalSurveys />} />
      <Route path="digital/schools" element={<DigitalSchools />} />
      <Route path="digital/companies" element={<DigitalCompanies />} />
      <Route path="digital/university" element={<DigitalUniversity />} />
      <Route path="digital/ngos" element={<DigitalNgos />} />
      <Route path="digital/colleges" element={<DigitalColleges />} />
      <Route path="digital/institutes" element={<DigitalInstitutes />} />
      <Route
        path="digital/videolibraries"
        element={<DigitalVideoLibraries />}
      />
      <Route path="digital/exams" element={<DigitalExams />} />
      <Route path="digital/desk" element={<DigitalDesk />} />
      <Route path="digital/in-the-news" element={<DigitalNews />} />
      <Route path="digital/courses" element={<DigitalCourses />} />
      <Route path="digital/scholarships" element={<DigitalScholarships />} />
      <Route path="digital/careers" element={<DigitalCareers />} />
      <Route path="digital/testimonials" element={<DigitalTestimonials />} />
      <Route path="digital/skills" element={<DigitalSkills />} />
      <Route path="digital/help-articles" element={<DigitalHelp />} />
      <Route path="digital/faqs" element={<DigitalFaqs />} />
      <Route path="digital/teams" element={<DigitalTeam />} />
      <Route path="digital/templates" element={<DigitalTemplate />} />
      <Route path="finance/dashboard" element={<FinanceDesk />} />
      <Route path="finance/payout" element={<FinancePayout />} />
      <Route path="finance/commission" element={<FinanceCommission />} />
      <Route path="finance/earning" element={<FinanceEarning />} />
      <Route path="approval/dashboard" element={<ReviewDesk />} />
      <Route path="approval/google-map" element={<ReviewGoogleMaps />} />
      <Route path="approval/profile-coach" element={<ReviewProfileCoach />} /> */}

    </Routes>
  );
}
