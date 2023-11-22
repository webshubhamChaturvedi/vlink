/* eslint-disable default-param-last */
import ACTION_TYPE from "./action-type";

const initialState = {
  home: {},
  header: {},
  footer: {},
  awards: {},
  successStory: {},
  trustedByStartup: {},
  testimonials: {},
  commonBlog: {},
  successNumber: {},
  commonNews: [],
  toast: {},
  services: {},
  dedicatedTeam: {},
  blogCategories: {},
  selectedBlogName: {},
  jobDiva: { jobId: "" },
  selectedBlog: {
    category: "",
    sortBy: "",
  },
  selectedBlogName: {
    name: "",
  },
  country: "",

  product: {},
  webDevelopment: {},
  customMobile: {},
  softwareMaintenance: {},
  qaService: {},
  managedIt: {},
  reEngineering: {},
  devOps: {},
  machineLearning: {},
  iot: {},
  cloudManaged: {},
  itConsulting: {},

  industry: {},
  industryEdtech: {},
  industryHealthcare: {},
  industryFinance: {},
  industryManufacturing: {},
  industryTelecom: {},
  industryEcommerce: {},
  industryMedia: {},
  industryCustomer: {},
  hireDev: {},
  caseStudy: {},
  ourCompony: {},
  ourProcess: {},
  contactUs: {},
  faq: {},
  csr: {},
  podcast: {},
  blog: {},
  brochure: {},
  whitepaper: {},
  webinar: {},
  newsroom: {},
  carrer: {},
  lca: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_HOME:
      state = {
        ...state,
        home: {
          ...state.home,
          ...action.payload,
        },
      };
      return state;
    case ACTION_TYPE.AWARDS:
      state = {
        ...state,
        awards: action.payload,
      };
      return state;
    case ACTION_TYPE.TRUSTED_BY_STRATUP:
      state = {
        ...state,
        trustedByStartup: action.payload,
      };
      return state;
    case ACTION_TYPE.SUCCESS_STORY:
      state = {
        ...state,
        successStory: action.payload,
      };
      return state;
    case ACTION_TYPE.TESTIMONIALS:
      state = {
        ...state,
        testimonials: action.payload,
      };
      return state;
    case ACTION_TYPE.COMMON_BLOG:
      state = {
        ...state,
        commonBlog: action.payload,
      };
      return state;

    case ACTION_TYPE.SERVICES:
      state = {
        ...state,
        services: action.payload,
      };
      return state;
    case ACTION_TYPE.DEDICATED_TEAM:
      state = {
        ...state,
        dedicatedTeam: action.payload,
      };
      return state;

    case ACTION_TYPE.PRODUCT:
      state = {
        ...state,
        product: action.payload,
      };
      return state;
    case ACTION_TYPE.WEB_DEVELOPMENT:
      state = {
        ...state,
        webDevelopment: action.payload,
      };
      return state;
    case ACTION_TYPE.CUSTOM_MOBILE:
      state = {
        ...state,
        customMobile: action.payload,
      };
      return state;
    case ACTION_TYPE.SOFTWARE_MAINTENANCE:
      state = {
        ...state,
        softwareMaintenance: action.payload,
      };
      return state;
    case ACTION_TYPE.QA_SERVICE:
      state = {
        ...state,
        qaService: action.payload,
      };
      return state;
    case ACTION_TYPE.MANAGED_IT:
      state = {
        ...state,
        managedIt: action.payload,
      };
      return state;
    case ACTION_TYPE.RE_ENGINEERING:
      state = {
        ...state,
        reEngineering: action.payload,
      };
      return state;
    case ACTION_TYPE.DEVOPS:
      state = {
        ...state,
        devOps: action.payload,
      };
      return state;
    case ACTION_TYPE.MACHINE_LEARNING:
      state = {
        ...state,
        machineLearning: action.payload,
      };
      return state;
    case ACTION_TYPE.IOT:
      state = {
        ...state,
        iot: action.payload,
      };
      return state;
    case ACTION_TYPE.CLOUD_MANAGED:
      state = {
        ...state,
        cloudManaged: action.payload,
      };
      return state;
    case ACTION_TYPE.IT_CONSULTING:
      state = {
        ...state,
        itConsulting: action.payload,
      };
      return state;

    case ACTION_TYPE.INDUSTRY:
      state = {
        ...state,
        industry: action.payload,
      };
      return state;
    case ACTION_TYPE.INDUSTRY_EDTECH:
      state = {
        ...state,
        industryEdtech: action.payload,
      };
      return state;

    case ACTION_TYPE.INDUSTRY_CUSTOMER:
      state = {
        ...state,
        industryCustomer: action.payload,
      };
      return state;
    case ACTION_TYPE.INDUSTRY_ECOMMERCE:
      state = {
        ...state,
        industryEcommerce: action.payload,
      };
      return state;
    case ACTION_TYPE.INDUSTRY_FINANCE:
      state = {
        ...state,
        industryFinance: action.payload,
      };
      return state;
    case ACTION_TYPE.INDUSTRY_HEALTHCARE:
      state = {
        ...state,
        industryHealthcare: action.payload,
      };
      return state;
    case ACTION_TYPE.INDUSTRY_MANUFACTURING:
      state = {
        ...state,
        industryManufacturing: action.payload,
      };
      return state;
    case ACTION_TYPE.INDUSTRY_MEDIA:
      state = {
        ...state,
        industryMedia: action.payload,
      };
      return state;
    case ACTION_TYPE.INDUSTRY_TELECOM:
      state = {
        ...state,
        industryTelecom: action.payload,
      };
      return state;

    case ACTION_TYPE.HIRE_DEV:
      state = {
        ...state,
        hireDev: action.payload,
      };
      return state;
    case ACTION_TYPE.CASE_STUDY:
      state = {
        ...state,
        caseStudy: action.payload,
      };
      return state;
    case ACTION_TYPE.OUR_COMPONY:
      state = {
        ...state,
        ourCompony: action.payload,
      };
      return state;

    case ACTION_TYPE.OUR_PROCESS:
      state = {
        ...state,
        ourProcess: action.payload,
      };
      return state;
    case ACTION_TYPE.CONTACT_US:
      state = {
        ...state,
        contactUs: action.payload,
      };
      return state;

    case ACTION_TYPE.FAQ:
      state = {
        ...state,
        faq: action.payload,
      };
      return state;
    case ACTION_TYPE.CSR:
      state = {
        ...state,
        csr: action.payload,
      };
      return state;

    case ACTION_TYPE.PODCAST:
      state = {
        ...state,
        podcast: action.payload,
      };
      return state;
    case ACTION_TYPE.BLOG:
      state = {
        ...state,
        blog: action.payload,
      };
      return state;
    case ACTION_TYPE.BROCHURE:
      state = {
        ...state,
        brochure: action.payload,
      };
      return state;
    case ACTION_TYPE.WHITEPAPER:
      state = {
        ...state,
        whitepaper: action.payload,
      };
      return state;
    case ACTION_TYPE.WEBINAR:
      state = {
        ...state,
        webinar: action.payload,
      };
      return state;
    case ACTION_TYPE.NEWSROOM:
      state = {
        ...state,
        newsroom: action.payload,
      };
      return state;
    case ACTION_TYPE.CARRER:
      state = {
        ...state,
        carrer: action.payload,
      };
      return state;
    case ACTION_TYPE.SUCCESS_NUMBER:
      state = {
        ...state,
        successNumber: action.payload,
      };
      return state;
    case ACTION_TYPE.TOAST:
      state = {
        ...state,
        toast: action.payload,
      };
      return state;
    case ACTION_TYPE.COMMON_NEWS:
      state = {
        ...state,
        commonNews: action.payload,
      };
      return state;
    case ACTION_TYPE.BLOG_CATEGORIES:
      state = {
        ...state,
        blogCategories: action.payload,
      };
      return state;
    case ACTION_TYPE.SELECTED_BLOG_NAME:
      state = {
        ...state,
        selectedBlogName: { ...state.selectedBlogName, ...action.payload },
      };
      return state;

      case ACTION_TYPE.SELECTED_BLOG_CATEGORY:
        state = {
          ...state,
          selectedBlog: { ...state.selectedBlog, ...action.payload },
        };
        return state;

    case ACTION_TYPE.JOB_DETAIL:
      state = {
        ...state,
        jobDiva: { ...action.payload },
      };
      return state;
    case ACTION_TYPE.GET_COUNTRY:
      state = {
        ...state,
        country: action.payload,
      };
      return state;
      case ACTION_TYPE.LCA_PAGE:
        state = {
          ...state,
          lca: action.payload,
        };
        return state;
    default:
      return state;
  }
};

export default rootReducer;
