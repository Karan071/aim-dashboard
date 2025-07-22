import {
  BookOpen,
  Users,
  Building2,
  Activity,
  Settings,
  FileText,
  Video,
  Newspaper,
  MessageSquare,
  HelpCircle,
  Library,
  TrendingUp,
  Star,
  ClipboardList,
  Shield,
  AlertCircle,
  Award,
  CreditCard,
  DollarSign,
  FileBarChart,
  MapPin,
  Bug,
  CircleUser,
  BadgeDollarSign,
  School,
  Briefcase,
  GraduationCap,
  UserCheck,
  Crown,
  Key,
  MessageCircle,
  Target,
  PhoneCall,
  UserPlus,
  Trophy,
  Folder,
  Quote,
  Users2,
  Building,
  TrophyIcon,
} from "lucide-react";

const allIcons = [
  BookOpen,
  Users,
  Building2,
  Activity,
  Settings,
  FileText,
  Video,
  Newspaper,
  MessageSquare,
  HelpCircle,
  Library,
  TrendingUp,
  Star,
  ClipboardList,
  Shield,
  AlertCircle,
  Award,
  CreditCard,
  DollarSign,
  FileBarChart,
  MapPin,
  Bug,
  CircleUser,
  BadgeDollarSign,
  School,
  Briefcase,
  GraduationCap,
  UserCheck,
  Crown,
  Key,
  MessageCircle,
  Target,
  PhoneCall,
  UserPlus,
  Trophy,
  Folder,
  Quote,
  Users2,
  Building,
  TrophyIcon,
];

let usedIconIndex = 0;
const getNextIcon = () => allIcons[usedIconIndex++ % allIcons.length];

