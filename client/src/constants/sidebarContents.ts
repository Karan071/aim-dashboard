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
  FolderOpen,
  FileSpreadsheet,
  UserCog,
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
  FolderOpen,
  FileSpreadsheet,
  UserCog,
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
    // Platform Desk
    {
      title: "Platform",
      icon: getNextIcon(),
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
          title: "Assessment",
          url: "/desk/platform/assessment",
          icon: getNextIcon(),
        },
        {
          title: "Sessions",
          icon: getNextIcon(),
          url: "/desk/platform/products/sessions",
        },
        {
          title: "Masterclasses",
          url: "/desk/platform/products/masterclasses",
          icon: getNextIcon(),
        },
        {
          title: "Events",
          url: "/desk/platform/events",
          icon: getNextIcon(),
        },
        {
          title: "Courses",
          url: "/desk/platform/courses",
          icon: getNextIcon(),
        },
        {
          title: "Contribute",
          url: "/desk/platform/contribute",
          icon: getNextIcon(),
        },
        {
          title: "Plans",
          icon: getNextIcon(),
          url: "#",
          isCollapsible: true,
          items: [
            {
              title: "Access Code",
              url: "/desk/platform/plans/access-code",
              icon: getNextIcon(),
            },
            {
              title: "Consultants Premium",
              url: "/desk/platform/plans/consultants-premium",
              icon: getNextIcon(),
            },
          ],
        },
        {
          title: "Forms",
          url: "/desk/platform/forms",
          icon: getNextIcon(),
        },
        {
          title: "Desk IAM",
          url: "/desk/platform/desk-iam",
          icon: getNextIcon(),
        },
      ],
    },
    // Review Desk
    {
      title: "Review",
      icon: getNextIcon(),
      isHeading: true,
      items: [
        {
          title: "Review Desk",
          url: "/desk/review/desk",
          icon: getNextIcon(),
        },
        {
          title: "Coaches",
          url: "/desk/review/coaches",
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
          title: "Custom Inputs",
          url: "/desk/review/custom-inputs",
          icon: getNextIcon(),
        },
        {
          title: "Follow Ups",
          url: "/desk/review/follow-ups",
          icon: getNextIcon(),
        },
      ],
    },
    // Relations Desk
    {
      title: "Relations",
      icon: getNextIcon(),
      isHeading: true,
      items: [
        {
          title: "Relations Desk",
          url: "/desk/relation/desk",
          icon: getNextIcon(),
        },
        {
          title: "My Pipeline",
          url: "/desk/relation/pipeline",
          icon: getNextIcon(),
        },
        {
          title: "Pool",
          url: "/desk/relation/pool",
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
              url: "/desk/relation/leads/explorers",
              icon: getNextIcon(),
            },
            {
              title: "Coaches",
              url: "/desk/relation/leads/coaches",
              icon: getNextIcon(),
            },
            {
              title: "Organisations",
              url: "/desk/relation/leads/organisations",
              icon: getNextIcon(),
            },
            {
              title: "Channel Partner",
              url: "/desk/relation/leads/channel-partner",
              icon: getNextIcon(),
            },
            {
              title: "Partnerships Requests",
              url: "/desk/relation/leads/partnerships-requests",
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
              url: "/desk/relation/cases/problems",
              icon: getNextIcon(),
            },
            {
              title: "Bugs",
              url: "/desk/relation/cases/bugs",
              icon: getNextIcon(),
            },
            {
              title: "Abuses",
              url: "/desk/relation/cases/abuses",
              icon: getNextIcon(),
            },
          ],
        },
        {
          title: "Explorers",
          url: "/desk/relation/explorers",
          icon: getNextIcon(),
        },
        {
          title: "Coaches",
          url: "/desk/relation/coaches",
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
              url: "/desk/relation/organisations/institutes",
              icon: getNextIcon(),
            },
            {
              title: "Schools",
              url: "/desk/relation/organisations/schools",
              icon: getNextIcon(),
            },
            {
              title: "Colleges",
              url: "/desk/relation/organisations/colleges",
              icon: getNextIcon(),
            },
            {
              title: "Companies",
              url: "/desk/relation/organisations/companies",
              icon: getNextIcon(),
            },
            {
              title: "Universities",
              url: "/desk/relation/organisations/universities",
              icon: getNextIcon(),
            },
            {
              title: "NGO's",
              url: "/desk/relation/organisations/ngos",
              icon: getNextIcon(),
            },
          ],
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
    // Digital Desk
    {
      title: "Digital",
      icon: getNextIcon(),
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
          title: "Surveys",
          url: "/desk/digital/surveys",
          icon: getNextIcon(),
        },
        {
          title: "CMS",
          icon: getNextIcon(),
          url: "#",
          isCollapsible: true,
          items: [
            {
              title: "Insights",
              url: "/desk/digital/cms/insights",
              icon: getNextIcon(),
            },
            {
              title: "Video",
              url: "/desk/digital/cms/video",
              icon: getNextIcon(),
            },
            {
              title: "FAQs",
              url: "/desk/digital/cms/faqs",
              icon: getNextIcon(),
            },
            {
              title: "Help Articles",
              url: "/desk/digital/cms/help-articles",
              icon: getNextIcon(),
            },
            {
              title: "In the News",
              url: "/desk/digital/cms/in-the-news",
              icon: getNextIcon(),
            },
            {
              title: "Testimonials",
              url: "/desk/digital/cms/testimonials",
              icon: getNextIcon(),
            },
            {
              title: "Teams Directory",
              url: "/desk/digital/cms/teams-directory",
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
              url: "/desk/digital/libraries/exams",
              icon: getNextIcon(),
            },
            {
              title: "Careers",
              url: "/desk/digital/libraries/careers",
              icon: getNextIcon(),
            },
            {
              title: "Degrees",
              url: "/desk/digital/libraries/degrees",
              icon: getNextIcon(),
            },
            {
              title: "Courses",
              url: "/desk/digital/libraries/courses",
              icon: getNextIcon(),
            },
            {
              title: "Scholarships",
              url: "/desk/digital/libraries/scholarships",
              icon: getNextIcon(),
            },
            {
              title: "Skills",
              url: "/desk/digital/libraries/skills",
              icon: getNextIcon(),
            },
          ],
        },
        {
          title: "Engage",
          icon: getNextIcon(),
          url: "#",
          isCollapsible: true,
          items: [
            {
              title: "Review",
              url: "/desk/digital/engage/review",
              icon: getNextIcon(),
            },
            {
              title: "Comments",
              url: "/desk/digital/engage/comments",
              icon: getNextIcon(),
            },
            {
              title: "Feedback",
              url: "/desk/digital/engage/feedback",
              icon: getNextIcon(),
            },
            {
              title: "Helpful",
              url: "/desk/digital/engage/helpful",
              icon: getNextIcon(),
            },
          ],
        },
        {
          title: "File Manager",
          url: "/desk/digital/file-manager",
          icon: getNextIcon(),
        },
        {
          title: "Meta Information",
          url: "/desk/digital/meta-information",
          icon: getNextIcon(),
        },
      ],
    },
    // Finance Desk
    {
      title: "Finance",
      icon: getNextIcon(),
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
          title: "Commissions",
          url: "/desk/finance/commissions",
          icon: getNextIcon(),
        },
        {
          title: "Withdrawal",
          url: "/desk/finance/withdrawal",
          icon: getNextIcon(),
        },
        {
          title: "Payouts",
          url: "/desk/finance/payouts",
          icon: getNextIcon(),
        },
        {
          title: "Platform",
          url: "/desk/finance/platform",
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
    // DevOps Desk
    {
      title: "DevOps",
      icon: getNextIcon(),
      isHeading: true,
      items: [
        {
          title: "Devops Desk",
          url: "/desk/devops/desk",
          icon: getNextIcon(),
        },
        {
          title: "My Cases",
          url: "/desk/devops/my-cases",
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
    // HR Desk
    {
      title: "HRMS",
      icon: getNextIcon(),
      isHeading: true,
      items: [
        {
          title: "HR Desk",
          url: "/desk/hr/desk",
          icon: getNextIcon(),
        },
        {
          title: "Follow Ups",
          url: "/desk/hr/follow-ups",
          icon: getNextIcon(),
        },
        {
          title: "Current Openings",
          url: "/desk/hr/current-opening",
          icon: getNextIcon(),
        },
        {
          title: "Job Application",
          url: "/desk/hr/job-application",
          icon: getNextIcon(),
        },
      ],
    },
  ],
};