export const SidebarData = {
  user: {
    name: "Karn",
    email: "Karan@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  sections: [
    {
      title: "Platform",
      isHeading: true,
      items: [
        {
          title: "Platform Desk",
          url: "/desk/platform/desk",
          icon: getNextIcon(),
        },
        {
          title: "Recent Activities",
          url: "/desk/platform/activities",
          icon: getNextIcon(),
        },
        {
          title: "Leads",
          icon: getNextIcon(),
          url: "#",
          isCollapsible: true,
          items: [
            {
              title: "Explorers",
              url: "/desk/platform/leads/explorers",
              icon: getNextIcon(),
            },
            {
              title: "Coaches",
              url: "/desk/platform/leads/coaches",
              icon: getNextIcon(),
            },
            {
              title: "Organisations",
              url: "/desk/platform/leads/organisations",
              icon: getNextIcon(),
            },
            {
              title: "Channel Partner",
              url: "/desk/platform/leads/channels",
              icon: getNextIcon(),
            },
            {
              title: "Partnerships Request",
              url: "/desk/platform/leads/requests",
              icon: getNextIcon(),
            },
          ],
        },
        {
          title: "Cases",
          icon: getNextIcon(),
          url: "#",
          isCollapsible: true,
          items: [
            {
              title: "Problems",
              url: "/desk/platform/cases/problems",
              icon: getNextIcon(),
            },
            {
              title: "Bugs",
              url: "/desk/platform/cases/bugs",
              icon: getNextIcon(),
            },
            {
              title: "Abuses",
              url: "/desk/platform/cases/abuses",
              icon: getNextIcon(),
            },
          ],
        },
        {
          title: "Feedback",
          url: "/desk/platform/feedback",
          icon: getNextIcon(),
        },
        {
          title: "Review",
          url: "/desk/platform/review",
          icon: getNextIcon(),
        },
        {
          title: "Explorers",
          url: "/desk/platform/explorers",
          icon: getNextIcon(),
        },
        {
          title: "Coaches",
          url: "/desk/platform/coaches",
          icon: getNextIcon(),
        },
        {
          title: "Organisations",
          url: "/desk/platform/organisations",
          icon: getNextIcon(),
        },
        {
          title: "Products",
          icon: getNextIcon(),
          url: "#",
          isCollapsible: true,
          items: [
            {
              title: "Assessments",
              url: "/desk/platform/products/assessments",
              icon: getNextIcon(),
            },
            {
              title: "Sessions",
              url: "/desk/platform/products/sessions",
              icon: getNextIcon(),
            },
            {
              title: "Session Pool",
              url: "/desk/platform/products/session-pool",
              icon: getNextIcon(),
            },
            {
              title: "Masterclasses",
              url: "/desk/platform/products/masterclasses",
              icon: getNextIcon(),
            },
            {
              title: "Courses",
              url: "/desk/platform/products/courses",
              icon: getNextIcon(),
            },
          ],
        },
        {
          title: "Plans",
          url: "#",
          icon: getNextIcon(),
          isCollapsible: true,
          items: [
            {
              title: "Access Codes",
              url: "/desk/platform/plans/access-codes",
              icon: getNextIcon(),
            },
            {
              title: "Consultant Premium",
              url: "/desk/platform/plans/consultant-premium",
              icon: getNextIcon(),
            },
          ]
        },
        {
          title: "Desk IAM",
          url: "/desk/platform/desk-iam",
          icon: getNextIcon(),
        },
      ],
    },
    {
      title: "Relation Desk",
      isHeading: true,
      items: [
        {
          title: "Relations Desk",
          url: "/desk/relation/desk",
          icon: getNextIcon(),
        },
        {
          title: "Pipeline",
          url: "/desk/relation/pipeline",
          icon: getNextIcon(),
        },
        {
          title: "Pool",
          url: "/desk/relation/pool",
          icon: getNextIcon(),
        },
        {
          title: "My Accounts",
          url: "/desk/relation/my-accounts",
          icon: getNextIcon(),
        },
        {
          title: "Leaderboard",
          url: "/desk/relation/leaderboard",
          icon: getNextIcon(),
        },
      ],
    },
    {
      title: "Review ",
      isHeading: true,
      items: [
        {
          title: "Review",
          url: "/desk/review/desk",
          icon: getNextIcon(),
        },
        {
          title: "Coach Profiles",
          url: "/desk/review/coach-profiles",
          icon: getNextIcon(),
        },
        {
          title: "Organisations",
          url: "/desk/review/organisations",
          icon: getNextIcon(),
        },
        {
          title: "Channel Partners",
          url: "/desk/review/channel-partners",
          icon: getNextIcon(),
        },
        {
          title: "Partners",
          url: "/desk/review/partners",
          icon: getNextIcon(),
        },
        {
          title: "Current Openings",
          url: "/desk/review/current-openings",
          icon: getNextIcon(),
        },
        {
          title: "Job Applications",
          url: "/desk/review/job-applications",
          icon: getNextIcon(),
        },
        {
          title: "Libraries",
          url: "/desk/review/libraries",
          icon: getNextIcon(),
        },
        {
          title: "Map Listing",
          url: "/desk/review/map-listing",
          icon: getNextIcon(),
        },
        {
          title: "Forms",
          url: "/desk/review/forms",
          icon: getNextIcon(),
        },
      ],
    },
    {
      title: "Digital",
      isHeading: true,
      items: [
        {
          title: "Digital Desk",
          url: "/desk/digital/desk",
          icon: getNextIcon(),
        },
        {
          title: "Campaigns",
          url: "/desk/digital/campaigns",
          icon: getNextIcon(),
        },
        {
          title: "Comments",
          url: "/desk/digital/comments",
          icon: getNextIcon(),
        },
        {
          title: "Insights",
          url: "/desk/digital/insights",
          icon: getNextIcon(),
        },
        {
          title: "Video",
          url: "/desk/digital/videolibraries",
          icon: getNextIcon(),
        },
        {
          title: "In the News",
          url: "/desk/digital/in-the-news",
          icon: getNextIcon(),
        },
        {
          title: "Testimonials",
          url: "/desk/digital/testimonials",
          icon: getNextIcon(),
        },
        {
          title: "Surveys",
          url: "/desk/digital/surveys",
          icon: getNextIcon(),
        },
        {
          title: "Organisations",
          icon: getNextIcon(),
          url: "#",
          isCollapsible: true,
          items: [
            {
              title: "Institutes",
              url: "/desk/digital/organisation/institutes",
              icon: getNextIcon(),
            },
            {
              title: "Schools",
              url: "/desk/digital/organisation/schools",
              icon: getNextIcon(),
            },
            {
              title: "Colleges",
              url: "/desk/digital/organisation/colleges",
              icon: getNextIcon(),
            },
            {
              title: "Companies",
              url: "/desk/digital/organisation/companies",
              icon: getNextIcon(),
            },
            {
              title: "University",
              url: "/desk/digital/organisation/university",
              icon: getNextIcon(),
            },
            {
              title: "NGO's",
              url: "/desk/digital/organisation/ngos",
              icon: getNextIcon(),
            },
          ],
        },
        {
          title: "Libraries",
          icon: getNextIcon(),
          url: "#",
          isCollapsible: true,
          items: [
            {
              title: "Exams",
              url: "/desk/digital/library/exams",
              icon: getNextIcon(),
            },
            {
              title: "Careers",
              url: "/desk/digital/library/careers",
              icon: getNextIcon(),
            },
            {
              title: "Degrees",
              url: "/desk/digital/library/degrees",
              icon: getNextIcon(),
            },
            {
              title: "Courses",
              url: "/desk/digital/library/courses",
              icon: getNextIcon(),
            },
            {
              title: "Scholarships",
              url: "/desk/digital/library/scholarships",
              icon: getNextIcon(),
            },
            {
              title: "Skills",
              url: "/desk/digital/library/skills",
              icon: getNextIcon(),
            },
          ],
        },
        {
          title: "Help Articles",
          url: "/desk/digital/help-articles",
          icon: getNextIcon(),
        },
        {
          title: "FAQs",
          url: "/desk/digital/faqs",
          icon: getNextIcon(),
        },
        {
          title: "Helpful",
          url: "/desk/digital/helpful",
          icon: getNextIcon(),
        },
        {
          title: "Teams Directory",
          url: "/desk/digital/teams",
          icon: getNextIcon(),
        },
      ],
    },
    {
      title: "DevOps",
      isHeading: true,
      items: [
        {
          title: "DevOps Desk",
          url: "/desk/devops/desk",
          icon: getNextIcon(),
        },
        {
          title: "Pipeline",
          url: "/desk/devops/pipeline",
          icon: getNextIcon(),
        },
        {
          title: "Cases",
          url: "/desk/devops/cases",
          icon: getNextIcon(),
        },
        {
          title: "Leaderboard",
          url: "/desk/devops/leaderboard",
          icon: getNextIcon(),
        },
      ],
    },
    {
      title: "Finance",
      isHeading: true,
      items: [
        {
          title: "Finance Desk",
          url: "/desk/finance/desk",
          icon: getNextIcon(),
        },
        {
          title: "Payments",
          url: "/desk/finance/payments",
          icon: getNextIcon(),
        },
        {
          title: "Platform Fees",
          url: "/desk/finance/platform",
          icon: getNextIcon(),
        },
        {
          title: "Commissions",
          url: "/desk/finance/commission",
          icon: getNextIcon(),
        },
        {
          title: "Payouts",
          url: "/desk/finance/payouts",
          icon: getNextIcon(),
        },
        {
          title: "Earnings",
          url: "/desk/finance/earnings",
          icon: getNextIcon(),
        },
        {
          title: "Reports",
          url: "/desk/finance/reports",
          icon: getNextIcon(),
        },
      ],
    },
  ],
};
